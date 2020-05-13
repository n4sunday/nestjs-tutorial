import { ApiProperty } from '@nestjs/swagger'
export class CreateCostDto {
    @ApiProperty()
    price: number;

    @ApiProperty()
    date: string;
}
