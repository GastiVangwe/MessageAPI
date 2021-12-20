import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMessageDto } from './dto/create-message-dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {

    constructor(
        @InjectRepository(Message)
        private readonly messageRepository: Repository<Message>,
    ) {}

    async getAll(): Promise<Message[]> {
        return await this.messageRepository.find();
    }

    async createMessage(newMessage: CreateMessageDto): Promise<Message> {
        const currentNewMessage = new Message();
        currentNewMessage.message = newMessage.message;
        currentNewMessage.nick = newMessage.nick;

        return this.messageRepository.save(currentNewMessage);
    }

    async updateMessage(messageId: number, updateMessage: CreateMessageDto): Promise<Message> {
        const currentMessageUpdate = await this.messageRepository.findOne(messageId);
        currentMessageUpdate.message = updateMessage.message;
        currentMessageUpdate.nick = updateMessage.nick;

        return this.messageRepository.save(currentMessageUpdate);
    }

    async deleteMessage(messageId: number): Promise<any> {
        return await this.messageRepository.delete(messageId);
    }
}
