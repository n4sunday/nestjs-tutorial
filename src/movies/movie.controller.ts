import { Controller, Post, Body } from '@nestjs/common'

import { MoviesService } from './movie.service'

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviessService: MoviesService) {

    }
    @Post()
    addMovie(
        @Body('title') prodTitle: string,
        @Body('rank') prodRank: number,
        @Body('distributor') prodDistributor: string,
        @Body('gross') prodGross: number,
    ) {
        const generatedId = this.moviessService.insertMovie(prodTitle, prodRank, prodDistributor, prodGross)
        return { id: generatedId }
    }
}