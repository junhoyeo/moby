import { ResponseCheckTx } from '../../proto/ts/tendermint/abci/types_pb';
import { Request, Response } from '../../proto/ts/tendermint/abci/types_pb';
import { RequestType } from '../enums';

export function checkTx(req: Request): Response {
	return new Response({
		value: {
			case: RequestType.checkTx,
			value: new ResponseCheckTx(),
		},
	});
}
