import { Controller, Get, Post, Req } from '@nestjs/common';

@Controller('cats')
export class CatsController {

    // @Put(), @Delete(), @Patch(), @Options(), @Head(), and @All()

    @Post()
    create(){
        return `This action add a new cat`
    }

    // @Get() 装饰器，把路由接收到的特定请求(GET : '/cats')指向此处理器
    @Get()
    // @HttpCode(206)
    findAll(@Req() req){
            console.log(req)
        //返回字符串时，不会自动序列化为 json
        return 'This is come from nest cats controller'

        //返回对象或者数组，会被自动序列化为 json
        // return {
        //     a: 1,
        //     b: [ 1, 2, 3 ]
        // }
    }
}
