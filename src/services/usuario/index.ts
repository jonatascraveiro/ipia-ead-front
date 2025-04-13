import {
  serializaParametrosPaginacao,
  usePaginacaoParametros,
} from '@/hooks/parametros.paginacao'
import type { PaginacaoType } from '@/types/http-client'
import type { UsuarioFormType, UsuarioType } from '@/types/usuario'
import { useMutation, useQuery } from '@tanstack/react-query'
import { clientHttp } from '../httpClient'
import { queryClient } from '../queriClient'

const URL_RECURSO = '/users'
const QUERY_KEY = 'usuario'

export const useCriarUsuario = () => {
  return useMutation({
    mutationFn: async (
      dados: Omit<UsuarioFormType, 'id' | 'confirmar_senha'>,
    ) => {
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

export const useEditarUsuario = () => {
  return useMutation({
    mutationFn: async (
      dados: Omit<UsuarioFormType, 'id' | 'confirmar_senha' | 'senha'>,
    ) => {
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

export const useListarUsuarios = () => {
  const [paginacaoParams] = usePaginacaoParametros()
  const serializeParams = serializaParametrosPaginacao({
    paginacao: paginacaoParams,
  })

  return useQuery({
    queryFn: async () => {
      const { data } = await clientHttp.get<PaginacaoType<UsuarioType>>(
        `${URL_RECURSO}?${serializeParams}`,
      )

      return data
    },
    queryKey: [QUERY_KEY, serializeParams],
  })
}
