import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarModule } from './car/car.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config), CarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
