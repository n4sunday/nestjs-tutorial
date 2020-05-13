import { ApiProperty } from '@nestjs/swagger'

export class CostDto {
    @ApiProperty()
    price: number;

    @ApiProperty()
    date: string;
}