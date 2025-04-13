import type { DocumentoType } from '@/types/documento'
import type { HttpGet, PaginacaoType } from '@/types/http-client'
import { useMutation, useQuery } from '@tanstack/react-query'
import { clientHttp } from '../httpClient'
import { queryClient } from '../queriClient'

const URL_RECURSO = '/documentos'
const QUERY_KEY = 'documento'

export const useCriarDocumento = () => {
  return useMutation({
    mutationFn: async (dados: Omit<DocumentoType, 'id'>) => {
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

export const useEditarDocumento = () => {
  return useMutation({
    mutationFn: async (dados: DocumentoType) => {
      const { data } = await clientHttp.put<DocumentoType>(
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

export const useListarDocumentos = () => {
  const serializeParams = ''

  return useQuery({
    queryFn: async () => {
      const { data } = await clientHttp.get<PaginacaoType<DocumentoType>>(
        `${URL_RECURSO}?${serializeParams}`,
      )

      return data
    },
    queryKey: [QUERY_KEY, serializeParams],
  })
}

export const useBuscarDocumento = (id: number) => {
  const serializeParams = ''

  return useQuery({
    queryFn: async () => {
      const { data } = await clientHttp.get<HttpGet<DocumentoType>>(
        `${URL_RECURSO}/${id}?${serializeParams}`,
      )

      return data.data
    },
    queryKey: [QUERY_KEY, serializeParams, id],
  })
}
