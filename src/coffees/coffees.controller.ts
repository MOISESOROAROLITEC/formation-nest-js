import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Query,
  Param,
  Body,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeServices: CoffeesService) {}
  @Get()
  findAll(@Query() pagination) {
    const { limit, offset } = pagination;
    return this.coffeeServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeeServices.findOne(id);
  }

  @Post()
  create(@Body() body) {
    return this.coffeeServices.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.coffeeServices.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.coffeeServices.delete(id);
  }
}
