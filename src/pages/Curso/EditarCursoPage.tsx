import { Page } from '@/components/Page'
import { useCursoQuery } from '@/gql/generated/graphql'
import { useParams } from 'react-router'
import { FormCurso } from './components/FormCurso'
import { SkeletonForm } from './components/FormCurso/skeletonForm'

export function EditarCursoPage() {
  const id = useParams().id
  const { data, loading } = useCursoQuery({
    variables: {
      id: Number(id),
    },
  })

  return (
    <Page>
      <Page.Header>
        <Page.Titulo>Editar Curso</Page.Titulo>
      </Page.Header>
      {loading && <SkeletonForm />}
      {!loading && data?.curso && <FormCurso curso={data.curso} />}
    </Page>
  )
}
