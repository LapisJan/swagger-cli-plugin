import { Pagination } from "./pagination-req.dto"

export class PaginationResDto<T> extends Pagination{
    data: T
    total: number
}
