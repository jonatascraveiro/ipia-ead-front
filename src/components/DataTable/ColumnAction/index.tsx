import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { MoreHorizontal } from 'lucide-react'

type TableAction<TData> = {
  label: string
  icon?: React.ReactNode
  onClick: (row: TData) => void
  omit?: (row: TData) => boolean
}

type ColumnActionProps<TData> = {
  actions: TableAction<TData>[]
  id?: string
  header?: string
  size?: number
}

export function ColumnAction<TData>({
  actions,
  id = 'actions',
  header = 'Ações',
  size = 50,
}: ColumnActionProps<TData>) {
  return {
    id,
    header,
    size,

    cell: ({ row }: { row: any }) => {
      const data = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button disabled={actions.length === 0} variant="ghost" size="icon">
              <MoreHorizontal className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {actions.map((action, index) => {
              if (action.omit && action?.omit(data)) return null
              return (
                <DropdownMenuItem
                  key={index}
                  onClick={() => action.onClick(data)}
                  className="size-8 w-44"
                >
                  {action.icon && <span className="mr-2">{action.icon}</span>}
                  {action.label}
                </DropdownMenuItem>
              )
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  }
}
