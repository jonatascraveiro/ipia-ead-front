import {
  AulaTypeSortFields,
  SortDirection,
  useAulasQuery,
} from '@/gql/generated/graphql'
import type { AulaType } from '@/types/aula'
import { useQueryState } from 'nuqs'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { getColumns } from './columns'

export const useTabelaAula = () => {
  const form = useForm<{ nome: string }>({
    defaultValues: {
      nome: '',
    },
  })

  const setPage = useQueryState('page')[1]
  const [search, setSearch] = useQueryState('searchTerm')
  const [statusId, setStatusId] = useQueryState('statusId')
  console.log(search, statusId)
  const handleFilter = (data: { nome: string }) => {
    setSearch(data.nome || '')
    setPage(null)
    setStatusId(null)
  }
  const limparFiltro = () => {
    setSearch(null)
    setStatusId(null)
    setPage(null)
    form.reset()
  }

  const navigate = useNavigate()
  const handleEditar = useCallback(
    (data: AulaType) => {
      navigate(`/aula/${data.id}/editar`)
    },
    [navigate],
  )
  const handleVisualizar = useCallback(
    (data: AulaType) => {
      navigate(`/aula/${data.id}`)
    },
    [navigate],
  )

  const { data, loading } = useAulasQuery({
    variables: {
      filter: {
        titulo: { iLike: `%${search || ''}%` },
      },
      paging: {
        first: 10,
      },
      sorting: {
        field: AulaTypeSortFields.Titulo,
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
    tabela: {
      data: data?.aulas.edges.map((edge) => edge.node) || [],
      loading,
      columns,
    },
    form,
    handleFilter,
    limparFiltro,
  }
}
