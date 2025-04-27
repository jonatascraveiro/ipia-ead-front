import { Page } from '@/components/Page'
import { useAulaQuery, useSubModuloQuery } from '@/gql/generated/graphql'
import { ROTAS } from '@/routes/rotas'
import { generatePath, useParams } from 'react-router'
import { FormAula } from './components/FormAula'
import { SkeletonForm } from './components/FormAula/skeletonForm'

export function EditarAulaPage({
  biblioteca = false,
}: { biblioteca?: boolean }) {
  const subModuloId = useParams().subModuloId as string
  const id = useParams().id as string
  const { data, loading } = useAulaQuery({
    variables: {
      id: +id,
    },
    skip: !id,
  })

  const { data: subModulo } = useSubModuloQuery({
    variables: {
      id: +subModuloId,
    },
    skip: !subModuloId,
  })

  return (
    <Page>
      <Page.Header>
        <Page.Titulo>
          {' '}
          {`Editar Aula ${subModulo?.subModulo?.titulo}`}
        </Page.Titulo>
      </Page.Header>
      {loading && <SkeletonForm />}
      {!loading && data?.aula && (
        <FormAula
          biblioteca={biblioteca}
          aula={data.aula}
          subModuloId={subModuloId}
          urlVoltar={generatePath(ROTAS.AULA, { subModuloId })}
        />
      )}
    </Page>
  )
}
