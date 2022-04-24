import axios from 'axios'
import { url } from './baseUrl'

const instance = axios.create()

instance.interceptors.request.use(
    (config) => {
        const updatedConfig = {
            ...config,
            url:`${url}${config.url}`
        }
        return updatedConfig
    },
    (error) => {
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        console.log(error.response?.status)
    }
)

const responseBody = (response)=> {
    const responseData = response.data;
  const responseHeaders = response.headers;
  return { responseData,responseHeaders }
}

const getRequest = (url, params)=> instance.get(url+params).then(responseBody)

export { getRequest}
