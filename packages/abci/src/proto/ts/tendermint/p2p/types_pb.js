// @generated by protoc-gen-es v1.0.0
// @generated from file tendermint/p2p/types.proto (package tendermint.p2p, syntax proto3)

/* eslint-disable */
// @ts-nocheck
import { proto3 } from '@bufbuild/protobuf';

/**
 * @generated from message tendermint.p2p.NetAddress
 */
export const NetAddress = proto3.makeMessageType(
	'tendermint.p2p.NetAddress',
	() => [
		{ no: 1, name: 'id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
		{ no: 2, name: 'ip', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
		{ no: 3, name: 'port', kind: 'scalar', T: 13 /* ScalarType.UINT32 */ },
	],
);

/**
 * @generated from message tendermint.p2p.ProtocolVersion
 */
export const ProtocolVersion = proto3.makeMessageType(
	'tendermint.p2p.ProtocolVersion',
	() => [
		{ no: 1, name: 'p2p', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
		{ no: 2, name: 'block', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
		{ no: 3, name: 'app', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
	],
);

/**
 * @generated from message tendermint.p2p.DefaultNodeInfo
 */
export const DefaultNodeInfo = proto3.makeMessageType(
	'tendermint.p2p.DefaultNodeInfo',
	() => [
		{ no: 1, name: 'protocol_version', kind: 'message', T: ProtocolVersion },
		{
			no: 2,
			name: 'default_node_id',
			kind: 'scalar',
			T: 9 /* ScalarType.STRING */,
		},
		{
			no: 3,
			name: 'listen_addr',
			kind: 'scalar',
			T: 9 /* ScalarType.STRING */,
		},
		{ no: 4, name: 'network', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
		{ no: 5, name: 'version', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
		{ no: 6, name: 'channels', kind: 'scalar', T: 12 /* ScalarType.BYTES */ },
		{ no: 7, name: 'moniker', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
		{ no: 8, name: 'other', kind: 'message', T: DefaultNodeInfoOther },
	],
);

/**
 * @generated from message tendermint.p2p.DefaultNodeInfoOther
 */
export const DefaultNodeInfoOther = proto3.makeMessageType(
	'tendermint.p2p.DefaultNodeInfoOther',
	() => [
		{ no: 1, name: 'tx_index', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
		{
			no: 2,
			name: 'rpc_address',
			kind: 'scalar',
			T: 9 /* ScalarType.STRING */,
		},
	],
);