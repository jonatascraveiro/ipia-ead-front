import {
  SortDirection,
  TurmaTypeSortFields,
  useTurmasQuery,
} from '@/gql/generated/graphql'
import { useCursorPaginacao } from '@/hooks/parametros.paginacao'
import type { TurmaType } from '@/types/turma'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { getColumns } from './columns'

export const useTabelaTurma = () => {
  const form = useForm<{ nome: string }>({
    defaultValues: {
      nome: '',
    },
  })

  const { limparPaginacao, paging } = useCursorPaginacao()

  const [nome] = form.getValues(['nome'])
  const handleFilter = () => {
    limparPaginacao()
  }
  const limparFiltro = () => {
    limparPaginacao()
    form.reset()
  }

  const navigate = useNavigate()
  const handleEditar = useCallback(
    (data: TurmaType) => {
      navigate(`/turma/${data.id}/editar`)
    },
    [navigate],
  )
  const handleVisualizar = useCallback(
    (data: TurmaType) => {
      navigate(`/turma/${data.id}`)
    },
    [navigate],
  )

  const { data, loading } = useTurmasQuery({
    variables: {
      filter: {
        nome: { iLike: `%${nome || ''}%` },
      },
      paging,
      sorting: {
        field: TurmaTypeSortFields.Nome,
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
      data: data?.turmas.edges.map((edge) => edge.node) || [],
      loading,
      columns,
      pagination: data?.turmas.pageInfo,
    },
    form,
    handleFilter,
    limparFiltro,
  }
}
