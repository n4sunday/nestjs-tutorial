import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common'

import { MoviesService } from './movie.service'

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {

    }
    @Post()
    addMovie(
        @Body('title') prodTitle: string,
        @Body('rank') prodRank: number,
        @Body('distributor') prodDistributor: string,
        @Body('gross') prodGross: number,
    ) {
        const generatedId = this.moviesService.insertMovie(prodTitle, prodRank, prodDistributor, prodGross)
        return { id: generatedId }
    }

    @Get()
    getAllMovies() {
        return this.moviesService.getMovies()
    }

    @Get(':id')
    getMovies(@Param('id') prodId: string, ) {
        return this.moviesService.getSingleMovie(prodId)
    }

    @Patch(':id')
    updateMovie(
        @Param('id') prodId: string,
        @Body('title') prodTitle: string,
        @Body('rank') prodRank: number,
        @Body('distributor') prodDistributor: string,
        @Body('gross') prodGross: number,
    ) {
        this.moviesService.updateMovie(prodId, prodTitle, prodRank, prodDistributor, prodGross)
        return null
    }
}