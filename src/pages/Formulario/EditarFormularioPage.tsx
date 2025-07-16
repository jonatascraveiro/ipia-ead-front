import { Page } from '@/components/Page'
import { CardForm } from '@/components/common/CardForm'
import { useFormularioQuery, useSubModuloQuery } from '@/gql/generated/graphql'
import { ROTAS } from '@/routes/rotas'
import { generatePath, useParams } from 'react-router'

import { FormFormulario } from './components/FormFormulario'
import { SkeletonForm } from './components/FormFormulario/skeletonForm'
import { FormPerguntas } from './components/FormPerguntas'

export function EditarFormularioPage() {
  const id = useParams().id as string
  const { data, loading } = useFormularioQuery({
    variables: {
      id: +id,
    },
    skip: !id,
  })

  const subModuloId = useParams().subModuloId as string
  const { data: subModulo } = useSubModuloQuery({
    variables: {
      id: +subModuloId,
    },
    skip: !subModuloId,
  })
  const urlVoltar = generatePath(ROTAS.FORMULARIO, {
    subModuloId,
  })

  return (
    <Page>
      <Page.Header>
        <Page.Titulo url={urlVoltar}>
          Editar Formulario de {subModulo?.subModulo?.titulo}
        </Page.Titulo>
      </Page.Header>
      {loading && <SkeletonForm />}
      {!loading && data?.formulario && (
        <>
          <CardForm>
            <CardForm.Titulo>Formulário </CardForm.Titulo>
            <FormFormulario
              formulario={data.formulario}
              urlVoltar={urlVoltar}
              subModuloId={+subModuloId}
            />
          </CardForm>
          <CardForm>
            <CardForm.Titulo>Perguntas </CardForm.Titulo>
            <FormPerguntas
              perguntas={data?.formulario?.perguntas || []}
              formularioId={+id}
            />
          </CardForm>
        </>
      )}
    </Page>
  )
}
