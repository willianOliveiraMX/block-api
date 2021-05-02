import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { componentTypesEntity } from './models/componentTypes.entity';
import { ComponentTypesController } from './component-types.controller';
import { ComponentTypesService } from './component-types.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([componentTypesEntity])
  ],
  controllers: [ComponentTypesController],
  providers: [ComponentTypesService],
  exports: [TypeOrmModule]
})
export class ComponentTypesModule {}
