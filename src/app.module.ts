import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DomainsModule } from './domains/domains.module';
import { PagesModule } from './pages/pages.module';
import { InternalContentModule } from './internal-content/internal-content.module';
import { ExternalContentModule } from './external-content/external-content.module';
import { ComponentsModule } from './components/components.module';
import { ComponentTypesModule } from './component-types/component-types.module';

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
    UserModule, DomainsModule, PagesModule, InternalContentModule, ExternalContentModule, ComponentsModule, ComponentTypesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
