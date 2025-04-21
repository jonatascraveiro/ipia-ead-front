import { CardDashboard } from '@/components/common/CardDashboard'
import { Group } from 'lucide-react'

type Props = {
  quantidade: number
}
const CardAlunos = ({ quantidade = 0 }: Props) => {
  return (
    <CardDashboard
      quantidade={quantidade}
      icon={<Group />}
      title="Alunos Cadastrados"
    />
  )
}
export { CardAlunos }
