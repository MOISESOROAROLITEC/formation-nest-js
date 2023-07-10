import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { HttpExceptionFilter } from "./common/filters/http-exception/http-exception.filter";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

const PORT = process.env.SERVER_PORT;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  const options = new DocumentBuilder()
    .setTitle("I love coffee")
    .setDescription("IloveCoffee api with nestjs")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api", app, document);

  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(PORT);
  console.log(`Serveur lancer sur http://localhost:${PORT}`);
}
bootstrap();
