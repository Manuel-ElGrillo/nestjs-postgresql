import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedModule } from './feed/feed.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRESQL_SQL_HOST,
      port: 5100,
      username: process.env.POSTGRESQL_SQL_USER,
      password: process.env.POSTGRESQL_SQL_PASSWORD,
      database: process.env.POSTGRESQL_SQL_DB,
      autoLoadEntities: true,
      synchronize: true,
    }),
    FeedModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
