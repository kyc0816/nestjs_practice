import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getBye(): string {
    return 'Bye World!';
  }

  findAll(): string[] {
    return ['cat1', 'cat2'];
  }
}

@Injectable()
export class CatsService {
  findAll(): string[] {
    return ['cat1', 'cat2'];
  }
}

@Injectable()
export class FaultCatsAllService {
  faultFindAll(): string {
    return 'invalid routing!!';
  }
}
