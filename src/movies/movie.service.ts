import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { Movie } from './movie.model'

@Injectable()
export class MoviesService {
    private movies: Movie[] = []

    constructor(@InjectModel('Movie') private readonly movieModel: Model<Movie>) { }

    async insertMovie(title: string, rank: number, distributor: string, gross: number) {
        const newMovies = new this.movieModel({
            title,
            rank,
            distributor,
            gross
        })
        const result = await newMovies.save()
        return result.id as string
    }

    async getMovies() {
        const movie = await this.movieModel.find().exec()
        console.log('NOVIE', movie)

        return movie.map(prod => ({
            id: prod.id,
            title: prod.title,
            rank: prod.rank,
            distributor: prod.distributor,
            gross: prod.gross
        }))
    }

    async getSingleMovie(prodId: string) {
        const movie = await this.findMovie(prodId)
        console.log('NOVIE', movie)

        return movie
    }

    updateMovie(prodId: string, title: string, rank: number, distributor: string, gross: number) {

        // const [movie, index] = this.findMovie(prodId)
        // const updatedMovie = { ...movie }
        // if (title) {
        //     updatedMovie.title = title
        // }
        // if (rank) {
        //     updatedMovie.rank = rank
        // }
        // if (distributor) {
        //     updatedMovie.distributor = distributor
        // }
        // if (gross) {
        //     updatedMovie.gross = gross
        // }
        // this.movies[index] = updatedMovie
    }

    private async findMovie(id: string): Promise<Movie> {
        let movie
        try {
            movie = await this.movieModel.findById(id)
        }
        catch (error) {
            throw new NotFoundException('Could not find movie.')
        }
        if (!movie) {
            throw new NotFoundException('Could not find movie.')

        }
        return {
            id: movie.id,
            title: movie.title,
            rank: movie.rank,
            distributor: movie.distributor,
            gross: movie.gross
        }
    }
}