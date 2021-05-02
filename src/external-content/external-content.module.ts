import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExternalContentController } from './external-content.controller';
import { ExternalContentService } from './external-content.service';
import { externalContentEntity } from './models/external-content.entity';

@Module({
  imports: [
        TypeOrmModule.forFeature([externalContentEntity])
  ],
  controllers: [ExternalContentController],
  providers: [ExternalContentService],
  exports: [TypeOrmModule]
})
export class ExternalContentModule {}
