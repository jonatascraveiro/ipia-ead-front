import {
  CursoTypeSortFields,
  type ImportacaoHistoricoType,
  ImportacaoHistoricoTypeSortFields,
  SortDirection,
  TurmaTypeSortFields,
  useCursosModuloSelectQuery,
  useImportacoesHistoricoQuery,
  useImportarHistoricoMutation,
  useTurmasQuery,
} from '@/gql/generated/graphql'
import { useCursorPaginacao } from '@/hooks/parametros.paginacao'
import { useModal } from '@/hooks/useModal'
import { ROTAS } from '@/routes/rotas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { generatePath, useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { getColumns } from './columns'
import { type ImportacaoSchema, schema } from './schema'

export const useTabelaInscricao = () => {
  const [importar] = useImportarHistoricoMutation()

  const form = useForm<{ planilha: string; turma: string; status: string }>({
    defaultValues: {
      planilha: '',
      turma: '',
      status: '0',
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
  const [planilha, turma] = form.getValues(['planilha', 'turma'])
  const { limparPaginacao, paging } = useCursorPaginacao()

  const handleFilter = () => {
    limparPaginacao()
  }

  const handleSubmitImportacao = (data: ImportacaoSchema) => {
    importar({
      variables: {
        input: {
          turmaId: data.turmaId,
        },
        file: data.arquivo,
      },
      onCompleted: () => {},
    })
    toast.success('Planila enviada para ser processada com sucesso')
    modal.closeModal()
  }

  const limparFiltro = () => {
    form.reset()
    limparPaginacao()
  }

  const { data, loading } = useImportacoesHistoricoQuery({
    variables: {
      filter: {
        nomePlanilha: { iLike: `%${planilha}%` },
        turma: { nome: { iLike: `%${turma}%` } },
      },
      paging,
      sorting: {
        field: ImportacaoHistoricoTypeSortFields.CreatedAt,
        direction: SortDirection.Desc,
      },
    },
  })
  const navigate = useNavigate()
  const modal = useModal()

  const visualizar = useCallback(
    (data: ImportacaoHistoricoType) => {
      const url = generatePath(ROTAS.INSRICAO_IMPORTACAO, {
        id: String(data.id) || '',
      })

      navigate(url)
    },
    [navigate],
  )
  const columns = useMemo(() => getColumns({ visualizar }), [visualizar])

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
      data: data?.importacaoHistoricoTypes.edges.map((edge) => edge.node) || [],
      loading,
      columns,
      pagination: data?.importacaoHistoricoTypes.pageInfo,
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
