import { Skeleton } from '@/components/ui/skeleton'
import { TableCell, TableRow } from '../ui/table'

export function SkeletonTable({
	columns = 6,
	rows = 10,
}: { columns: number; rows: number }) {
	return (
		<>
			{Array.from({ length: rows > 10 ? 10 : rows }).map((_, index) => (
				<TableRow key={index}>
					{Array.from({ length: columns }).map((_, index) => (
						<TableCell key={index} className="p-2">
							<Skeleton className="h-12 w-full " />
						</TableCell>
					))}
				</TableRow>
			))}
		</>
	)
}
