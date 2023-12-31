import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";
import { APP_GUARD, APP_INTERCEPTOR } from "@nestjs/core";
import { ApiKeyGuard } from "./guards/api-key/api-key.guard";
import { ConfigModule } from "@nestjs/config";
import { WrapResponseInterceptor } from "./interceptors/wrap-response/wrap-response.interceptor";
import { TimeoutInterceptor } from "./interceptors/timeout/timeout.interceptor";
import { LoggingMiddleware } from "./middlewares/logging/logging.middleware";

@Module({
  imports: [ConfigModule],
  providers: [
    { provide: APP_INTERCEPTOR, useClass: WrapResponseInterceptor },
    { provide: APP_INTERCEPTOR, useClass: TimeoutInterceptor },
  ],
})
export class CommonModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggingMiddleware)
      .forRoutes({ path: "coffee", method: RequestMethod.GET }, "*");
  }
}
