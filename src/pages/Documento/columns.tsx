
import { ColumnAction } from "@/components/DataTable/ColumnAction"
import { ColumnDef } from "@tanstack/react-table"
import { Eye, Pencil, Trash } from "lucide-react"

export const getColumns = (): ColumnDef<{ id: number; fisica: number; juridica: number, nome: string, created_at: string }>[] => {

    return [
        {
            accessorKey: 'id',
            header: () => <span>#</span>,
            maxSize: 50,
        },
        {
            accessorKey: 'nome',
            header: () => <span>Descrição</span>,
        },
        {
            header: () => <span>Pessoa Física</span>,
            accessorKey: 'fisica',
            cell: ({ row }) => {
                return <div >{row.original.fisica ? 'Sim' : 'Não'}</div>
            },
        },
        {
            header: () => <span>Pessoa Jurídica</span>,
            accessorKey: 'juridica',
            cell: ({ row }) => {
                return <div >{row.original.juridica ? 'Sim' : 'Não'}</div>
            },
        },
        {
            ...ColumnAction<{ id: number }>({
                actions: [
                    {
                        label: 'Visualizar',
                        icon: <Eye className="h-6 w-6" />,
                        onClick: (row) => onView(row),
                    },
                    {
                        label: 'Editar',
                        icon: <Pencil className="h-6 w-6" />,
                        onClick: (row) => onEdit(row),

                    },
                    {
                        label: 'Excluir',
                        icon: <Trash className="h-6 w-6 text-red-500" />,
                        onClick: (row) => onDelete(row),

                    },
                ],
            }),
        },
    ]
}