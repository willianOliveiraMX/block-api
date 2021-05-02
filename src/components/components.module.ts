import { Module } from '@nestjs/common';
import { ComponentsService } from './components.service';
import { ComponentsController } from './components.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { componentEntity } from './models/components.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([componentEntity])
  ],
  providers: [ComponentsService],
  controllers: [ComponentsController],
  exports: [TypeOrmModule]
})
export class ComponentsModule {}
