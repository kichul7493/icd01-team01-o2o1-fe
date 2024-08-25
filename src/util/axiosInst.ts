import { baseURL } from '@/constants/api'
import axios from 'axios'

const axiosInst = axios.create({
  baseURL: baseURL,
})

export default axiosInst
