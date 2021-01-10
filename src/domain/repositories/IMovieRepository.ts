import { IMovie } from "../entity/IMovie";

export interface IMovieRepository {
    getAllMovies(): Promise<IMovie[]>
}