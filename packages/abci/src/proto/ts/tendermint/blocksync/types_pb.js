// @generated by protoc-gen-es v1.0.0
// @generated from file tendermint/blocksync/types.proto (package tendermint.blocksync, syntax proto3)

/* eslint-disable */
// @ts-nocheck
import { proto3 } from '@bufbuild/protobuf';

import { Block } from '../types/block_pb.js';

/**
 * BlockRequest requests a block for a specific height
 *
 * @generated from message tendermint.blocksync.BlockRequest
 */
export const BlockRequest = proto3.makeMessageType(
	'tendermint.blocksync.BlockRequest',
	() => [
		{ no: 1, name: 'height', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
	],
);

/**
 * NoBlockResponse informs the node that the peer does not have block at the requested height
 *
 * @generated from message tendermint.blocksync.NoBlockResponse
 */
export const NoBlockResponse = proto3.makeMessageType(
	'tendermint.blocksync.NoBlockResponse',
	() => [
		{ no: 1, name: 'height', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
	],
);

/**
 * BlockResponse returns block to the requested
 *
 * @generated from message tendermint.blocksync.BlockResponse
 */
export const BlockResponse = proto3.makeMessageType(
	'tendermint.blocksync.BlockResponse',
	() => [{ no: 1, name: 'block', kind: 'message', T: Block }],
);

/**
 * StatusRequest requests the status of a peer.
 *
 * @generated from message tendermint.blocksync.StatusRequest
 */
export const StatusRequest = proto3.makeMessageType(
	'tendermint.blocksync.StatusRequest',
	[],
);

/**
 * StatusResponse is a peer response to inform their status.
 *
 * @generated from message tendermint.blocksync.StatusResponse
 */
export const StatusResponse = proto3.makeMessageType(
	'tendermint.blocksync.StatusResponse',
	() => [
		{ no: 1, name: 'height', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
		{ no: 2, name: 'base', kind: 'scalar', T: 3 /* ScalarType.INT64 */ },
	],
);

/**
 * @generated from message tendermint.blocksync.Message
 */
export const Message = proto3.makeMessageType(
	'tendermint.blocksync.Message',
	() => [
		{
			no: 1,
			name: 'block_request',
			kind: 'message',
			T: BlockRequest,
			oneof: 'sum',
		},
		{
			no: 2,
			name: 'no_block_response',
			kind: 'message',
			T: NoBlockResponse,
			oneof: 'sum',
		},
		{
			no: 3,
			name: 'block_response',
			kind: 'message',
			T: BlockResponse,
			oneof: 'sum',
		},
		{
			no: 4,
			name: 'status_request',
			kind: 'message',
			T: StatusRequest,
			oneof: 'sum',
		},
		{
			no: 5,
			name: 'status_response',
			kind: 'message',
			T: StatusResponse,
			oneof: 'sum',
		},
	],
);
