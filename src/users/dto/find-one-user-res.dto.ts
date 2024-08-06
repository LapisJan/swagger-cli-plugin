import { ApiProperty } from "@nestjs/swagger"
import { User } from "../entities/user.entity"

export class FindOneUserResDto
{
    @ApiProperty({ required: true, type: Number })
    id: number

    @ApiProperty({ required: true, type: String })
    firstname: string

    @ApiProperty({ required: true, type: String })
    lastname: string

    @ApiProperty({ required: true, type: Date })
    createdAt: Date

    constructor(user: User)
    {
        this.id = parseInt(user.id)
        this.firstname = user.firstname
        this.lastname = user.lastname
        this.createdAt = user.createdAt
    }
}
