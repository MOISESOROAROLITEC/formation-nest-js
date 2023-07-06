import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import * as dotenv from "dotenv";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CoffeesModule } from "./coffees/coffees.module";
import { Event } from "./events/entities/event.entity";
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';
dotenv.config();

@Module({
  imports: [
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: +process.env.POSTGRES_PORT,
      username: "postgres",
      password: "pass123",
      database: "postgres",
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Event]),
    CoffeeRatingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
