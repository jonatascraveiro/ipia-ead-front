import {
  type PaginationState,
  type Table as TableType,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useCursorPaginacao } from '@/hooks/parametros.paginacao'
import { Button } from '../ui/button'

import { Select } from '../ui/Select/Select'
import { SkeletonTable } from './SkeletonTable'

type PageInfo = Partial<{
  endCursor: string
  hasNextPage: boolean | null
  hasPreviousPage: boolean | null
  startCursor: string
}>

type Props<T> = {
  data: T[]

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  columns: any
  pagination?: PageInfo
  setPagination?: React.Dispatch<React.SetStateAction<PaginationState>>
  loading?: boolean
}

export default function DataTable<T>({
  data,
  columns,
  pagination,
  setPagination,
  loading = false,
}: Props<T>) {
  const dataQuery = {
    rows: data,
    pageCount: 10,
    rowCount: data.length,
  }

  const table = useReactTable({
    data: dataQuery.rows ?? [],
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    columns: columns as any,
    onPaginationChange: setPagination as unknown as () => void,
    rowCount: dataQuery.rowCount ?? 0,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
  })

  return (
    <div>
      <Table>
        <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    className={`py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 `}
                    key={header.id}
                    style={{
                      width: header.getSize(),
                    }}
                  >
                    {header.isPlaceholder ? null : (
                      <>
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? 'cursor-pointer select-none'
                              : '',
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                        </div>
                      </>
                    )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
          {table.getRowModel().rows.map((row) => {
            return (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <TableCell
                      className={`py-3 text-gray-500 text-theme-sm dark:text-gray-400`}
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  )
                })}
              </TableRow>
            )
          })}
          {table.getRowCount() === 0 && !loading && (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                Nenhum registro encontrado.
              </TableCell>
            </TableRow>
          )}
          {loading && (
            <SkeletonTable
              rows={5}
              columns={table.getHeaderGroups()[0].headers.length}
            />
          )}
        </TableBody>
      </Table>

      <Pagination table={table} pagination={pagination} />
    </div>
  )
}

const Pagination = ({
  table,
  pagination,
}: { table: TableType<any>; pagination?: PageInfo }) => {
  const { setPagePrevious, setPageNext, setLimit, limit } = useCursorPaginacao()
  if (table.getRowCount() === 0) return <></>
  return (
    <div className="flex items-center justify-end gap-2 my-2 text-gray-500 text-theme-sm dark:text-gray-400 flex-wrap">
      <span className="flex items-center gap-1">
        <Button
          variant="outline"
          onClick={() => {
            setPagePrevious(pagination?.startCursor || null)
            setPageNext(null)
          }}
          disabled={pagination?.hasPreviousPage === false}
        >
          {'Anterior'}
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            setPagePrevious(null)
            setPageNext(pagination?.endCursor || null)
          }}
          disabled={pagination?.hasNextPage === false}
        >
          {'Próxima'}
        </Button>
      </span>

      <Select
        // className="py-2 text-gray-500 text-theme-sm dark:text-gray-400 h-10 appearance-none rounded-lg border border-gray-300 bg-transparent px-4.5  pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-800 dark:text-white/90 dark:bg-dark-900"
        value={limit}
        onChange={(e) => {
          setLimit(String(e))
        }}
        options={[10, 20, 30, 40, 50]}
      >
        {/*         
        {[10, 20, 30, 40, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Mostrar {pageSize}
          </option>
        ))} */}
      </Select>
    </div>
  )
}
