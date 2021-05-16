import { Module } from '@nestjs/common';
import { ExternalContentTypeService } from './external-content-type.service';
import { ExternalContentTypeController } from './external-content-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { externalContentTypeEntity } from './models/external_content_type.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([externalContentTypeEntity])
  ],
  providers: [ExternalContentTypeService],
  controllers: [ExternalContentTypeController]
})
export class ExternalContentTypeModule {}
