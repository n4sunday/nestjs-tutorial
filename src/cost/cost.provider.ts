import { Cost } from './models/cost.model'

export const CostProviders = [
    {
        provide: 'costRepo',
        useValue: Cost,
    }
]