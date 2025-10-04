import { Injectable } from '@nestjs/common';
import { CarEntity } from './car.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(CarEntity)
    private readonly carRepository: Repository<CarEntity>,
  ) {}

  async findAll(): Promise<CarEntity[]> {
    return await this.carRepository.find();
  }
}
