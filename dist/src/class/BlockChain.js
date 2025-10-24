"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blockchain = void 0;
const Block_1 = require("./Block");
class Blockchain {
    constructor(difficulty = 2) {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = difficulty;
    }
    createGenesisBlock() {
        return new Block_1.Block(0, Date.now(), "Genesis Block", "0");
    }
    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }
    addBlock(newData) {
        const latestBlock = this.getLatestBlock();
        const newBlock = new Block_1.Block(latestBlock.index + 1, Date.now(), newData, latestBlock.hash);
        console.log("Mining block...");
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
    }
    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const curr = this.chain[i];
            const prev = this.chain[i - 1];
            if (curr.hash !== curr.calculateHash())
                return false;
            if (curr.previousHash !== prev.hash)
                return false;
        }
        return true;
    }
}
exports.Blockchain = Blockchain;
//# sourceMappingURL=BlockChain.js.map