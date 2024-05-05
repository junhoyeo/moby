import { ResponseFlush } from '../../proto/tendermint/abci/types_pb';
import { Request, Response } from '../../proto/tendermint/abci/types_pb';
import { RequestType } from '../enums';

export function flush(req: Request): Response {
	return new Response({
		value: {
			case: RequestType.flush,
			value: new ResponseFlush(),
		},
	});
}
