import { Injectable, Inject } from '@nestjs/common'
import { Cost } from './models/cost.model'

@Injectable()
export class CostService {
    constructor(
        @Inject('COST_REPOSITORY') private readonly costRepository: typeof Cost,
    ) { }

    async addCost(cost: Cost) {
        const costCreate = await this.costRepository.create(cost)
        return costCreate
    }

    async getCosts(): Promise<Cost[]> {
        return this.costRepository.findAll<Cost>({ raw: true })
    }

    async getCost(id: number) {
        return await this.costRepository.findOne({ where: { cost_id: id }, raw: true })
    }
}