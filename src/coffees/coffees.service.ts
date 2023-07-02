import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entites/coffees';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Black and white',
      brand: 'Buddy brew',
      flavors: ['sans sucre', 'au lait', 'a la menth'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: number) {
    const coffee = this.coffees.find((coffee) => coffee.id === id);
    if (!coffee) {
      throw new NotFoundException(`Le café #${id} est introuvable`);
    }
    return coffee;
  }

  create(createCoffeeDTO: any) {
    this.coffees.push(createCoffeeDTO);
    return createCoffeeDTO;
  }

  update(id: number, updateCoffeeDTO: UpdateCoffeeDto) {
    const coffee = this.findOne(id);
    if (!coffee) {
      throw new NotFoundException(
        `Impossible de mettre a jour le café #${id}, car il est introuvable`,
      );
    }
    this.coffees = this.coffees.map((coffee) => {
      if (coffee.id === +id) {
        return { ...coffee, ...updateCoffeeDTO };
      } else return coffee;
    });
    return this.findOne(id);
  }

  delete(id: string) {
    const isExist = this.coffees.findIndex((coffee) => coffee.id === +id);
    console.log(isExist);
    if (isExist === -1) {
      throw new NotFoundException(
        `Impossible de Supprimer le café #${id}, car il est introuvable`,
      );
    }
    this.coffees.splice(isExist, 1);
  }
}
