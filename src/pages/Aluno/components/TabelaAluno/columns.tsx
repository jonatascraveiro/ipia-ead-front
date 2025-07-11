import { Icone } from '@/components/common/Icons'
import type { AlunoType } from '@/gql/generated/graphql'
import type { ColumnDef } from '@tanstack/react-table'

type Acoes = {
  editar: (data: AlunoType) => void
}

export const getColumns = ({ editar }: Acoes): ColumnDef<AlunoType>[] => {
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
      accessorKey: 'matricula',
      header: () => <span>Matrícula</span>,
      cell: ({ row }) => {
        return <span>{row?.original?.matricula || '-'}</span>
      },
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
            {row?.original?.cpf && row?.original?.cpf?.length === 11
              ? `${row.original.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')}`
              : `${row?.original?.cpf || '-'}`}
          </span>
        )
      },
    },

    {
      accessorKey: 'acoes',
      header: () => <span>Ações</span>,
      cell: ({ row }) => {
        return (
          <button type="button" onClick={() => editar(row.original)}>
            <Icone.editar />
          </button>
        )
      },
    },
    // {
    //   accessorFn: (row) => row.id,
    //   ...ColumnAction<AlunoType>({
    //     actions: [
    //       {
    //         label: 'Alterar senha',
    //         icon: <KeyRound className="h-6 w-6 " />,
    //         onClick: (row) => alterarSenha(row),
    //       },
    //       {
    //         label: 'Editar',
    //         icon: <Icone.editar />,
    //         onClick: (row) => editar(row),
    //         omit: () => true,
    //       },
    //     ],
    //   }),
    // },
  ]
}
