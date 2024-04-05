
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserModule } from './user/user.module';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [AuthModule, JwtModule.register({
    global: true,
    secret: 'dontTellAnyone',
    signOptions: { expiresIn: '1d' },
  }), UserModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}