import { ROTAS } from '@/routes/rotas'
import type { PerguntaType } from '@/types/pergunta'
import { useCallback, useMemo } from 'react'
import { generatePath, useNavigate } from 'react-router'
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

  const columns = useMemo(
    () =>
      getColumns({
        resposta: handleResposta,
        editar: handleEditar,
      }),
    [handleResposta, handleEditar],
  )

  return {
    tabela: {
      data: perguntas || [],
      columns,
    },
  }
}
