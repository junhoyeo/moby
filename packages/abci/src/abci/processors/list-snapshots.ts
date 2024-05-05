import { ResponseListSnapshots } from '../../proto/ts/tendermint/abci/types_pb';
import { Request, Response } from '../../proto/ts/tendermint/abci/types_pb';
import { RequestType } from '../enums';

export function listSnapshots(req: Request): Response {
	return new Response({
		value: {
			case: RequestType.listSnapshots,
			value: new ResponseListSnapshots(),
		},
	});
}
