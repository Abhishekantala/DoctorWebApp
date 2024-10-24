import axiosInstance, { isAxiosError } from "../../services/api"
import { setUser } from "../../services/usertoken"

export const loginWithEmailAsync = async (loginRequest) => {
  try {
    const response = await axiosInstance.post(`/login`, loginRequest)
    setUser(response?.data?.data?.token)
    return response
  } catch (err) {
    return isAxiosError(err)
  }
}

export const registerWithEmailAsync = async (register) => {
  try {
    const response = await axiosInstance.post(`/register`, register)
    return response
  } catch (err) {
    return isAxiosError(err)
  }
}
