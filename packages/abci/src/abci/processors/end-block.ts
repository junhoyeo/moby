import { ResponseEndBlock } from '../../proto/ts/tendermint/abci/types_pb';
import { Request, Response } from '../../proto/ts/tendermint/abci/types_pb';
import { RequestType } from '../enums';

export function endBlock(req: Request): Response {
	return new Response({
		value: {
			case: RequestType.endBlock,
			value: new ResponseEndBlock(),
		},
	});
}
