
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [AuthModule, JwtModule.register({
    global: true,
    secret: 'dontTellAnyone',
    signOptions: { expiresIn: '1d' },
  })],
  controllers: [AuthController],
  providers: [],
})
export class AppModule {}