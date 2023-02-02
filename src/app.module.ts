import {Module} from '@nestjs/common';
import configuration from "./config/configuration";
import {MongooseModule} from "@nestjs/mongoose";
import {ApartmentModule} from "./apartment/apartment.module";

@Module({
  imports: [
    MongooseModule.forRoot(configuration().database.connectionString),
    ApartmentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
