import type { ModuloType } from './modulo'

export type FormularioType = {
  id: number
  moduloId: number

  nome: string
  modulo: ModuloType
}
