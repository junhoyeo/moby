import { Request, Response } from '../proto/tendermint/abci/types_pb';

export type RequestProcessor = (req: Request) => Response;
