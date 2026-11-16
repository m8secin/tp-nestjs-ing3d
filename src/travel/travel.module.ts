import { Module } from '@nestjs/common';
import { TravelsService } from './travel.service';
import { TravelController } from './travel.controller';

@Module({
  controllers: [TravelController],
  providers: [TravelsService],
})
export class TravelModule {}
