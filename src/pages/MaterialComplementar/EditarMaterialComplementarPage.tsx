import { Page } from '@/components/Page'
import { useAulaQuery, useModuloQuery } from '@/gql/generated/graphql'
import { ROTAS } from '@/routes/rotas'
import { generatePath, useParams } from 'react-router'
import { FormAula } from './components/FormAula'
import { SkeletonForm } from './components/FormAula/skeletonForm'

export function EditarMaterialComplementarPage({
  biblioteca = false,
}: { biblioteca?: boolean }) {
  const moduloId = useParams().moduloId as string
  const { data: modulo } = useModuloQuery({
    variables: {
      id: +moduloId,
    },
    skip: !moduloId,
  })

  const id = useParams().id as string

  const { data, loading } = useAulaQuery({
    variables: {
      id: +id,
    },
    skip: !id,
  })
  const urlVoltar = generatePath(ROTAS.MATERIAL_COMPLEMENTAR, { moduloId })

  return (
    <Page>
      <Page.Header>
        <Page.Titulo>
          Editar Material Complementar da Biblioteca {modulo?.modulo?.titulo}
        </Page.Titulo>
      </Page.Header>
      {loading && <SkeletonForm />}
      {!loading && data?.aula && (
        <FormAula
          biblioteca={biblioteca}
          aula={data.aula}
          urlVoltar={urlVoltar}
        />
      )}
    </Page>
  )
}
