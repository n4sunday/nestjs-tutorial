import { ApiProperty } from '@nestjs/swagger'

export class AddCostDto {
    @ApiProperty()
    price: number;

    @ApiProperty()
    date: string;
}
