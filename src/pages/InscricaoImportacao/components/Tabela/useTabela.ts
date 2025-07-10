import {
  InscricaoTypeSortFields,
  SortDirection,
  useImportacaoHistoricoQuery,
  useInscricoesImportacaoQuery,
} from '@/gql/generated/graphql'
import { useCursorPaginacao } from '@/hooks/parametros.paginacao'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router'
import { getColumns } from './columns'

export const useTabelaInscricao = () => {
  const id = useParams().id as string

  const form = useForm<{
    nome: string
    turma: string
    status: string
    matricula: string
  }>({
    defaultValues: {
      matricula: '',
      nome: '',
      turma: '',
      status: '0',
    },
  })

  const { data: importacao } = useImportacaoHistoricoQuery({
    variables: { id: +id },
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

  const { data, loading } = useInscricoesImportacaoQuery({
    variables: {
      filter: {
        aluno: {
          nome: { iLike: `%${nome || ''}%` },
          matricula: { iLike: `%${matricula || ''}%` },
        },
        importacaoHistorico: { id: { eq: +id } },

        turma: { nome: { iLike: `%${turma || ''}%` } },
        status: { is: StatusFilter },
      },

      paging,
      sorting: {
        field: InscricaoTypeSortFields.AlunoId,
        direction: SortDirection.Desc,
      },
    },
    skip: !id,
  })

  // const [updateInscricaoMutate] = useUpdateOneInscricaoMutation()

  const columns = useMemo(() => getColumns(), [])

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
    importacao: importacao?.importacaoHistoricoType,
  }
}
