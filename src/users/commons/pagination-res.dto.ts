import { Pagination } from "./pagination-req.dto"

export class PaginationResDto<T> extends Pagination{
    data: T
    total: number
}

// export const ApiPaginationResponse = <TModel extends Type<any>>(model: TModel) => {
//     return applyDecorators(
//         ApiOkResponse({
//             schema: {
//                 title: `DataOf${model.name}`,
//                 allOf: [
//                     { $ref: getSchemaPath(PaginationResDto) },
//                     {
//                         properties: {
//                             data: {
//                                 type: "array",
//                                 items: { $ref: getSchemaPath(model) }
//                             },
//                             totalCount: {
//                                 type: "number"
//                             },
//                             pages: {
//                                 type: "number"
//                             },
//                             recordsPerPage: {
//                                 type: "number"
//                             }
//                         }
//                     }
//                 ]
//             }
//         })
//     )
// }
