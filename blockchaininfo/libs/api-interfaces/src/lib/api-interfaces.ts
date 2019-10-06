export interface Message {
  message: string;
}

export interface GetBlocksResults {
  blocks: Block[];
}

export interface BlockDetailsResults {
  details: BlockDetails;
}

export interface BlockDetails {
  hash: string;
  size: number;
  block_index: number;
  prev_block: string;
  tx: TransactionsList[];
}

export interface TransactionsList {
  out: BlockOutput[];
  inputs: BlockInput[];
}

export interface BlockOutput {
  addr: string;
  value: number;
}

export interface BlockInput {
  prev: PreviousBlockData;
}

export interface PreviousBlockData {
  addr: string;
}

export interface Block {
  hash: string;
  time: string;
  height: string;
}
