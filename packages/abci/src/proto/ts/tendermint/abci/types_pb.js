// @generated by protoc-gen-es v1.0.0
// @generated from file tendermint/abci/types.proto (package tendermint.abci, syntax proto3)

/* eslint-disable */
// @ts-nocheck
import { Timestamp, proto3 } from '@bufbuild/protobuf';

import { PublicKey } from '../crypto/keys_pb.js';
import { ProofOps } from '../crypto/proof_pb.js';
import { ConsensusParams } from '../types/params_pb.js';
import { Header } from '../types/types_pb.js';

/**
 * @generated from enum tendermint.abci.CheckTxType
 */
export const CheckTxType = proto3.makeEnum('tendermint.abci.CheckTxType', [
	{ no: 0, name: 'NEW' },
	{ no: 1, name: 'RECHECK' },
]);

/**
 * @generated from enum tendermint.abci.MisbehaviorType
 */
export const MisbehaviorType = proto3.makeEnum(
	'tendermint.abci.MisbehaviorType',
	[
		{ no: 0, name: 'UNKNOWN' },
		{ no: 1, name: 'DUPLICATE_VOTE' },
		{ no: 2, name: 'LIGHT_CLIENT_ATTACK' },
	],
);

/**
 * @generated from message tendermint.abci.Request
 */
export const Request = proto3.makeMessageType('tendermint.abci.Request', () => [
	{ no: 1, name: 'echo', kind: 'message', T: RequestEcho, oneof: 'value' },
	{ no: 2, name: 'flush', kind: 'message', T: RequestFlush, oneof: 'value' },
	{ no: 3, name: 'info', kind: 'message', T: RequestInfo, oneof: 'value' },
	{
		no: 5,
		name: 'init_chain',
		kind: 'message',
		T: RequestInitChain,
		oneof: 'value',
	},
	{ no: 6, name: 'query', kind: 'message', T: RequestQuery, oneof: 'value' },
	{
		no: 7,
		name: 'begin_block',
		kind: 'message',
		T: RequestBeginBlock,
		oneof: 'value',
	},
	{
		no: 8,
		name: 'check_tx',
		kind: 'message',
		T: RequestCheckTx,
		oneof: 'value',
	},
	{
		no: 9,
		name: 'deliver_tx',
		kind: 'message',
		T: RequestDeliverTx,
		oneof: 'value',
	},
	{
		no: 10,
		name: 'end_block',
		kind: 'message',
		T: RequestEndBlock,
		oneof: 'value',
	},
	{ no: 11, name: 'commit', kind: 'message', T: RequestCommit, oneof: 'value' },
	{
		no: 12,
		name: 'list_snapshots',
		kind: 'message',
		T: RequestListSnapshots,
		oneof: 'value',
	},
	{
		no: 13,
		name: 'offer_snapshot',
		kind: 'message',
		T: RequestOfferSnapshot,
		oneof: 'value',
	},
	{
		no: 14,
		name: 'load_snapshot_chunk',
		kind: 'message',
		T: RequestLoadSnapshotChunk,
		oneof: 'value',
	},
	{
		no: 15,
		name: 'apply_snapshot_chunk',
		kind: 'message',
		T: RequestApplySnapshotChunk,
		oneof: 'value',
	},
	{
		no: 16,
		name: 'prepare_proposal',
		kind: 'message',
		T: RequestPrepareProposal,
		oneof: 'value',
	},
	{
		no: 17,
		name: 'process_proposal',
		kind: 'message',
		T: RequestProcessProposal,
		oneof: 'value',
	},
]);

/**
 * @generated from message tendermint.abci.RequestEcho
 */
