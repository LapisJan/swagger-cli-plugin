import { ApiProperty } from "@nestjs/swagger"

export class RemoveUserDto
{
    @ApiProperty({ required: true, type: Boolean })
    isSuccess: boolean
}
