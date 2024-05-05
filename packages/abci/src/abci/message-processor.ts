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

export function processMessage(req: Request): Response | undefined {
	// const req: Request[] = deserialize(proto);
	console.log('\n');
	console.log('process messages', req);
	const r = req;
	let res: Response | undefined;
	// for (const r of req) {
	if (!!r.value.case && processors.has(r.value.case)) {
		console.log(`Processing message ${r.value.case}`, r.value.value);
		const processor = processors.get(r.value.case);
		if (processor) {
			res = processor(r);
		}
	}
	// }
	console.log('\n');
	console.log('Return responses', res);
	// for (let r of res) {
	// 	console.log(`Response for ${r.value.case}`, r.value.value);
	// }
	return res;
}
