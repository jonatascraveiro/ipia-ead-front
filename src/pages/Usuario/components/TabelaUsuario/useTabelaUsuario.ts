import {
  SortDirection,
  UsuarioTypeSortFields,
  useUsuariosQuery,
} from '@/gql/generated/graphql'
import { useCursorPaginacao } from '@/hooks/parametros.paginacao'
import { useForm } from 'react-hook-form'
import { getColumns } from './columns'

export const useTabelaUsuario = () => {
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

  const { data, loading } = useUsuariosQuery({
    variables: {
      filter: {
        nome: { iLike: `%${nome || ''}%` },
      },
      paging,
      sorting: {
        field: UsuarioTypeSortFields.Nome,
        direction: SortDirection.Asc,
      },
    },
  })

  const columns = getColumns()
  return {
    tabela: {
      data: data?.usuarios.edges.map((edge) => edge.node) || [],
      loading,
      columns,
      pagination: data?.usuarios.pageInfo,
    },
    form,
    handleFilter,
    limparFiltro,
  }
}
