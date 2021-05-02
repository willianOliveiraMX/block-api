import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InternalContentController } from './internal-content.controller';
import { InternalContentService } from './internal-content.service';
import { internalContentEntity } from './models/internal-content.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([internalContentEntity])
  ],
  controllers: [InternalContentController],
  providers: [InternalContentService],
  exports: [TypeOrmModule]

})
export class InternalContentModule {}
