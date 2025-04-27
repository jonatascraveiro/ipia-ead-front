import type { SubModuloType } from '@/gql/generated/graphql'

export type FormularioType = {
  id: number
  subModuloId: number
  nome: string
  subModulo: SubModuloType
}
