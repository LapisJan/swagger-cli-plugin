import { ApiProperty } from "@nestjs/swagger"
import { User } from "../entities/user.entity"

export class UpdateUserResDto {
    @ApiProperty()
    firstname: string

    @ApiProperty({ required: true, type: 'string' })
    lastname: string

    @ApiProperty({ required: true, type: Date })
    createdAt: Date

    constructor(user: User)
    {
        this.firstname = user.firstname
        this.lastname = user.lastname
        this.createdAt = user.createdAt
    }
}
