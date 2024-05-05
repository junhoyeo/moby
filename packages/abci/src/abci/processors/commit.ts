import { ResponseCommit } from '../../proto/ts/tendermint/abci/types_pb';
import { Request, Response } from '../../proto/ts/tendermint/abci/types_pb';
import { RequestType } from '../enums';

export function commit(req: Request): Response {
	return new Response({
		value: {
			case: RequestType.commit,
			value: new ResponseCommit(),
		},
	});
}
