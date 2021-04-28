import { Module } from '@nestjs/common';
import { PagesController } from './controller/pages.controller';
import { PagesService } from './service/pages.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pages } from './models/pages.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([pages])
  ],
  controllers: [PagesController],
  providers: [PagesService],
  exports: [TypeOrmModule]
})
export class PagesModule {}
