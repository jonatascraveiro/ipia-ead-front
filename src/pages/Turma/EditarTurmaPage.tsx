import { Page } from '@/components/Page'
import { useBuscarTurma } from '@/services/turma'
import { useParams } from 'react-router'
import { FormTurma } from './components/FormTurma'
import { SkeletonForm } from './components/FormTurma/skeletonForm'

export function EditarTurmaPage() {
  const id = useParams().id
  const { data, isLoading } = useBuscarTurma(Number(id))

  return (
    <Page>
      <Page.Header>
        <Page.Titulo>Editar Turma</Page.Titulo>
      </Page.Header>
      {isLoading && <SkeletonForm />}
      {!isLoading && <FormTurma turma={data} />}
    </Page>
  )
}
