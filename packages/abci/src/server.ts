import { createServer } from 'net';

import { RequestProcessor } from './abci';
import { Connection } from './connection';

export interface ABCIApplication {
	processMessage: RequestProcessor;
}

export const createABCIServer = (app: ABCIApplication) => {
	const connections = new Set();
	let connectionId = 0;

	const server = createServer((socket) => {
		connectionId += 1;
		const connection = new Connection(connectionId, socket, app.processMessage);
		socket.once('close', () => {
			connections.delete(connection);
		});
		connections.add(connection);
	});

	return server;
};
