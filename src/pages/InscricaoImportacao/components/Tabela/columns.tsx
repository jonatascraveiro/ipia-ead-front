import type { InscricaoType } from '@/gql/generated/graphql'
import type { ColumnDef } from '@tanstack/react-table'

export const getColumns = (): ColumnDef<InscricaoType>[] => {
  return [
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
      header: () => <span>Status da Inscrição</span>,
      cell: ({ row }) => {
        return <span>{row.original.status ? 'Realizada' : 'Pendente'}</span>
      },
    },
    {
      accessorKey: 'descricaoStatus',
      header: () => <span>Descrição</span>,
    },

    // {
    //   accessorKey: 'acao',
    //   size: 50,
    //   header: () => <span>Ações</span>,
    //   cell: ({ row }) => {
    //     return (
    //       <div className="flex gap-2">
    //         {row.original.status ? (
    //           'Matriculado'
    //         ) : (
    //           <Button
    //             size={'icon'}
    //             variant={'outline'}
    //             onClick={() => matricular(row.original)}
    //           >
    //             <SquareCheckBig className="h-6 w-6" />
    //           </Button>
    //         )}
    //       </div>
    //     )
    //   },
    // },
  ]
}
