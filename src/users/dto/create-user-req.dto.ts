import { ApiProperty } from "@nestjs/swagger"

export class CreateUserReqDto
{
    // @ApiProperty()
    firstname: string

    // @ApiProperty({ required: true, type: 'string' })
    lastname: string
}
