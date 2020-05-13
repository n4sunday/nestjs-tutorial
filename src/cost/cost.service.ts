import { Injectable, Inject } from '@nestjs/common'
import { Cost } from './models/cost.model'

@Injectable()
export class CostService {
    constructor(
        @Inject('COST_REPOSITORY') private readonly costRepository: typeof Cost,
    ) { }

    async addCost(cost: Cost) {
        const data = await this.costRepository.create(cost)
        return data
    }

    async getCosts(): Promise<Cost[]> {
        return this.costRepository.findAll<Cost>({ raw: true })
    }

    async getCost(id: number) {
        return await this.costRepository.findOne({ where: { costId: id }, raw: true })
    }

    async updateCost(id: any, cost: Cost) {
        const data = await this.costRepository.findByPk(id)
        if (data) {
            await data.update(cost)
            return this.costRepository.findAll({ raw: true })
        }
        else {
            return false
        }
    }

    async deleteCost(id: any) {
        const data = await this.costRepository.findByPk(id)
        if (data) {
            await data.destroy()
            return this.costRepository.findAll({ raw: true })
        }
        else {
            return false
        }
    }
}