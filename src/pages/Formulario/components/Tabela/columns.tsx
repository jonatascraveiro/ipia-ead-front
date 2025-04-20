import { ColumnAction } from '@/components/DataTable/ColumnAction'
import type { FormularioType } from '@/types/formulario'
import type { ColumnDef } from '@tanstack/react-table'
import { Eye, Pencil } from 'lucide-react'

type Acoes = {
  visualizar: (data: FormularioType) => void
  editar: (data: FormularioType) => void
}

export const getColumns = ({
  editar,
  visualizar,
}: Acoes): ColumnDef<FormularioType>[] => {
  return [
    {
      accessorFn: (row) => row.id,
      accessorKey: 'id',
      header: () => <span>#</span>,
      maxSize: 50,
    },
    {
      accessorFn: (row) => row.nome,
      accessorKey: 'Nome',
      header: () => <span>Titulo</span>,
    },

    {
      accessorFn: (row) => row.moduloId,
      accessorKey: 'moduloId',
      header: () => <span>Curso</span>,
      cell: ({ row }) => {
        return <div>{row.original?.modulo?.titulo}</div>
      },
    },

    {
      accessorFn: (row) => row.id,
      ...ColumnAction<FormularioType>({
        actions: [
          {
            label: 'Visualizar',
            icon: <Eye className="h-6 w-6" />,
            onClick: (row) => visualizar(row),
            omit: () => true,
          },
          {
            label: 'Editar',
            icon: <Pencil className="h-6 w-6" />,
            onClick: (row) => editar(row),
          },
        ],
      }),
    },
  ]
}
