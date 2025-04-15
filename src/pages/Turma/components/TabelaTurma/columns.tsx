import { ColumnAction } from '@/components/DataTable/ColumnAction'
import type { TurmaType } from '@/types/turma'
import type { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import { Eye, Pencil } from 'lucide-react'

type Acoes = {
  visualizar: (data: TurmaType) => void
  editar: (data: TurmaType) => void
}

export const getColumns = ({
  visualizar,
  editar,
}: Acoes): ColumnDef<TurmaType>[] => {
  return [
    {
      accessorFn: (row) => row.id,
      accessorKey: 'id',
      header: () => <span>#</span>,
      maxSize: 50,
    },
    {
      accessorFn: (row) => row.nome,
      accessorKey: 'nome',
      header: () => <span>Nome da turma</span>,
    },
    {
      accessorKey: 'inicio',
      header: () => <span>Inicio - Fim</span>,
      cell: ({ row }) => {
        return (
          <div>
            {format(row.original?.inicio, 'dd/MM/yyyy')} -{' '}
            {format(row.original?.fim, 'dd/MM/yyyy')}
          </div>
        )
      },
    },
    {
      accessorFn: (row) => row.curso.nome,
      accessorKey: 'curso',
      header: () => <span>Curso</span>,
    },

    {
      accessorFn: (row) => row.id,
      ...ColumnAction<TurmaType>({
        actions: [
          {
            label: 'Visualizar',
            icon: <Eye className="h-6 w-6" />,
            onClick: (row) => visualizar(row),
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
