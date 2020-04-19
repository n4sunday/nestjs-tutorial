import { Injectable } from '@nestjs/common'
import { Movie } from './movie.model'

@Injectable()
export class MoviesService {
    movies: Movie[] = []

    insertMovie(title: string, rank: number, distributor: string, gross: number) {
        const prodId = new Date().toString()
        const newMovies = new Movie(prodId, title, rank, distributor, gross)
        this.movies.push(newMovies)
        return prodId
    }
}