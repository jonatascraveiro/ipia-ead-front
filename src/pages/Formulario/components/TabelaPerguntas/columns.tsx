import { CellTextarea } from '@/components/DataTable/CellTextarea'
import { ColumnAction } from '@/components/DataTable/ColumnAction'
import { Icone } from '@/components/common/Icons'
import type { PerguntaType } from '@/types/pergunta'
import type { ColumnDef } from '@tanstack/react-table'

type Acoes = {
  resposta: (data: PerguntaType) => void
  editar: (data: PerguntaType) => void
  deletar: (data: PerguntaType) => void
}

export const getColumns = ({
  editar,
  resposta,
  deletar,
}: Acoes): ColumnDef<PerguntaType>[] => {
  return [
    {
      accessorFn: (row) => row.descricao,
      accessorKey: 'descricao',
      header: () => <span>Pergunta</span>,
      cell: ({ row }) => <CellTextarea>{row.original.descricao}</CellTextarea>,
    },

    {
      accessorFn: (row) => row.id,
      ...ColumnAction<PerguntaType>({
        actions: [
          {
            label: 'Respostas',
            icon: <Icone.perguntas />,
            onClick: (row) => resposta(row),
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
          },
        ],
      }),
    },
  ]
}
