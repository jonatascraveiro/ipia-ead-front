import { CellTextarea } from '@/components/DataTable/CellTextarea'
import { ColumnAction } from '@/components/DataTable/ColumnAction'
import { Icone } from '@/components/common/Icons'
import type { CursoType } from '@/types/curso'
import type { ColumnDef } from '@tanstack/react-table'

type Acoes = {
  visualizar: (data: CursoType) => void
  editar: (data: CursoType) => void
  deletar: (data: CursoType) => void
  modulo: (data: CursoType) => void
  biblioteca: (data: CursoType) => void
  turma: (data: CursoType) => void
}

export const getColumns = ({
  visualizar,
  editar,
  deletar,
  modulo,
  biblioteca,
  turma,
}: Acoes): ColumnDef<CursoType>[] => {
  return [
    {
      accessorFn: (row) => row.nome,
      accessorKey: 'nome',
      header: () => <span>Nome</span>,
    },
    {
      accessorKey: 'descricao',
      header: () => <span>Descrição</span>,
      minSize: 600,
      cell: ({ row }) => <CellTextarea>{row.original.descricao}</CellTextarea>,
    },
    {
      accessorFn: (row) => row.ativo,
      accessorKey: 'ativo',
      header: () => <span>Status</span>,
      cell: ({ row }) => {
        return <div>{row.original?.ativo ? 'Ativo' : 'Inativo'}</div>
      },
    },

    {
      accessorFn: (row) => row.id,
      ...ColumnAction<CursoType>({
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
            label: 'Modulos',
            icon: <Icone.modulo />,
            onClick: (row) => modulo(row),
          },
          {
            label: 'Biblioteca',
            icon: <Icone.biblioteca />,
            onClick: (row) => biblioteca(row),
          },
          {
            label: 'Turma',
            icon: <Icone.turmas />,
            onClick: (row) => turma(row),
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
