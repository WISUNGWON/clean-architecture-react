import axios from 'axios'

let baseURL: string

baseURL = 'https://yts-proxy.now.sh'

const dateFormat = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/

function dateParser(key: any, value: any) {
  if (typeof value === 'string' && dateFormat.test(value)) {
    return new Date(value)
  }

  return value
}

export const axiosInstance = axios.create({
    baseURL,
    transformResponse: [
        function (data) {
            return JSON.parse(data, dateParser)
        }
    ]
})