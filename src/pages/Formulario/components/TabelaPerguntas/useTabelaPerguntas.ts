import { useDeleteOnePerguntaMutation } from '@/gql/generated/graphql'
import { ROTAS } from '@/routes/rotas'
import { apolloClient } from '@/services/Apollo/client'
import type { PerguntaType } from '@/types/pergunta'
import { useCallback, useMemo } from 'react'
import { generatePath, useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { getColumns } from './columns'

export const useTabelaPerguntas = ({
  perguntas,
  handleEditarForm,
}: {
  perguntas: PerguntaType[]
  handleEditarForm: (data: PerguntaType) => void
}) => {
  const navigate = useNavigate()
  const handleEditar = useCallback(
    (data: PerguntaType) => {
      handleEditarForm(data)
    },
    [handleEditarForm],
  )

  const handleResposta = useCallback(
    (data: PerguntaType) => {
      navigate(generatePath(ROTAS.PERGUNTA_EDITAR, { id: data.id }))
    },
    [navigate],
  )

  const [mutateDelete] = useDeleteOnePerguntaMutation()
  const handleDeletar = useCallback(
    (data: PerguntaType) => {
      mutateDelete({
        variables: {
          input: {
            id: data.id,
          },
        },
        onCompleted() {
          toast.success('Pergunta deletada com sucesso')
          apolloClient.cache.evict({ fieldName: 'perguntas' })
          apolloClient.cache.evict({ fieldName: 'formulario' })
        },
      })
    },
    [mutateDelete],
  )

  const columns = useMemo(
    () =>
      getColumns({
        resposta: handleResposta,
        editar: handleEditar,
        deletar: handleDeletar,
      }),
    [handleResposta, handleEditar, handleDeletar],
  )

  return {
    tabela: {
      data: perguntas || [],
      columns,
    },
  }
}
