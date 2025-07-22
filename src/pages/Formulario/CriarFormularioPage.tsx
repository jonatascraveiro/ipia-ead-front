import { Page } from '@/components/Page'
import { useSubModuloQuery } from '@/gql/generated/graphql'
import { ROTAS } from '@/routes/rotas'
import { generatePath, useParams } from 'react-router'
import { FormFormulario } from './components/FormFormulario'

export function CriarFormularioPage() {
  const subModuloId = useParams().subModuloId as string

  const { data: modulo } = useSubModuloQuery({
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
          Criar Formulario do {modulo?.subModulo?.titulo}
        </Page.Titulo>
      </Page.Header>

      <FormFormulario urlVoltar={urlVoltar} subModuloId={+subModuloId} />
    </Page>
  )
}
