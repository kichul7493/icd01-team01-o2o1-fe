import { BASE_URL } from '@/constants/api'
import axios, { AxiosError } from 'axios'
import { signOut } from 'next-auth/react'
/**
 * Axios 인스턴스
 */
const axiosInst = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
})

const redirectToLogin = () => {
  void signOut({ redirect: true, callbackUrl: '/' })
}

/**
 * 응답 인터셉터 Reject 핸들러
 */

// Request Interceptor 설정
axiosInst.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken')
    const refreshToken = localStorage.getItem('refreshToken')

    // Authorization과 RefreshAuth 헤더에 토큰을 추가
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`
    }
    if (refreshToken) {
      config.headers['RefreshAuth'] = refreshToken
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

/**
 * 응답 인터셉터
 */
axiosInst.interceptors.response.use(
  (response) => {
    // 응답 헤더에서 새로운 accessToken을 가져옴
    const accessToken = response.headers['Authorization']
    const storedAccessToken = localStorage.getItem('accessToken')

    // 새로운 토큰이 있고, 기존 토큰과 다르면 로컬 스토리지 갱신
    if (accessToken && accessToken !== storedAccessToken) {
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', response.headers['RefreshAuth'])
    }

    return response // 원래 응답을 그대로 반환
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default axiosInst
