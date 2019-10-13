import { Controller, Get, Param } from '@nestjs/common';
import { BlocksServiceService } from '../services/blocks-service/blocks-service.service';
import {
  Block,
  BlockDetails,
  BlockDetailsResults
} from '@blockchaininfo/api-interfaces';

@Controller('blocks')
export class BlocksController {
  constructor(private readonly blockService: BlocksServiceService) {}

  @Get()
  async getLatestBlocks(): Promise<Block[]> {
    const blocks = await this.blockService.getLatestBlocks().toPromise();
    return blocks;
  }

  @Get(':hash')
  async getBlockDetails(
    @Param('hash') hash: string
  ): Promise<BlockDetailsResults> {
    const details = await this.blockService.getBlockDetails(hash).toPromise();
    return { details: details };
  }
}
