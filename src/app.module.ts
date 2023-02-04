import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import configuration from "./config/configuration";
import {MongooseModule} from "@nestjs/mongoose";
import {ApartmentModule} from "./apartment/apartment.module";

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule.forRoot({load: [configuration]})],
      useFactory: (configService: ConfigService) => ({uri: configService.get<string>('database.connectionString')}),
      inject: [ConfigService],
    }),
    ApartmentModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule {
}
