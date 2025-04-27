import {
  FormulariosSortFields,
  SortDirection,
  useFormulariosQuery,
} from '@/gql/generated/graphql'
import { useCursorPaginacao } from '@/hooks/parametros.paginacao'
import { ROTAS } from '@/routes/rotas'
import type { FormularioType } from '@/types/formulario'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { generatePath, useNavigate } from 'react-router'
import { getColumns } from './columns'

export const useTabelaFormulario = ({
  subModuloId,
}: { subModuloId: number }) => {
  const form = useForm<{ nome: string; modulo: string }>({
    defaultValues: {
      nome: '',
      modulo: '',
    },
  })

  const { limparPaginacao, paging } = useCursorPaginacao()

  const [nome, modulo] = form.getValues(['nome', 'modulo'])

  const limparFiltro = () => {
    form.reset()
    limparPaginacao()
  }

  const handleFilter = () => {
    limparPaginacao()
  }

  const navigate = useNavigate()
  const handleEditar = useCallback(
    (data: FormularioType) => {
      navigate(
        generatePath(ROTAS.FORMULARIO_EDITAR, {
          id: data.id,
          subModuloId: subModuloId,
        }),
      )
    },
    [navigate, subModuloId],
  )

  const { data, loading } = useFormulariosQuery({
    variables: {
      filter: {
        nome: { iLike: `%${nome || ''}%` },
        subModulo: {
          titulo: { iLike: `%${modulo || ''}%` },
          id: { eq: +subModuloId },
        },
      },
      paging,
      sorting: {
        field: FormulariosSortFields.Nome,
        direction: SortDirection.Asc,
      },
    },
  })

  const columns = useMemo(
    () =>
      getColumns({
        editar: handleEditar,
      }),
    [handleEditar],
  )

  return {
    columns,
    tabela: {
      data: data?.formularios.edges.map((edge) => edge.node) || [],
      loading,
      columns,
      pagination: data?.formularios.pageInfo,
    },
    form,
    handleFilter,
    limparFiltro,
  }
}
