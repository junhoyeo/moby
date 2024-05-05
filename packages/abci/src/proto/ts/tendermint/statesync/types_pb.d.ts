// @generated by protoc-gen-es v1.0.0
// @generated from file tendermint/statesync/types.proto (package tendermint.statesync, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message as Message$1, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message tendermint.statesync.Message
 */
export declare class Message extends Message$1<Message> {
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
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<Message>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tendermint.statesync.Message";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Message;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Message;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Message;

  static equals(a: Message | PlainMessage<Message> | undefined, b: Message | PlainMessage<Message> | undefined): boolean;
}

/**
 * @generated from message tendermint.statesync.SnapshotsRequest
 */
export declare class SnapshotsRequest extends Message$1<SnapshotsRequest> {
  constructor(data?: PartialMessage<SnapshotsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tendermint.statesync.SnapshotsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotsRequest;

  static equals(a: SnapshotsRequest | PlainMessage<SnapshotsRequest> | undefined, b: SnapshotsRequest | PlainMessage<SnapshotsRequest> | undefined): boolean;
}

/**
 * @generated from message tendermint.statesync.SnapshotsResponse
 */
export declare class SnapshotsResponse extends Message$1<SnapshotsResponse> {
  /**
   * @generated from field: uint64 height = 1;
   */
  height: bigint;

  /**
   * @generated from field: uint32 format = 2;
   */
  format: number;

  /**
   * @generated from field: uint32 chunks = 3;
   */
  chunks: number;

  /**
   * @generated from field: bytes hash = 4;
   */
  hash: Uint8Array;

  /**
   * @generated from field: bytes metadata = 5;
   */
  metadata: Uint8Array;

  constructor(data?: PartialMessage<SnapshotsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tendermint.statesync.SnapshotsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotsResponse;

  static equals(a: SnapshotsResponse | PlainMessage<SnapshotsResponse> | undefined, b: SnapshotsResponse | PlainMessage<SnapshotsResponse> | undefined): boolean;
}

/**
 * @generated from message tendermint.statesync.ChunkRequest
 */
export declare class ChunkRequest extends Message$1<ChunkRequest> {
  /**
   * @generated from field: uint64 height = 1;
   */
  height: bigint;

  /**
   * @generated from field: uint32 format = 2;
   */
  format: number;

  /**
   * @generated from field: uint32 index = 3;
   */
  index: number;

  constructor(data?: PartialMessage<ChunkRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tendermint.statesync.ChunkRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChunkRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChunkRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChunkRequest;

  static equals(a: ChunkRequest | PlainMessage<ChunkRequest> | undefined, b: ChunkRequest | PlainMessage<ChunkRequest> | undefined): boolean;
}

/**
 * @generated from message tendermint.statesync.ChunkResponse
 */
export declare class ChunkResponse extends Message$1<ChunkResponse> {
  /**
   * @generated from field: uint64 height = 1;
   */
  height: bigint;

  /**
   * @generated from field: uint32 format = 2;
   */
  format: number;

  /**
   * @generated from field: uint32 index = 3;
   */
  index: number;

  /**
   * @generated from field: bytes chunk = 4;
   */
  chunk: Uint8Array;

  /**
   * @generated from field: bool missing = 5;
   */
  missing: boolean;

  constructor(data?: PartialMessage<ChunkResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tendermint.statesync.ChunkResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChunkResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChunkResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChunkResponse;

  static equals(a: ChunkResponse | PlainMessage<ChunkResponse> | undefined, b: ChunkResponse | PlainMessage<ChunkResponse> | undefined): boolean;
}

