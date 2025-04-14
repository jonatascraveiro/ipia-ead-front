import type { ModuloType } from './modulo'

export type AulaType = {
  id: number
  moduloId: number
  descricao: string
  ordem: number
  duracao: number
  titulo: string
  videoUrl?: string
  modulo?: Partial<ModuloType>
}
