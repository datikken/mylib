import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TopPageModule } from './top-page/top-page.module';
import { ReviewModule } from './review/review.module';
import { ProductController } from './product/product.controller';
import { ProductModule } from "./product/product.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypegooseModule } from "nestjs-typegoose";
import { getMongoConfig } from "./configs/mongoConfig";

@Module({
  imports: [
		ConfigModule.forRoot(),
	    TypegooseModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getMongoConfig
		}),
	    AuthModule,
	    TopPageModule,
	    ReviewModule,
	    ProductModule
  ],
  controllers: [AppController, ProductController],
  providers: [AppService],
})
export class AppModule {}
