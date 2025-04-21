import {
  PerguntasSortFields,
  SortDirection,
  usePerguntasQuery,
} from '@/gql/generated/graphql'
import { useCursorPaginacao } from '@/hooks/parametros.paginacao'
import type { PerguntaType } from '@/types/pergunta'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { getColumns } from './columns'

export const useTabelaPerguntas = () => {
  const form = useForm<{ nome: string; modulo: string; formulario: string }>({
    defaultValues: {
      nome: '',
      modulo: '',
      formulario: '',
    },
  })

  const { limparPaginacao, paging } = useCursorPaginacao()

  const [nome, formulario] = form.getValues(['nome', 'formulario'])

  const limparFiltro = () => {
    form.reset()
    limparPaginacao()
  }

  const handleFilter = () => {
    limparPaginacao()
  }

  const navigate = useNavigate()
  const handleEditar = useCallback(
    (data: PerguntaType) => {
      navigate(`/pergunta/${data.id}/editar`)
    },
    [navigate],
  )
  const handleVisualizar = useCallback(
    (data: PerguntaType) => {
      navigate(`/pergunta/${data.id}`)
    },
    [navigate],
  )

  const { data, loading } = usePerguntasQuery({
    variables: {
      filter: {
        descricao: { iLike: `%${nome || ''}%` },
        formulario: { nome: { iLike: `%${formulario || ''}%` } },
      },
      paging,
      sorting: {
        field: PerguntasSortFields.Descricao,
        direction: SortDirection.Asc,
      },
    },
  })

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
    tabela: {
      data: data?.perguntas.edges.map((edge) => edge.node) || [],
      loading,
      columns,
      pagination: data?.perguntas.pageInfo,
    },
    form,
    handleFilter,
    limparFiltro,
  }
}
