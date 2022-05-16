import { Module } from '@nestjs/common';
import {
  AppController,
  CatsController,
  FaultCatsAllController,
} from './app.controller';
import { AppService, CatsService, FaultCatsAllService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController, FaultCatsAllController],
  providers: [AppService, CatsService, FaultCatsAllService],
})
export class AppModule {}
