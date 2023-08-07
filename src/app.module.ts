import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResetModule } from './reset/reset.module';
import { EmailModule } from './email/email.module';
import { MailerModule } from '@nestjs-modules/mailer';
// import { SendGridModule } from '@ntegral/nestjs-sendgrid';

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
    // SendGridModule.forRoot({
    //   apiKey: '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',
    // }),

    // MailerModule.forRoot({
    //   transport: {
    //     host: 'smtp.sendgrid.net',
    //     port: 587,
    //     auth: {
    //       user: 'apikey',
    //       pass: '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',
    //     },
    //   },
    // }),
    ResetModule,
    EmailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
