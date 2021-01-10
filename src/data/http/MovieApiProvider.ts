import { HttpProvider } from './base/HttpProvider'

// 책 읽고 싶어요(Keep) API
export class MovieApiprovider extends HttpProvider {
    getAllMovies = async (): Promise<any> => {
      return this.requestGET<any>({
          url: '/list_movies.json?sort_by=rating'
      })
  }
}
