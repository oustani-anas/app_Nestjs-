import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';

@Module({
    imports: [JwtModule, UserModule],
    providers: [AuthService],
    controllers: [AuthController]
})
export class AuthModule {}
