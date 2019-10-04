import { Module, HttpModule } from '@nestjs/common';
import { BlocksController } from './controllers/blocks.controller';
import { BlocksServiceService } from './services/blocks-service/blocks-service.service';

@Module({
  controllers: [BlocksController],
  imports: [HttpModule],
  providers: [BlocksServiceService]
})
export class BlocksModule {}
