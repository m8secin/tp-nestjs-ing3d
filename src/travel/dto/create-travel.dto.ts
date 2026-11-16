import { ApiProperty } from "@nestjs/swagger";
export class CreateTravelDto {
    @ApiProperty()
    name : string;
    @ApiProperty()
    price : number;
}
