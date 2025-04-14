import { Page } from '@/components/Page'
import { useBuscarTurma } from '@/services/turma'
import { useParams } from 'react-router'
import { FormTurma } from './components/FormTurma'
import { SkeletonForm } from './components/FormTurma/skeletonForm'

export function VisualizarTurmaPage() {
  const id = useParams().id

  const { data, isLoading } = useBuscarTurma(Number(id))

  return (
    <Page>
      <Page.Header>
        <Page.Titulo>Visualizar Turma</Page.Titulo>
      </Page.Header>
      {isLoading && <SkeletonForm />}
      {!isLoading && <FormTurma disabled turma={data} />}
    </Page>
  )
}
