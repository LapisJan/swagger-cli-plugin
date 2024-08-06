import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common"
import { ApiProperty } from "@nestjs/swagger"
import { plainToInstance } from "class-transformer"


export class Pagination {
    // @ApiProperty({ required: true, type: Number })
    pages?: number

    // @ApiProperty({ required: true, type: Number })
    recordsPerPage?: number

    constructor()
    {
        this.pages = 1
        this.recordsPerPage = 10
    }
}

@Injectable()
export class PaginationTransformPipe implements PipeTransform {
    async transform(dto: Pagination, { metatype }: ArgumentMetadata) {
        if (!metatype) {
            return dto;
        }

        return plainToInstance(metatype, dto);
    }
}

