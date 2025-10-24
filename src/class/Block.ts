import { createHash } from "crypto"

export class Block {
  public hash: string
  public nonce: number = 0

  constructor(
    public readonly index: number,
    public readonly timestamp: number,
    public readonly data: unknown,
    public readonly previousHash: string
  ) {
    this.hash = this.calculateHash()
  }

  public calculateHash(): string {
    const blockString = JSON.stringify({
      index: this.index,
      timestamp: this.timestamp,
      data: this.data,
      previousHash: this.previousHash,
      nonce: this.nonce
    })
    return createHash("sha256").update(blockString).digest("hex")
  }

  public mineBlock(difficulty: number): void {
    const target = Array(difficulty + 1).join("0"); // '0000' for difficulty = 4
    let hash = this.calculateHash();
    
    while (!hash.startsWith(target)) {
      this.nonce++;
      hash = this.calculateHash();
      console.log("nonce", this.nonce, "hash", hash);
      console.log("-----");
    }
    
    this.hash = hash;
    console.log(`⛏️ Block mined: ${this.hash}`);
  }
}
