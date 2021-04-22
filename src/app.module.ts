import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DomainsModule } from './domains/domains.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: "123",
        database: "blockData",
        autoLoadEntities: true,
        synchronize: true,
      }
    ), 
    UserModule, DomainsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
