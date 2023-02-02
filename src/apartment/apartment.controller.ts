import {Body, Controller, Delete, Get, Param, Post, Put, Query, UseFilters} from '@nestjs/common';
import {ApartmentService} from './apartment.service';
import {CreateApartmentDto} from './dto/create-apartment.dto';
import {UpdateApartmentDto} from './dto/update-apartment.dto';
import {GetApartmentOptionsDto} from "./dto/get-apartment-options.dto";
import {ValidationErrorFilter} from "./exceptions/validation-error.filter";
import {CastNotFoundErrorFilter} from "./exceptions/cast-not-found-error.filter";

@Controller('apartments')
export class ApartmentController {
  constructor(private readonly apartmentService: ApartmentService) {
  }

  @Get()
  async findAll(@Query() getApartmentOptionsDto: GetApartmentOptionsDto) {
    return this.apartmentService.findAll(getApartmentOptionsDto);
  }

  @Get(':id')
  @UseFilters(new CastNotFoundErrorFilter())
  async findOne(@Param('id') id: string) {
    return this.apartmentService.findOne(id);
  }

  @Post()
  @UseFilters(new ValidationErrorFilter())
  async create(@Body() createApartmentDto: CreateApartmentDto) {
    return this.apartmentService.create(createApartmentDto);
  }

  @Put(':id')
  @UseFilters(new ValidationErrorFilter())
  async update(@Param('id') id: string, @Body() updateApartmentDto: UpdateApartmentDto) {
    return this.apartmentService.update(id, updateApartmentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.apartmentService.remove(id);
  }
}
