import { ResponseBeginBlock } from '../../proto/tendermint/abci/types_pb';
import { Request, Response } from '../../proto/tendermint/abci/types_pb';
import { RequestType } from '../enums';

export function beginBlock(req: Request): Response {
	return new Response({
		value: {
			case: RequestType.beginBlock,
			value: new ResponseBeginBlock(),
		},
	});
}
