import { Page } from '@/components/Page'
import { CardForm } from '@/components/common/CardForm'
import { useSubModuloFormularioQuery } from '@/gql/generated/graphql'
import { ROTAS } from '@/routes/rotas'
import { generatePath, useParams } from 'react-router'

import { FormFormulario } from './components/FormFormulario'
import { SkeletonForm } from './components/FormFormulario/skeletonForm'
import { FormPerguntas } from './components/FormPerguntas'

export function SubmoduloFormularioPage() {
  const subModuloId = useParams().subModuloId as string
  const { data, loading } = useSubModuloFormularioQuery({
    variables: {
      id: +subModuloId,
    },
    skip: !subModuloId,
  })

  const urlVoltar = generatePath(ROTAS.MODULO_SUBMODULO_EDITAR, {
    id: String(data?.subModulo?.moduloId),
    cursoId: String(data?.subModulo?.modulo?.cursoId),
  })

  return (
    <Page>
      <Page.Header>
        <Page.Titulo url={urlVoltar}>
          Formulario de {data?.subModulo?.titulo || ''}
        </Page.Titulo>
      </Page.Header>
      {loading && <SkeletonForm />}
      {!loading && (
        <>
          <CardForm>
            <CardForm.Titulo>Formulário </CardForm.Titulo>
            <FormFormulario
              formulario={data?.subModulo?.formulario}
              urlVoltar={urlVoltar}
              subModuloId={+subModuloId}
            />
          </CardForm>
          {data?.subModulo?.formulario && (
            <CardForm>
              <CardForm.Titulo>Perguntas </CardForm.Titulo>
              <FormPerguntas
                perguntas={data?.subModulo?.formulario.perguntas || []}
                formularioId={+data?.subModulo?.formulario?.id}
              />
            </CardForm>
          )}
        </>
      )}
    </Page>
  )
}
