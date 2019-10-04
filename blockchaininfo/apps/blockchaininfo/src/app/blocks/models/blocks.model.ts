export interface GetBlocksResults {
  blocks: Block[];
}

export interface BlockDetailsRequest {
  details: BlockDetails;
}

export interface BlockDetails {
  details: BlockDetails;
  size: string;
  blockIndex: number;
  previousHash: string;
  transactionList: TransactionsList;
}

export interface Block {
  hash: string;
  time: string;
  height: string;
}

export interface TransactionsList {
  input: string;
  output: string;
  walletAddress: string;
  outputTotal: string; // in BTC
}
