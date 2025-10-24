import { Block } from "./class/Block";
import { Blockchain } from "./class/BlockChain";

const blockchain = new Blockchain(5);

blockchain.addBlock({ amount: 100 });
