import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "sqlite",
    database: "database.sqlite",
    entities: ["dist/**/*.entity.js"],
    synchronize: true
  }), UsersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
