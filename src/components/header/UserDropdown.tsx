import { useAuth } from '@/context/AuthContext'
import { getAvatarInitials } from '@/utils/avatarInitial'
import { LogIn } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'
import { Dropdown } from '../ui/dropdown/Dropdown'

export default function UserDropdown() {
	const { user, isAuthenticated, logout } = useAuth()

	const [isOpen, setIsOpen] = useState(false)

	function toggleDropdown() {
		setIsOpen(!isOpen)
	}

	function closeDropdown() {
		setIsOpen(false)
	}
	if (!isAuthenticated) {
		return (
			<div className="relative">
				<Link
					to="/login"
					className="flex items-center text-gray-700 dark:text-gray-400"
				>
					<span className="block mr-1 font-medium text-theme-sm">
						<LogIn />
					</span>
				</Link>
			</div>
		)
	}
	return (
		<div className="relative">
			<button
				onClick={toggleDropdown}
				className="flex items-center text-gray-700 dark:text-gray-400"
			>
				<span className="mr-3 overflow-hidden rounded-full h-11 w-11">
					<div className="bg-gray-200 w-full h-full flex justify-center items-center">
						<span>{getAvatarInitials(user?.nome || '')}</span>
					</div>
				</span>

				<span className="block mr-1 font-medium text-theme-sm">
					{user?.nome}
				</span>

				<svg
					className={`stroke-gray-500 dark:stroke-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
						}`}
					width="18"
					height="20"
					viewBox="0 0 18 20"
					fill="none"
				>
					<path
						d="M4.3125 8.65625L9 13.3437L13.6875 8.65625"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>

			<Dropdown
				isOpen={isOpen}
				onClose={closeDropdown}
				className="absolute right-0 mt-[17px]  flex w-[260px] flex-col  gap-3 rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark"
			>

				<Link
					onClick={() => {
						logout(() => {
							closeDropdown()
						})
					}}
					to="/login"
					className="flex items-center gap-3  py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
				>
					<svg
						className="fill-gray-500 group-hover:fill-gray-700 dark:group-hover:fill-gray-300"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M15.1007 19.247C14.6865 19.247 14.3507 18.9112 14.3507 18.497L14.3507 14.245H12.8507V18.497C12.8507 19.7396 13.8581 20.747 15.1007 20.747H18.5007C19.7434 20.747 20.7507 19.7396 20.7507 18.497L20.7507 5.49609C20.7507 4.25345 19.7433 3.24609 18.5007 3.24609H15.1007C13.8581 3.24609 12.8507 4.25345 12.8507 5.49609V9.74501L14.3507 9.74501V5.49609C14.3507 5.08188 14.6865 4.74609 15.1007 4.74609L18.5007 4.74609C18.9149 4.74609 19.2507 5.08188 19.2507 5.49609L19.2507 18.497C19.2507 18.9112 18.9149 19.247 18.5007 19.247H15.1007ZM3.25073 11.9984C3.25073 12.2144 3.34204 12.4091 3.48817 12.546L8.09483 17.1556C8.38763 17.4485 8.86251 17.4487 9.15549 17.1559C9.44848 16.8631 9.44863 16.3882 9.15583 16.0952L5.81116 12.7484L16.0007 12.7484C16.4149 12.7484 16.7507 12.4127 16.7507 11.9984C16.7507 11.5842 16.4149 11.2484 16.0007 11.2484L5.81528 11.2484L9.15585 7.90554C9.44864 7.61255 9.44847 7.13767 9.15547 6.84488C8.86248 6.55209 8.3876 6.55226 8.09481 6.84525L3.52309 11.4202C3.35673 11.5577 3.25073 11.7657 3.25073 11.9984Z"
							fill=""
						/>
					</svg>
					Sair
				</Link>
			</Dropdown>
		</div>
	)
}
