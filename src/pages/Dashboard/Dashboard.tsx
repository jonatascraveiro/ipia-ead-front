import { CardDashboard } from '@/components/common/CardDashboard'
import { useDashboardQuery } from '@/gql/generated/graphql'
import {
  ClockAlert,
  DiamondPlus,
  FileQuestion,
  Group,
  ListTodo,
  NotebookText,
  SpellCheck,
  User2,
} from 'lucide-react'

function Dashboard() {
  const { data, loading } = useDashboardQuery()

  const dashboard = {
    alunos: {
      quantidade: data?.alunos.totalCount || 0,
      title: 'Alunos Cadastrados',
      icon: <User2 />,
    },
    cursos: {
      quantidade: data?.cursos.totalCount || 0,
      title: 'Cursos Cadastrados',
      icon: <DiamondPlus />,
    },
    modulos: {
      quantidade: data?.modulos.totalCount || 0,
      title: 'Módulos Cadastrados',
      icon: <Group />,
    },
    aulas: {
      quantidade: data?.aulas.totalCount || 0,
      title: 'Aulas Cadastradas',
      icon: <ClockAlert />,
    },
    turmas: {
      quantidade: data?.turmas.totalCount || 0,
      title: 'Turmas Cadastradas',
      icon: <SpellCheck />,
    },

    formulario: {
      quantidade: data?.formularios.totalCount || 0,
      title: 'Formulários Cadastradas',
      icon: <FileQuestion />,
    },
    perguntas: {
      quantidade: data?.perguntas.totalCount || 0,
      title: 'Perguntas Cadastradas',
      icon: <ListTodo />,
    },
    inscricao: {
      quantidade: data?.inscricoes.totalCount || 0,
      title: 'Incrições Cadastradas',
      icon: <NotebookText />,
    },
  }
  const dashboardArray = Object.entries(dashboard)

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4 md:gap-6">
      {dashboardArray.map(([key, card]) => (
        <CardDashboard key={key} {...card} loading={loading} />
      ))}
    </div>
  )
}

export { Dashboard }
