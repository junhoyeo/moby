// @generated by protoc-gen-es v1.9.0 with parameter "target=ts"
// @generated from file tendermint/blockchain/types.proto (package tendermint.blockchain, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message as Message$1, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Block } from "../types/block_pb.js";

/**
 * BlockRequest requests a block for a specific height
 *
 * @generated from message tendermint.blockchain.BlockRequest
 */
export class BlockRequest extends Message$1<BlockRequest> {
  /**
   * @generated from field: int64 height = 1;
   */
  height = protoInt64.zero;

  constructor(data?: PartialMessage<BlockRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.blockchain.BlockRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BlockRequest {
    return new BlockRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BlockRequest {
    return new BlockRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BlockRequest {
    return new BlockRequest().fromJsonString(jsonString, options);
  }

  static equals(a: BlockRequest | PlainMessage<BlockRequest> | undefined, b: BlockRequest | PlainMessage<BlockRequest> | undefined): boolean {
    return proto3.util.equals(BlockRequest, a, b);
  }
}

/**
 * NoBlockResponse informs the node that the peer does not have block at the requested height
 *
 * @generated from message tendermint.blockchain.NoBlockResponse
 */
export class NoBlockResponse extends Message$1<NoBlockResponse> {
  /**
   * @generated from field: int64 height = 1;
   */
  height = protoInt64.zero;

  constructor(data?: PartialMessage<NoBlockResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.blockchain.NoBlockResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NoBlockResponse {
    return new NoBlockResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NoBlockResponse {
    return new NoBlockResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NoBlockResponse {
    return new NoBlockResponse().fromJsonString(jsonString, options);
  }

  static equals(a: NoBlockResponse | PlainMessage<NoBlockResponse> | undefined, b: NoBlockResponse | PlainMessage<NoBlockResponse> | undefined): boolean {
    return proto3.util.equals(NoBlockResponse, a, b);
  }
}

/**
 * BlockResponse returns block to the requested
 *
 * @generated from message tendermint.blockchain.BlockResponse
 */
export class BlockResponse extends Message$1<BlockResponse> {
  /**
   * @generated from field: tendermint.types.Block block = 1;
   */
  block?: Block;

  constructor(data?: PartialMessage<BlockResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.blockchain.BlockResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "block", kind: "message", T: Block },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BlockResponse {
    return new BlockResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BlockResponse {
    return new BlockResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BlockResponse {
    return new BlockResponse().fromJsonString(jsonString, options);
  }

  static equals(a: BlockResponse | PlainMessage<BlockResponse> | undefined, b: BlockResponse | PlainMessage<BlockResponse> | undefined): boolean {
    return proto3.util.equals(BlockResponse, a, b);
  }
}

/**
 * StatusRequest requests the status of a peer.
 *
 * @generated from message tendermint.blockchain.StatusRequest
 */
export class StatusRequest extends Message$1<StatusRequest> {
  constructor(data?: PartialMessage<StatusRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.blockchain.StatusRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StatusRequest {
    return new StatusRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StatusRequest {
    return new StatusRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StatusRequest {
    return new StatusRequest().fromJsonString(jsonString, options);
  }

  static equals(a: StatusRequest | PlainMessage<StatusRequest> | undefined, b: StatusRequest | PlainMessage<StatusRequest> | undefined): boolean {
    return proto3.util.equals(StatusRequest, a, b);
  }
}

/**
 * StatusResponse is a peer response to inform their status.
 *
 * @generated from message tendermint.blockchain.StatusResponse
 */
export class StatusResponse extends Message$1<StatusResponse> {
  /**
   * @generated from field: int64 height = 1;
   */
  height = protoInt64.zero;

  /**
   * @generated from field: int64 base = 2;
   */
  base = protoInt64.zero;

  constructor(data?: PartialMessage<StatusResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.blockchain.StatusResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "base", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StatusResponse {
    return new StatusResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StatusResponse {
    return new StatusResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StatusResponse {
    return new StatusResponse().fromJsonString(jsonString, options);
  }

  static equals(a: StatusResponse | PlainMessage<StatusResponse> | undefined, b: StatusResponse | PlainMessage<StatusResponse> | undefined): boolean {
    return proto3.util.equals(StatusResponse, a, b);
  }
}

/**
 * @generated from message tendermint.blockchain.Message
 */
export class Message extends Message$1<Message> {
  /**
   * @generated from oneof tendermint.blockchain.Message.sum
   */
  sum: {
    /**
     * @generated from field: tendermint.blockchain.BlockRequest block_request = 1;
     */
    value: BlockRequest;
    case: "blockRequest";
  } | {
    /**
     * @generated from field: tendermint.blockchain.NoBlockResponse no_block_response = 2;
     */
    value: NoBlockResponse;
    case: "noBlockResponse";
  } | {
    /**
     * @generated from field: tendermint.blockchain.BlockResponse block_response = 3;
     */
    value: BlockResponse;
    case: "blockResponse";
  } | {
    /**
     * @generated from field: tendermint.blockchain.StatusRequest status_request = 4;
     */
    value: StatusRequest;
    case: "statusRequest";
  } | {
    /**
     * @generated from field: tendermint.blockchain.StatusResponse status_response = 5;
     */
    value: StatusResponse;
    case: "statusResponse";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Message>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.blockchain.Message";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "block_request", kind: "message", T: BlockRequest, oneof: "sum" },
    { no: 2, name: "no_block_response", kind: "message", T: NoBlockResponse, oneof: "sum" },
    { no: 3, name: "block_response", kind: "message", T: BlockResponse, oneof: "sum" },
    { no: 4, name: "status_request", kind: "message", T: StatusRequest, oneof: "sum" },
    { no: 5, name: "status_response", kind: "message", T: StatusResponse, oneof: "sum" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Message {
    return new Message().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Message {
    return new Message().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Message {
    return new Message().fromJsonString(jsonString, options);
  }

  static equals(a: Message | PlainMessage<Message> | undefined, b: Message | PlainMessage<Message> | undefined): boolean {
    return proto3.util.equals(Message, a, b);
  }
}

