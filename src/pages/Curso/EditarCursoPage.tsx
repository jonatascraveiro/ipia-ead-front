import { Page } from '@/components/Page'
import { useCursoQuery } from '@/gql/generated/graphql'
import { ROTAS } from '@/routes/rotas'
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
        <Page.Titulo url={ROTAS.CURSO}>Editar Curso</Page.Titulo>
      </Page.Header>
      {loading && <SkeletonForm />}
      {!loading && data?.curso && (
        <FormCurso curso={data.curso} urlVoltar={ROTAS.CURSO} />
      )}
    </Page>
  )
}
