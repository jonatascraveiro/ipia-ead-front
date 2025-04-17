import {
  AlunoTypeSortFields,
  SortDirection,
  useAlunosQuery,
} from '@/gql/generated/graphql'
import { useCursorPaginacao } from '@/hooks/parametros.paginacao'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { getColumns } from './columns'

export const useTabelaAlunos = () => {
  const form = useForm<{ nome: string }>({
    defaultValues: {
      nome: '',
    },
  })

  const { limparPaginacao, paging } = useCursorPaginacao()

  const handleFilter = () => {
    limparPaginacao()
  }

  const nome = form.getValues('nome')
  const limparFiltro = () => {
    form.reset()
    limparPaginacao()
  }

  const { data, loading } = useAlunosQuery({
    variables: {
      filter: {
        nome: { iLike: `%${nome || ''}%` },
      },
      paging,
      sorting: {
        field: AlunoTypeSortFields.Nome,
        direction: SortDirection.Asc,
      },
    },
  })

  const columns = useMemo(() => getColumns(), [])

  return {
    tabela: {
      data: data?.alunos.edges.map((edge) => edge.node) || [],
      loading,
      columns,
      pagination: data?.alunos.pageInfo,
    },
    form,
    handleFilter,
    limparFiltro,
  }
}
