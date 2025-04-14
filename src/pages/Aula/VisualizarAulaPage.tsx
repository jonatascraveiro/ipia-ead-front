import { Page } from '@/components/Page'
import { useAulaQuery } from '@/gql/generated/graphql'
import { useParams } from 'react-router'
import { FormAula } from './components/FormAula'
import { SkeletonForm } from './components/FormAula/skeletonForm'

export function VisualizarAulaPage() {
  const id = useParams().id as string
  const { data, loading } = useAulaQuery({
    variables: {
      id: +id,
    },
    skip: !id,
  })

  return (
    <Page>
      <Page.Header>
        <Page.Titulo>Visualizar Aula</Page.Titulo>
      </Page.Header>
      {loading && <SkeletonForm />}
      {!loading && data && <FormAula disabled aula={data.aula} />}
    </Page>
  )
}
