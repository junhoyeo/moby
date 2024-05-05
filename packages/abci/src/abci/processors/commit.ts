import { ResponseCommit } from '../../proto/tendermint/abci/types_pb';
import { Request, Response } from '../../proto/tendermint/abci/types_pb';
import { RequestType } from '../enums';

export function commit(req: Request): Response {
	return new Response({
		value: {
			case: RequestType.commit,
			value: new ResponseCommit(),
		},
	});
}
