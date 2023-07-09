import { Injectable, Module } from "@nestjs/common";
import { CoffeesService } from "./coffees.service";
import { CoffeesController } from "./coffees.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Coffee } from "./entities/coffees.entity";
import { Flavor } from "./entities/flavor.entity";
import { COFFEE_BRAND } from "./constantes/coffee-constantes";
import { Event } from "src/events/entities/event.entity";
import { ConfigModule, ConfigService } from "@nestjs/config";
import coffeeConfig from "./config/coffee.config";

@Injectable()
class CoffeeBrandFactory {
  coffeeBrand = ["caffé au lait", "sans sucre", "thé au citron"];
  create(brand: string) {
    this.coffeeBrand.push(brand);
    return this.coffeeBrand;
  }
}

@Module({
  imports: [
    TypeOrmModule.forFeature([Coffee, Flavor, Event]),
    ConfigModule.forFeature(coffeeConfig),
  ],
  controllers: [CoffeesController],
  providers: [
    ConfigService,
    CoffeesService,
    CoffeeBrandFactory,
    {
      provide: COFFEE_BRAND,
      useFactory: async (
        brandFactory: CoffeeBrandFactory,
      ): Promise<string[]> => {
        return Promise.resolve(brandFactory.create("coffee"));
      },
      inject: [CoffeeBrandFactory],
    },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
