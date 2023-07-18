import { Controller, Get } from '@nestjs/common';

@Controller('documents')
export class DocumentController {
    @Get()
    findAll(): string {
        return 'Livro de Yuri Melo';
    }
}
