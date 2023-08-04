import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResetModule } from './reset/reset.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rootroot',
      database: 'nest_auth',
      autoLoadEntities: true,
      // entities: [],
      synchronize: true,
    }),
    ResetModule,
    EmailModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
