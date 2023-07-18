import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './domain/users/users.module';
import { dataSourceOptions } from './infrastructure/database/data-source';
import { DocumentModule } from './domain/books/document.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(dataSourceOptions),
        UsersModule,
        DocumentModule,
    ],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}
