import { ResponseListSnapshots } from '../../proto/tendermint/abci/types_pb';
import { Request, Response } from '../../proto/tendermint/abci/types_pb';
import { RequestType } from '../enums';

export function listSnapshots(req: Request): Response {
	return new Response({
		value: {
			case: RequestType.listSnapshots,
			value: new ResponseListSnapshots(),
		},
	});
}
