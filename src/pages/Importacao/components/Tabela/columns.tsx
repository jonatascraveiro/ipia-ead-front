import { Icone } from '@/components/common/Icons'
import type { InscricaoType } from '@/gql/generated/graphql'
import type { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'

type Acoes = {
  matricular: (data: InscricaoType) => void
}

export const getColumns = ({
  matricular,
}: Acoes): ColumnDef<InscricaoType>[] => {
  return [
    {
      accessorKey: 'data',
      header: () => <span>Data Importação</span>,
      cell: ({ row }) => {
        return (
          <span>
            {row.original.dataInscricao &&
              format(row.original?.dataInscricao, 'dd/MM/yyyy')}{' '}
          </span>
        )
      },
    },

    {
      accessorKey: 'aluno.nome',
      header: () => <span>Curso</span>,
      cell: ({ row }) => {
        return <span>{row.original.aluno?.nome}</span>
      },
    },
    {
      accessorKey: 'aluno.nome',
      header: () => <span>Turma</span>,
    },
    {
      accessorKey: 'aluno.nome',
      header: () => <span>Nome planilha</span>,
    },
    {
      accessorKey: 'aluno.nome',
      header: () => <span>Status</span>,
    },
    {
      accessorKey: 'aluno.nome',
      header: () => <span>Usuário</span>,
    },
    {
      accessorKey: 'turma.nome',
      header: () => <span>Qtd importada</span>,
      cell: ({ row }) => {
        return <span>{row.original.turma?.nome?.length}</span>
      },
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
            onClick={() => alert('visualziar alunos importados')}
          >
            <Icone.visualizar />
          </button>
        )
      },
    },
  ]
}
