import type { CursoType } from '@/types/curso'
import type { HttpGet, PaginacaoType } from '@/types/http-client'
import { useMutation, useQuery } from '@tanstack/react-query'
import { clientHttp } from '../httpClient'
import { queryClient } from '../queriClient'

const URL_RECURSO = '/cursos'
const QUERY_KEY = 'curso'

export const useCriarCurso = () => {
  return useMutation({
    mutationFn: async (dados: Omit<CursoType, 'id'>) => {
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

export const useEditarCurso = () => {
  return useMutation({
    mutationFn: async (dados: CursoType) => {
      const { data } = await clientHttp.put<CursoType>(
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

export const useListarCursos = () => {
  const serializeParams = ''

  return useQuery({
    queryFn: async () => {
      const { data } = await clientHttp.get<PaginacaoType<CursoType>>(
        `${URL_RECURSO}?${serializeParams}`,
      )

      return data
    },
    queryKey: [QUERY_KEY, serializeParams],
  })
}

export const useBuscarCurso = (id: number) => {
  const serializeParams = ''

  return useQuery({
    queryFn: async () => {
      const { data } = await clientHttp.get<HttpGet<CursoType>>(
        `${URL_RECURSO}/${id}?${serializeParams}`,
      )

      return data.data
    },
    queryKey: [QUERY_KEY, serializeParams, id],
  })
}
