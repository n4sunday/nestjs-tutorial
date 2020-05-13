import {
    Controller,
    Get,
    HttpStatus,
    Res,
    Post,
    Body,
    Delete,
    Param,
    Patch,
    UseInterceptors,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiBody } from '@nestjs/swagger'
import { CostService } from './cost.service'
import { CostDto } from '../dto/cost.dto'


@Controller('cost')
export class CostController {
    constructor(private readonly costService: CostService) { }

    @Post()
    @ApiCreatedResponse({ description: 'Add Success' })
    @ApiBody({ type: CostDto })
    async addCost(@Body() data, @Res() res) {
        const status = HttpStatus.OK
        let response = {}
        const cost = await this.costService.addCost(data)
        response = { cost }
        return res.status(status).json(response)
    }

    @Get()
    async getCosts(@Res() res) {
        const status = HttpStatus.OK
        const costs = await this.costService.getCosts()
        return res.status(status).json(costs)
    }

    @Get('/allprice')
    async getAllPrice(@Res() res) {
        const status = HttpStatus.OK
        let response = {}
        const cost = await this.costService.getAllPrice()
        response = cost[0]
        return res.status(status).json(response)
    }

    @Get(':id')
    async getCost(@Param('id') id: number, @Res() res) {
        const status = HttpStatus.OK
        const cost = await this.costService.getCost(id)
        const response = { cost }
        return res.status(status).json(response)
    }

    @Patch(':id')
    @ApiBody({ type: CostDto })
    async updateCost(@Param('id') id: number, @Body() data, @Res() res) {
        let status = HttpStatus.OK
        let response = {}
        const cost = await this.costService.updateCost(id, data)
        if (!cost) {
            status = HttpStatus.BAD_REQUEST;
            response = {
                message: 'can not find cost id',
            }
        }
        else {
            response = cost
        }
        return res.status(status).json(response)
    }

    @Delete(':id')
    async deleteCost(@Param('id') id: number, @Res() res) {
        let status = HttpStatus.OK
        let response = {}
        const cost = await this.costService.deleteCost(id)
        if (!cost) {
            status = HttpStatus.BAD_REQUEST;
            response = {
                message: 'can not find cost id',
            }
        }
        else {
            response = cost
        }
        return res.status(status).json(response)
    }
}
