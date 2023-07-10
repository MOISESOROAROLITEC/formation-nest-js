import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from "@nestjs/common";

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const valueParsed = parseInt(value, 10);
    if (isNaN(valueParsed)) {
      throw new BadRequestException(
        `Validation failed. ${value} is not a number`,
      );
    }
    return valueParsed;
  }
}
