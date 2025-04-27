import { ColumnAction } from '@/components/DataTable/ColumnAction'
import { Icone } from '@/components/common/Icons'
import type { ModuloType } from '@/types/modulo'
import type { ColumnDef } from '@tanstack/react-table'

type Acoes = {
  visualizar: (data: ModuloType) => void
  editar: (data: ModuloType) => void
  aula: (data: ModuloType) => void
  formulario: (data: ModuloType) => void
  biblioteca: boolean
}

export const getColumns = ({
  editar,
  visualizar,
  aula,
  formulario,
  biblioteca,
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
      accessorFn: (row) => row.ordem,
      accessorKey: 'ordem',
      header: () => <span>Ordem</span>,
      cell: ({ row }) => {
        return <div>{row.original?.ordem}</div>
      },
    },

    {
      accessorFn: (row) => row.id,
      ...ColumnAction<ModuloType>({
        actions: [
          {
            label: 'Visualizar',
            icon: <Icone.visualizar />,
            onClick: (row) => visualizar(row),
            omit: () => true,
          },
          {
            label: 'Editar',
            icon: <Icone.editar />,
            onClick: (row) => editar(row),
          },
          {
            label: 'Submódulos',
            icon: <Icone.modulo />,
            onClick: (row) => editar(row),
            omit: () => biblioteca,
          },
          {
            label: 'Conteúdo',
            icon: <Icone.aulas />,
            onClick: (row) => aula(row),
            omit: () => !biblioteca,
          },
          {
            label: 'Formulario',
            icon: <Icone.formulario />,
            onClick: (row) => formulario(row),
            omit: () => true,
          },
        ],
      }),
    },
  ]
}
