import { ResponseLoadSnapshotChunk } from '../../proto/tendermint/abci/types_pb';
import { Request, Response } from '../../proto/tendermint/abci/types_pb';
import { RequestType } from '../enums';

export function loadSnapshotChunk(req: Request): Response {
	return new Response({
		value: {
			case: RequestType.loadSnapshotChunk,
			value: new ResponseLoadSnapshotChunk(),
		},
	});
}
