import { Cost } from './models/cost.model'

export const CostProviders = [
    {
        provide: 'COST_REPOSITORY',
        useValue: Cost,
    }
]