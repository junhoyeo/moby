// Server
import BufferList from 'bl';
import EventEmitter from 'events';
import { Server, Socket, createServer } from 'net';
import varint from 'varint';

import { processMessage } from './abci/message-processor';
import { Request, Response } from './proto/tendermint/abci/types_pb';

export * from './abci/processors';

// const EventEmitter = require('events');

// const BufferList = require('bl');

// const { varint } = require('protocol-buffers-encodings');

// const UnableToParseRequestError = require('./errors/UnableToParseRequestError');
// const ResponseExceptionError = require('./errors/ResponseExceptionError');
// const MaxRequestSizeError = require('./errors/MaxRequestSizeError');
// const EmptyRequestError = require('./errors/EmptyRequestError');

class UnableToParseRequestError extends Error {
	constructor() {
		super('Unable to parse request');
	}
}
class ResponseExceptionError extends Error {
	constructor() {
		super('Response Exception');
	}
}
class MaxRequestSizeError extends Error {
	constructor() {
		super('Max Request Size');
	}
}
class EmptyRequestError extends Error {
	constructor() {
		super('Empty Request');
	}
}

// const {
//   tendermint: {
//     abci: {
//       Request,
//       Response,
//     },
//   },
// } = require('../types.js');

class Connection extends EventEmitter {
	id: number;
	socket: Socket;
	handleRequest: Function;
	readerBuffer: BufferList;
	isReading: boolean;
	isClosing: boolean;
	isRequestHandled: Promise<void>;

	static MAX_MESSAGE_SIZE = 104857600; // 100mb;

	/**
	 * @param {number} id
	 * @param {Socket} socket
	 * @param {Function} handleRequest
	 */
	constructor(id: number, socket: Socket, handleRequest: Function) {
		super();

		this.id = id;
		this.socket = socket;
		this.handleRequest = handleRequest;
		this.readerBuffer = new BufferList();
		this.isReading = false;
		this.isClosing = false;
		this.isRequestHandled = Promise.resolve();

		this.socket.on('data', (data) => {
			this.readerBuffer.append(data);

			// noinspection JSIgnoredPromiseFromCall
			this.readNextRequest();
		});
	}

	/**
	 * Write response to socket
	 *
	 * @param {Response} response
	 */
	async write(response: Response) {
		const responseBuffer = response.toBinary();
		const responseLengthBuffer = Buffer.from(
			// eslint-disable-next-line no-bitwise
			varint.encode(responseBuffer.length << 1),
		);

		// Write to memory
		this.socket.cork();

		try {
			this.socket.write(responseLengthBuffer);
			this.socket.write(responseBuffer);
		} finally {
			this.socket.uncork();
		}
	}

	/**
	 * Close connection
	 *
	 * @return {Promise<void>}
	 */
	async close() {
		this.isClosing = true;

		this.socket.pause();

		await Promise.race([
			this.isRequestHandled,
			new Promise((resolve) => this.socket.once('close', resolve)),
		]);

		return new Promise((resolve) => {
			// @ts-ignore
			this.socket.end(resolve);
		});
	}

