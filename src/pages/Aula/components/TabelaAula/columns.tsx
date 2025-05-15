import { ColumnAction } from '@/components/DataTable/ColumnAction'
import { Icone } from '@/components/common/Icons'
import type { AulaType } from '@/types/aula'
import type { ColumnDef } from '@tanstack/react-table'

type Acoes = {
  deletar: (data: AulaType) => void
  editar: (data: AulaType) => void
}

export const getColumns = ({
  deletar,
  editar,
}: Acoes): ColumnDef<AulaType>[] => {
  return [
    {
      accessorFn: (row) => row.titulo,
      accessorKey: 'titulo',
      header: () => <span>Nome da aula</span>,
    },
    {
      accessorFn: (row) => row.ordem,
      accessorKey: 'ordem',
      header: () => <span>Ordem</span>,
    },

    {
      accessorFn: (row) => row.duracao,
      accessorKey: 'duracao',
      header: () => <span>Duração em minutos</span>,
    },

    {
      accessorFn: (row) => row.id,
      ...ColumnAction<AulaType>({
        actions: [
          {
            label: 'Editar',
            icon: <Icone.editar />,
            onClick: (row) => editar(row),
          },
          {
            label: 'Deletar',
            icon: <Icone.deletar />,
            onClick: (row) => deletar(row),
          },
        ],
      }),
    },
  ]
}
