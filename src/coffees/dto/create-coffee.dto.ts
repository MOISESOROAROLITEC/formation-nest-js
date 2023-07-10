import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateCoffeeDto {
  @ApiProperty({ description: "Name of coffee" })
  @IsString()
  name: string;

  @ApiProperty({ description: "Brand of the coffee" })
  @IsString()
  readonly brand: string;

  @ApiProperty({ example: ["au lait", "sans sucre"] })
  @IsString({ each: true })
  readonly flavors: string[];
}
