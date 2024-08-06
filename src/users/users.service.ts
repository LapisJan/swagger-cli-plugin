import { Injectable } from '@nestjs/common';
import * as fs from "fs"
import { PaginationResDto } from "./commons/pagination-res.dto"
import { CreateUserReqDto } from './dto/create-user-req.dto';
import { CreateUserResDto } from "./dto/create-user-res.dto"
import { FindAllUserReqDto } from "./dto/find-all-user-req.dto"
import { FindOneUserResDto } from "./dto/find-one-user-res.dto"
import { RemoveUserDto } from "./dto/remove-user-res.dto"
import { UpdateUserReqDto } from './dto/update-user-req.dto';
import { UpdateUserResDto } from "./dto/update-user-res.dto"
import { User } from "./entities/user.entity"

@Injectable()
export class UsersService {
  private data: User[] = [];

  constructor()
  {
    const userData = fs.readFileSync('src/datas/users.json', 'utf8');
    this.data = JSON.parse(userData) as User[];
  }

  create(createUserReqDto: CreateUserReqDto): CreateUserResDto {
    const currentId = this.data.length + 1
    const user = new User()
    user.id = currentId.toString()
    user.firstname = `${createUserReqDto.firstname} ${currentId}`
    user.lastname = `${createUserReqDto.firstname} ${currentId}`
    user.createdAt = new Date()

    this.data.push(user)

    return new CreateUserResDto(user)
  }

  findAll(findAllUserReqDto: FindAllUserReqDto) : PaginationResDto<CreateUserResDto[]> {
    const total = this.data.length
    const startIndex = (findAllUserReqDto.pages - 1) * findAllUserReqDto.recordsPerPage;
    const endIndex = startIndex + findAllUserReqDto.recordsPerPage;
    const users = this.data.slice(startIndex, endIndex)

    return {
      data: users.map(user => new CreateUserResDto(user)),
      total: total,
      pages: findAllUserReqDto.pages,
      recordsPerPage: findAllUserReqDto.recordsPerPage
    }
  }

  findOne(id: number): FindOneUserResDto {
    const user = this.data.find(user => parseInt(user.id) == id)

    return new FindOneUserResDto(user)
  }

  update(id: number, updateUserReqDto: UpdateUserReqDto): UpdateUserResDto {
    const user = this.data.find(user => parseInt(user.id) == id)
    user.firstname = `${updateUserReqDto.firstname} ${id}`
    user.lastname = `${updateUserReqDto.lastname} ${id}`

    return new UpdateUserResDto(user)
  }

  remove(id: number): RemoveUserDto {
    this.data = this.data.filter(user => parseInt(user.id) != id)

    return { isSuccess: true }
  }
}
