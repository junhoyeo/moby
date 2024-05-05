import {
	ResponseProcessProposal,
	ResponseProcessProposal_ProposalStatus,
} from '../../proto/ts/tendermint/abci/types_pb';
import { Request, Response } from '../../proto/ts/tendermint/abci/types_pb';
import { RequestType } from '../enums';

export function processProposal(req: Request): Response {
	return new Response({
		value: {
			case: RequestType.processProposal,
			value: new ResponseProcessProposal({
				status: ResponseProcessProposal_ProposalStatus.ACCEPT,
			}),
		},
	});
}
