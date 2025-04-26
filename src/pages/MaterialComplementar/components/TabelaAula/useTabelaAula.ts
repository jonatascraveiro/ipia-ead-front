import {
  AulaTypeSortFields,
  SortDirection,
  useAulasQuery,
} from '@/gql/generated/graphql'
import { useCursorPaginacao } from '@/hooks/parametros.paginacao'
import { ROTAS } from '@/routes/rotas'
import type { AulaType } from '@/types/aula'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { generatePath, useNavigate, useParams } from 'react-router'
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

  const { data, loading } = useAulasQuery({
    variables: {
      filter: {
        titulo: { iLike: `%${nome || ''}%` },
        modulo: {
          biblioteca: { is: biblioteca },
        },
      },
      paging,
      sorting: {
        field: AulaTypeSortFields.Titulo,
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
