import { MemoryNetwork, MemoryServer } from '@/adapters/network/memory';
import { LocalStateManager } from '@/adapters/state';
import { MemoryCluster } from '@/clusters/memory.cluster';
import { RaftNode } from '@/core';
import { ClientQueryResponse } from '@/dtos';
import { CommandType, QueryType } from '@/interfaces';
import { sleep } from '@/utils';

import { Chain as Blockchain } from './chain';

const NODES_NUMBER = 3;

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

  let block = blockchain.createGenesisBlock();
  let queryResponse: ClientQueryResponse;

  for (let i = 0; i < 10; i++) {
    if (i > 0) {
      block = blockchain.addBlock([]);
    }

    // create block
    await server1.ClientRequest({
      type: CommandType.STORE_SET,
      data: { key: block.height.toString(), value: JSON.stringify(block) },
    });

    await sleep(500);

    // query block
    queryResponse = server1.ClientQuery({
      type: QueryType.GET,
      data: { key: block.height.toString() },
    });
    console.log({ queryResponse });
  }

  node1.stopListeners();

  // node1.stopListeners();
  server1.RemoveServer({ oldServer: 'NODE1' });
  network.removeServerFromNode('NODE1', { oldServer: 'NODE1' });
  await sleep(1000);

  block = blockchain.addBlock([]);
  let r = await server1.ClientRequest({
    type: CommandType.STORE_SET,
    data: { key: block.height.toString(), value: JSON.stringify(block) },
  });
  console.log(r);

  r = await server2.ClientRequest({
    type: CommandType.STORE_SET,
    data: { key: block.height.toString(), value: JSON.stringify(block) },
  });
  console.log(r);

  r = await server3.ClientRequest({
    type: CommandType.STORE_SET,
    data: { key: block.height.toString(), value: JSON.stringify(block) },
  });
  console.log(r);

  server1.RemoveServer({ oldServer: 'NODE1' });
  network.removeServerFromNode('NODE1', { oldServer: 'NODE1' });
  await sleep(500);

  queryResponse = server1.ClientQuery({
    type: QueryType.GET,
    data: { key: block.height.toString() },
  });
  console.log({ queryResponse });
  queryResponse = server2.ClientQuery({
    type: QueryType.GET,
    data: { key: block.height.toString() },
  });
  console.log({ queryResponse });
  queryResponse = server3.ClientQuery({
    type: QueryType.GET,
    data: { key: block.height.toString() },
  });
  console.log({ queryResponse });

  queryResponse = server1.ClientQuery({
    type: QueryType.GET,
    data: { key: block.height.toString() },
  });
  console.log({ queryResponse });

  node2.stopListeners();
  node3.stopListeners();

  process.exit(1);
};
main();
