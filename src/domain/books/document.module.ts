import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentController } from './document.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Document])],
    controllers: [DocumentController],
})
export class DocumentModule {}
