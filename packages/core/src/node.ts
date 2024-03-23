import {
  MemoryNetwork,
  MemoryServer,
} from '@moby/raft/dist/adapters/network/memory';
import { LocalStateManager } from '@moby/raft/dist/adapters/state';
import { RaftNode } from '@moby/raft/dist/core';

type RaftNetwork = MemoryNetwork;

export class Node {
  nodeId: string;
  raftServer: MemoryServer;
  raftStateManager: LocalStateManager;

  private _raftNode: RaftNode | null = null;
  private _raftNetwork: RaftNetwork | null = null;

  constructor(nodeId: string) {
    this.raftServer = new MemoryServer();
    this.raftStateManager = new LocalStateManager(nodeId, `testDB/${nodeId}`);
    this.nodeId = nodeId;
  }

  register(raftNetwork: RaftNetwork) {
    this._raftNetwork = raftNetwork;
    raftNetwork.addServer(this.nodeId, this.raftServer);
  }

  async initialize(raftNetwork?: RaftNetwork) {
    if (raftNetwork) {
      this.register(raftNetwork);
    }
    this._raftNode = await RaftNode.create(
      this.nodeId,
      this.raftServer,
      this.raftStateManager,
      'MEMORY',
      true,
    );
  }

  get raftNode(): RaftNode {
    if (!this._raftNode) {
      throw Error('Node is not initialized.');
    }
    return this._raftNode;
  }

  stop() {
    this.raftNode.stopListeners();
    this._raftNetwork?.removeServerFromNode(this.nodeId, {
      oldServer: this.nodeId,
    });
    this.raftServer.RemoveServer({ oldServer: this.nodeId });
  }
}
