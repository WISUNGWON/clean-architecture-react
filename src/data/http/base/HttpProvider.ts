import { AxiosError, AxiosInstance } from 'axios'
// Todo: webpack.config.js에서 경로 alias 설정 
import { NetworkError } from '../../../domain/value-object/NetworkError'

// interface 대신 abstract 사용 이유 : 일부는 구현해두기 위해.
export abstract class HttpProvider {
    private httpInstance: AxiosInstance

    constructor (instance: AxiosInstance) {
        this.httpInstance = instance
    }

    private generateNetworkError = (error: AxiosError): NetworkError => {
        return new NetworkError(error.response?.status, error.message)
    }

    protected requestGET = async <T extends {}> ({
        url,
        params = {},
        headers = {},
    }: {
        url:string
        params?: any
        headers?: any
    }): Promise<T> => {
        try {
           const response = await this.httpInstance.get<T>(url, {params, headers})
           return response.data
        } catch (e) {
            throw this.generateNetworkError(e)
        }
    }}