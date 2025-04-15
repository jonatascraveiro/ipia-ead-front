import { Page } from '@/components/Page'
import { useTurmaQuery } from '@/gql/generated/graphql'
import { useParams } from 'react-router'
import { FormTurma } from './components/FormTurma'
import { SkeletonForm } from './components/FormTurma/skeletonForm'

export function VisualizarTurmaPage() {
  const id = useParams().id

  const { data, loading } = useTurmaQuery({
    variables: {
      id: Number(id),
    },
  })

  return (
    <Page>
      <Page.Header>
        <Page.Titulo>Visualizar Turma</Page.Titulo>
      </Page.Header>
      {loading && <SkeletonForm />}
      {!loading && data?.turma && <FormTurma disabled turma={data?.turma} />}
    </Page>
  )
}
