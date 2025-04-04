import { ReactNode } from 'react'

interface CardProps {
	children: ReactNode
	className?: string
	titulo?: string | ReactNode
}

function Card({ children, className }: CardProps) {
	return (
		<div
			className={`p-5 mb-6 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6 ${className}`}
		>
			{children}
		</div>
	)
}

function Titulo({ children, className }: CardProps) {
	return (
		<>
			{children && (
				<h3
					className={` text-lg font-semibold text-gray-800 dark:text-white/90 ${className}`}
				>
					{children}
				</h3>
			)}
		</>
	)
}

Card.Titulo = Titulo
export { Card, Titulo }
