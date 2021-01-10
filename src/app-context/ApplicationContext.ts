import { axiosInstance } from '../data/response/axiosInstance'
import { HttpProviderDependencies } from "./HttpProviderDependencies";
import { RepositoryDependencies } from './RepositoryDependencies';

export class ApplicationContext {
    private httpProvider: HttpProviderDependencies
    readonly repositories: RepositoryDependencies

    constructor() {
        this.httpProvider = new HttpProviderDependencies(axiosInstance)
        this.repositories = new RepositoryDependencies (
            this.httpProvider
        )
    }
}