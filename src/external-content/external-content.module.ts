import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExternalContentController } from './external-content.controller';
import { ExternalContentService } from './external-content.service';
import { externalContentEntity } from './models/external-content.entity';

@Module({
  imports: [
        TypeOrmModule.forFeature([externalContentEntity]),
        HttpModule.register({
          timeout: 5000,
          maxRedirects: 5,
        })
  ],
  controllers: [ExternalContentController],
  providers: [ExternalContentService],
  exports: [TypeOrmModule]
})
export class ExternalContentModule {}
