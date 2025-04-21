import { CellTextarea } from '@/components/DataTable/CellTextarea'
import { Button } from '@/components/ui/button'
import type { Respostas } from '@/gql/generated/graphql'
import type { ColumnDef } from '@tanstack/react-table'
import { Pencil, Trash2 } from 'lucide-react'

type Acoes = {
  deletar: (data: Respostas) => void
  editar: (data: Respostas) => void
}

export const getColumns = ({
  editar,
  deletar,
}: Acoes): ColumnDef<Respostas & { correta: boolean }>[] => {
  return [
    {
      accessorFn: (row) => row.id,
      accessorKey: 'id',
      header: () => <span>#</span>,
      cell: (info) => <>{info.row.index + 1}</>,
      maxSize: 20,
    },
    {
      accessorFn: (row) => row.descricao,
      accessorKey: 'descricao',
      header: () => <span>Resposta</span>,

      cell: ({ row }) => <CellTextarea>{row.original.descricao}</CellTextarea>,
      minSize: 600,
    },

    {
      accessorKey: 'correta',
      header: () => <span>Correto</span>,
      cell: ({ row }) => <>{row.original.correta ? 'Sim' : 'Nao'}</>,
      maxSize: 20,
    },

    {
      accessorKey: 'acoes',
      header: () => <span>Ações</span>,
      size: 30,
      maxSize: 30,
      cell: ({ row }) => (
        <span className="flex gap-3 ">
          <Button
            onClick={() => deletar(row.original)}
            variant={'outline'}
            size={'icon'}
          >
            <Trash2 className="h-6 w-6" color="red" />
          </Button>

          <Button
            onClick={() => editar(row.original)}
            variant={'outline'}
            size={'icon'}
          >
            <Pencil className="h-6 w-6" />
          </Button>
        </span>
      ),
    },
  ]
}
