import { ColumnAction } from '@/components/DataTable/ColumnAction'
import { Icone } from '@/components/common/Icons'
import type { PerguntaType } from '@/types/pergunta'
import type { ColumnDef } from '@tanstack/react-table'
import { Pencil } from 'lucide-react'

type Acoes = {
  resposta: (data: PerguntaType) => void
  editar: (data: PerguntaType) => void
}

export const getColumns = ({
  editar,
  resposta,
}: Acoes): ColumnDef<PerguntaType>[] => {
  return [
    {
      accessorFn: (row) => row.descricao,
      accessorKey: 'descricao',
      header: () => <span>Pergunta</span>,
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
            icon: <Pencil className="h-6 w-6" />,
            onClick: (row) => editar(row),
          },
        ],
      }),
    },
  ]
}
