import { Block } from "./Block";


export class Blockchain {
  chain: Block[];
  difficulty: number;

  constructor(difficulty = 2) {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = difficulty;
  }

  createGenesisBlock(): Block {
    return new Block(0, Date.now(), "Genesis Block", "0");
  }

  getLatestBlock(): Block {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newData: any): void {
    const latestBlock = this.getLatestBlock();
    const newBlock = new Block(latestBlock.index + 1, Date.now(), newData, latestBlock.hash);

    newBlock.mineBlock(this.difficulty);
    this.chain.push(newBlock);
  }

  isChainValid(): boolean {
    for (let i = 1; i < this.chain.length; i++) {
      const curr = this.chain[i];
      const prev = this.chain[i - 1];

      if (curr.hash !== curr.calculateHash()) return false;
      if (curr.previousHash !== prev.hash) return false;
    }
    return true;
  }
}