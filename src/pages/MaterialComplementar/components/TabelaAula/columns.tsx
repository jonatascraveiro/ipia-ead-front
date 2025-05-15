import { ColumnAction } from '@/components/DataTable/ColumnAction'
import { Icone } from '@/components/common/Icons'
import type { AulaType } from '@/types/aula'
import type { ColumnDef } from '@tanstack/react-table'
import { Eye, Pencil } from 'lucide-react'

type Acoes = {
  visualizar: (data: AulaType) => void
  editar: (data: AulaType) => void
  deletar: (data: AulaType) => void
}

export const getColumns = ({
  visualizar,
  editar,
  deletar,
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
      accessorFn: (row) => row.modulo?.titulo,
      accessorKey: 'moduloId',
      header: () => <span>Módulo</span>,
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
