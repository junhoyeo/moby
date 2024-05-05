import { ResponseQuery } from '../../proto/ts/tendermint/abci/types_pb';
import { Request, Response } from '../../proto/ts/tendermint/abci/types_pb';
import { RequestType } from '../enums';

export function query(req: Request): Response {
	return new Response({
		value: {
			case: RequestType.query,
			value: new ResponseQuery(),
		},
	});
}
