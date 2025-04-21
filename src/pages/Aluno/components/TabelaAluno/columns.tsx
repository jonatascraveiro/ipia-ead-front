import type { AlunoType } from '@/gql/generated/graphql'
import type { ColumnDef } from '@tanstack/react-table'

export const getColumns = (): ColumnDef<AlunoType>[] => {
  return [
    {
      accessorKey: 'nome',
      header: () => <span>Nome</span>,
    },
    {
      accessorKey: 'email',
      header: () => <span>Email</span>,
    },
    {
      accessorKey: 'turmasMatriculadas',
      header: () => <span>Turmas matriculadas</span>,
      cell: ({ row }) => {
        return (
          <div className="flex flex-col gap-2">
            {row.original.inscricoes?.map((inscricao) => {
              return (
                <div key={inscricao.id}>
                  {inscricao.turma?.nome} -{' '}
                  {inscricao.status ? 'Matriculado' : 'Pré-matriculado'}{' '}
                </div>
              )
            })}
            {row.original.inscricoes?.length === 0 && (
              <span className="text-gray-400">Nenhuma turma matriculada</span>
            )}
          </div>
        )
      },
    },
    {
      accessorKey: 'cpf',
      header: () => <span>CPF</span>,
      cell: ({ row }) => {
        return (
          <span>
            {row.original.cpf.replace(
              /(\d{3})(\d{3})(\d{3})(\d{2})/,
              '$1.$2.$3-$4',
            )}
          </span>
        )
      },
    },
  ]
}
