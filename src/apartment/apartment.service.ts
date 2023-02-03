import {Injectable, NotFoundException, OnModuleInit} from '@nestjs/common';
import {CreateApartmentDto} from './dto/create-apartment.dto';
import {UpdateApartmentDto} from './dto/update-apartment.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Apartment, ApartmentDocument} from "./schemas/apartment.schema";
import {Model} from "mongoose";
import {GetApartmentOptionsDto} from "./dto/get-apartment-options.dto";

@Injectable()
export class ApartmentService implements OnModuleInit {
  constructor(
    @InjectModel(Apartment.name) private readonly apartmentModel: Model<ApartmentDocument>
  ) {
  }

  // Seed data if there is no any
  async onModuleInit() {
    const count = await this.apartmentModel.count();

    if (count === 0) {
      const seedData: Apartment[] = [
        {
          name: 'Common Apartment 1',
          description: 'It\'s a common apartment without any benefits.',
          price: 100,
          rooms: 1
        },
        {
          name: 'Common Apartment 2',
          description: 'It\'s a common apartment without any benefits.',
          price: 150,
          rooms: 2
        },
        {
          name: 'VIP Apartment 1',
          description: 'It\'s a VIP apartment with all benefits.',
          price: 1500,
          rooms: 2
        },
        {
          name: 'VIP Apartment 2',
          description: 'It\'s a VIP apartment with all benefits.',
          price: 3000,
          rooms: 4
        },
      ];

      seedData.forEach(apartment => this.create(apartment));
    }
  }

  async create(createApartmentDto: CreateApartmentDto) {
    return this.apartmentModel.create(createApartmentDto);
  }

  async findAll(getApartmentOptionsDto: GetApartmentOptionsDto) {
    let apartments = this.apartmentModel.find();

    // Decided to make query input mistakes silent
    if (Object.keys(getApartmentOptionsDto).length) {
      const {price, rooms} = getApartmentOptionsDto;
      const price_num = price === 'asc' ? 1 : (price === 'desc' ? -1 : 0);

      if (rooms) apartments = apartments.find({rooms: rooms});
      if (price_num) apartments = apartments.sort({price: price_num});
    }

    return apartments;
  }

  async findOne(id: string) {
    const apartment = await this.apartmentModel.findOne({_id: id});

    if (!apartment)
      throw new NotFoundException('Invalid apartment id');

    return apartment;
  }

  async update(id: string, updateApartmentDto: UpdateApartmentDto) {
    return this.apartmentModel.findByIdAndUpdate({_id: id}, updateApartmentDto, {runValidators: true});
  }

  async remove(id: string) {
    return this.apartmentModel.findByIdAndRemove({_id: id});
  }
}
