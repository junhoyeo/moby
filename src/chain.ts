import { Block, BlockHeader, IBlock, IBlockHeader } from './block';

export class Chain {
  chain: Block[];

  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock(): Block {
    const genesisHeader: IBlockHeader = {
      version: BlockHeader.getVersion(),
      height: 0,
      time: BlockHeader.getTime(),
      lastHash: null,
    };
    const genesisBlock = new Block(genesisHeader, ['Genesis Block']);
    genesisBlock.hash = Block.createHash(
      genesisBlock as IBlockHeader,
      genesisBlock.merkleRoot,
    );
    return genesisBlock;
  }

  getLatestBlock(): Block {
    return this.chain[this.chain.length - 1];
  }

  addBlock(data: any[]): void {
    const previousBlock = this.getLatestBlock();
    const newHeight = previousBlock.height + 1;
    const newHeader: IBlockHeader = {
      version: BlockHeader.getVersion(),
      height: newHeight,
      time: BlockHeader.getTime(),
      lastHash: previousBlock.hash,
    };
    const newBlock = new Block(newHeader, data);
    this.chain.push(newBlock);
  }

  isChainValid(): boolean {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (
        currentBlock.hash !==
        Block.createHash(currentBlock as IBlockHeader, currentBlock.merkleRoot)
      ) {
        return false;
      }

      if (currentBlock.lastHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }
}
