import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Coffee } from "./coffees.entity";

@Entity()
export class Flavor {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @ManyToMany((type) => Coffee, (coffees) => coffees.flavors)
  coffees: Coffee[];
}
