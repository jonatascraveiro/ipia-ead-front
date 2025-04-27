import { ColumnAction } from '@/components/DataTable/ColumnAction'
import { Icone } from '@/components/common/Icons'
import type { SubModuloType } from '@/gql/generated/graphql'
import type { ColumnDef } from '@tanstack/react-table'

type Acoes = {
  aula: (data: SubModuloType) => void
  formulario: (data: SubModuloType) => void
  editar: (data: SubModuloType) => void
  deletar: (data: SubModuloType) => void
}

export const getColumns = ({
  editar,
  aula,
  formulario,
  deletar,
}: Acoes): ColumnDef<SubModuloType>[] => {
  return [
    {
      accessorFn: (row) => row.titulo,
      accessorKey: 'Titulo',
      header: () => <span>Titulo</span>,
    },
    {
      accessorFn: (row) => row.mensagem,
      accessorKey: 'mensagem',
      header: () => <span>Mensagem</span>,
      maxSize: 300,
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
      accessorFn: (row) => row.id,
      ...ColumnAction<SubModuloType>({
        actions: [
          {
            label: 'Aulas',
            icon: <Icone.aulas />,
            onClick: (row) => aula(row),
          },
          {
            label: 'Formularios',
            icon: <Icone.aulas />,
            onClick: (row) => formulario(row),
          },
          {
            label: 'Editar',
            icon: <Icone.editar />,
            onClick: (row) => editar(row),
          },
          {
            label: 'Deletar',
            icon: <Icone.deletar />,
            onClick: (row) => deletar(row),
            omit: () => true,
          },
        ],
      }),
    },
  ]
}
