import { Injectable, Inject } from '@nestjs/common'
import { Cost } from './cost.model'

@Injectable()
export class CostService {
    constructor(
        @Inject('costRepo') private readonly costRepo: typeof Cost,
    ) { }

    async addCost(cost: Cost) {
        const costCreate = await this.costRepo.create(cost)
        return costCreate
    }
}