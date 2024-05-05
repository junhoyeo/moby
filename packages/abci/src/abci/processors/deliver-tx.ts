import { ResponseDeliverTx } from '../../proto/ts/tendermint/abci/types_pb';
import { Request, Response } from '../../proto/ts/tendermint/abci/types_pb';
import { RequestType } from '../enums';

export function deliverTx(req: Request): Response {
	return new Response({
		value: {
			case: RequestType.deliverTx,
			value: new ResponseDeliverTx(),
		},
	});
}
