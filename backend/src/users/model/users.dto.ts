import { IsString, IsEmail, MaxLength, MinLength, IsNumber } from 'class-validator'
import { User } from './user.entity'

export class UsersDTO {
    @IsNumber()
    id: number

    @IsEmail()
    email: string

    @IsString()
    @MaxLength(50)
    @MinLength(6)
    password: string

    public static from(dto: Partial<UsersDTO>) {
        const entity = new UsersDTO()
        entity.id = dto.id
        entity.email = dto.email
        entity.password = dto.password
        return entity
    }

    public static fromEntity(entity: User) {
        return this.from({
            id: entity.id,
            email: entity.email,
            password: entity.password,
        })
    }

    public toEntity() {
        const entity = new User()
        entity.id = this.id
        entity.email = this.email
        entity.password = this.password
        entity.createDateTime = new Date()
        return entity
    }
}
