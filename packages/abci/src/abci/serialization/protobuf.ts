import varint from 'varint';

import { Request, Response } from '../../proto/tendermint/abci/types_pb';

export function deserialize(data: Buffer): Request[] {
	const result: Request[] = [];
	const requestLength = varint.decode(data.slice(0, 8)) >> 1;
	const varintLength = varint.decode.bytes || 4;
	console.log({ requestLength, varintLength });

	// https://github.com/dashpay/js-abci/blob/f0f3eca35669dfda4f6e16231ad68dbd1ff70d55/lib/Connection.js#L142
	const messageBytes = data.slice(varintLength, varintLength + requestLength);
	console.log({ messageBytes });
	// let offset = 0;
	// while (offset < data.length) {
	// 	const size = data.readUInt32BE(offset);
	// 	offset += 4;
	// 	const message = Request.decode(data.slice(offset, offset + size));
	// 	offset += size;
	// 	result.push(message);
	// }
	const message = Request.fromBinary(messageBytes);
	result.push(message);
	return result;
}

export function serialize(data: Response[]): Buffer {
	// const buf: Buffer[] = [];
	// let size: number = 0;
	// try {
	// 	for (let res of data) {
	// 		const msg = Buffer.from(res.toBinary());
	// 		const delimiter = Buffer.from(varint.encode(msg.length));
	// 		buf.push(Buffer.from(delimiter));
	// 		buf.push(Buffer.from(msg));
	// 		size += delimiter.byteLength + msg.byteLength;
	// 	}
	// } catch (err) {
	// 	console.log('Serialize Error:', console.error((err as Error).message));
	// }
	// return Buffer.concat(buf, size);
	console.log({ dataLength: data.length });
	const oneData = data[0];
	const responseBuffer = oneData.toBinary();
	const responseLengthBuffer = Buffer.from(
		varint.encode(responseBuffer.length << 1),
	);
	return Buffer.concat([responseLengthBuffer, responseBuffer]);
}
