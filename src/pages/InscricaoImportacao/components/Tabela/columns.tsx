import { Button } from '@/components/ui/button'
import type { InscricaoType } from '@/gql/generated/graphql'
import type { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import { SquareCheckBig } from 'lucide-react'

type Acoes = {
  matricular: (data: InscricaoType) => void
}

export const getColumns = ({
  matricular,
}: Acoes): ColumnDef<InscricaoType>[] => {
  return [
    {
      accessorKey: 'turma.nome',
      header: () => <span>Turma</span>,
    },
    {
      accessorKey: 'data',
      header: () => <span>Data Inscrição</span>,
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
      header: () => <span>Aluno</span>,
    },

    {
      accessorKey: 'aluno.matricula',
      header: () => <span>Matrícula</span>,
    },
    {
      accessorKey: 'status',
      header: () => <span>Status da Matrícula</span>,
      cell: ({ row }) => {
        return (
          <span>{row.original.status ? 'Matriculado' : 'Pré Matrícula'}</span>
        )
      },
    },
    {
      accessorKey: 'aluno.matricula',
      header: () => <span>Descrição</span>,
      cell: ({ row }) => {
        return (
          <span>{row.original.status ? 'Matriculado' : 'Pré Matrícula'}</span>
        )
      },
    },

    {
      accessorKey: 'acao',
      size: 50,
      header: () => <span>Ações</span>,
      cell: ({ row }) => {
        return (
          <div className="flex gap-2">
            {row.original.status ? (
              'Matriculado'
            ) : (
              <Button
                size={'icon'}
                variant={'outline'}
                onClick={() => matricular(row.original)}
              >
                <SquareCheckBig className="h-6 w-6" />
              </Button>
            )}
          </div>
        )
      },
    },
  ]
}
