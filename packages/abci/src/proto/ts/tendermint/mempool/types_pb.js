// @generated by protoc-gen-es v1.0.0
// @generated from file tendermint/mempool/types.proto (package tendermint.mempool, syntax proto3)

/* eslint-disable */
// @ts-nocheck
import { proto3 } from '@bufbuild/protobuf';

/**
 * @generated from message tendermint.mempool.Txs
 */
export const Txs = proto3.makeMessageType('tendermint.mempool.Txs', () => [
	{
		no: 1,
		name: 'txs',
		kind: 'scalar',
		T: 12 /* ScalarType.BYTES */,
		repeated: true,
	},
]);

/**
 * @generated from message tendermint.mempool.Message
 */
export const Message = proto3.makeMessageType(
	'tendermint.mempool.Message',
	() => [{ no: 1, name: 'txs', kind: 'message', T: Txs, oneof: 'sum' }],
);