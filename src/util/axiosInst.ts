import { BASE_URL } from '@/constants/api'
import axios from 'axios'

const axiosInst = axios.create({
  baseURL: BASE_URL,
})

export default axiosInst
