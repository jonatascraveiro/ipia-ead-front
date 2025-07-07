import {
  type InscricaoType,
  InscricaoTypeSortFields,
  SortDirection,
  useInscricoesQuery,
  useUpdateOneInscricaoMutation,
} from '@/gql/generated/graphql'
import { useCursorPaginacao } from '@/hooks/parametros.paginacao'
import { apolloClient } from '@/services/Apollo/client'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { getColumns } from './columns'

export const useTabelaInscricao = () => {
  const form = useForm<{ nome: string; turma: string; status: string }>({
    defaultValues: {
      nome: '',
      turma: '',
      status: '',
    },
  })

  const { limparPaginacao, paging } = useCursorPaginacao()

  const handleFilter = () => {
    limparPaginacao()
  }

  const [nome, turma, status] = form.getValues(['nome', 'turma', 'status'])
  const limparFiltro = () => {
    form.reset()
    limparPaginacao()
  }
  console.log(status)
  const StatusFilter = status === '' ? undefined : status === 'true'
  console.log(StatusFilter)
  const { data, loading } = useInscricoesQuery({
    variables: {
      filter: {
        aluno: { nome: { iLike: `%${nome || ''}%` } },

        turma: { nome: { iLike: `%${turma || ''}%` } },
        status: { is: StatusFilter },
      },
      paging,
      sorting: {
        field: InscricaoTypeSortFields.CreatedAt,
        direction: SortDirection.Desc,
      },
    },
  })

  const [updateInscricaoMutate] = useUpdateOneInscricaoMutation()

  const matricular = useCallback(
    (data: InscricaoType) => {
      updateInscricaoMutate({
        variables: {
          input: {
            id: data.id,
            update: {
              status: true,
            },
          },
        },
        onCompleted: () => {
          apolloClient.cache.evict({ fieldName: 'inscricoes' })
          toast.success('Inscrição confirmada com sucesso')
        },
      })
    },
    [updateInscricaoMutate],
  )
  const columns = useMemo(() => getColumns({ matricular }), [matricular])

  return {
    tabela: {
      data: data?.inscricoes.edges.map((edge) => edge.node) || [],
      loading,
      columns,
      pagination: data?.inscricoes.pageInfo,
    },
    form,
    handleFilter,
    limparFiltro,
  }
}
