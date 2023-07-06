import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Query,
  Param,
  Body,
} from "@nestjs/common";
import { CoffeesService } from "./coffees.service";
import { CreateCoffeeDto } from "./dto/create-coffee.dto";
import { UpdateCoffeeDto } from "./dto/update-coffee.dto";
import { PaginationQueryDto } from "src/common/dto/pagination-query.dto";

@Controller("coffees")
export class CoffeesController {
  constructor(private readonly coffeeServices: CoffeesService) {}
  @Get()
  findAll(@Query() paginationQueryDto: PaginationQueryDto) {
    return this.coffeeServices.findAll(paginationQueryDto);
  }

  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.coffeeServices.findOne(id);
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeeServices.create(createCoffeeDto);
  }

  @Patch(":id")
  update(@Param("id") id: number, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeeServices.update(id, updateCoffeeDto);
  }

  @Delete(":id")
  delete(@Param("id") id: number) {
    return this.coffeeServices.delete(id);
  }
}
