import { CellTextarea } from '@/components/DataTable/CellTextarea'
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
      cell: ({ row }) => {
        return <CellTextarea>{row.original?.titulo || '-'}</CellTextarea>
      },
      maxSize: 100,
    },
    {
      accessorFn: (row) => row.mensagem,
      accessorKey: 'mensagem',
      header: () => <span>Mensagem</span>,

      cell: ({ row }) => {
        return <CellTextarea>{row.original?.mensagem || '-'}</CellTextarea>
      },
    },

    {
      accessorFn: (row) => row.ordem,
      accessorKey: 'ordem',
      header: () => <span>Ordem</span>,
      cell: ({ row }) => {
        return <span>{row.original?.ordem}</span>
      },
      size: 50,
    },

    {
      accessorFn: (row) => row.id,
      ...ColumnAction<SubModuloType>({
        actions: [
          {
            label: 'Editar',
            icon: <Icone.editar />,
            onClick: (row) => editar(row),
          },
          {
            label: 'Aulas',
            icon: <Icone.aulas />,
            onClick: (row) => aula(row),
          },
          {
            label: 'Formularios',
            icon: <Icone.formulario />,
            onClick: (row) => formulario(row),
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
