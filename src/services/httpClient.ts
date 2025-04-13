// import { HttpClientErrors } from '@interfaces/http-client';

import { apiUrl } from '@/utils/constants'
import { handleErrors } from '@/utils/handleErrors'
import axios, {
  type AxiosError,
  type AxiosHeaders,
  type InternalAxiosRequestConfig,
} from 'axios'
import Cookies from 'js-cookie'

interface Config extends AxiosHeaders {
  headers: {
    Authorization?: string
  }
}

const clientHttp = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

clientHttp.interceptors.request.use(
  async (config: InternalAxiosRequestConfig<Config>) => {
    const token = Cookies.get('token')
    const intConfig = config

    if (token) {
      intConfig.headers.Authorization = `Bearer ${token}`
    }

    return intConfig
  },
)

clientHttp.interceptors.response.use(
  (response) => {
    return response
  },
  (err: AxiosError) => {
    handleErrors(err)
    return Promise.reject(err)
  },
)

export { clientHttp }
