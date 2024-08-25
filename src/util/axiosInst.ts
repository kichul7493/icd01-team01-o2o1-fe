import { baseURL } from '@/constants/api'
import axios from 'axios'

const AUTHORIZATION_TOKEN = 'Authorization'
const REFRESH_TOKEN = 'RefreshAuth'

const axiosInst = axios.create({
  baseURL: baseURL,
})

axiosInst.interceptors.request.use((config) => {
  const token = window.localStorage.getItem(AUTHORIZATION_TOKEN)
  const refreshToken = window.localStorage.getItem(REFRESH_TOKEN)
  if (token && token !== 'null' && refreshToken && refreshToken !== 'null') {
    config.headers.Authorization = `${token}`
    config.headers.RefreshAuth = `${refreshToken}`
  }

  return config
}, null)

export default axiosInst
