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
import { PermissionsModule } from './permissions/permissions.module';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './configuration';
import { ExternalContentTypeModule } from './external-content-type/external-content-type.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    }),
    TypeOrmModule.forRoot(
      {
        type: 'postgres',
        host:  process.env.RDS_HOSTNAME || 'localhost',
        port:  parseInt(process.env.RDS_PORT) || 5432,
        username: process.env.RDS_USERNAME || 'postgres',
        password: process.env.RDS_PASSWORD || "123",
        database: "blockData",
        autoLoadEntities: true,
        synchronize: true,
      }
    ), 
    UserModule, DomainsModule, PagesModule, InternalContentModule, ExternalContentModule, ComponentsModule, ComponentTypesModule, PermissionsModule, ExternalContentTypeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
