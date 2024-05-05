// @generated by protoc-gen-es v1.0.0
// @generated from file tendermint/types/canonical.proto (package tendermint.types, syntax proto3)

/* eslint-disable */
// @ts-nocheck
import type {
	BinaryReadOptions,
	FieldList,
	JsonReadOptions,
	JsonValue,
	PartialMessage,
	PlainMessage,
	Timestamp,
} from '@bufbuild/protobuf';
import { Message, proto3 } from '@bufbuild/protobuf';

import type { SignedMsgType } from './types_pb.js';

/**
 * @generated from message tendermint.types.CanonicalBlockID
 */
export declare class CanonicalBlockID extends Message<CanonicalBlockID> {
	/**
	 * @generated from field: bytes hash = 1;
	 */
	hash: Uint8Array;

	/**
	 * @generated from field: tendermint.types.CanonicalPartSetHeader part_set_header = 2;
	 */
	partSetHeader?: CanonicalPartSetHeader;

	constructor(data?: PartialMessage<CanonicalBlockID>);

	static readonly runtime: typeof proto3;
	static readonly typeName = 'tendermint.types.CanonicalBlockID';
	static readonly fields: FieldList;

	static fromBinary(
		bytes: Uint8Array,
		options?: Partial<BinaryReadOptions>,
	): CanonicalBlockID;

	static fromJson(
		jsonValue: JsonValue,
		options?: Partial<JsonReadOptions>,
	): CanonicalBlockID;

	static fromJsonString(
		jsonString: string,
		options?: Partial<JsonReadOptions>,
	): CanonicalBlockID;

	static equals(
		a: CanonicalBlockID | PlainMessage<CanonicalBlockID> | undefined,
		b: CanonicalBlockID | PlainMessage<CanonicalBlockID> | undefined,
	): boolean;
}

/**
 * @generated from message tendermint.types.CanonicalPartSetHeader
 */
export declare class CanonicalPartSetHeader extends Message<CanonicalPartSetHeader> {
	/**
	 * @generated from field: uint32 total = 1;
	 */
	total: number;

	/**
	 * @generated from field: bytes hash = 2;
	 */
	hash: Uint8Array;

	constructor(data?: PartialMessage<CanonicalPartSetHeader>);

	static readonly runtime: typeof proto3;
	static readonly typeName = 'tendermint.types.CanonicalPartSetHeader';
	static readonly fields: FieldList;

	static fromBinary(
		bytes: Uint8Array,
		options?: Partial<BinaryReadOptions>,
	): CanonicalPartSetHeader;

	static fromJson(
		jsonValue: JsonValue,
		options?: Partial<JsonReadOptions>,
	): CanonicalPartSetHeader;

	static fromJsonString(
		jsonString: string,
		options?: Partial<JsonReadOptions>,
	): CanonicalPartSetHeader;

	static equals(
		a:
			| CanonicalPartSetHeader
			| PlainMessage<CanonicalPartSetHeader>
			| undefined,
		b:
			| CanonicalPartSetHeader
			| PlainMessage<CanonicalPartSetHeader>
			| undefined,
	): boolean;
}

/**
 * @generated from message tendermint.types.CanonicalProposal
 */
export declare class CanonicalProposal extends Message<CanonicalProposal> {
	/**
	 * type alias for byte
	 *
	 * @generated from field: tendermint.types.SignedMsgType type = 1;
	 */
	type: SignedMsgType;

	/**
	 * canonicalization requires fixed size encoding here
	 *
	 * @generated from field: sfixed64 height = 2;
	 */
	height: bigint;

	/**
	 * canonicalization requires fixed size encoding here
	 *
	 * @generated from field: sfixed64 round = 3;
	 */
	round: bigint;

	/**
	 * @generated from field: int64 pol_round = 4;
	 */
	polRound: bigint;

	/**
	 * @generated from field: tendermint.types.CanonicalBlockID block_id = 5;
	 */
	blockId?: CanonicalBlockID;

	/**
	 * @generated from field: google.protobuf.Timestamp timestamp = 6;
	 */
	timestamp?: Timestamp;

	/**
	 * @generated from field: string chain_id = 7;
	 */
	chainId: string;

	constructor(data?: PartialMessage<CanonicalProposal>);

	static readonly runtime: typeof proto3;
	static readonly typeName = 'tendermint.types.CanonicalProposal';
	static readonly fields: FieldList;

	static fromBinary(
		bytes: Uint8Array,
		options?: Partial<BinaryReadOptions>,
	): CanonicalProposal;

	static fromJson(
		jsonValue: JsonValue,
		options?: Partial<JsonReadOptions>,
	): CanonicalProposal;

	static fromJsonString(
		jsonString: string,
		options?: Partial<JsonReadOptions>,
	): CanonicalProposal;

	static equals(
		a: CanonicalProposal | PlainMessage<CanonicalProposal> | undefined,
		b: CanonicalProposal | PlainMessage<CanonicalProposal> | undefined,
	): boolean;
}

/**
 * @generated from message tendermint.types.CanonicalVote
 */
export declare class CanonicalVote extends Message<CanonicalVote> {
	/**
	 * type alias for byte
	 *
	 * @generated from field: tendermint.types.SignedMsgType type = 1;
	 */
	type: SignedMsgType;

	/**
	 * canonicalization requires fixed size encoding here
	 *
	 * @generated from field: sfixed64 height = 2;
	 */
	height: bigint;

	/**
	 * canonicalization requires fixed size encoding here
	 *
	 * @generated from field: sfixed64 round = 3;
	 */
	round: bigint;

	/**
	 * @generated from field: tendermint.types.CanonicalBlockID block_id = 4;
	 */
	blockId?: CanonicalBlockID;

	/**
	 * @generated from field: google.protobuf.Timestamp timestamp = 5;
	 */
	timestamp?: Timestamp;

	/**
	 * @generated from field: string chain_id = 6;
	 */
	chainId: string;

	constructor(data?: PartialMessage<CanonicalVote>);

	static readonly runtime: typeof proto3;
	static readonly typeName = 'tendermint.types.CanonicalVote';
	static readonly fields: FieldList;

	static fromBinary(
		bytes: Uint8Array,
		options?: Partial<BinaryReadOptions>,
	): CanonicalVote;

	static fromJson(
		jsonValue: JsonValue,
		options?: Partial<JsonReadOptions>,
	): CanonicalVote;

	static fromJsonString(
		jsonString: string,
		options?: Partial<JsonReadOptions>,
	): CanonicalVote;

	static equals(
		a: CanonicalVote | PlainMessage<CanonicalVote> | undefined,
		b: CanonicalVote | PlainMessage<CanonicalVote> | undefined,
	): boolean;
}
