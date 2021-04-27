import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DomainsController } from './controller/domains.controller';
import { DomainsService } from './service/domains.service';
import { domains } from './models/domains.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([domains])
  ],
  controllers: [DomainsController],
  providers: [DomainsService],
  exports: [TypeOrmModule]
})
export class DomainsModule {}
