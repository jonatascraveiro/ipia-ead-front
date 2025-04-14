import { Page } from '@/components/Page'
import { useModuloQuery } from '@/gql/generated/graphql'
import { useParams } from 'react-router'
import { FormModulo } from './components/FormModulo'
import { SkeletonForm } from './components/FormModulo/skeletonForm'

export function EditarModuloPage() {
  const id = useParams().id as string
  const { data, loading } = useModuloQuery({
    variables: {
      id: +id,
    },
    skip: !id,
  })

  return (
    <Page>
      <Page.Header>
        <Page.Titulo>Editar Modulo</Page.Titulo>
      </Page.Header>
      {loading && <SkeletonForm />}
      {!loading && data?.modulo && <FormModulo modulo={data.modulo} />}
    </Page>
  )
}
