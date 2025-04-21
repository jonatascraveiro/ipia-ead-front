import { ColumnAction } from '@/components/DataTable/ColumnAction'
import type { ModuloType } from '@/types/modulo'
import type { ColumnDef } from '@tanstack/react-table'
import { Eye, Pencil } from 'lucide-react'

type Acoes = {
  visualizar: (data: ModuloType) => void
  editar: (data: ModuloType) => void
}

export const getColumns = ({
  editar,
  visualizar,
}: Acoes): ColumnDef<ModuloType>[] => {
  return [
    {
      accessorFn: (row) => row.titulo,
      accessorKey: 'Titulo',
      header: () => <span>Titulo</span>,
    },
    {
      accessorFn: (row) => row.descricao,
      accessorKey: 'descricao',
      header: () => <span>Descrição</span>,
      maxSize: 300,
    },
    {
      accessorFn: (row) => row.cursoId,
      accessorKey: 'cursoId',
      header: () => <span>Curso</span>,
      cell: ({ row }) => {
        return <div>{row.original?.curso.nome}</div>
      },
    },
    {
      accessorFn: (row) => row.ordem,
      accessorKey: 'ordem',
      header: () => <span>Ordem</span>,
      cell: ({ row }) => {
        return <div>{row.original?.ordem}</div>
      },
    },
    {
      accessorFn: (row) => row.biblioteca,
      accessorKey: 'Material complementar',
      header: () => <span>Material complementar</span>,
      cell: ({ row }) => {
        return <div>{row.original?.biblioteca ? 'Sim' : 'Não'}</div>
      },
    },

    {
      accessorFn: (row) => row.id,
      ...ColumnAction<ModuloType>({
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
