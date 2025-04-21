type Props = {
  quantidade: number
  icon: React.ReactNode
  title: string
  loading?: boolean
}

const CardDashboard = ({ quantidade, icon, title, loading }: Props) => {
  if (loading) return <CardDashboardSkeleton />
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800">
        {icon}
      </div>

      <div className="mt-5 flex items-end justify-between">
        <div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {title}
          </span>
          <h4 className="mt-2 text-title-sm font-bold text-gray-800 dark:text-white/90">
            {quantidade}
          </h4>
        </div>
      </div>
    </div>
  )
}

const CardDashboardSkeleton = () => {
  return (
    <div className="animate-pulse rounded-2xl border border-gray-200  p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <div className="animate-pulse flex h-20 w-20  items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800" />

      <div className="animate-pulse mt-5 flex items-end justify-between h-20 w-full bg-gray-100">
        <div>
          <span className="text-sm h-16 text-gray-500 dark:text-gray-400" />
        </div>
      </div>
    </div>
  )
}

export { CardDashboard, CardDashboardSkeleton }
