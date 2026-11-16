
import { Injectable, NotFoundException } from '@nestjs/common';
import { Travel } from './entities/travel.entity.js';
import { CreateTravelDto } from './dto/create-travel.dto.js';
import { UpdateTravelDto } from './dto/update-travel.dto.js';

@Injectable()
export class TravelsService {

  private travels: Travel[] = [
    { id: 1, name: "To China", price: 1000 },
    { id: 2, name: "To Morocco", price: 1200 },

  ];

  private nextId = 4;

  findAll(search?: string): Travel[] {
    return this.travels.filter((travel) => {
      const searchOk = !search ||
        travel.name.toLowerCase().includes(search.toLowerCase());

      return searchOk;
    });
  }


  findOne(id: number): Travel {
    const travel = this.travels.find((t) => t.id === id);

    if (!travel) {
      throw new NotFoundException(`Voyage ${id} introuvable`);
    }

    return travel;
  }

  create(createTravelDto: CreateTravelDto): Travel {
    const nouveauTravel: Travel = {
      id: this.nextId++,
      ...createTravelDto,
    };

    this.travels.push(nouveauTravel);

    return nouveauTravel;
  }

}
