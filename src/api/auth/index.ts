import { PublicAPI } from "../base"

type LoginType = {
  username: string,
  password: string,
}

export const login = (data: LoginType) => {
  return PublicAPI.post('/api/token/', data)
}