import {
    AllowNull,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    Table,
    HasMany,
    ForeignKey,
    BelongsToMany
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger'

@Table({
    timestamps: true,
    paranoid: true,
})

export class Cost extends Model<Cost>{
    @AllowNull(false)
    @PrimaryKey
    @AutoIncrement
    @Column
    cost_id: number

    @AllowNull(false)
    @Column
    price: number

    @AllowNull(false)
    @Column
    date: string

}