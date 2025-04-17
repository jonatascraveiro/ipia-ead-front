import type { ColumnDef } from '@tanstack/react-table'

export const getColumns = (): ColumnDef<{
  id: number
  nome: string
  email: string
  cpf: string
}>[] => {
  return [
    {
      accessorKey: 'id',
      header: () => <span>#</span>,
      maxSize: 50,
    },
    {
      accessorKey: 'nome',
      header: () => <span>Nome</span>,
    },
    {
      accessorKey: 'email',
      header: () => <span>Email</span>,
    },
    {
      accessorKey: 'cpf',
      header: () => <span>CPF</span>,
      cell: ({ row }) => {
        return (
          <span>
            {row.original.cpf.replace(
              /(\d{3})(\d{3})(\d{3})(\d{2})/,
              '$1.$2.$3-$4',
            )}
          </span>
        )
      },
    },
  ]
}
