import {
  type Respostas,
  useDeleteOneRespostaMutation,
} from '@/gql/generated/graphql'

import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { getColumns } from './columns'

export const useTabelaRespostas = ({
  respostas = [],
  handleEditarForm,
}: {
  respostas?: {
    __typename?: 'Respostas'
    descricao: string
    id: number
    perguntaId: number
    resposta?: string | null
    selecionada?: boolean | null
  }[]
  handleEditarForm: (data: Respostas) => void
}) => {
  const form = useForm<{ nome: string }>({
    defaultValues: {
      nome: '',
    },
  })

  const [deletar] = useDeleteOneRespostaMutation()

  const handleDeletar = useCallback(
    (data: Respostas) => {
      deletar({
        variables: {
          input: {
            id: data.id,
          },
        },
        onCompleted() {
          toast.success('Resposta deletada com sucesso')
        },
      })
    },
    [deletar],
  )
  const handleEditar = useCallback(
    (data: Respostas) => {
      console.log(data)
      handleEditarForm(data)
    },
    [handleEditarForm],
  )

  const columns = useMemo(
    () =>
      getColumns({
        editar: handleEditar,
        deletar: handleDeletar,
      }),
    [handleEditar, handleDeletar],
  )

  return {
    tabela: {
      columns,
      data: respostas,
    },
    form,
  }
}
