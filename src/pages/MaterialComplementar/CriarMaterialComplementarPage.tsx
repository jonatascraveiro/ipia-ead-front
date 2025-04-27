import { Page } from '@/components/Page'
import { useModuloQuery } from '@/gql/generated/graphql'
import { ROTAS } from '@/routes/rotas'
import { generatePath, useParams } from 'react-router'
import { FormAula } from './components/FormAula'

export function CriarMaterialComplementarPage({
  biblioteca = false,
}: { biblioteca?: boolean }) {
  const moduloId = useParams().moduloId as string
  const { data: modulo } = useModuloQuery({
    variables: {
      id: +moduloId,
    },
    skip: !moduloId,
  })
  const urlVoltar = generatePath(ROTAS.MATERIAL_COMPLEMENTAR, { moduloId })
  return (
    <Page>
      <Page.Header>
        <Page.Titulo>
          Criar Material Complementar da Biblioteca {modulo?.modulo?.titulo}
        </Page.Titulo>
      </Page.Header>

      <FormAula biblioteca={biblioteca} urlVoltar={urlVoltar} />
    </Page>
  )
}
