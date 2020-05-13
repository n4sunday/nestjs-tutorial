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
import { CostService } from './cost.service'

@Controller('cost')
export class CostController {
    constructor(private readonly costService: CostService) { }

    @Post()
    async addCost(@Body() data, @Res() res) {
        const status = HttpStatus.OK
        let response = {}
        const cost = await this.costService.addCost(data)
        response = { cost }
        return res.status(status).json(response)
    }
}
