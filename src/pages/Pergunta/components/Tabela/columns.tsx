import { ColumnAction } from '@/components/DataTable/ColumnAction'
import type { PerguntaType } from '@/types/pergunta'
import type { ColumnDef } from '@tanstack/react-table'
import { Eye, Pencil } from 'lucide-react'

type Acoes = {
  visualizar: (data: PerguntaType) => void
  editar: (data: PerguntaType) => void
}

export const getColumns = ({
  editar,
  visualizar,
}: Acoes): ColumnDef<PerguntaType>[] => {
  return [
    {
      accessorFn: (row) => row.id,
      accessorKey: 'id',
      header: () => <span>#</span>,
      maxSize: 50,
    },
    {
      accessorFn: (row) => row.descricao,
      accessorKey: 'descricao',
      header: () => <span>Pergunta</span>,
    },

    {
      accessorFn: (row) => row.formulario.id,
      accessorKey: 'formularioId',
      header: () => <span>Formulário</span>,
      cell: ({ row }) => {
        return <div>{row.original?.formulario.nome}</div>
      },
    },
    {
      accessorFn: (row) => row.formulario.id,
      accessorKey: 'formularioId',
      header: () => <span>Módulo</span>,
      cell: ({ row }) => {
        return <div>{row.original?.formulario.modulo.titulo}</div>
      },
    },

    {
      accessorKey: 'cursoId',
      header: () => <span>Curso</span>,
      cell: ({ row }) => {
        return <div>{row.original?.formulario?.modulo.curso?.nome}</div>
      },
    },

    {
      accessorFn: (row) => row.id,
      ...ColumnAction<PerguntaType>({
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
