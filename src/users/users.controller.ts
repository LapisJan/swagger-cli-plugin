import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Injectable } from '@nestjs/common'
import { ApiOkResponse, ApiTags } from "@nestjs/swagger"
import { PaginationTransformPipe } from "./commons/pagination-req.dto"
import { PaginationResDto } from "./commons/pagination-res.dto"
import { CreateUserResDto } from "./dto/create-user-res.dto"
import { FindAllUserReqDto } from "./dto/find-all-user-req.dto"
import { FindOneUserResDto } from "./dto/find-one-user-res.dto"
import { RemoveUserDto } from "./dto/remove-user-res.dto"
import { UpdateUserResDto } from "./dto/update-user-res.dto"
import { UsersService } from './users.service';
import { CreateUserReqDto } from './dto/create-user-req.dto';
import { UpdateUserReqDto } from './dto/update-user-req.dto';

@ApiTags('users')
@Injectable()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserReqDto): CreateUserResDto {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(@Query(new PaginationTransformPipe()) findAllUserReqDto: FindAllUserReqDto): PaginationResDto<CreateUserResDto[]> {
    return this.usersService.findAll(findAllUserReqDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string): FindOneUserResDto {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserReqDto): UpdateUserResDto {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): RemoveUserDto {
    return this.usersService.remove(+id);
  }
}
