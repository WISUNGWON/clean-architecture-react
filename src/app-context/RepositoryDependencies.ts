import { MovieRepository } from "../data/repositories/MovieRepository";
import { IMovieRepository } from "../domain/repositories/IMovieRepository";
import { HttpProviderDependencies } from "./HttpProviderDependencies";

export class RepositoryDependencies {
    movie: IMovieRepository

    constructor (
        http: HttpProviderDependencies
    ) {
        this.movie = new MovieRepository(http.movie)
    }

}