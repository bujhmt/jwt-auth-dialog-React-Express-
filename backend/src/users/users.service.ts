import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './model/user.entity';
import { Repository } from 'typeorm';
import {UsersDTO} from "./model/users.dto";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private readonly database: Repository<User>) { }

    public async getAll() {
        return await this.database.find()
    }

    public async create(userDTO: UsersDTO) {
        return await this.database.save(userDTO.toEntity())
    }
}
