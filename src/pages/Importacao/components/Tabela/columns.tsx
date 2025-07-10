import { Icone } from '@/components/common/Icons'
import type { ImportacaoHistoricoType } from '@/gql/generated/graphql'
import type { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'

type Acoes = {
  visualizar: (data: ImportacaoHistoricoType) => void
}

export const getColumns = ({
  visualizar,
}: Acoes): ColumnDef<ImportacaoHistoricoType>[] => {
  return [
    {
      accessorKey: 'data',
      header: () => <span>Data Importação</span>,
      cell: ({ row }) => {
        return (
          <span>
            {row.original.createdAt &&
              format(row.original?.createdAt, 'dd/MM/yyyy HH:mm')}{' '}
          </span>
        )
      },
    },
    {
      accessorKey: 'turma.nome',
      header: () => <span>Turma</span>,
    },

    {
      accessorKey: 'nomePlanilha',
      header: () => <span>Nome planilha</span>,
    },
    {
      accessorKey: 'status',
      header: () => <span>Status</span>,
    },
    {
      accessorKey: 'usuario.nome',
      header: () => <span>Usuário</span>,
    },
    {
      accessorKey: 'quantidadeImportada',
      header: () => <span>Qtd importada</span>,
    },

    {
      accessorKey: 'acao',
      size: 50,
      header: () => <span>Ações</span>,
      cell: ({ row }) => {
        return (
          <button
            type="button"
            className="flex gap-2"
            onClick={() => visualizar(row.original)}
          >
            <Icone.visualizar />
          </button>
        )
      },
    },
  ]
}
