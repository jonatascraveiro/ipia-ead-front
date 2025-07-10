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
  const form = useForm<{
    nome: string
    turma: string
    status: string
    matricula: string
  }>({
    defaultValues: {
      nome: '',
      matricula: '',
      turma: '',
      status: '0',
    },
  })

  const { limparPaginacao, paging } = useCursorPaginacao()

  const handleFilter = () => {
    limparPaginacao()
  }

  const [nome, turma, status, matricula] = form.getValues([
    'nome',
    'turma',
    'status',
    'matricula',
  ])
  const limparFiltro = () => {
    form.reset()
    limparPaginacao()
  }

  const StatusFilter = status === '0' ? undefined : status === 'true'

  const { data, loading } = useInscricoesQuery({
    variables: {
      filter: {
        aluno: {
          nome: { iLike: `%${nome || ''}%` },
          matricula: { iLike: `%${matricula || ''}%` },
        },

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
