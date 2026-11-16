import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TravelsService } from './travel.service';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';

@Controller('travel')
export class TravelController {
  constructor(private readonly travelService: TravelsService) {}

  @Post()
  create(@Body() createTravelDto: CreateTravelDto) {
    return this.travelService.create(createTravelDto);
  }

  @Get()
  findAll() {
    return this.travelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.travelService.findOne(+id);
  }
}
