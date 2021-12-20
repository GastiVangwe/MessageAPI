import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-mensaje-dto';
import { MessagesService } from './mensajes.service';

@Controller('messages')
export class MessagesController {
    constructor(private messagesServices: MessagesService) {

    }

    @Post()
    create (@Body()  createMessageDto: CreateMessageDto, @Res() response) {
        this.messagesServices.createMessage(createMessageDto).then( message => {
            response.status(HttpStatus.CREATED).json(message);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({message: 'Error creating message'});
        });
    }

    @Get()
    getAll(@Res() response) {
        this.messagesServices.getAll().then( messageList => {
            response.status(HttpStatus.OK).json(messageList);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({message: 'Error obtaining messages'});
        });
    }

    @Put(':id')
    update(@Body() updateMessageDto: CreateMessageDto, @Res() response, @Param('id') messageId) {
        this.messagesServices.updateMessage(messageId, updateMessageDto).then( message => {
            response.status(HttpStatus.OK).json(message);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({message: 'Error editing message'});
        });
    }

    @Delete(':id') 
    delete(@Res() response, @Param('id') messageId) {
        this.messagesServices.deleteMessage(messageId).then( message => {
            response.status(HttpStatus.OK).json(message);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({message: 'Error deleting message'});
        });
    }

}
