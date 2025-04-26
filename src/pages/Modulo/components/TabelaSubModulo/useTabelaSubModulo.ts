import {
  type SubModuloType,
  useDeleteOneSubModuloMutation,
} from '@/gql/generated/graphql'
import { ROTAS } from '@/routes/rotas'
import { apolloClient } from '@/services/Apollo/client'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
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
  const form = useForm<{ nome: string }>({
    defaultValues: {
      nome: '',
    },
  })

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

  const columns = useMemo(
    () =>
      getColumns({
        aula: handleAula,
        editar: handleEditar,
        deletar: handleDeletar,
      }),
    [handleEditar, handleDeletar, handleAula],
  )

  return {
    tabela: {
      columns,
      data: subModulos,
    },
    form,
  }
}
