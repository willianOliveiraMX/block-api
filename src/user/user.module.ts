import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { users } from './models/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([users])
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [TypeOrmModule]
})
export class UserModule {}
