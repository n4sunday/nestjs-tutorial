import { Injectable, NotFoundException } from '@nestjs/common'
import { Movie } from './movie.model'

@Injectable()
export class MoviesService {
    private movies: Movie[] = []

    insertMovie(title: string, rank: number, distributor: string, gross: number) {
        const prodId = Math.random().toString()
        const newMovies = new Movie(prodId, title, rank, distributor, gross)
        this.movies.push(newMovies)
        return prodId
    }

    getMovies() {
        return [...this.movies]
    }

    getSingleMovie(prodId: string) {
        const movie = this.findMovie(prodId)[0]
        return { ...movie }
    }

    updateMovie(prodId: string, title: string, rank: number, distributor: string, gross: number) {
        const [movie, index] = this.findMovie(prodId)
        const updatedMovie = { ...movie }
        if (title) {
            updatedMovie.title = title
        }
        if (rank) {
            updatedMovie.rank = rank
        }
        if (distributor) {
            updatedMovie.distributor = distributor
        }
        if (gross) {
            updatedMovie.gross = gross
        }
        this.movies[index] = updatedMovie
    }

    private findMovie(id: string): [Movie, number] {
        const moviIndex = this.movies.findIndex((prod) => prod.id === id)
        const movie = this.movies[moviIndex]
        if (!movie) {
            throw new NotFoundException('Could not find movie.')
        }
        return [movie, moviIndex]
    }
}