import SHA256 from 'crypto-js/sha256';
import merkle from 'merkle';

export interface IBlockHeader {
  version: string;
  height: number;
  time: number;
  lastHash: string | null;
}

export class BlockHeader implements IBlockHeader {
  version: string;
  height: number;
  time: number;
  lastHash: string | null;

  constructor(_height: number, _previousHash?: string) {
    this.version = BlockHeader.getVersion();
    this.height = _height;
    this.time = BlockHeader.getTime();
    this.lastHash = _previousHash || null;
  }

  static getVersion(): string {
    return '1.0.0';
  }

  static getTime(): number {
    return new Date().getTime();
  }
}

export interface IBlock {
  version: string;
  height: number;
  time: number;
  hash: string;
  lastHash: string | null;
  merkleRoot: string;
  data: any[];
}

export class Block implements IBlock {
  version: string;
  height: number;
  time: number;
  hash: string;
  lastHash: string | null;
  merkleRoot: string;
  data: any[];

  constructor(_header: IBlockHeader, _data: any[]) {
    const merkleroot = Block.getMerkleRoot(_data);
    this.version = _header.version;
    this.height = _header.height;
    this.time = _header.time;
    this.lastHash = _header.lastHash;
    this.hash = Block.createHash(_header, merkleroot);
    this.merkleRoot = Block.getMerkleRoot(_data);
    this.data = _data;
  }

  static getMerkleRoot(_data: any[]): string {
    const merkleTree = merkle('sha256').sync(_data);
    const merkleRoot = merkleTree.root();
    return merkleRoot;
  }

  static createHash(header: IBlockHeader, merkleRoot?: string): string {
    const data = JSON.stringify({ ...header, merkleRoot });
    return SHA256(data).toString();
  }
}