export const RequestEcho = proto3.makeMessageType(
	'tendermint.abci.RequestEcho',
	() => [
		{ no: 1, name: 'message', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
	],
);

/**
 * @generated from message tendermint.abci.RequestFlush
 */
export const RequestFlush = proto3.makeMessageType(
	'tendermint.abci.RequestFlush',
	[],
);

/**
 * @generated from message tendermint.abci.RequestInfo
 */
export const RequestInfo = proto3.makeMessageType(
	'tendermint.abci.RequestInfo',
	() => [
		{ no: 1, name: 'version', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
		{
			no: 2,
			name: 'block_version',
			kind: 'scalar',
			T: 4 /* ScalarType.UINT64 */,
		},
		{
			no: 3,
			name: 'p2p_version',
			kind: 'scalar',
			T: 4 /* ScalarType.UINT64 */,
		},
		{
			no: 4,
			name: 'abci_version',
			kind: 'scalar',
			T: 9 /* ScalarType.STRING */,
		},
	],
);

/**
 * @generated from message tendermint.abci.RequestInitChain
 */
export const RequestInitChain = proto3.makeMessageType(
	'tendermint.abci.RequestInitChain',
	() => [
		{ no: 1, name: 'time', kind: 'message', T: Timestamp },
		{ no: 2, name: 'chain_id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
		{ no: 3, name: 'consensus_params', kind: 'message', T: ConsensusParams },
		{
			no: 4,
			name: 'validators',
			kind: 'message',
			T: ValidatorUpdate,
			repeated: true,
		},
		{
			no: 5,
			name: 'app_state_bytes',
			kind: 'scalar',
			T: 12 /* ScalarType.BYTES */,
		},
		{
			no: 6,
			name: 'initial_height',
			kind: 'scalar',
			T: 3 /* ScalarType.INT64 */,
		},
	],
);

/**
 * @generated from message tendermint.abci.RequestQuery
 */
export const RequestQuery = proto3.makeMessageType(
	'tendermint.abci.RequestQuery',
	() => [
		{ no: 1, name: 'data', kind: 'scalar', T: 12 /* ScalarType.BYTES */ },
		{ no: 2, name: 'path', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
		{ no: 3, name: 'height', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
		{ no: 4, name: 'prove', kind: 'scalar', T: 8 /* ScalarType.BOOL */ },
	],
);

/**
 * @generated from message tendermint.abci.RequestBeginBlock
 */
export const RequestBeginBlock = proto3.makeMessageType(
	'tendermint.abci.RequestBeginBlock',
	() => [
		{ no: 1, name: 'hash', kind: 'scalar', T: 12 /* ScalarType.BYTES */ },
		{ no: 2, name: 'header', kind: 'message', T: Header },
		{ no: 3, name: 'last_commit_info', kind: 'message', T: CommitInfo },
		{
			no: 4,
			name: 'byzantine_validators',
			kind: 'message',
			T: Misbehavior,
			repeated: true,
		},
	],
);

/**
 * @generated from message tendermint.abci.RequestCheckTx
 */
export const RequestCheckTx = proto3.makeMessageType(
	'tendermint.abci.RequestCheckTx',
	() => [
		{ no: 1, name: 'tx', kind: 'scalar', T: 12 /* ScalarType.BYTES */ },
		{ no: 2, name: 'type', kind: 'enum', T: proto3.getEnumType(CheckTxType) },
	],
);

/**
 * @generated from message tendermint.abci.RequestDeliverTx
 */
export const RequestDeliverTx = proto3.makeMessageType(
	'tendermint.abci.RequestDeliverTx',
	() => [{ no: 1, name: 'tx', kind: 'scalar', T: 12 /* ScalarType.BYTES */ }],
);

/**
 * @generated from message tendermint.abci.RequestEndBlock
 */
export const RequestEndBlock = proto3.makeMessageType(
	'tendermint.abci.RequestEndBlock',
	() => [
		{ no: 1, name: 'height', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
	],
);

/**
 * @generated from message tendermint.abci.RequestCommit
 */
export const RequestCommit = proto3.makeMessageType(
	'tendermint.abci.RequestCommit',
	[],
);

/**
 * lists available snapshots
 *
 * @generated from message tendermint.abci.RequestListSnapshots
 */
export const RequestListSnapshots = proto3.makeMessageType(
	'tendermint.abci.RequestListSnapshots',
	[],
);

/**
 * offers a snapshot to the application
 *
 * @generated from message tendermint.abci.RequestOfferSnapshot
 */
export const RequestOfferSnapshot = proto3.makeMessageType(
	'tendermint.abci.RequestOfferSnapshot',
	() => [
		{ no: 1, name: 'snapshot', kind: 'message', T: Snapshot },
		{ no: 2, name: 'app_hash', kind: 'scalar', T: 12 /* ScalarType.BYTES */ },
	],
);

/**
 * loads a snapshot chunk
 *
 * @generated from message tendermint.abci.RequestLoadSnapshotChunk
 */
export const RequestLoadSnapshotChunk = proto3.makeMessageType(
	'tendermint.abci.RequestLoadSnapshotChunk',
	() => [
		{ no: 1, name: 'height', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
		{ no: 2, name: 'format', kind: 'scalar', T: 13 /* ScalarType.UINT32 */ },
		{ no: 3, name: 'chunk', kind: 'scalar', T: 13 /* ScalarType.UINT32 */ },
	],
);

/**
 * Applies a snapshot chunk
 *
 * @generated from message tendermint.abci.RequestApplySnapshotChunk
 */
export const RequestApplySnapshotChunk = proto3.makeMessageType(
	'tendermint.abci.RequestApplySnapshotChunk',
	() => [
		{ no: 1, name: 'index', kind: 'scalar', T: 13 /* ScalarType.UINT32 */ },
		{ no: 2, name: 'chunk', kind: 'scalar', T: 12 /* ScalarType.BYTES */ },
		{ no: 3, name: 'sender', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
	],
);

/**
 * @generated from message tendermint.abci.RequestPrepareProposal
 */
export const RequestPrepareProposal = proto3.makeMessageType(
	'tendermint.abci.RequestPrepareProposal',
	() => [
		{
			no: 1,
			name: 'max_tx_bytes',
			kind: 'scalar',
			T: 3 /* ScalarType.INT64 */,
		},
		{
			no: 2,
			name: 'txs',
			kind: 'scalar',
			T: 12 /* ScalarType.BYTES */,
			repeated: true,
		},
		{
			no: 3,
			name: 'local_last_commit',
			kind: 'message',
			T: ExtendedCommitInfo,
		},
		{
			no: 4,
			name: 'misbehavior',
			kind: 'message',
			T: Misbehavior,
			repeated: true,
		},
		{ no: 5, name: 'height', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
		{ no: 6, name: 'time', kind: 'message', T: Timestamp },
		{
			no: 7,
			name: 'next_validators_hash',
			kind: 'scalar',
			T: 12 /* ScalarType.BYTES */,
		},
		{
			no: 8,
			name: 'proposer_address',
			kind: 'scalar',
			T: 12 /* ScalarType.BYTES */,
		},
	],
);

/**
 * @generated from message tendermint.abci.RequestProcessProposal
 */
export const RequestProcessProposal = proto3.makeMessageType(
	'tendermint.abci.RequestProcessProposal',
	() => [
		{
			no: 1,
			name: 'txs',
			kind: 'scalar',
			T: 12 /* ScalarType.BYTES */,
			repeated: true,
		},
		{ no: 2, name: 'proposed_last_commit', kind: 'message', T: CommitInfo },
		{
			no: 3,
			name: 'misbehavior',
			kind: 'message',
			T: Misbehavior,
			repeated: true,
		},
		{ no: 4, name: 'hash', kind: 'scalar', T: 12 /* ScalarType.BYTES */ },
		{ no: 5, name: 'height', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
		{ no: 6, name: 'time', kind: 'message', T: Timestamp },
		{
			no: 7,
			name: 'next_validators_hash',
			kind: 'scalar',
			T: 12 /* ScalarType.BYTES */,
		},
		{
			no: 8,
			name: 'proposer_address',
			kind: 'scalar',
			T: 12 /* ScalarType.BYTES */,
		},
	],
);

/**
 * @generated from message tendermint.abci.Response
 */
export const Response = proto3.makeMessageType(
	'tendermint.abci.Response',
	() => [
		{
			no: 1,
			name: 'exception',
			kind: 'message',
			T: ResponseException,
			oneof: 'value',
		},
		{ no: 2, name: 'echo', kind: 'message', T: ResponseEcho, oneof: 'value' },
		{ no: 3, name: 'flush', kind: 'message', T: ResponseFlush, oneof: 'value' },
		{ no: 4, name: 'info', kind: 'message', T: ResponseInfo, oneof: 'value' },
		{
			no: 6,
			name: 'init_chain',
			kind: 'message',
			T: ResponseInitChain,
			oneof: 'value',
		},
		{ no: 7, name: 'query', kind: 'message', T: ResponseQuery, oneof: 'value' },
		{
			no: 8,
			name: 'begin_block',
			kind: 'message',
			T: ResponseBeginBlock,
			oneof: 'value',
		},
		{
			no: 9,
			name: 'check_tx',
			kind: 'message',
			T: ResponseCheckTx,
			oneof: 'value',
		},
		{
			no: 10,
			name: 'deliver_tx',
			kind: 'message',
			T: ResponseDeliverTx,
			oneof: 'value',
		},
		{
			no: 11,
			name: 'end_block',
			kind: 'message',
			T: ResponseEndBlock,
			oneof: 'value',
		},
		{
			no: 12,
			name: 'commit',
			kind: 'message',
			T: ResponseCommit,
			oneof: 'value',
		},
		{
			no: 13,
			name: 'list_snapshots',
			kind: 'message',
			T: ResponseListSnapshots,
			oneof: 'value',
		},
		{
			no: 14,
			name: 'offer_snapshot',
			kind: 'message',
			T: ResponseOfferSnapshot,
			oneof: 'value',
		},
		{
			no: 15,
			name: 'load_snapshot_chunk',
			kind: 'message',
			T: ResponseLoadSnapshotChunk,
			oneof: 'value',
		},
		{
			no: 16,
			name: 'apply_snapshot_chunk',
			kind: 'message',
			T: ResponseApplySnapshotChunk,
			oneof: 'value',
		},
		{
			no: 17,
			name: 'prepare_proposal',
			kind: 'message',
			T: ResponsePrepareProposal,
			oneof: 'value',
		},
		{
			no: 18,
			name: 'process_proposal',
			kind: 'message',
			T: ResponseProcessProposal,
			oneof: 'value',
		},
	],
);

/**
 * nondeterministic
 *
 * @generated from message tendermint.abci.ResponseException
 */
export const ResponseException = proto3.makeMessageType(
	'tendermint.abci.ResponseException',
	() => [
		{ no: 1, name: 'error', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
	],
);

/**
 * @generated from message tendermint.abci.ResponseEcho
 */
export const ResponseEcho = proto3.makeMessageType(
	'tendermint.abci.ResponseEcho',
	() => [
		{ no: 1, name: 'message', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
	],
);

/**
 * @generated from message tendermint.abci.ResponseFlush
 */
export const ResponseFlush = proto3.makeMessageType(
	'tendermint.abci.ResponseFlush',
	[],
);

/**
 * @generated from message tendermint.abci.ResponseInfo
 */
export const ResponseInfo = proto3.makeMessageType(
	'tendermint.abci.ResponseInfo',
	() => [
		{ no: 1, name: 'data', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
		{ no: 2, name: 'version', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
		{
			no: 3,
			name: 'app_version',
			kind: 'scalar',
			T: 4 /* ScalarType.UINT64 */,
		},
		{
			no: 4,
			name: 'last_block_height',
			kind: 'scalar',
			T: 3 /* ScalarType.INT64 */,
		},
		{
			no: 5,
			name: 'last_block_app_hash',
			kind: 'scalar',
			T: 12 /* ScalarType.BYTES */,
		},
	],
);

/**
 * @generated from message tendermint.abci.ResponseInitChain
 */
export const ResponseInitChain = proto3.makeMessageType(
	'tendermint.abci.ResponseInitChain',
	() => [
		{ no: 1, name: 'consensus_params', kind: 'message', T: ConsensusParams },
		{
			no: 2,
			name: 'validators',
			kind: 'message',
			T: ValidatorUpdate,
			repeated: true,
		},
		{ no: 3, name: 'app_hash', kind: 'scalar', T: 12 /* ScalarType.BYTES */ },
	],
);

/**
 * @generated from message tendermint.abci.ResponseQuery
 */
export const ResponseQuery = proto3.makeMessageType(
	'tendermint.abci.ResponseQuery',
	() => [
		{ no: 1, name: 'code', kind: 'scalar', T: 13 /* ScalarType.UINT32 */ },
		{ no: 3, name: 'log', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
		{ no: 4, name: 'info', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
		{ no: 5, name: 'index', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
		{ no: 6, name: 'key', kind: 'scalar', T: 12 /* ScalarType.BYTES */ },
		{ no: 7, name: 'value', kind: 'scalar', T: 12 /* ScalarType.BYTES */ },
		{ no: 8, name: 'proof_ops', kind: 'message', T: ProofOps },
		{ no: 9, name: 'height', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
		{ no: 10, name: 'codespace', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
	],
);

/**
 * @generated from message tendermint.abci.ResponseBeginBlock
 */
export const ResponseBeginBlock = proto3.makeMessageType(
	'tendermint.abci.ResponseBeginBlock',
	() => [{ no: 1, name: 'events', kind: 'message', T: Event, repeated: true }],
);

/**
 * @generated from message tendermint.abci.ResponseCheckTx
 */
export const ResponseCheckTx = proto3.makeMessageType(
	'tendermint.abci.ResponseCheckTx',
	() => [
		{ no: 1, name: 'code', kind: 'scalar', T: 13 /* ScalarType.UINT32 */ },
		{ no: 2, name: 'data', kind: 'scalar', T: 12 /* ScalarType.BYTES */ },
		{ no: 3, name: 'log', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
		{ no: 4, name: 'info', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
		{
			no: 5,
			name: 'gas_wanted',
			jsonName: 'gas_wanted',
			kind: 'scalar',
			T: 3 /* ScalarType.INT64 */,
		},
		{
			no: 6,
			name: 'gas_used',
			jsonName: 'gas_used',
			kind: 'scalar',
			T: 3 /* ScalarType.INT64 */,
		},
		{ no: 7, name: 'events', kind: 'message', T: Event, repeated: true },
		{ no: 8, name: 'codespace', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
		{ no: 9, name: 'sender', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
		{ no: 10, name: 'priority', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
		{
			no: 11,
			name: 'mempool_error',
			kind: 'scalar',
			T: 9 /* ScalarType.STRING */,
		},
	],
);

/**
 * @generated from message tendermint.abci.ResponseDeliverTx
 */
export const ResponseDeliverTx = proto3.makeMessageType(
	'tendermint.abci.ResponseDeliverTx',
	() => [
		{ no: 1, name: 'code', kind: 'scalar', T: 13 /* ScalarType.UINT32 */ },
		{ no: 2, name: 'data', kind: 'scalar', T: 12 /* ScalarType.BYTES */ },
		{ no: 3, name: 'log', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
		{ no: 4, name: 'info', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
		{
			no: 5,
			name: 'gas_wanted',
			jsonName: 'gas_wanted',
			kind: 'scalar',
			T: 3 /* ScalarType.INT64 */,
		},
		{
			no: 6,
			name: 'gas_used',
			jsonName: 'gas_used',
			kind: 'scalar',
			T: 3 /* ScalarType.INT64 */,
		},
		{ no: 7, name: 'events', kind: 'message', T: Event, repeated: true },
		{ no: 8, name: 'codespace', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
	],
);

/**
 * @generated from message tendermint.abci.ResponseEndBlock
 */
export const ResponseEndBlock = proto3.makeMessageType(
	'tendermint.abci.ResponseEndBlock',
	() => [
		{
			no: 1,
			name: 'validator_updates',
			kind: 'message',
			T: ValidatorUpdate,
			repeated: true,
		},
		{
			no: 2,
			name: 'consensus_param_updates',
			kind: 'message',
			T: ConsensusParams,
		},
		{ no: 3, name: 'events', kind: 'message', T: Event, repeated: true },
	],
);

/**
 * @generated from message tendermint.abci.ResponseCommit
 */
export const ResponseCommit = proto3.makeMessageType(
	'tendermint.abci.ResponseCommit',
	() => [
		{ no: 2, name: 'data', kind: 'scalar', T: 12 /* ScalarType.BYTES */ },
		{
			no: 3,
			name: 'retain_height',
			kind: 'scalar',
			T: 3 /* ScalarType.INT64 */,
		},
	],
);

/**
 * @generated from message tendermint.abci.ResponseListSnapshots
 */
export const ResponseListSnapshots = proto3.makeMessageType(
	'tendermint.abci.ResponseListSnapshots',
	() => [
		{ no: 1, name: 'snapshots', kind: 'message', T: Snapshot, repeated: true },
	],
);

/**
 * @generated from message tendermint.abci.ResponseOfferSnapshot
 */
export const ResponseOfferSnapshot = proto3.makeMessageType(
	'tendermint.abci.ResponseOfferSnapshot',
	() => [
		{
			no: 1,
			name: 'result',
			kind: 'enum',
			T: proto3.getEnumType(ResponseOfferSnapshot_Result),
		},
	],
);

/**
 * @generated from enum tendermint.abci.ResponseOfferSnapshot.Result
 */
export const ResponseOfferSnapshot_Result = proto3.makeEnum(
	'tendermint.abci.ResponseOfferSnapshot.Result',
	[
		{ no: 0, name: 'UNKNOWN' },
		{ no: 1, name: 'ACCEPT' },
		{ no: 2, name: 'ABORT' },
		{ no: 3, name: 'REJECT' },
		{ no: 4, name: 'REJECT_FORMAT' },
		{ no: 5, name: 'REJECT_SENDER' },
	],
);

/**
 * @generated from message tendermint.abci.ResponseLoadSnapshotChunk
 */
export const ResponseLoadSnapshotChunk = proto3.makeMessageType(
	'tendermint.abci.ResponseLoadSnapshotChunk',
	() => [
		{ no: 1, name: 'chunk', kind: 'scalar', T: 12 /* ScalarType.BYTES */ },
	],
);

/**
 * @generated from message tendermint.abci.ResponseApplySnapshotChunk
 */
export const ResponseApplySnapshotChunk = proto3.makeMessageType(
	'tendermint.abci.ResponseApplySnapshotChunk',
	() => [
		{
			no: 1,
			name: 'result',
			kind: 'enum',
			T: proto3.getEnumType(ResponseApplySnapshotChunk_Result),
		},
		{
			no: 2,
			name: 'refetch_chunks',
			kind: 'scalar',
			T: 13 /* ScalarType.UINT32 */,
			repeated: true,
		},
		{
			no: 3,
			name: 'reject_senders',
			kind: 'scalar',
			T: 9 /* ScalarType.STRING */,
			repeated: true,
		},
	],
);

/**
 * @generated from enum tendermint.abci.ResponseApplySnapshotChunk.Result
 */
export const ResponseApplySnapshotChunk_Result = proto3.makeEnum(
	'tendermint.abci.ResponseApplySnapshotChunk.Result',
	[
		{ no: 0, name: 'UNKNOWN' },
		{ no: 1, name: 'ACCEPT' },
		{ no: 2, name: 'ABORT' },
		{ no: 3, name: 'RETRY' },
		{ no: 4, name: 'RETRY_SNAPSHOT' },
		{ no: 5, name: 'REJECT_SNAPSHOT' },
	],
);

/**
 * @generated from message tendermint.abci.ResponsePrepareProposal
 */
export const ResponsePrepareProposal = proto3.makeMessageType(
	'tendermint.abci.ResponsePrepareProposal',
	() => [
		{
			no: 1,
			name: 'txs',
			kind: 'scalar',
			T: 12 /* ScalarType.BYTES */,
			repeated: true,
		},
	],
);

/**
 * @generated from message tendermint.abci.ResponseProcessProposal
 */
export const ResponseProcessProposal = proto3.makeMessageType(
	'tendermint.abci.ResponseProcessProposal',
	() => [
		{
			no: 1,
			name: 'status',
			kind: 'enum',
			T: proto3.getEnumType(ResponseProcessProposal_ProposalStatus),
		},
	],
);

/**
 * @generated from enum tendermint.abci.ResponseProcessProposal.ProposalStatus
 */
export const ResponseProcessProposal_ProposalStatus = proto3.makeEnum(
	'tendermint.abci.ResponseProcessProposal.ProposalStatus',
	[
		{ no: 0, name: 'UNKNOWN' },
		{ no: 1, name: 'ACCEPT' },
		{ no: 2, name: 'REJECT' },
	],
);

/**
 * @generated from message tendermint.abci.CommitInfo
 */
export const CommitInfo = proto3.makeMessageType(
	'tendermint.abci.CommitInfo',
	() => [
		{ no: 1, name: 'round', kind: 'scalar', T: 5 /* ScalarType.INT32 */ },
		{ no: 2, name: 'votes', kind: 'message', T: VoteInfo, repeated: true },
	],
);

/**
 * @generated from message tendermint.abci.ExtendedCommitInfo
 */
export const ExtendedCommitInfo = proto3.makeMessageType(
	'tendermint.abci.ExtendedCommitInfo',
	() => [
		{ no: 1, name: 'round', kind: 'scalar', T: 5 /* ScalarType.INT32 */ },
		{
			no: 2,
			name: 'votes',
			kind: 'message',
			T: ExtendedVoteInfo,
			repeated: true,
		},
	],
);

/**
 * Event allows application developers to attach additional information to
 * ResponseBeginBlock, ResponseEndBlock, ResponseCheckTx and ResponseDeliverTx.
 * Later, transactions may be queried using these events.
 *
 * @generated from message tendermint.abci.Event
 */
export const Event = proto3.makeMessageType('tendermint.abci.Event', () => [
	{ no: 1, name: 'type', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
	{
		no: 2,
		name: 'attributes',
		kind: 'message',
		T: EventAttribute,
		repeated: true,
	},
]);

/**
 * EventAttribute is a single key-value pair, associated with an event.
 *
 * @generated from message tendermint.abci.EventAttribute
 */
export const EventAttribute = proto3.makeMessageType(
	'tendermint.abci.EventAttribute',
	() => [
		{ no: 1, name: 'key', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
		{ no: 2, name: 'value', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
		{ no: 3, name: 'index', kind: 'scalar', T: 8 /* ScalarType.BOOL */ },
	],
);

/**
 * TxResult contains results of executing the transaction.
 *
 * One usage is indexing transaction results.
 *
 * @generated from message tendermint.abci.TxResult
 */
export const TxResult = proto3.makeMessageType(
	'tendermint.abci.TxResult',
	() => [
		{ no: 1, name: 'height', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
		{ no: 2, name: 'index', kind: 'scalar', T: 13 /* ScalarType.UINT32 */ },
		{ no: 3, name: 'tx', kind: 'scalar', T: 12 /* ScalarType.BYTES */ },
		{ no: 4, name: 'result', kind: 'message', T: ResponseDeliverTx },
	],
);

/**
 * Validator
 *
 * @generated from message tendermint.abci.Validator
 */
export const Validator = proto3.makeMessageType(
	'tendermint.abci.Validator',
	() => [
		{ no: 1, name: 'address', kind: 'scalar', T: 12 /* ScalarType.BYTES */ },
		{ no: 3, name: 'power', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
	],
);

/**
 * ValidatorUpdate
 *
 * @generated from message tendermint.abci.ValidatorUpdate
 */
export const ValidatorUpdate = proto3.makeMessageType(
	'tendermint.abci.ValidatorUpdate',
	() => [
		{ no: 1, name: 'pub_key', kind: 'message', T: PublicKey },
		{ no: 2, name: 'power', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
	],
);

/**
 * VoteInfo
 *
 * @generated from message tendermint.abci.VoteInfo
 */
export const VoteInfo = proto3.makeMessageType(
	'tendermint.abci.VoteInfo',
	() => [
		{ no: 1, name: 'validator', kind: 'message', T: Validator },
		{
			no: 2,
			name: 'signed_last_block',
			kind: 'scalar',
			T: 8 /* ScalarType.BOOL */,
		},
	],
);

/**
 * @generated from message tendermint.abci.ExtendedVoteInfo
 */
export const ExtendedVoteInfo = proto3.makeMessageType(
	'tendermint.abci.ExtendedVoteInfo',
	() => [
		{ no: 1, name: 'validator', kind: 'message', T: Validator },
		{
			no: 2,
			name: 'signed_last_block',
			kind: 'scalar',
			T: 8 /* ScalarType.BOOL */,
		},
		{
			no: 3,
			name: 'vote_extension',
			kind: 'scalar',
			T: 12 /* ScalarType.BYTES */,
		},
	],
);

/**
 * @generated from message tendermint.abci.Misbehavior
 */
export const Misbehavior = proto3.makeMessageType(
	'tendermint.abci.Misbehavior',
	() => [
		{
			no: 1,
			name: 'type',
			kind: 'enum',
			T: proto3.getEnumType(MisbehaviorType),
		},
		{ no: 2, name: 'validator', kind: 'message', T: Validator },
		{ no: 3, name: 'height', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
		{ no: 4, name: 'time', kind: 'message', T: Timestamp },
		{
			no: 5,
			name: 'total_voting_power',
			kind: 'scalar',
			T: 3 /* ScalarType.INT64 */,
		},
	],
);

/**
 * @generated from message tendermint.abci.Snapshot
 */
export const Snapshot = proto3.makeMessageType(
	'tendermint.abci.Snapshot',
	() => [
		{ no: 1, name: 'height', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
		{ no: 2, name: 'format', kind: 'scalar', T: 13 /* ScalarType.UINT32 */ },
		{ no: 3, name: 'chunks', kind: 'scalar', T: 13 /* ScalarType.UINT32 */ },
		{ no: 4, name: 'hash', kind: 'scalar', T: 12 /* ScalarType.BYTES */ },
		{ no: 5, name: 'metadata', kind: 'scalar', T: 12 /* ScalarType.BYTES */ },
	],
);
