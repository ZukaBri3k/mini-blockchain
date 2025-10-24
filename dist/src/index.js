"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BlockChain_1 = require("./class/BlockChain");
console.log("Create blockchain");
const blockchain = new BlockChain_1.Blockchain();
console.log("Add block");
blockchain.addBlock({ amount: 100 });
blockchain.addBlock({ amount: 200 });
//# sourceMappingURL=index.js.map