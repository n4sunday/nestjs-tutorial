import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common'

import { MoviesService } from './movie.service'

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {

    }

    @Post()
    async addMovie(
        @Body('title') prodTitle: string,
        @Body('rank') prodRank: number,
        @Body('distributor') prodDistributor: string,
        @Body('gross') prodGross: number,
    ) {
        const generatedId = await this.moviesService.insertMovie(
            prodTitle,
            prodRank,
            prodDistributor,
            prodGross
        )
        return { id: generatedId }
    }

    @Get()
    async getAllMovies() {
        const movies = await this.moviesService.getMovies()
        return movies
    }

    @Get(':id')
    async getMovies(@Param('id') prodId: string, ) {
        const movies = await this.moviesService.getSingleMovie(prodId)
        return movies
    }

    @Patch(':id')
    async updateMovie(
        @Param('id') prodId: string,
        @Body('title') prodTitle: string,
        @Body('rank') prodRank: number,
        @Body('distributor') prodDistributor: string,
        @Body('gross') prodGross: number,
    ) {
        await this.moviesService.updateMovie(prodId, prodTitle, prodRank, prodDistributor, prodGross)
        return null
    }

    @Delete(':id')
    async removeMovie(@Param('id') prodId: string) {
        await this.moviesService.deleteMovie(prodId)
        return null
    }
}