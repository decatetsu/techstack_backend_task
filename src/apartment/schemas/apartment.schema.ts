import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {HydratedDocument} from "mongoose";

export type ApartmentDocument = HydratedDocument<Apartment>;

@Schema({
  versionKey: false, toJSON: {
    getters: true, transform: function (doc, ret) {
      delete ret._id
    }
  }
})
export class Apartment {
  @Prop({required: true, min: 1})
  rooms: number;

  @Prop({required: true, maxlength: 98})
  name: string;

  @Prop({required: true, min: 1})
  price: number;

  @Prop({required: true, maxlength: 998})
  description: string;
}

export const ApartmentSchema = SchemaFactory.createForClass(Apartment);
