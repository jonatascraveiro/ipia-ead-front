import type { CursoType } from './curso'

export type ModuloType = {
  id: number
  cursoId: number
  descricao: string
  ordem: number
  titulo: string
  curso: CursoType
}
