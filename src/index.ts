import { Block, BlockHeader, IBlock, IBlockHeader } from './block';
import { Chain as Blockchain } from './chain';
import { MemoryNetwork, MemoryServer } from './tf-raft/adapters/network/memory';
import { LocalStateManager } from './tf-raft/adapters/state';
import { MemoryCluster } from './tf-raft/clusters/memory.cluster';
import { RaftNode } from './tf-raft/core';
import { PeerConnection } from './tf-raft/interfaces';
import { CommandType, QueryType } from './tf-raft/interfaces';
import { sleep } from './tf-raft/utils';

const NODES_NUMBER = 3;
const MIN_STAKE = 100;

interface Account {
  address: string;
  balance: number;
  stake: number;
}

const accounts: Account[] = [
  { address: 'A1', balance: 1000, stake: 500 },
  { address: 'A2', balance: 500, stake: 200 },
  { address: 'A3', balance: 2000, stake: 1000 },
];

const main = async () => {
  const blockchain = new Blockchain();
  const cluster = new MemoryCluster(NODES_NUMBER);
  const network = MemoryNetwork.getTestNetwork();
  // 1
  const server1 = new MemoryServer();
  network.addServer('NODE1', server1);
  const state1 = new LocalStateManager('NODE1', 'testDB/store2');
  const node1 = await RaftNode.create('NODE1', server1, state1, 'MEMORY', true);
  await sleep(300);
  // 2
  const server2 = new MemoryServer();
  network.addServer('NODE2', server2);
  const state2 = new LocalStateManager('NODE2', 'testDB/store2');
  const node2 = await RaftNode.create('NODE2', server2, state2, 'MEMORY');
  server1.AddServer({ newServer: 'NODE2' });
  // 3
  const server3 = new MemoryServer();
  network.addServer('NODE3', server3);
  const state3 = new LocalStateManager('NODE3', 'testDB/store2');
  const node3 = await RaftNode.create('NODE3', server3, state3, 'MEMORY');
  server1.AddServer({ newServer: 'NODE3' });

  await sleep(300);

  await server1.ClientRequest({
    type: CommandType.STORE_SET,
    data: { key: 'testing', value: 'SHOULD_EQUAL1' },
  });

  await sleep(500);

  const queryResponse = server1.ClientQuery({
    type: QueryType.GET,
    data: { key: 'testing' },
  });
  console.log({ queryResponse });
  // expect(queryResponse.response).toEqual('SHOULD_EQUAL1');

  await server1.ClientRequest({
    type: CommandType.STORE_DEL,
    data: { key: 'testing' },
  });

  await sleep(500);

  const queryResponse2 = server1.ClientQuery({
    type: QueryType.GET,
    data: { key: 'testing' },
  });
  console.log({ queryResponse2 });
  // expect(queryResponse2.response).toEqual('');

  node1.stopListeners();
  node2.stopListeners();
  node3.stopListeners();

  // async function startCluster() {
  //   await cluster.start();
  //   console.log('Cluster started');

  //   // Execute commands on the leader node
  //   const leaderConnection = cluster.connections[0];
  //   // addBlock(leaderConnection, ['Transaction 1', 'Transaction 2'], 'A3');
  //   // transfer(leaderConnection, 'A1', 'A2', 100);

  //   await node1.ClientRequest({
  //     type: CommandType.STORE_SET,
  //     data: { key: "testing", value: "SHOULD_EQUAL1" },
  //   });
  // }

  // function addBlock(connection: PeerConnection, data: any[], proposer: string) {
  //   const command = `HSET block:${blockchain.chain.length} data:${JSON.stringify(data)} proposer:${proposer}`;
  //   const response = connection.requestVote(command, (res) => {
  //     console.log('Add block response:', res);
  //   });
  // }

  // function transfer(
  //   connection: PeerConnection,
  //   from: string,
  //   to: string,
  //   amount: number,
  // ) {
  //   const command = `HSET transfer from:${from} to:${to} amount:${amount}`;
  //   const response = connection.requestVote(command, (res) => {
  //     console.log('Transfer response:', res);
  //   });
  // }

  // // Start the cluster
  // startCluster();
};
main();
