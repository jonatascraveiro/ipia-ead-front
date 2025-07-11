import {
  SortDirection,
  TurmaTypeSortFields,
  useTurmasQuery,
} from '@/gql/generated/graphql'
import { useCursorPaginacao } from '@/hooks/parametros.paginacao'
import { ROTAS } from '@/routes/rotas'
import type { TurmaType } from '@/types/turma'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { generatePath, useNavigate } from 'react-router'
import { getColumns } from './columns'

export const useTabelaTurma = ({ cursoId }: { cursoId?: string }) => {
  const form = useForm<{ nome: string }>({
    defaultValues: {
      nome: '',
    },
  })

  const { limparPaginacao, paging } = useCursorPaginacao()

  const [nome] = form.getValues(['nome'])
  const handleFilter = () => {
    limparPaginacao()
  }
  const limparFiltro = () => {
    limparPaginacao()
    form.reset()
  }

  const navigate = useNavigate()
  const handleEditar = useCallback(
    (data: TurmaType) => {
      navigate(generatePath(ROTAS.TURMA_EDITAR, { cursoId, id: data.id }))
    },
    [cursoId, navigate],
  )
  const handleDataModulos = useCallback(
    (data: TurmaType) => {
      navigate(generatePath(ROTAS.TURMA_MODULO, { cursoId, turmaId: data.id }))
    },
    [cursoId, navigate],
  )
  // const handleVisualizar = useCallback(
  //   (data: TurmaType) => {
  //     navigate(`/turma/${data.id}`)
  //   },
  //   [navigate],
  // )

  const { data, loading } = useTurmasQuery({
    variables: {
      filter: {
        nome: { iLike: `%${nome || ''}%` },
        cursoId: { eq: Number(cursoId) },
      },
      paging,
      sorting: {
        field: TurmaTypeSortFields.Nome,
        direction: SortDirection.Asc,
      },
    },
  })

  const columns = useMemo(
    () =>
      getColumns({
        // visualizar: handleVisualizar,
        editar: handleEditar,
        datasModulos: handleDataModulos,
      }),
    [handleEditar, handleDataModulos],
  )

  return {
    columns,
    tabela: {
      data: data?.turmas.edges.map((edge) => edge.node) || [],
      loading,
      columns,
      pagination: data?.turmas.pageInfo,
    },
    form,
    handleFilter,
    limparFiltro,
  }
}
