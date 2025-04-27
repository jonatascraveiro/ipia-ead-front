import {
  AulaTypeSortFields,
  SortDirection,
  useAulasQuery,
  useDeleteOneAulaMutation,
} from '@/gql/generated/graphql'
import { useCursorPaginacao } from '@/hooks/parametros.paginacao'
import { ROTAS } from '@/routes/rotas'
import type { AulaType } from '@/types/aula'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { generatePath, useNavigate } from 'react-router'
import { getColumns } from './columns'

export const useTabelaAula = ({
  biblioteca,
  subModuloId,
}: { biblioteca: boolean; subModuloId: string }) => {
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
        generatePath(ROTAS.AULA_EDITAR, {
          subModuloId: subModuloId,
          id: data.id,
        }),
      )
    },
    [navigate, subModuloId],
  )

  const [mutateDelete] = useDeleteOneAulaMutation()
  const handleDeletar = useCallback(
    (data: AulaType) => {
      mutateDelete({
        variables: {
          input: {
            id: data.id,
          },
        },
        onCompleted() {
          navigate(rotaUrl)
        },
      })
    },
    [mutateDelete, navigate, rotaUrl],
  )

  const { data, loading } = useAulasQuery({
    variables: {
      filter: {
        titulo: { iLike: `%${nome || ''}%` },
        subModuloId: { eq: +subModuloId },
      },
      paging,
      sorting: [
        {
          field: AulaTypeSortFields.Ordem,
          direction: SortDirection.Asc,
        },
        {
          field: AulaTypeSortFields.Titulo,
          direction: SortDirection.Asc,
        },
      ],
    },
  })

  const columns = useMemo(
    () =>
      getColumns({
        deletar: handleDeletar,
        editar: handleEditar,
      }),
    [handleDeletar, handleEditar],
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
