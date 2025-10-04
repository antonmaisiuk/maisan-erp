import { Injectable } from '@nestjs/common';

@Injectable()
export class CarService {
  findAll(): string[] {
    return ['Mazda 626 GE', 'Opel Vectra B', 'Scenic'];
  }
}
