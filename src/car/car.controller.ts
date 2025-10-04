import { Controller, Get } from '@nestjs/common';
import { CarService } from './car.service';
import { CarEntity } from './car.entity';

@Controller('cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get()
  async findAll(): Promise<CarEntity[]> {
    return await this.carService.findAll();
  }
}
