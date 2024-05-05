// @generated by protoc-gen-es v1.9.0 with parameter "target=ts"
// @generated from file tendermint/p2p/conn.proto (package tendermint.p2p, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { PublicKey } from "../crypto/keys_pb.js";

/**
 * @generated from message tendermint.p2p.PacketPing
 */
export class PacketPing extends Message<PacketPing> {
  constructor(data?: PartialMessage<PacketPing>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.p2p.PacketPing";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PacketPing {
    return new PacketPing().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PacketPing {
    return new PacketPing().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PacketPing {
    return new PacketPing().fromJsonString(jsonString, options);
  }

  static equals(a: PacketPing | PlainMessage<PacketPing> | undefined, b: PacketPing | PlainMessage<PacketPing> | undefined): boolean {
    return proto3.util.equals(PacketPing, a, b);
  }
}

/**
 * @generated from message tendermint.p2p.PacketPong
 */
export class PacketPong extends Message<PacketPong> {
  constructor(data?: PartialMessage<PacketPong>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.p2p.PacketPong";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PacketPong {
    return new PacketPong().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PacketPong {
    return new PacketPong().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PacketPong {
    return new PacketPong().fromJsonString(jsonString, options);
  }

  static equals(a: PacketPong | PlainMessage<PacketPong> | undefined, b: PacketPong | PlainMessage<PacketPong> | undefined): boolean {
    return proto3.util.equals(PacketPong, a, b);
  }
}

/**
 * @generated from message tendermint.p2p.PacketMsg
 */
export class PacketMsg extends Message<PacketMsg> {
  /**
   * @generated from field: int32 channel_id = 1;
   */
  channelId = 0;

  /**
   * @generated from field: bool eof = 2;
   */
  eof = false;

  /**
   * @generated from field: bytes data = 3;
   */
  data = new Uint8Array(0);

  constructor(data?: PartialMessage<PacketMsg>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.p2p.PacketMsg";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "channel_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "eof", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PacketMsg {
    return new PacketMsg().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PacketMsg {
    return new PacketMsg().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PacketMsg {
    return new PacketMsg().fromJsonString(jsonString, options);
  }

  static equals(a: PacketMsg | PlainMessage<PacketMsg> | undefined, b: PacketMsg | PlainMessage<PacketMsg> | undefined): boolean {
    return proto3.util.equals(PacketMsg, a, b);
  }
}

/**
 * @generated from message tendermint.p2p.Packet
 */
export class Packet extends Message<Packet> {
  /**
   * @generated from oneof tendermint.p2p.Packet.sum
   */
  sum: {
    /**
     * @generated from field: tendermint.p2p.PacketPing packet_ping = 1;
     */
    value: PacketPing;
    case: "packetPing";
  } | {
    /**
     * @generated from field: tendermint.p2p.PacketPong packet_pong = 2;
     */
    value: PacketPong;
    case: "packetPong";
  } | {
    /**
     * @generated from field: tendermint.p2p.PacketMsg packet_msg = 3;
     */
    value: PacketMsg;
    case: "packetMsg";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Packet>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.p2p.Packet";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "packet_ping", kind: "message", T: PacketPing, oneof: "sum" },
    { no: 2, name: "packet_pong", kind: "message", T: PacketPong, oneof: "sum" },
    { no: 3, name: "packet_msg", kind: "message", T: PacketMsg, oneof: "sum" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Packet {
    return new Packet().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Packet {
    return new Packet().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Packet {
    return new Packet().fromJsonString(jsonString, options);
  }

  static equals(a: Packet | PlainMessage<Packet> | undefined, b: Packet | PlainMessage<Packet> | undefined): boolean {
    return proto3.util.equals(Packet, a, b);
  }
}

/**
 * @generated from message tendermint.p2p.AuthSigMessage
 */
export class AuthSigMessage extends Message<AuthSigMessage> {
  /**
   * @generated from field: tendermint.crypto.PublicKey pub_key = 1;
   */
  pubKey?: PublicKey;

  /**
   * @generated from field: bytes sig = 2;
   */
  sig = new Uint8Array(0);

  constructor(data?: PartialMessage<AuthSigMessage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.p2p.AuthSigMessage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pub_key", kind: "message", T: PublicKey },
    { no: 2, name: "sig", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthSigMessage {
    return new AuthSigMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthSigMessage {
    return new AuthSigMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthSigMessage {
    return new AuthSigMessage().fromJsonString(jsonString, options);
  }

  static equals(a: AuthSigMessage | PlainMessage<AuthSigMessage> | undefined, b: AuthSigMessage | PlainMessage<AuthSigMessage> | undefined): boolean {
    return proto3.util.equals(AuthSigMessage, a, b);
  }
}

