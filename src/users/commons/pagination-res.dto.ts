import { applyDecorators, Type } from "@nestjs/common"
import { ApiOkResponse, ApiProperty, getSchemaPath } from "@nestjs/swagger"
import { Pagination } from "./pagination-req.dto"

export class PaginationResDto<T> extends Pagination{
    // @ApiProperty()
    data: T

    // @ApiProperty({ required: true, type: Number })
    total: number
}
