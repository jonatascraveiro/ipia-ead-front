import { Page } from '@/components/Page'
import { CardForm } from '@/components/common/CardForm'
import { useAulaFormularioQuery } from '@/gql/generated/graphql'
import { ROTAS } from '@/routes/rotas'
import { generatePath, useParams } from 'react-router'
import { FormFormulario } from './components/FormFormulario'
import { SkeletonForm } from './components/FormFormulario/skeletonForm'
import { FormPerguntas } from './components/FormPerguntas'

export function CriarFormularioAulaPage() {
  const aulaId = useParams().aulaId as string

  const { data: aula, loading } = useAulaFormularioQuery({
    variables: {
      id: +aulaId,
    },
    skip: !aulaId,
  })
  const urlVoltar = generatePath(ROTAS.AULA, {
    subModuloId: String(aula?.aula?.subModuloId || 0),
  })

  return (
    <Page>
      <Page.Header>
        <Page.Titulo url={urlVoltar}>
          Formulario da aula {aula?.aula?.titulo}
        </Page.Titulo>
      </Page.Header>

      {loading && <SkeletonForm />}
      {!loading && (
        <>
          <CardForm>
            <CardForm.Titulo>Formulário aula</CardForm.Titulo>
            <FormFormulario
              formulario={aula?.aula?.formulario}
              urlVoltar={urlVoltar}
              aulaId={+aulaId}
            />
          </CardForm>
          {aula?.aula?.formulario && (
            <CardForm>
              <CardForm.Titulo>Perguntas </CardForm.Titulo>
              <FormPerguntas
                perguntas={aula?.aula?.formulario?.perguntas || undefined}
                formularioId={+aula?.aula?.formulario?.id}
              />
            </CardForm>
          )}
        </>
      )}
    </Page>
  )
}
