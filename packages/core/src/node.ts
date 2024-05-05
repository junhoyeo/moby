import {
  MemoryNetwork,
  MemoryServer,
} from '@moby/raft/dist/adapters/network/memory';
import { LocalStateManager } from '@moby/raft/dist/adapters/state';
import { RaftNode } from '@moby/raft/dist/core';
import { CommandType, LogEntry } from '@moby/raft/dist/interfaces';

import { Chain as Blockchain } from './chain';

type RaftNetwork = MemoryNetwork;

export class Node {
  nodeId: string;
  blockchain: Blockchain;
  raftServer: MemoryServer;
  raftStateManager: LocalStateManager;

  private _raftNode: RaftNode | null = null;
  private _raftNetwork: RaftNetwork | null = null;

  constructor(nodeId: string) {
    this.raftServer = new MemoryServer();
    this.raftStateManager = new LocalStateManager(nodeId, `testDB/${nodeId}`);
    this.nodeId = nodeId;
    this.blockchain = new Blockchain();
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
      this.logApplier,
    );
  }

  private logApplier(raftNode: RaftNode, logEntry: LogEntry) {
    switch (logEntry.command.type) {
      case CommandType.MEMBERSHIP_ADD:
        console.log('MEMBERSHIP_ADD command applier');
        if (logEntry.command.data !== this.nodeId) {
          raftNode.applyMembershipAdd(logEntry.command.data);
        }
        break;
      case CommandType.MEMBERSHIP_REMOVE:
        console.log('MEMBERSHIP_REMOVE command applier');
        raftNode.applyMembershipRemove(logEntry.command.data);
        break;
      case CommandType.STORE_SET:
        // console.log('STORE_SET command applier');
        // this.store.SET(logEntry.command.data.key, logEntry.command.data.value);

        break;
      default:
        console.log('UNHANDLED COMMAND', logEntry.command);
    }
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
