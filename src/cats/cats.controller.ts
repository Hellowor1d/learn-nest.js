import { Body, Controller, Get, Post, Req, Query, Param } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto'
@Controller('cats')
export class CatsController {

    // @Put(), @Delete(), @Patch(), @Options(), @Head(), and @All()

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        return 'This action adds a new cat';
    }

    // @Get() 装饰器，把路由接收到的特定请求(GET : '/cats')指向此处理器
    @Get('ab*cd')
    // @HttpCode(206)
    findAll(@Query() query) {
        console.log(query)
        //返回字符串时，不会自动序列化为 json
        return 'This is come from nest cats controller'

        //返回对象或者数组，会被自动序列化为 json
        // return {
        //     a: 1,
        //     b: [ 1, 2, 3 ]
        // }
    }

    @Get(':id')
    findOne(@Param('id') id) {
        return `This action returns a #${id} cat`;
    }
}
