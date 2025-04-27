import { Page } from '@/components/Page'
import { CardForm } from '@/components/common/CardForm'
import { useModuloQuery } from '@/gql/generated/graphql'
import { ROTAS } from '@/routes/rotas'
import { generatePath, useParams } from 'react-router'
import { SkeletonForm } from './components/FormModulo/skeletonForm'
import { FormSubModulo } from './components/FormSubModulo'

export function EditarSubModuloPage() {
  const id = useParams().id as string

  const cursoId = useParams().cursoId as string

  const { data, loading } = useModuloQuery({
    variables: {
      id: +id,
    },
    skip: !id,
  })

  const urlVoltar = generatePath(ROTAS.MODULO, {
    cursoId,
  })

  return (
    <Page>
      <Page.Header>
        <Page.Titulo url={urlVoltar}>Módulo {data?.modulo?.titulo}</Page.Titulo>
      </Page.Header>
      {loading && <SkeletonForm />}
      {!loading && data?.modulo && (
        <CardForm>
          <CardForm.Titulo>Submódulos </CardForm.Titulo>

          <FormSubModulo
            subModulos={data.modulo.subModulos || []}
            moduloId={+id}
          />
        </CardForm>
      )}
    </Page>
  )
}
