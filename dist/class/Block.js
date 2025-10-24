"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Block = void 0;
const crypto_1 = require("crypto");
class Block {
    constructor(index, timestamp, data, previousHash) {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.nonce = 0;
        this.hash = this.calculateHash();
    }
    calculateHash() {
        const blockString = JSON.stringify({
            index: this.index,
            timestamp: this.timestamp,
            data: this.data,
            previousHash: this.previousHash,
            nonce: this.nonce
        });
        return (0, crypto_1.createHash)("sha256").update(blockString).digest("hex");
    }
    mineBlock(difficulty) {
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
exports.Block = Block;
//# sourceMappingURL=Block.js.map