import { useDeleteOnePerguntaMutation } from '@/gql/generated/graphql'
import { useDialog } from '@/hooks/useDialog'
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

  const { showDialog, closeDialog } = useDialog()
  const handleDeletar = useCallback(
    (data: PerguntaType) => {
      showDialog({
        title: 'Deletar item?',
        description: `Você tem certeza que deseja deletar a pergunta ?`,
        content: undefined,
        onConfirm: () => {
          mutateDelete({
            variables: {
              input: {
                id: data.id,
              },
            },
            onCompleted() {
              toast.success('Pergunta deletada com sucesso')
              closeDialog()
              apolloClient.cache.evict({ fieldName: 'perguntas' })
              apolloClient.cache.evict({ fieldName: 'formulario' })
            },
            refetchQueries: ['AulaFormulario'],
          })
        },
      })
    },
    [closeDialog, mutateDelete, showDialog],
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
