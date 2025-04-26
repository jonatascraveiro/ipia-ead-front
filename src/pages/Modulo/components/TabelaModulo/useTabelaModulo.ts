import {
  ModuloTypeSortFields,
  SortDirection,
  useModulosQuery,
} from '@/gql/generated/graphql'
import { useCursorPaginacao } from '@/hooks/parametros.paginacao'
import { ROTAS } from '@/routes/rotas'
import type { ModuloType } from '@/types/modulo'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { generatePath, useNavigate } from 'react-router'
import { getColumns } from './columns'

export const useTabelaModulo = ({
  cursoId,
  biblioteca,
}: { cursoId: string; biblioteca: boolean }) => {
  const form = useForm<{ nome: string }>({
    defaultValues: {
      nome: '',
    },
  })

  const { limparPaginacao, paging } = useCursorPaginacao()

  const nome = form.getValues('nome')

  const limparFiltro = () => {
    form.reset()
    limparPaginacao()
  }

  const handleFilter = () => {
    limparPaginacao()
  }

  const navigate = useNavigate()
  const handleEditar = useCallback(
    (data: ModuloType) => {
      navigate(
        generatePath(
          biblioteca ? ROTAS.BIBLIOTECA_EDITAR : ROTAS.MODULO_EDITAR,
          { id: data.id, cursoId },
        ),
      )
    },
    [biblioteca, cursoId, navigate],
  )

  const handleAula = useCallback(
    (data: ModuloType) => {
      console.log(data)
      navigate(generatePath(ROTAS.FORMULARIO, { moduloId: data.id }))
    },
    [navigate],
  )

  const handleVisualizar = useCallback(
    (data: ModuloType) => {
      navigate(
        biblioteca
          ? generatePath(ROTAS.MATERIAL_COMPLEMENTAR, { moduloId: data.id })
          : generatePath(ROTAS.MODULO_VISUALIZAR, { id: data.id, cursoId }),
      )
    },
    [biblioteca, cursoId, navigate],
  )

  const { data, loading } = useModulosQuery({
    variables: {
      filter: {
        titulo: { iLike: `%${nome || ''}%` },
        cursoId: { eq: +cursoId },
        biblioteca: { is: biblioteca },
      },
      paging,
      sorting: {
        field: ModuloTypeSortFields.Titulo,
        direction: SortDirection.Asc,
      },
    },
  })

  const columns = useMemo(
    () =>
      getColumns({
        visualizar: handleVisualizar,
        editar: handleEditar,
        aula: handleAula,
        formulario: handleAula,
      }),
    [handleVisualizar, handleEditar, handleAula],
  )

  return {
    columns,
    tabela: {
      data: data?.modulos.edges.map((edge) => edge.node) || [],
      loading,
      columns,
      pagination: data?.modulos.pageInfo,
    },
    form,
    handleFilter,
    limparFiltro,
  }
}
