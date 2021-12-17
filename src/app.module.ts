import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Message } from './mensajes/entities/mensaje.entity';
import { MessagesController } from './mensajes/mensajes.controller';
import { MessagesService } from './mensajes/mensajes.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nest',
      password: 'app',
      database: 'sendmeapp_db',
      entities: [__dirname + '/**/*.entity(.ts, .js)'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Message])
  ],
  controllers: [AppController, MessagesController],
  providers: [AppService, MessagesService],
})
export class AppModule {}
