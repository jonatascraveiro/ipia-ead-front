import { ColumnAction } from '@/components/DataTable/ColumnAction'
import { Icone } from '@/components/common/Icons'
import type { Formularios } from '@/gql/generated/graphql'
// import { FormularioType } from '@/types/formulario'
// import type { FormularioType } from '@/types/formulario'
import type { ColumnDef } from '@tanstack/react-table'
import { Eye, Pencil } from 'lucide-react'

type Acoes = {
  visualizar: (data: Formularios) => void
  editar: (data: Formularios) => void
}

export const getColumns = ({
  editar,
  visualizar,
}: Acoes): ColumnDef<Formularios>[] => {
  return [
    {
      accessorFn: (row) => row.nome,
      accessorKey: 'Nome',
      header: () => <span>Titulo</span>,
    },

    {
      accessorFn: (row) => row.subModuloId,
      accessorKey: 'subModuloId',
      header: () => <span>Qtd perguntas</span>,
      cell: ({ row }) => {
        return <div>{row.original?.perguntas?.length || 0}</div>
      },
    },

    {
      accessorFn: (row) => row.id,
      ...ColumnAction<Formularios>({
        actions: [
          {
            label: 'Visualizar',
            icon: <Eye className="h-6 w-6" />,
            onClick: (row) => visualizar(row),
            omit: () => true,
          },
          {
            label: 'Editar ',
            icon: <Pencil className="h-6 w-6" />,
            onClick: (row) => editar(row),
          },
          {
            label: 'Perguntas',
            icon: <Icone.perguntas className="h-6 w-6" />,
            onClick: (row) => editar(row),
          },
        ],
      }),
    },
  ]
}
