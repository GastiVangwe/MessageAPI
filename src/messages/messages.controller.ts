import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message-dto';

@Controller('messages')
export class MessagesController {
    @Post()
    create (@Body()  createMessageDto: CreateMessageDto) {
        return 'message created';
    }

    @Get()
    getAll() {
        return 'list of messages';
    }

    @Put(':id')
    update(@Body() updateMessageDto: CreateMessageDto) {
        return 'message updated';
    }

    @Delete(':id') 
    delete() {
        return 'mensaje deleted';
    }

}
