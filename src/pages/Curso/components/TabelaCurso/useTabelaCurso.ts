import {
  CursoTypeSortFields,
  SortDirection,
  useCursosQuery,
} from '@/gql/generated/graphql'
import type { CursoType } from '@/types/curso'
import { useQueryState } from 'nuqs'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { getColumns } from './columns'

export const useTabelaCurso = () => {
  const form = useForm<{ nome: string; status: string | number }>({
    defaultValues: {
      nome: '',
      status: '',
    },
  })

  const setPage = useQueryState('page')[1]
  // const [search, setSearch] = us('searchTerm')
  // const [statusId, setStatusId] = useQueryState('statusId')

  const [nome, status] = form.getValues(['nome', 'status'])

  const handleFilter = () => {
    setPage(null)
  }
  const limparFiltro = () => {
    setPage(null)
    form.reset()
  }

  const navigate = useNavigate()
  const handleEditar = useCallback(
    (data: CursoType) => {
      navigate(`/curso/${data.id}/editar`)
    },
    [navigate],
  )
  const handleVisualizar = useCallback(
    (data: CursoType) => {
      navigate(`/curso/${data.id}`)
    },
    [navigate],
  )

  const isActive = status === '' ? undefined : status === '1'
  const { data, loading } = useCursosQuery({
    variables: {
      filter: {
        nome: { iLike: `%${nome || ''}%` },
        ativo: { is: isActive },
      },
      paging: {
        first: 10,
      },
      sorting: {
        field: CursoTypeSortFields.Nome,
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
      data: data?.cursos.edges.map((edge) => edge.node) || [],
      loading,
      columns,
    },
    form,
    handleFilter,
    limparFiltro,
  }
}
