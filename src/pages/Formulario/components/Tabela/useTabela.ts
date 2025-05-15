import {
  type Formularios,
  FormulariosSortFields,
  SortDirection,
  useDeleteOneFormularioMutation,
  useFormulariosQuery,
} from '@/gql/generated/graphql'
import { useCursorPaginacao } from '@/hooks/parametros.paginacao'
import { ROTAS } from '@/routes/rotas'
import { apolloClient } from '@/services/Apollo/client'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { generatePath, useNavigate } from 'react-router'
import { toast } from 'react-toastify'
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
  const [mutateDelete] = useDeleteOneFormularioMutation()
  const limparFiltro = () => {
    form.reset()
    limparPaginacao()
  }

  const handleFilter = () => {
    limparPaginacao()
  }

  const navigate = useNavigate()
  const handleEditar = useCallback(
    (data: Formularios) => {
      navigate(
        generatePath(ROTAS.FORMULARIO_EDITAR, {
          id: data.id,
          subModuloId: subModuloId,
        }),
      )
    },
    [navigate, subModuloId],
  )

  const handleDeletar = useCallback(
    (data: Formularios) => {
      mutateDelete({
        variables: {
          input: {
            id: data.id,
          },
        },
        onCompleted() {
          toast.success('Formulário deletado com sucesso')
          apolloClient.cache.evict({ fieldName: 'formularios' })
        },
      })
    },
    [mutateDelete],
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
        deletar: handleDeletar,
      }),
    [handleDeletar, handleEditar],
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
