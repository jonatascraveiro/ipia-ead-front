import { useListarUsuarios } from '@/services/usuario'
import { useQueryState } from 'nuqs'
import { useForm } from 'react-hook-form'
import { getColumns } from './columns'

export const useTabelaUsuario = () => {
  const form = useForm<{ nome: string }>({
    defaultValues: {
      nome: '',
    },
  })

  const { limparPaginacao, paging } = useCursorPaginacao()
  const [search, setSearch] = useQueryState('searchTerm')
  const [statusId, setStatusId] = useQueryState('statusId')

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

  console.log(search, statusId)
  const data = useListarUsuarios()

  const columns = getColumns()
  return {
    columns,
    data,
    form,
    handleFilter,
    limparFiltro,
  }
}
