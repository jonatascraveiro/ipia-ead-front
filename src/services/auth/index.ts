import { useMutation } from '@tanstack/react-query'
import { clientHttp } from '../httpClient'

export const useLoginMutate = () => {
  return useMutation({
    mutationFn: async (dados: { email: string; password: string }) => {
      const { data } = await clientHttp.post<{
        access_token: string
        email: string
        nome: string
        expires_in: number
      }>('/login', {
        ...dados,
      })

      return {
        token: data.access_token,
        email: data.email,
        nome: data.nome,
      }
    },
  })
}
