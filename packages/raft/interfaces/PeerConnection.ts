import {
  AddServerRequest,
  AppendEntryRequest,
  AppendEntryResponse,
  ClientQueryResponse,
  ClientRequestResponse,
  MembershipChangeResponse,
  RemoveServerRequest,
  RequestVoteRequest,
  RequestVoteResponse,
} from "@/dtos";
import { Command } from "./Command";
import { Query } from "./Query";

export interface PeerConnection {
  peerId: string;
  requestVote(
    request: RequestVoteRequest,
    callback: (response: RequestVoteResponse) => void
  ): void;
  appendEntries(
    request: AppendEntryRequest,
    callback: (response: AppendEntryResponse) => void
  ): void;

  // used by clients/admins
  addServer(request: AddServerRequest): Promise<MembershipChangeResponse>;
  removeServer(request: RemoveServerRequest): Promise<MembershipChangeResponse>;
  clientQuery(request: Query): Promise<ClientQueryResponse>;
  clientRequest(request: Command<any>): Promise<ClientRequestResponse>;
}
