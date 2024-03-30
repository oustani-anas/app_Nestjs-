import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
    imports: [JwtModule],
    providers: [JwtService],
    controllers: [AuthController]
})
export class AuthModule {}
