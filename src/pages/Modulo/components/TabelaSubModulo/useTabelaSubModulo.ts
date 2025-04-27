import {
  type SubModuloType,
  useDeleteOneSubModuloMutation,
} from '@/gql/generated/graphql'
import { ROTAS } from '@/routes/rotas'
import { apolloClient } from '@/services/Apollo/client'
import { useCallback, useMemo } from 'react'
import { generatePath, useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { getColumns } from './columns'

export const useTabelaSubModulo = ({
  subModulos = [],
  handleEditarForm,
}: {
  subModulos?: Partial<SubModuloType>[] | SubModuloType[] | null
  handleEditarForm: (data: SubModuloType) => void
}) => {
  const [deletar] = useDeleteOneSubModuloMutation()

  const handleDeletar = useCallback(
    (data: SubModuloType) => {
      deletar({
        variables: {
          input: {
            id: data.id,
          },
        },
        onCompleted() {
          toast.success('SubMódulo deletado com sucesso')
          apolloClient.cache.evict({ fieldName: 'modulo' })
        },
      })
    },
    [deletar],
  )

  const navigate = useNavigate()
  const handleEditar = useCallback(
    (data: SubModuloType) => {
      handleEditarForm(data)
    },
    [handleEditarForm],
  )

  const handleAula = useCallback(
    (data: SubModuloType) => {
      navigate(generatePath(ROTAS.AULA, { subModuloId: data.id }))
    },
    [navigate],
  )

  const handleFormulario = useCallback(
    (data: SubModuloType) => {
      navigate(generatePath(ROTAS.FORMULARIO, { subModuloId: data.id }))
    },
    [navigate],
  )

  const columns = useMemo(
    () =>
      getColumns({
        aula: handleAula,
        editar: handleEditar,
        deletar: handleDeletar,
        formulario: handleFormulario,
      }),
    [handleAula, handleEditar, handleDeletar, handleFormulario],
  )

  return {
    tabela: {
      columns,
      data: subModulos,
    },
  }
}
