import { createServer } from 'net';

import { processMessage } from './abci/message-processor';
import { Connection } from './connection';

export * from './abci/processors';

export const createABCIServer = () => {
	const connections = new Set();
	let connectionId = 0;

	const server = createServer((socket) => {
		connectionId += 1;
		const connection = new Connection(connectionId, socket, processMessage);
		socket.once('close', () => {
			connections.delete(connection);
		});
		connections.add(connection);
	});

	return server;
};
