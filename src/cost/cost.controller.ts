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
import { AddCostDto } from '../dto/cost.dto'


@Controller('cost')
export class CostController {
    constructor(private readonly costService: CostService) { }

    @Post()
    @ApiCreatedResponse({ description: 'Add Success' })
    @ApiBody({ type: AddCostDto })
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
        const response = costs
        return res.status(status).json(response)
    }
}
