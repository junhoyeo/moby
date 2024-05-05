// Server
import { Server, createServer } from 'net';

import { processMessage } from './abci/message-processor';

export * from './abci/processors';
// const
//   net = require("net")
//   ,types = require("./types")
//   ,Connection = require("./connection").Connection;

// Takes an application and handles ABCI connection
// which invoke methods on the app
export class ABCIServer {
	app: any;
	server: Server;

	constructor(app: any) {
		// set the app for the socket handler
		this.app = app;

		// create a server by providing callback for
		// accepting new connection and callbacks for
		// connection events ('data', 'end', etc.)
		let c: number = 0;
		this.server = createServer((socket) => {
			const id = ++c;
			console.log(`create connection ${id}`);

			socket.on('connect', () => {
				console.log(`Socket Connected ${id}`);
			});

			socket.on('close', () => {
				console.log(`Socket Close ${id}`);
			});

			socket.on('ready', () => {
				console.log(`Socket Ready ${id}`);
			});

			socket.on('end', () => {
				console.log(`Socket End ${id}`);
			});

			socket.on('data', (data) => {
				console.log(`Data received on channel - ${id}`);
				console.log('socket.bytesRead', socket.bytesRead);
				socket.write(processMessage(data));
			});
		});
	}
}
