import type { CursoType } from './curso'

export type TurmaType = {
  id: number
  nome: string
  descricao: string
  duracao: string
  fim: string
  inicio: string
  curso: CursoType
  createdAt: string
}
