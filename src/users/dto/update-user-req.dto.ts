import { ApiProperty } from "@nestjs/swagger"

export class UpdateUserReqDto {
    @ApiProperty({ required: true, type: 'string' })
    firstname: string

    @ApiProperty({ required: true, type: 'string' })
    lastname: string
}
