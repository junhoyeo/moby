import { ResponseInitChain } from '../../proto/tendermint/abci/types_pb';
import { Request, Response } from '../../proto/tendermint/abci/types_pb';
import { RequestType } from '../enums';

export function initChain(req: Request): Response {
	return new Response({
		value: {
			case: RequestType.initChain,
			value: new ResponseInitChain(),
		},
	});
}
