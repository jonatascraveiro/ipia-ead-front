import { CardAlunos } from './components/CardAlunos'
import { CardAulas } from './components/CardAulas'
import { CardCursos } from './components/CardCursos'
import { CardModulos } from './components/CardModulos'

function Dashboard() {
  const dashboard = {
    alunos: { quantidade: 100, percentual: 200.6 },
    cursos: { quantidade: 2, percentual: 12.6 },
    modulos: { quantidade: 6, percentual: 20.6 },
    aulas: { quantidade: 10, percentual: 26.6 },
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 md:gap-6">
      <CardAlunos {...dashboard.alunos} />
      <CardCursos {...dashboard.cursos} />
      <CardModulos {...dashboard.modulos} />
      <CardAulas {...dashboard.aulas} />
    </div>
  )
}

export { Dashboard }
