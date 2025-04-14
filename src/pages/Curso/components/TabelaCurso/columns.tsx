import { ColumnAction } from '@/components/DataTable/ColumnAction'
import type { CursoType } from '@/types/curso'
import type { ColumnDef } from '@tanstack/react-table'
import { Eye, Pencil } from 'lucide-react'

type Acoes = {
  visualizar: (data: CursoType) => void
  editar: (data: CursoType) => void
}

export const getColumns = ({
  visualizar,
  editar,
}: Acoes): ColumnDef<CursoType>[] => {
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
      header: () => <span>Descrição</span>,
    },
    {
      accessorFn: (row) => row.descricao,
      accessorKey: 'descricao',
      header: () => <span>Descrição</span>,
    },
    {
      accessorFn: (row) => row.ativo,
      accessorKey: 'ativo',
      header: () => <span>Status</span>,
      cell: ({ row }) => {
        return <div>{row.original?.ativo ? 'Ativo' : 'Inativo'}</div>
      },
    },

    {
      accessorFn: (row) => row.id,
      ...ColumnAction<CursoType>({
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
