import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { LoggerMiddleware } from './appMiddleware/auth.middleware';
import { JwtModule } from '@nestjs/jwt'
import 'dotenv/config'


@Module({
  imports: [UsersModule, AuthModule, JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '15m' },
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
   configure(consumer: MiddlewareConsumer) {
       consumer.apply(LoggerMiddleware).forRoutes('/auth');
   }
}
