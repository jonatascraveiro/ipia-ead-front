import { useListarTurmas } from '@/services/turma'

import type { TurmaType } from '@/types/turma'
import { useQueryState } from 'nuqs'
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

  const data = useListarTurmas()

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
    data,
    form,
    handleFilter,
    limparFiltro,
  }
}
