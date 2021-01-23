import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersDTO } from './model/users.dto'

@Controller('users')
export class UsersController {
    constructor(private service: UsersService) {}

    @Get()
    public async getAll() {
        return await this.service.getAll()
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    public async createUser(@Body() createUserDto: UsersDTO) {
        return this.service.create(UsersDTO.from(createUserDto))
    }
}
