import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';

@Module({
    imports: [JwtModule, UserModule],
    providers: [AuthService, UserService],
    controllers: [AuthController]
})
export class AuthModule {}
