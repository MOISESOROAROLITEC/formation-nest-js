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
import { Public } from "src/common/decorators/public.decorators";
import { ParseIntPipe } from "src/common/pipes/parse-int/parse-int.pipe";
import { Protocol } from "src/common/decorators/protocole.decorator";

@Controller("coffees")
export class CoffeesController {
  constructor(private readonly coffeeServices: CoffeesService) {}

  @Public()
  @Get()
  findAll(@Query() paginationQueryDto: PaginationQueryDto) {
    return this.coffeeServices.findAll(paginationQueryDto);
  }

  @Public()
  @Get(":id")
  findOne(@Protocol() protocol: string, @Param("id", ParseIntPipe) id: number) {
    return this.coffeeServices.findOne(id);
  }

  @Public()
  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeeServices.create(createCoffeeDto);
  }

  @Public()
  @Patch(":id")
  update(@Param("id") id: number, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeeServices.update(id, updateCoffeeDto);
  }

  @Delete(":id")
  delete(@Param("id") id: number) {
    return this.coffeeServices.delete(id);
  }
}