	/**
	 * @private
	 * @return {Promise<void>}
	 */
	async readNextRequest() {
		// Do not read next request if connection is closing or request already reading
		if (this.isClosing || this.isReading) {
			return;
		}

		this.isReading = true;

		let resolveRequestHandled = () => {};
		this.isRequestHandled = new Promise((resolve) => {
			resolveRequestHandled = resolve;
		});

		// Parse request
		let requestLength;
		try {
			// eslint-disable-next-line no-bitwise
			requestLength = varint.decode(this.readerBuffer.slice(0, 8)) >> 1;
		} catch (e) {
			// buffering message, don't read yet
			this.isReading = false;
			resolveRequestHandled();

			return;
		}

		const varintLength = varint.decode.bytes || 4;

		if (requestLength === 0) {
			// noinspection ExceptionCaughtLocallyJS
			this.socket.destroy(new EmptyRequestError());

			return;
		}

		if (requestLength > Connection.MAX_MESSAGE_SIZE) {
			// this.socket.destroy(new MaxRequestSizeError(Connection.MAX_MESSAGE_SIZE));
			this.socket.destroy(new MaxRequestSizeError());

			return;
		}

		if (varintLength + requestLength > this.readerBuffer.length) {
			// buffering message, don't read yet
			this.isReading = false;
			resolveRequestHandled();

			return;
		}

		const messageBytes = this.readerBuffer.slice(
			varintLength,
			varintLength + requestLength,
		);

		let request;
		try {
			request = Request.fromBinary(messageBytes);
		} catch (e) {
			// const requestBuffer = this.readerBuffer.slice(0, messageBytes);
			const requestBuffer = this.readerBuffer.slice(
				0,
				varintLength + requestLength,
			);

			// const error = new UnableToParseRequestError(e, requestBuffer);
			const error = new UnableToParseRequestError();

			this.socket.destroy(error);

			return;
		}

		this.readerBuffer.consume(varintLength + requestLength);

		// Do not read new data from socket since we handling request
		// and writing response
		this.socket.pause();

		// Handle request
		let response;
		try {
			response = await this.handleRequest(request);
		} catch (handlerError) {
			// if (handlerError instanceof ResponseExceptionError) {
			// 	let emitError;

			// 	try {
			// 		// await this.write(handlerError.getResponse());
			// 	} catch (writeError) {
			// 		emitError = writeError;
			// 	}

			// 	// Do not emit connection error if write is successful
			// 	this.socket.destroy(emitError as Error);

			// 	return;
			// }

			throw handlerError;
		}

		// Write response
		try {
			await this.write(response);
		} catch (e) {
			this.socket.destroy(e as any);

			return;
		}

		this.isReading = false;
		resolveRequestHandled();

		if (!this.isClosing) {
			this.socket.resume();
		}

		// Read more requests if available
		if (this.readerBuffer.length > 0) {
			// noinspection JSIgnoredPromiseFromCall,ES6MissingAwait
			this.readNextRequest();
		}
	}
}

// module.exports = Connection;

// const
//   net = require("net")
//   ,types = require("./types")
//   ,Connection = require("./connection").Connection;

// Takes an application and handles ABCI connection
// which invoke methods on the app
// export class ABCIServer {
// 	// app: any;
// 	server: Server;
// 	readerBuffer = new BufferList();

// 	constructor() {
// 		// set the app for the socket handler
// 		// this.app = app;

// 		// create a server by providing callback for
// 		// accepting new connection and callbacks for
// 		// connection events ('data', 'end', etc.)
// 		let c: number = 0;

// 		this.server = createServer((socket) => {
// 			const id = ++c;
// 			console.log(`create connection ${id}`);

// 			socket.on('connect', () => {
// 				console.log(`Socket Connected ${id}`);
// 			});

// 			socket.on('close', () => {
// 				console.log(`Socket Close ${id}`);
// 			});

// 			socket.on('ready', () => {
// 				console.log(`Socket Ready ${id}`);
// 			});

// 			socket.on('end', () => {
// 				console.log(`Socket End ${id}`);
// 			});

// 			socket.on('data', (data) => {
// 				console.log(`Data received on channel - ${id}`);
// 				console.log('socket.bytesRead', socket.bytesRead);
// 				socket.write(processMessage(data));
// 			});

// 			socket.on('data', (data) => {
// 				this.readerBuffer.append(data);

// 				// noinspection JSIgnoredPromiseFromCall
// 				this.readNextRequest();
// 			});
// 		});
// 	}
// }

export const createABCIServer = () => {
	const connections = new Set();
	let connectionId = 0;

	const server = createServer((socket) => {
		// FIXME:
		// const handleRequest = handleRequestFactory(app, server);
		const handleRequest = processMessage;

		connectionId += 1;

		const connection = new Connection(connectionId, socket, handleRequest);
		// eslint-disable-next-line no-param-reassign

		socket.once('close', () => {
			connections.delete(connection);
		});

		connections.add(connection);
	});

	return server;
};
