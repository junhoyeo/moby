// @generated by protoc-gen-es v1.0.0
// @generated from file tendermint/state/types.proto (package tendermint.state, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { ResponseBeginBlock, ResponseDeliverTx, ResponseEndBlock } from "../abci/types_pb.js";
import type { ValidatorSet } from "../types/validator_pb.js";
import type { ConsensusParams } from "../types/params_pb.js";
import type { Consensus } from "../version/types_pb.js";
import type { BlockID } from "../types/types_pb.js";

/**
 * ABCIResponses retains the responses
 * of the various ABCI calls during block processing.
 * It is persisted to disk for each height before calling Commit.
 *
 * @generated from message tendermint.state.ABCIResponses
 */
export declare class ABCIResponses extends Message<ABCIResponses> {
  /**
   * @generated from field: repeated tendermint.abci.ResponseDeliverTx deliver_txs = 1;
   */
  deliverTxs: ResponseDeliverTx[];

  /**
   * @generated from field: tendermint.abci.ResponseEndBlock end_block = 2;
   */
  endBlock?: ResponseEndBlock;

  /**
   * @generated from field: tendermint.abci.ResponseBeginBlock begin_block = 3;
   */
  beginBlock?: ResponseBeginBlock;

  constructor(data?: PartialMessage<ABCIResponses>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tendermint.state.ABCIResponses";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ABCIResponses;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ABCIResponses;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ABCIResponses;

  static equals(a: ABCIResponses | PlainMessage<ABCIResponses> | undefined, b: ABCIResponses | PlainMessage<ABCIResponses> | undefined): boolean;
}

/**
 * ValidatorsInfo represents the latest validator set, or the last height it changed
 *
 * @generated from message tendermint.state.ValidatorsInfo
 */
export declare class ValidatorsInfo extends Message<ValidatorsInfo> {
  /**
   * @generated from field: tendermint.types.ValidatorSet validator_set = 1;
   */
  validatorSet?: ValidatorSet;

  /**
   * @generated from field: int64 last_height_changed = 2;
   */
  lastHeightChanged: bigint;

  constructor(data?: PartialMessage<ValidatorsInfo>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tendermint.state.ValidatorsInfo";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValidatorsInfo;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValidatorsInfo;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValidatorsInfo;

  static equals(a: ValidatorsInfo | PlainMessage<ValidatorsInfo> | undefined, b: ValidatorsInfo | PlainMessage<ValidatorsInfo> | undefined): boolean;
}

/**
 * ConsensusParamsInfo represents the latest consensus params, or the last height it changed
 *
 * @generated from message tendermint.state.ConsensusParamsInfo
 */
export declare class ConsensusParamsInfo extends Message<ConsensusParamsInfo> {
  /**
   * @generated from field: tendermint.types.ConsensusParams consensus_params = 1;
   */
  consensusParams?: ConsensusParams;

  /**
   * @generated from field: int64 last_height_changed = 2;
   */
  lastHeightChanged: bigint;

  constructor(data?: PartialMessage<ConsensusParamsInfo>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tendermint.state.ConsensusParamsInfo";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConsensusParamsInfo;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConsensusParamsInfo;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConsensusParamsInfo;

  static equals(a: ConsensusParamsInfo | PlainMessage<ConsensusParamsInfo> | undefined, b: ConsensusParamsInfo | PlainMessage<ConsensusParamsInfo> | undefined): boolean;
}

/**
 * @generated from message tendermint.state.ABCIResponsesInfo
 */
export declare class ABCIResponsesInfo extends Message<ABCIResponsesInfo> {
  /**
   * @generated from field: tendermint.state.ABCIResponses abci_responses = 1;
   */
  abciResponses?: ABCIResponses;

  /**
   * @generated from field: int64 height = 2;
   */
  height: bigint;

  constructor(data?: PartialMessage<ABCIResponsesInfo>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tendermint.state.ABCIResponsesInfo";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ABCIResponsesInfo;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ABCIResponsesInfo;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ABCIResponsesInfo;

  static equals(a: ABCIResponsesInfo | PlainMessage<ABCIResponsesInfo> | undefined, b: ABCIResponsesInfo | PlainMessage<ABCIResponsesInfo> | undefined): boolean;
}

/**
 * @generated from message tendermint.state.Version
 */
export declare class Version extends Message<Version> {
  /**
   * @generated from field: tendermint.version.Consensus consensus = 1;
   */
  consensus?: Consensus;

  /**
   * @generated from field: string software = 2;
   */
  software: string;

  constructor(data?: PartialMessage<Version>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tendermint.state.Version";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Version;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Version;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Version;

  static equals(a: Version | PlainMessage<Version> | undefined, b: Version | PlainMessage<Version> | undefined): boolean;
}

/**
 * @generated from message tendermint.state.State
 */
export declare class State extends Message<State> {
  /**
   * @generated from field: tendermint.state.Version version = 1;
   */
  version?: Version;

  /**
   * immutable
   *
   * @generated from field: string chain_id = 2;
   */
  chainId: string;

  /**
   * @generated from field: int64 initial_height = 14;
   */
  initialHeight: bigint;

  /**
   * LastBlockHeight=0 at genesis (ie. block(H=0) does not exist)
   *
   * @generated from field: int64 last_block_height = 3;
   */
  lastBlockHeight: bigint;

  /**
   * @generated from field: tendermint.types.BlockID last_block_id = 4;
   */
  lastBlockId?: BlockID;

  /**
   * @generated from field: google.protobuf.Timestamp last_block_time = 5;
   */
  lastBlockTime?: Timestamp;

  /**
   * LastValidators is used to validate block.LastCommit.
   * Validators are persisted to the database separately every time they change,
   * so we can query for historical validator sets.
   * Note that if s.LastBlockHeight causes a valset change,
   * we set s.LastHeightValidatorsChanged = s.LastBlockHeight + 1 + 1
   * Extra +1 due to nextValSet delay.
   *
   * @generated from field: tendermint.types.ValidatorSet next_validators = 6;
   */
  nextValidators?: ValidatorSet;

  /**
   * @generated from field: tendermint.types.ValidatorSet validators = 7;
   */
  validators?: ValidatorSet;

  /**
   * @generated from field: tendermint.types.ValidatorSet last_validators = 8;
   */
  lastValidators?: ValidatorSet;

  /**
   * @generated from field: int64 last_height_validators_changed = 9;
   */
  lastHeightValidatorsChanged: bigint;

  /**
   * Consensus parameters used for validating blocks.
   * Changes returned by EndBlock and updated after Commit.
   *
   * @generated from field: tendermint.types.ConsensusParams consensus_params = 10;
   */
  consensusParams?: ConsensusParams;

  /**
   * @generated from field: int64 last_height_consensus_params_changed = 11;
   */
  lastHeightConsensusParamsChanged: bigint;

  /**
   * Merkle root of the results from executing prev block
   *
   * @generated from field: bytes last_results_hash = 12;
   */
  lastResultsHash: Uint8Array;

  /**
   * the latest AppHash we've received from calling abci.Commit()
   *
   * @generated from field: bytes app_hash = 13;
   */
  appHash: Uint8Array;

  constructor(data?: PartialMessage<State>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tendermint.state.State";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): State;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): State;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): State;

  static equals(a: State | PlainMessage<State> | undefined, b: State | PlainMessage<State> | undefined): boolean;
}

