import { ResponseSetOption } from '../../proto/tendermint/abci/types_pb';
import { Request, Response } from '../../proto/tendermint/abci/types_pb';
import { RequestType } from '../enums';

export function setOption(req: Request): Response {
	return new Response({
		value: {
			case: RequestType.setOption,
			value: new ResponseSetOption(),
		},
	});
}
