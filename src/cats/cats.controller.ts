import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(){
        return 'This is come from nest cats controller return'
    }
}
