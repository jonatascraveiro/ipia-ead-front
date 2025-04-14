import {
  ModuloTypeSortFields,
  SortDirection,
  useModulosQuery,
} from '@/gql/generated/graphql'
import type { ModuloType } from '@/types/modulo'
import { useQueryState } from 'nuqs'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { getColumns } from './columns'

export const useTabelaModulo = () => {
  const form = useForm<{ nome: string }>({
    defaultValues: {
      nome: '',
    },
  })

  const setPage = useQueryState('page')[1]

  const nome = form.getValues('nome')
  console.log(nome)
  const limparFiltro = () => {
    form.reset()
  }

  const handleFilter = () => {
    setPage(null)
  }

  const navigate = useNavigate()
  const handleEditar = useCallback(
    (data: ModuloType) => {
      navigate(`/modulo/${data.id}/editar`)
    },
    [navigate],
  )
  const handleVisualizar = useCallback(
    (data: ModuloType) => {
      navigate(`/modulo/${data.id}`)
    },
    [navigate],
  )

  const { data, loading } = useModulosQuery({
    variables: {
      filter: {
        titulo: { iLike: `%${nome || ''}%` },
      },
      paging: {
        first: 10,
      },
      sorting: {
        field: ModuloTypeSortFields.Titulo,
        direction: SortDirection.Asc,
      },
    },
  })

  const columns = useMemo(
    () =>
      getColumns({
        visualizar: handleVisualizar,
        editar: handleEditar,
      }),
    [handleVisualizar, handleEditar],
  )

  return {
    columns,
    tabela: {
      data: data?.modulos.edges.map((edge) => edge.node) || [],
      loading,
      columns,
    },
    form,
    handleFilter,
    limparFiltro,
  }
}
