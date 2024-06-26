// @generated by protoc-gen-es v1.9.0 with parameter "target=ts"
// @generated from file tendermint/p2p/pex.proto (package tendermint.p2p, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message as Message$1, proto3 } from "@bufbuild/protobuf";
import { NetAddress } from "./types_pb.js";

/**
 * @generated from message tendermint.p2p.PexRequest
 */
export class PexRequest extends Message$1<PexRequest> {
  constructor(data?: PartialMessage<PexRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.p2p.PexRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PexRequest {
    return new PexRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PexRequest {
    return new PexRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PexRequest {
    return new PexRequest().fromJsonString(jsonString, options);
  }

  static equals(a: PexRequest | PlainMessage<PexRequest> | undefined, b: PexRequest | PlainMessage<PexRequest> | undefined): boolean {
    return proto3.util.equals(PexRequest, a, b);
  }
}

/**
 * @generated from message tendermint.p2p.PexAddrs
 */
export class PexAddrs extends Message$1<PexAddrs> {
  /**
   * @generated from field: repeated tendermint.p2p.NetAddress addrs = 1;
   */
  addrs: NetAddress[] = [];

  constructor(data?: PartialMessage<PexAddrs>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.p2p.PexAddrs";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "addrs", kind: "message", T: NetAddress, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PexAddrs {
    return new PexAddrs().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PexAddrs {
    return new PexAddrs().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PexAddrs {
    return new PexAddrs().fromJsonString(jsonString, options);
  }

  static equals(a: PexAddrs | PlainMessage<PexAddrs> | undefined, b: PexAddrs | PlainMessage<PexAddrs> | undefined): boolean {
    return proto3.util.equals(PexAddrs, a, b);
  }
}

/**
 * @generated from message tendermint.p2p.Message
 */
export class Message extends Message$1<Message> {
  /**
   * @generated from oneof tendermint.p2p.Message.sum
   */
  sum: {
    /**
     * @generated from field: tendermint.p2p.PexRequest pex_request = 1;
     */
    value: PexRequest;
    case: "pexRequest";
  } | {
    /**
     * @generated from field: tendermint.p2p.PexAddrs pex_addrs = 2;
     */
    value: PexAddrs;
    case: "pexAddrs";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Message>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.p2p.Message";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pex_request", kind: "message", T: PexRequest, oneof: "sum" },
    { no: 2, name: "pex_addrs", kind: "message", T: PexAddrs, oneof: "sum" },
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

