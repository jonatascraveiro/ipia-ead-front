import type { ColumnDef } from '@tanstack/react-table'

export const getColumns = (): ColumnDef<{
  id: number
  nome: string
  email: string
}>[] => {
  return [
    {
      accessorKey: 'id',
      header: () => <span>#</span>,
      maxSize: 50,
    },
    {
      accessorKey: 'name',
      header: () => <span>Nome</span>,
    },
    {
      accessorKey: 'email',
      header: () => <span>Email</span>,
    },

    // {
    //   ...ColumnAction<{ id: number }>({
    //     actions: [
    //       {
    //         label: 'Visualizar',
    //         icon: <Eye className="h-6 w-6" />,
    //         onClick: (row) => onView(row),
    //       },
    //       {
    //         label: 'Editar',
    //         icon: <Pencil className="h-6 w-6" />,
    //         onClick: (row) => onEdit(row),
    //       },
    //       {
    //         label: 'Excluir',
    //         icon: <Trash className="h-6 w-6 text-red-500" />,
    //         onClick: (row) => onDelete(row),
    //       },
    //     ],
    //   }),
    // },
  ]
}
