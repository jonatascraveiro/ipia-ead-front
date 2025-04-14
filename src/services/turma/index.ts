import type { HttpGet, PaginacaoType } from '@/types/http-client'
import type { TurmaType } from '@/types/turma'
import { useMutation, useQuery } from '@tanstack/react-query'
import { clientHttp } from '../httpClient'
import { queryClient } from '../queriClient'

const URL_RECURSO = '/turmas'
const QUERY_KEY = 'turma'

export const useCriarTurma = () => {
  return useMutation({
    mutationFn: async (dados: Omit<TurmaType, 'id'>) => {
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

export const useEditarTurma = () => {
  return useMutation({
    mutationFn: async (dados: TurmaType) => {
      const { data } = await clientHttp.put<TurmaType>(
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

export const useListarTurmas = () => {
  const serializeParams = ''

  return useQuery({
    queryFn: async () => {
      const { data } = await clientHttp.get<PaginacaoType<TurmaType>>(
        `${URL_RECURSO}?${serializeParams}`,
      )

      return data
    },
    queryKey: [QUERY_KEY, serializeParams],
  })
}

export const useBuscarTurma = (id: number) => {
  const serializeParams = ''

  return useQuery({
    queryFn: async () => {
      const { data } = await clientHttp.get<HttpGet<TurmaType>>(
        `${URL_RECURSO}/${id}?${serializeParams}`,
      )

      return data.data
    },
    queryKey: [QUERY_KEY, serializeParams, id],
  })
}
