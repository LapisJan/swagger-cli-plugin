import { User } from "../entities/user.entity"

export class FindOneUserResDto
{
    id: number
    firstname: string
    lastname: string
    createdAt: Date

    constructor(user: User)
    {
        this.id = parseInt(user.id)
        this.firstname = user.firstname
        this.lastname = user.lastname
        this.createdAt = user.createdAt
    }
}
