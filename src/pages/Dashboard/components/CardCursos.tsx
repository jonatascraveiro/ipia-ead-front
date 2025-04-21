import { DiamondPlus } from 'lucide-react'
type Props = {
  quantidade: number
}
const CardCursos = ({ quantidade = 0 }: Props) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800">
        <DiamondPlus />
      </div>

      <div className="mt-5 flex items-end justify-between">
        <div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Cursos Cadastrados
          </span>
          <h4 className="mt-2 text-title-sm font-bold text-gray-800 dark:text-white/90">
            {quantidade}
          </h4>
        </div>
      </div>
    </div>
  )
}
export { CardCursos }
