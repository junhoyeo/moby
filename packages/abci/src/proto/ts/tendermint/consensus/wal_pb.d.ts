// @generated by protoc-gen-es v1.0.0
// @generated from file tendermint/consensus/wal.proto (package tendermint.consensus, syntax proto3)

/* eslint-disable */
// @ts-nocheck
import type {
	BinaryReadOptions,
	Duration,
	FieldList,
	JsonReadOptions,
	JsonValue,
	PartialMessage,
	PlainMessage,
	Timestamp,
} from '@bufbuild/protobuf';
import { Message, proto3 } from '@bufbuild/protobuf';

import type { EventDataRoundState } from '../types/events_pb.js';
import type { Message as Message$1 } from './types_pb.js';

/**
 * MsgInfo are msgs from the reactor which may update the state
 *
 * @generated from message tendermint.consensus.MsgInfo
 */
export declare class MsgInfo extends Message<MsgInfo> {
	/**
	 * @generated from field: tendermint.consensus.Message msg = 1;
	 */
	msg?: Message$1;

	/**
	 * @generated from field: string peer_id = 2;
	 */
	peerId: string;

	constructor(data?: PartialMessage<MsgInfo>);

	static readonly runtime: typeof proto3;
	static readonly typeName = 'tendermint.consensus.MsgInfo';
	static readonly fields: FieldList;

	static fromBinary(
		bytes: Uint8Array,
		options?: Partial<BinaryReadOptions>,
	): MsgInfo;

	static fromJson(
		jsonValue: JsonValue,
		options?: Partial<JsonReadOptions>,
	): MsgInfo;

	static fromJsonString(
		jsonString: string,
		options?: Partial<JsonReadOptions>,
	): MsgInfo;

	static equals(
		a: MsgInfo | PlainMessage<MsgInfo> | undefined,
		b: MsgInfo | PlainMessage<MsgInfo> | undefined,
	): boolean;
}

/**
 * TimeoutInfo internally generated messages which may update the state
 *
 * @generated from message tendermint.consensus.TimeoutInfo
 */
export declare class TimeoutInfo extends Message<TimeoutInfo> {
	/**
	 * @generated from field: google.protobuf.Duration duration = 1;
	 */
	duration?: Duration;

	/**
	 * @generated from field: int64 height = 2;
	 */
	height: bigint;

	/**
	 * @generated from field: int32 round = 3;
	 */
	round: number;

	/**
	 * @generated from field: uint32 step = 4;
	 */
	step: number;

	constructor(data?: PartialMessage<TimeoutInfo>);

	static readonly runtime: typeof proto3;
	static readonly typeName = 'tendermint.consensus.TimeoutInfo';
	static readonly fields: FieldList;

	static fromBinary(
		bytes: Uint8Array,
		options?: Partial<BinaryReadOptions>,
	): TimeoutInfo;

	static fromJson(
		jsonValue: JsonValue,
		options?: Partial<JsonReadOptions>,
	): TimeoutInfo;

	static fromJsonString(
		jsonString: string,
		options?: Partial<JsonReadOptions>,
	): TimeoutInfo;

	static equals(
		a: TimeoutInfo | PlainMessage<TimeoutInfo> | undefined,
		b: TimeoutInfo | PlainMessage<TimeoutInfo> | undefined,
	): boolean;
}

/**
 * EndHeight marks the end of the given height inside WAL.
 * @internal used by scripts/wal2json util.
 *
 * @generated from message tendermint.consensus.EndHeight
 */
export declare class EndHeight extends Message<EndHeight> {
	/**
	 * @generated from field: int64 height = 1;
	 */
	height: bigint;

	constructor(data?: PartialMessage<EndHeight>);

	static readonly runtime: typeof proto3;
	static readonly typeName = 'tendermint.consensus.EndHeight';
	static readonly fields: FieldList;

	static fromBinary(
		bytes: Uint8Array,
		options?: Partial<BinaryReadOptions>,
	): EndHeight;

	static fromJson(
		jsonValue: JsonValue,
		options?: Partial<JsonReadOptions>,
	): EndHeight;

	static fromJsonString(
		jsonString: string,
		options?: Partial<JsonReadOptions>,
	): EndHeight;

	static equals(
		a: EndHeight | PlainMessage<EndHeight> | undefined,
		b: EndHeight | PlainMessage<EndHeight> | undefined,
	): boolean;
}

/**
 * @generated from message tendermint.consensus.WALMessage
 */
export declare class WALMessage extends Message<WALMessage> {
	/**
	 * @generated from oneof tendermint.consensus.WALMessage.sum
	 */
	sum:
		| {
				/**
				 * @generated from field: tendermint.types.EventDataRoundState event_data_round_state = 1;
				 */
				value: EventDataRoundState;
				case: 'eventDataRoundState';
		  }
		| {
				/**
				 * @generated from field: tendermint.consensus.MsgInfo msg_info = 2;
				 */
				value: MsgInfo;
				case: 'msgInfo';
		  }
		| {
				/**
				 * @generated from field: tendermint.consensus.TimeoutInfo timeout_info = 3;
				 */
				value: TimeoutInfo;
				case: 'timeoutInfo';
		  }
		| {
				/**
				 * @generated from field: tendermint.consensus.EndHeight end_height = 4;
				 */
				value: EndHeight;
				case: 'endHeight';
		  }
		| { case: undefined; value?: undefined };

	constructor(data?: PartialMessage<WALMessage>);

	static readonly runtime: typeof proto3;
	static readonly typeName = 'tendermint.consensus.WALMessage';
	static readonly fields: FieldList;

	static fromBinary(
		bytes: Uint8Array,
		options?: Partial<BinaryReadOptions>,
	): WALMessage;

	static fromJson(
		jsonValue: JsonValue,
		options?: Partial<JsonReadOptions>,
	): WALMessage;

	static fromJsonString(
		jsonString: string,
		options?: Partial<JsonReadOptions>,
	): WALMessage;

	static equals(
		a: WALMessage | PlainMessage<WALMessage> | undefined,
		b: WALMessage | PlainMessage<WALMessage> | undefined,
	): boolean;
}

/**
 * TimedWALMessage wraps WALMessage and adds Time for debugging purposes.
 *
 * @generated from message tendermint.consensus.TimedWALMessage
 */
export declare class TimedWALMessage extends Message<TimedWALMessage> {
	/**
	 * @generated from field: google.protobuf.Timestamp time = 1;
	 */
	time?: Timestamp;

	/**
	 * @generated from field: tendermint.consensus.WALMessage msg = 2;
	 */
	msg?: WALMessage;

	constructor(data?: PartialMessage<TimedWALMessage>);

	static readonly runtime: typeof proto3;
	static readonly typeName = 'tendermint.consensus.TimedWALMessage';
	static readonly fields: FieldList;

	static fromBinary(
		bytes: Uint8Array,
		options?: Partial<BinaryReadOptions>,
	): TimedWALMessage;

	static fromJson(
		jsonValue: JsonValue,
		options?: Partial<JsonReadOptions>,
	): TimedWALMessage;

	static fromJsonString(
		jsonString: string,
		options?: Partial<JsonReadOptions>,
	): TimedWALMessage;

	static equals(
		a: TimedWALMessage | PlainMessage<TimedWALMessage> | undefined,
		b: TimedWALMessage | PlainMessage<TimedWALMessage> | undefined,
	): boolean;
}
