import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common"
import { plainToInstance } from "class-transformer"


export class Pagination {
    pages?: number
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

