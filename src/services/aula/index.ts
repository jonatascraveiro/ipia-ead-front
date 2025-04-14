import type { AulaType } from '@/types/aula'
import type { HttpGet, PaginacaoType } from '@/types/http-client'
import { useMutation, useQuery } from '@tanstack/react-query'
import { clientHttp } from '../httpClient'
import { queryClient } from '../queriClient'

const URL_RECURSO = '/aulas'
const QUERY_KEY = 'aula'

export const useCriarAula = () => {
  return useMutation({
    mutationFn: async (dados: Omit<AulaType, 'id'>) => {
      const { data } = await clientHttp.post<{
        flag: boolean
        message: string
        id: string
      }>(URL_RECURSO, {
        ...dados,
        id: undefined,
      })

      return data
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
    },
  })
}

export const useEditarAula = () => {
  return useMutation({
    mutationFn: async (dados: AulaType) => {
      const { data } = await clientHttp.put<AulaType>(
        `${URL_RECURSO}/${dados.id}`,
        {
          ...dados,
          id: undefined,
        },
      )

      return data
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
    },
  })
}

export const useListarAulas = () => {
  const serializeParams = ''

  return useQuery({
    queryFn: async () => {
      const { data } = await clientHttp.get<PaginacaoType<AulaType>>(
        `${URL_RECURSO}?${serializeParams}`,
      )

      return data
    },
    queryKey: [QUERY_KEY, serializeParams],
  })
}

export const useBuscarAula = (id: number) => {
  const serializeParams = ''

  return useQuery({
    queryFn: async () => {
      const { data } = await clientHttp.get<HttpGet<AulaType>>(
        `${URL_RECURSO}/${id}?${serializeParams}`,
      )

      return data.data
    },
    queryKey: [QUERY_KEY, serializeParams, id],
  })
}
