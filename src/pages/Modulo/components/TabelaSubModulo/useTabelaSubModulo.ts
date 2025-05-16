import {
  type SubModuloType,
  useDeleteOneSubModuloMutation,
} from '@/gql/generated/graphql'
import { useDialog } from '@/hooks/useDialog'
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
  subModulos?: Partial<SubModuloType>[] | SubModuloType[]
  handleEditarForm: (data: SubModuloType) => void
}) => {
  const [mutateDelete] = useDeleteOneSubModuloMutation()

  const { showDialog, closeDialog } = useDialog()
  const handleDeletar = useCallback(
    (data: SubModuloType) => {
      showDialog({
        title: 'Deletar item?',
        description: `Você tem certeza que deseja deletar ${data.titulo}?`,
        content: undefined,
        onConfirm: () => {
          mutateDelete({
            variables: {
              input: {
                id: data.id,
              },
            },
            onCompleted() {
              toast.success('SubMódulo deletado com sucesso')
              closeDialog()
              apolloClient.cache.evict({ fieldName: 'modulo' })
            },
          })
        },
      })
    },
    [closeDialog, mutateDelete, showDialog],
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
