import type { ColumnDef } from '@tanstack/react-table'

export const getColumns = (): ColumnDef<{
  id: number
  nome: string
  email: string
}>[] => {
  return [
    {
      accessorKey: 'nome',
      header: () => <span>Nome</span>,
    },
    {
      accessorKey: 'email',
      header: () => <span>Email</span>,
    },
  ]
}
