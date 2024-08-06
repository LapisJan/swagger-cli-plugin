import { User } from "../entities/user.entity"

export class CreateUserResDto
{
    firstname: string
    lastname: string
    createdAt: Date

    constructor(user: User)
    {
        this.firstname = user.firstname
        this.lastname = user.lastname
        this.createdAt = user.createdAt
    }
}
