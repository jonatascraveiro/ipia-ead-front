import type { FormularioType } from './formulario'

export type PerguntaType = {
  id: number
  formularioId: number
  descricao: string
  multiEscolha: boolean
  tipo?: string | null
  formulario?: FormularioType
}
