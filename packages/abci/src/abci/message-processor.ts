import { Request, Response } from '../proto/tendermint/abci/types_pb';
import { RequestType } from './enums';
import {
	applySnapshotChunk,
	beginBlock,
	checkTx,
	commit,
	deliverTx,
	echo,
	endBlock,
	flush,
	info,
	initChain,
	listSnapshots,
	loadSnapshotChunk,
	offerSnapshot,
	query,
	setOption,
} from './processors';

// import { deserialize, serialize } from './serialization/protobuf';

type RequestProcessor = (req: Request) => Response;
const processors: Map<string, RequestProcessor> = new Map<
	string,
	RequestProcessor
>([
	[RequestType.applySnapshotChunk, applySnapshotChunk],
	[RequestType.beginBlock, beginBlock],
	[RequestType.checkTx, checkTx],
	[RequestType.commit, commit],
	[RequestType.deliverTx, deliverTx],
	[RequestType.echo, echo],
	[RequestType.endBlock, endBlock],
	[RequestType.flush, flush],
	[RequestType.info, info],
	[RequestType.initChain, initChain],
	[RequestType.listSnapshots, listSnapshots],
	[RequestType.loadSnapshotChunk, loadSnapshotChunk],
	[RequestType.offerSnapshot, offerSnapshot],
	[RequestType.query, query],
	[RequestType.setOption, setOption],
]);

export const processMessage = (req: Request): Response => {
	console.log('\n');
	console.log('process messages', req);

	if (!req.value.case || !processors.has(req.value.case)) {
		throw new Error(`Invalid request type ${req.value.case}`);
	}
	console.log(`Processing message ${req.value.case}`, req.value.value);
	const processor = processors.get(req.value.case);
	if (!processor) {
		throw new Error(`Processor for ${req.value.case} not found`);
	}

	const res = processor(req);
	console.log('\n');
	console.log('Return responses', res);
	return res;
};
