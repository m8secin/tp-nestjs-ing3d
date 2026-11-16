import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TravelModule } from './travel/travel.module';
import {ConfigService} from "@nestjs/config";

@Module({
  imports: [TravelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
