import { Cost } from './cost.model'

export const CostProviders = [
    {
        provide: 'costRepo',
        useValue: Cost,
    }
]