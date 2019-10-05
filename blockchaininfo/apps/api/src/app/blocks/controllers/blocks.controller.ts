import { Controller, Get, Param } from '@nestjs/common';
import { BlocksServiceService } from '../services/blocks-service/blocks-service.service';

@Controller('blocks')
export class BlocksController {
  constructor(private readonly blockService: BlocksServiceService) {}

  @Get()
  async getLatestBlocks() {
    const blocks = await this.blockService.getLatestBlocks().toPromise();
    return blocks;
  }

  @Get(':hash')
  async getBlockDetails(@Param('hash') hash: string) {
    const details = await this.blockService.getBlockDetails(hash).toPromise();
    return details;
  }
}
