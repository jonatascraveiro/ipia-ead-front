import {
  CursoTypeSortFields,
  SortDirection,
  useCursosQuery,
  useDeleteCursoMutation,
} from '@/gql/generated/graphql'
import { useCursorPaginacao } from '@/hooks/parametros.paginacao'

import { useDialog } from '@/hooks/useDialog'
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

  const [mutateDelete] = useDeleteCursoMutation()

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
  const { showDialog, closeDialog } = useDialog()
  const handleDeletar = useCallback(
    (data: CursoType) => {
      showDialog({
        title: 'Deletar item?',
        description: `Você tem certeza que deseja deletar ${data.nome}?`,
        content: undefined,
        onConfirm: () => {
          mutateDelete({
            variables: {
              input: {
                id: data.id,
              },
            },
            onCompleted() {
              toast.success('Curso deletado com sucesso')
              closeDialog()
              apolloClient.cache.evict({ fieldName: 'curso' })
            },
          })
        },
      })
    },
    [closeDialog, mutateDelete, showDialog],
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
