import { ResponseInfo } from '../../proto/tendermint/abci/types_pb';
import { Request, Response } from '../../proto/tendermint/abci/types_pb';
import { RequestType } from '../enums';

export function info(req: Request): Response {
	return new Response({
		value: {
			case: RequestType.info,
			value: new ResponseInfo({
				version: '1.0.0',
				lastBlockHeight: 0n,
				lastBlockAppHash: Buffer.from(''),
			}),
		},
	});
}
