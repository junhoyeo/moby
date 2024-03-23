import { MemoryNetwork } from '@moby/raft/dist/adapters/network/memory';
import { ClientQueryResponse } from '@moby/raft/dist/dtos';
import { CommandType, QueryType } from '@moby/raft/dist/interfaces';
import { sleep } from '@moby/raft/dist/utils';

import { Chain as Blockchain } from './chain';
import { Node } from './node';

const main = async () => {
  const blockchain = new Blockchain();
  const network = MemoryNetwork.getTestNetwork();
  // 1
  const node1 = new Node('node1');
  await node1.initialize(network);
  await sleep(300);
  // 2
  const node2 = new Node('node2');
  await node2.initialize(network);
  node1.raftServer.AddServer({ newServer: node2.nodeId });
  await sleep(300);
  // 3
  const node3 = new Node('node3');
  await node3.initialize(network);
  node1.raftServer.AddServer({ newServer: node3.nodeId });
  await sleep(300);

  let block = blockchain.createGenesisBlock();
  let queryResponse: ClientQueryResponse;

  for (let i = 0; i < 10; i++) {
    if (i > 0) {
      block = blockchain.addBlock([]);
    }

    // create block
    await node1.raftServer.ClientRequest({
      type: CommandType.STORE_SET,
      data: { key: block.height.toString(), value: JSON.stringify(block) },
    });

    await sleep(500);

    // query block
    queryResponse = node1.raftServer.ClientQuery({
      type: QueryType.GET,
      data: { key: block.height.toString() },
    });
    console.log({ queryResponse });
  }

  node1.stop();
  await sleep(1000);

  block = blockchain.addBlock([]);
  console.log('[*] New block', block);
  let r = await node1.raftServer.ClientRequest({
    type: CommandType.STORE_SET,
    data: { key: block.height.toString(), value: JSON.stringify(block) },
  });
  console.log(r);

  r = await node2.raftServer.ClientRequest({
    type: CommandType.STORE_SET,
    data: { key: block.height.toString(), value: JSON.stringify(block) },
  });
  console.log(r);

  r = await node3.raftServer.ClientRequest({
    type: CommandType.STORE_SET,
    data: { key: block.height.toString(), value: JSON.stringify(block) },
  });
  console.log(r);

  node1.stop();
  await sleep(500);

  queryResponse = node1.raftServer.ClientQuery({
    type: QueryType.GET,
    data: { key: block.height.toString() },
  });
  console.log({ queryResponse });
  queryResponse = node2.raftServer.ClientQuery({
    type: QueryType.GET,
    data: { key: block.height.toString() },
  });
  console.log({ queryResponse });
  queryResponse = node3.raftServer.ClientQuery({
    type: QueryType.GET,
    data: { key: block.height.toString() },
  });
  console.log({ queryResponse });

  node2.stop();
  node3.stop();

  process.exit(1);
};
main();
