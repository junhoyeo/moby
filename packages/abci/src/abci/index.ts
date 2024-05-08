import { Request, Response } from '../proto/tendermint/abci/types_pb';

export * from '../proto/tendermint/abci/types_pb';
export { RequestType } from './enums';
export type RequestProcessor = (req: Request) => Response;
