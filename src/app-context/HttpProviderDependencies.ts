import { AxiosInstance } from "axios";
import { MovieApiprovider } from "../data/http/MovieApiProvider";


export class HttpProviderDependencies {
    movie: MovieApiprovider

    constructor(baseInstance: AxiosInstance) {
        this.movie = new MovieApiprovider(baseInstance)
    }
}