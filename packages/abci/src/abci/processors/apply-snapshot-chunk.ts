import { ResponseApplySnapshotChunk } from '../../proto/tendermint/abci/types_pb';
import { Request, Response } from '../../proto/tendermint/abci/types_pb';
import { RequestType } from '../enums';

export function applySnapshotChunk(req: Request): Response {
	return new Response({
		value: {
			case: RequestType.applySnapshotChunk,
			value: new ResponseApplySnapshotChunk(),
		},
	});
}
