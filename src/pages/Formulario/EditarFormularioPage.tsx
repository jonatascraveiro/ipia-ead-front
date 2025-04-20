import { Page } from '@/components/Page'
import { useFormularioQuery } from '@/gql/generated/graphql'
import { useParams } from 'react-router'
import { FormFormulario } from './components/FormFormulario'
import { SkeletonForm } from './components/FormFormulario/skeletonForm'

export function EditarFormularioPage() {
  const id = useParams().id as string
  const { data, loading } = useFormularioQuery({
    variables: {
      id: +id,
    },
    skip: !id,
  })

  return (
    <Page>
      <Page.Header>
        <Page.Titulo>Editar Formulario</Page.Titulo>
      </Page.Header>
      {loading && <SkeletonForm />}
      {!loading && data?.formulario && (
        <FormFormulario formulario={data.formulario} />
      )}
    </Page>
  )
}
