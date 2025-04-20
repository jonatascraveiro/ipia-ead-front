import {
  FormulariosSortFields,
  SortDirection,
  useFormulariosQuery,
} from '@/gql/generated/graphql'
import { useCursorPaginacao } from '@/hooks/parametros.paginacao'
import type { FormularioType } from '@/types/formulario'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { getColumns } from './columns'

export const useTabelaFormulario = () => {
  const form = useForm<{ nome: string }>({
    defaultValues: {
      nome: '',
    },
  })

  const { limparPaginacao, paging } = useCursorPaginacao()

  const nome = form.getValues('nome')

  const limparFiltro = () => {
    form.reset()
    limparPaginacao()
  }

  const handleFilter = () => {
    limparPaginacao()
  }

  const navigate = useNavigate()
  const handleEditar = useCallback(
    (data: FormularioType) => {
      navigate(`/formulario/${data.id}/editar`)
    },
    [navigate],
  )
  const handleVisualizar = useCallback(
    (data: FormularioType) => {
      navigate(`/formulario/${data.id}`)
    },
    [navigate],
  )

  const { data, loading } = useFormulariosQuery({
    variables: {
      filter: {
        nome: { iLike: `%${nome || ''}%` },
      },
      paging,
      sorting: {
        field: FormulariosSortFields.Nome,
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
      data: data?.formularios.edges.map((edge) => edge.node) || [],
      loading,
      columns,
      pagination: data?.formularios.pageInfo,
    },
    form,
    handleFilter,
    limparFiltro,
  }
}
