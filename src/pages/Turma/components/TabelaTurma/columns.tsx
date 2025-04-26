import { ColumnAction } from '@/components/DataTable/ColumnAction'
import type { TurmaType } from '@/types/turma'
import type { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import { Pencil } from 'lucide-react'

type Acoes = {
  editar: (data: TurmaType) => void
}

export const getColumns = ({ editar }: Acoes): ColumnDef<TurmaType>[] => {
  return [
    {
      accessorFn: (row) => row.nome,
      accessorKey: 'nome',
      header: () => <span>Nome da turma</span>,
    },
    {
      accessorKey: 'inicio',
      header: () => <span>Período</span>,
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
      accessorFn: (row) => row.duracao,
      accessorKey: 'duracao',
      header: () => <span>Duração</span>,
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
            label: 'Editar',
            icon: <Pencil className="h-6 w-6" />,
            onClick: (row) => editar(row),
          },
        ],
      }),
    },
  ]
}
