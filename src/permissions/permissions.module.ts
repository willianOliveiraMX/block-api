import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { permissions } from './models/permissions.entity';
import { PermissionsController } from './permissions.controller';
import { PermissionsService } from './permissions.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([permissions])
  ],
  controllers: [PermissionsController],
  providers: [PermissionsService],
  exports: [TypeOrmModule]
})
export class PermissionsModule {}
