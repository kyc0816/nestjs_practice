import { Controller, Get } from '@nestjs/common';
import { AppService, CatsService, FaultCatsAllService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/bye')
  getBye(): string {
    return this.appService.getBye();
  }
}

@Controller('/cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll(): string[] {
    return this.catsService.findAll();
  }
  @Get('/all/0')
  correctAll(): string[] {
    return this.catsService.findAll();
  }
}

@Controller('/cats/all/1')
export class FaultCatsAllController {
  constructor(private readonly faultCatsAllService: FaultCatsAllService) {}

  @Get()
  findAll(): string {
    return this.faultCatsAllService.faultFindAll();
  }
}
