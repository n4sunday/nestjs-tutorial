import { Module, RequestMethod, MiddlewareConsumer, forwardRef } from '@nestjs/common'
import { CostController } from './cost.controller'
import { CostProviders } from './cost.provider'
import { CostService } from './cost.service'

@Module({
    controllers: [CostController],
    providers: [CostService, ...CostProviders],
    exports: [CostService]
})

export class CostModule { }