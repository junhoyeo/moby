// @generated by protoc-gen-es v1.9.0 with parameter "target=ts"
// @generated from file tendermint/statesync/types.proto (package tendermint.statesync, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message as Message$1, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * @generated from message tendermint.statesync.Message
 */
export class Message extends Message$1<Message> {
  /**
   * @generated from oneof tendermint.statesync.Message.sum
   */
  sum: {
    /**
     * @generated from field: tendermint.statesync.SnapshotsRequest snapshots_request = 1;
     */
    value: SnapshotsRequest;
    case: "snapshotsRequest";
  } | {
    /**
     * @generated from field: tendermint.statesync.SnapshotsResponse snapshots_response = 2;
     */
    value: SnapshotsResponse;
    case: "snapshotsResponse";
  } | {
    /**
     * @generated from field: tendermint.statesync.ChunkRequest chunk_request = 3;
     */
    value: ChunkRequest;
    case: "chunkRequest";
  } | {
    /**
     * @generated from field: tendermint.statesync.ChunkResponse chunk_response = 4;
     */
    value: ChunkResponse;
    case: "chunkResponse";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Message>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.statesync.Message";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "snapshots_request", kind: "message", T: SnapshotsRequest, oneof: "sum" },
    { no: 2, name: "snapshots_response", kind: "message", T: SnapshotsResponse, oneof: "sum" },
    { no: 3, name: "chunk_request", kind: "message", T: ChunkRequest, oneof: "sum" },
    { no: 4, name: "chunk_response", kind: "message", T: ChunkResponse, oneof: "sum" },
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

/**
 * @generated from message tendermint.statesync.SnapshotsRequest
 */
export class SnapshotsRequest extends Message$1<SnapshotsRequest> {
  constructor(data?: PartialMessage<SnapshotsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.statesync.SnapshotsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotsRequest {
    return new SnapshotsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotsRequest {
    return new SnapshotsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotsRequest {
    return new SnapshotsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SnapshotsRequest | PlainMessage<SnapshotsRequest> | undefined, b: SnapshotsRequest | PlainMessage<SnapshotsRequest> | undefined): boolean {
    return proto3.util.equals(SnapshotsRequest, a, b);
  }
}

/**
 * @generated from message tendermint.statesync.SnapshotsResponse
 */
export class SnapshotsResponse extends Message$1<SnapshotsResponse> {
  /**
   * @generated from field: uint64 height = 1;
   */
  height = protoInt64.zero;

  /**
   * @generated from field: uint32 format = 2;
   */
  format = 0;

  /**
   * @generated from field: uint32 chunks = 3;
   */
  chunks = 0;

  /**
   * @generated from field: bytes hash = 4;
   */
  hash = new Uint8Array(0);

  /**
   * @generated from field: bytes metadata = 5;
   */
  metadata = new Uint8Array(0);

  constructor(data?: PartialMessage<SnapshotsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.statesync.SnapshotsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "format", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "chunks", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 5, name: "metadata", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotsResponse {
    return new SnapshotsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotsResponse {
    return new SnapshotsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotsResponse {
    return new SnapshotsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: SnapshotsResponse | PlainMessage<SnapshotsResponse> | undefined, b: SnapshotsResponse | PlainMessage<SnapshotsResponse> | undefined): boolean {
    return proto3.util.equals(SnapshotsResponse, a, b);
  }
}

/**
 * @generated from message tendermint.statesync.ChunkRequest
 */
export class ChunkRequest extends Message$1<ChunkRequest> {
  /**
   * @generated from field: uint64 height = 1;
   */
  height = protoInt64.zero;

  /**
   * @generated from field: uint32 format = 2;
   */
  format = 0;

  /**
   * @generated from field: uint32 index = 3;
   */
  index = 0;

  constructor(data?: PartialMessage<ChunkRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.statesync.ChunkRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "format", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "index", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChunkRequest {
    return new ChunkRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChunkRequest {
    return new ChunkRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChunkRequest {
    return new ChunkRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ChunkRequest | PlainMessage<ChunkRequest> | undefined, b: ChunkRequest | PlainMessage<ChunkRequest> | undefined): boolean {
    return proto3.util.equals(ChunkRequest, a, b);
  }
}

/**
 * @generated from message tendermint.statesync.ChunkResponse
 */
export class ChunkResponse extends Message$1<ChunkResponse> {
  /**
   * @generated from field: uint64 height = 1;
   */
  height = protoInt64.zero;

  /**
   * @generated from field: uint32 format = 2;
   */
  format = 0;

  /**
   * @generated from field: uint32 index = 3;
   */
  index = 0;

  /**
   * @generated from field: bytes chunk = 4;
   */
  chunk = new Uint8Array(0);

  /**
   * @generated from field: bool missing = 5;
   */
  missing = false;

  constructor(data?: PartialMessage<ChunkResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.statesync.ChunkResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "format", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "index", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "chunk", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 5, name: "missing", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChunkResponse {
    return new ChunkResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChunkResponse {
    return new ChunkResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChunkResponse {
    return new ChunkResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ChunkResponse | PlainMessage<ChunkResponse> | undefined, b: ChunkResponse | PlainMessage<ChunkResponse> | undefined): boolean {
    return proto3.util.equals(ChunkResponse, a, b);
  }
}

