import {
  AulaTypeSortFields,
  SortDirection,
  useAulasQuery,
  useDeleteOneAulaMutation,
} from '@/gql/generated/graphql'
import { useCursorPaginacao } from '@/hooks/parametros.paginacao'
import { useDialog } from '@/hooks/useDialog'
import { ROTAS } from '@/routes/rotas'
import { apolloClient } from '@/services/Apollo/client'
import type { AulaType } from '@/types/aula'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { generatePath, useNavigate, useParams } from 'react-router'
import { toast } from 'react-toastify'
import { getColumns } from './columns'

export const useTabelaAula = ({ biblioteca }: { biblioteca: boolean }) => {
  const moduloId = useParams().moduloId as string

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

  const navigate = useNavigate()
  const [mutateDelete] = useDeleteOneAulaMutation()

  const rotaUrl = biblioteca ? ROTAS.MATERIAL_COMPLEMENTAR : ROTAS.AULA

  const handleEditar = useCallback(
    (data: AulaType) => {
      navigate(
        generatePath(ROTAS.MATERIAL_COMPLEMENTAR_EDITAR, {
          id: data.id,
          moduloId,
        }) as string,
      )
    },
    [moduloId, navigate],
  )
  const handleVisualizar = useCallback(
    (data: AulaType) => {
      navigate(`${rotaUrl}/${data.id}`)
    },
    [navigate, rotaUrl],
  )

  const { showDialog, closeDialog } = useDialog()
  const handleDeletar = useCallback(
    (data: AulaType) => {
      showDialog({
        title: 'Deletar item?',
        description: `Você tem certeza que deseja deletar ${data.titulo}?`,
        content: undefined,
        onConfirm: () => {
          mutateDelete({
            variables: {
              input: {
                id: data.id,
              },
            },
            onCompleted() {
              const mensagem = 'Aula deletada com sucesso'
              toast.success(mensagem)
              closeDialog()
              apolloClient.cache.evict({ fieldName: 'aulas' })
              apolloClient.cache.evict({ fieldName: 'modulos' })
            },
          })
        },
      })
    },
    [closeDialog, mutateDelete, showDialog],
  )

  const { data, loading } = useAulasQuery({
    variables: {
      filter: {
        titulo: { iLike: `%${nome || ''}%` },
        modulo: {
          biblioteca: { is: biblioteca },
          id: { eq: +moduloId },
        },
      },
      paging,
      sorting: [
        {
          field: AulaTypeSortFields.Ordem,
          direction: SortDirection.Asc,
        },
        {
          field: AulaTypeSortFields.Titulo,
          direction: SortDirection.Asc,
        },
      ],
    },
  })

  const columns = useMemo(
    () =>
      getColumns({
        visualizar: handleVisualizar,
        editar: handleEditar,
        deletar: handleDeletar,
      }),
    [handleVisualizar, handleEditar, handleDeletar],
  )

  return {
    tabela: {
      data: data?.aulas.edges.map((edge) => edge.node) || [],
      loading,
      columns,
      pagination: data?.aulas.pageInfo,
    },
    form,
    handleFilter,
    limparFiltro,
  }
}
