import {
  CursoTypeSortFields,
  type InscricaoType,
  InscricaoTypeSortFields,
  SortDirection,
  TurmaTypeSortFields,
  useCursosModuloSelectQuery,
  useInscricoesQuery,
  useTurmasQuery,
  useUpdateOneInscricaoMutation,
} from '@/gql/generated/graphql'
import { useCursorPaginacao } from '@/hooks/parametros.paginacao'
import { useModal } from '@/hooks/useModal'
import { apolloClient } from '@/services/Apollo/client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { getColumns } from './columns'
import { type ImportacaoSchema, schema } from './schema'

export const useTabelaInscricao = () => {
  const form = useForm<{ nome: string; turma: string; status: string }>({
    defaultValues: {
      nome: '',
      turma: '',
      status: '',
    },
  })

  const formImportacao = useForm<ImportacaoSchema>({
    defaultValues: {
      cursoId: 0,
      turmaId: 0,
      arquivo: undefined,
    },
    resolver: zodResolver(schema),
  })

  console.log(formImportacao.formState.errors)

  const { limparPaginacao, paging } = useCursorPaginacao()

  const handleFilter = () => {
    limparPaginacao()
  }

  const handleSubmitImportacao = (data: ImportacaoSchema) => {
    // alert('importar alunos')
    console.log(data)
  }

  const [nome, turma, status] = form.getValues(['nome', 'turma', 'status'])
  const limparFiltro = () => {
    form.reset()
    limparPaginacao()
  }

  const StatusFilter = status === '' ? undefined : status === 'true'

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

  const modal = useModal()
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

  const { data: cursos } = useCursosModuloSelectQuery({
    variables: {
      paging: {
        first: 50,
      },

      sorting: {
        field: CursoTypeSortFields.Nome,
        direction: SortDirection.Asc,
      },
    },
  })

  const { data: turmaOption } = useTurmasQuery({
    skip: !formImportacao.watch('cursoId'),
    variables: {
      paging: {
        first: 50,
      },
      filter: {
        cursoId: {
          eq: formImportacao.watch('cursoId'),
        },
      },
      sorting: {
        field: TurmaTypeSortFields.Nome,
        direction: SortDirection.Asc,
      },
    },
  })

  const cursoOptions =
    cursos?.cursos.edges.map((edge) => ({
      value: edge.node.id,
      label: edge.node.nome,
    })) || []

  const turmaOptions =
    turmaOption?.turmas.edges.map((edge) => ({
      value: edge.node.id,
      label: edge.node.nome,
    })) || []
  console.log(formImportacao.watch('cursoId'))
  console.log(turmaOptions)
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
    modal,
    formImportacao,
    handleSubmitImportacao,
    cursoOptions,
    turmaOptions: {
      options: turmaOptions,
      disabled: formImportacao.watch('cursoId') === 0,
    },
  }
}
