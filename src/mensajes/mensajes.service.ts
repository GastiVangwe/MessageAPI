import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMessageDto } from './dto/create-mensaje-dto';
import { Message } from './entities/mensaje.entity';

@Injectable()
export class MessagesService {

    constructor(
        @InjectRepository(Message)
        private readonly messageRepository: Repository<Message>,
    ) {}

    async getAll() {
        return await this.messageRepository.find();
    }

    async createMessage(newMessage: CreateMessageDto) {
        const currentNewMessage = new Message();
        currentNewMessage.message = newMessage.message;
        currentNewMessage.nick = newMessage.nick;

        this.messageRepository.save(currentNewMessage);
    }

    async updateMessage(messageId: number, updateMessage: CreateMessageDto) {
        const currentMessageUpdate = await this.messageRepository.findOne(messageId);
        currentMessageUpdate.message = updateMessage.message;
        currentMessageUpdate.nick = updateMessage.nick;

        return this.messageRepository.save(currentMessageUpdate);
    }

    async deleteMessage(messageId: number) {
        return await this.messageRepository.delete(messageId);
    }
}
