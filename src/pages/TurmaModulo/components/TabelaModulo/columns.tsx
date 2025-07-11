import { CellTextarea } from '@/components/DataTable/CellTextarea'
import { ColumnAction } from '@/components/DataTable/ColumnAction'
import { Icone } from '@/components/common/Icons'
import type { ModulosTurmaQuery } from '@/gql/generated/graphql'
import type { ColumnDef } from '@tanstack/react-table'
import { format, parseISO } from 'date-fns'

type Acoes = {
  editar: (data: ModulosTurmaQuery['modulos']['edges'][0]['node']) => void
  criar: (data: ModulosTurmaQuery['modulos']['edges'][0]['node']) => void
}

export const getColumns = ({
  editar,
  criar,
}: Acoes): ColumnDef<ModulosTurmaQuery['modulos']['edges'][0]['node']>[] => {
  return [
    {
      accessorFn: (row) => row.titulo,
      accessorKey: 'Titulo',
      header: () => <span>Titulo</span>,
    },
    {
      accessorKey: 'data',
      header: () => <span>Data liberação</span>,
      cell: ({ row }) => (
        <CellTextarea>
          {row.original.moduloLiberacaoTravas?.[0]?.dataLiberacao
            ? format(
                parseISO(
                  row.original.moduloLiberacaoTravas?.[0]?.dataLiberacao,
                ),
                'dd/MM/yyyy',
              )
            : '-'}
        </CellTextarea>
      ),
    },

    {
      accessorFn: (row) => row.ordem,
      accessorKey: 'ordem',
      header: () => <div className="text-center">Ordem</div>,
      cell: ({ row }) => {
        return <div className="text-center">{row.original?.ordem}</div>
      },
      maxSize: 20,
    },

    {
      accessorFn: (row) => row.id,
      ...ColumnAction<ModulosTurmaQuery['modulos']['edges'][0]['node']>({
        actions: [
          {
            label: 'Criar Data',
            icon: <Icone.calendario />,
            onClick: (row) => criar(row),
            omit: (row) => row.moduloLiberacaoTravas?.length === 1,
          },
          {
            label: 'Atualizar Data',
            icon: <Icone.calendarioEditar />,
            onClick: (row) => editar(row),
            omit: (row) => row.moduloLiberacaoTravas?.length === 0,
          },
        ],
      }),
    },
  ]
}
