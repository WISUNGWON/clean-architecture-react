import { IMovie } from "../../domain/entity/IMovie";
import { IMovieRepository } from "../../domain/repositories/IMovieRepository";
import { MovieApiprovider } from "../http/MovieApiProvider";

export class MovieRepository implements IMovieRepository {
    private movieApi: MovieApiprovider

    constructor(
        movieApiProvider: MovieApiprovider
    ) {
        this.movieApi = movieApiProvider
    }

    getAllMovies = async (): Promise<IMovie[]> => {
        const movieResponse = await this.movieApi.getAllMovies();
        return movieResponse.data.movies;
    }
}