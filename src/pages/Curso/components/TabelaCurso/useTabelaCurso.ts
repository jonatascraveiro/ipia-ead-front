import {
  CursoTypeSortFields,
  SortDirection,
  useCursosQuery,
  useDeleteCursoMutation,
} from '@/gql/generated/graphql'
import { useCursorPaginacao } from '@/hooks/parametros.paginacao'

import { apolloClient } from '@/services/Apollo/client'
import type { CursoType } from '@/types/curso'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { getColumns } from './columns'

export const useTabelaCurso = () => {
  const form = useForm<{ nome: string; status: string | number }>({
    defaultValues: {
      nome: '',
      status: '',
    },
  })

  const { limparPaginacao, paging } = useCursorPaginacao()

  const [deleteCurso] = useDeleteCursoMutation()

  const [nome, status] = form.getValues(['nome', 'status'])

  const handleFilter = () => {
    limparPaginacao()
  }
  const limparFiltro = () => {
    limparPaginacao()
    form.reset()
  }

  const navigate = useNavigate()
  const handleEditar = useCallback(
    (data: CursoType) => {
      navigate(`/curso/${data.id}/editar`)
    },
    [navigate],
  )

  const handleModulo = useCallback(
    (data: CursoType) => {
      navigate(`/curso/${data.id}/modulo`)
    },
    [navigate],
  )

  const handleBiblioteca = useCallback(
    (data: CursoType) => {
      navigate(`/curso/${data.id}/biblioteca`)
    },
    [navigate],
  )
  const handleTurma = useCallback(
    (data: CursoType) => {
      navigate(`/curso/${data.id}/turma`)
    },
    [navigate],
  )

  const handleVisualizar = useCallback(
    (data: CursoType) => {
      navigate(`/curso/${data.id}`)
    },
    [navigate],
  )

  const handleDeletar = useCallback(
    (data: CursoType) => {
      deleteCurso({
        variables: {
          input: {
            id: data.id,
          },
        },
        onCompleted() {
          toast.success('Módulo deletado com sucesso')
          apolloClient.cache.evict({ fieldName: 'curso' })
        },
      })
    },
    [deleteCurso],
  )

  const isActive = status === '' ? undefined : status === 1

  const { data, loading } = useCursosQuery({
    variables: {
      filter: {
        nome: { iLike: `%${nome || ''}%` },
        ativo: { is: isActive },
      },
      paging,
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
        deletar: handleDeletar,
        modulo: handleModulo,
        biblioteca: handleBiblioteca,
        turma: handleTurma,
      }),
    [
      handleVisualizar,
      handleEditar,
      handleModulo,
      handleBiblioteca,
      handleTurma,
      handleDeletar,
    ],
  )

  return {
    columns,
    tabela: {
      data: data?.cursos.edges.map((edge) => edge.node) || [],
      loading,
      columns,
      pagination: data?.cursos.pageInfo,
    },
    form,
    handleFilter,
    limparFiltro,
  }
}
