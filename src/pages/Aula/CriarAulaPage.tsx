import { Page } from '@/components/Page'
import { useAulasTotalQuery, useSubModuloQuery } from '@/gql/generated/graphql'
import { ROTAS } from '@/routes/rotas'
import { generatePath, useParams } from 'react-router'
import { FormAula } from './components/FormAula'

export function CriarAulaPage({
  biblioteca = false,
}: { biblioteca?: boolean }) {
  const subModuloId = useParams().subModuloId as string
  const { data: subModulo } = useSubModuloQuery({
    variables: {
      id: +subModuloId,
    },
    skip: !subModuloId,
  })

  const { data: aulasSubmodulo } = useAulasTotalQuery({
    variables: {
      filter: {
        subModuloId: {
          eq: +subModuloId,
        },
      },
      paging: {
        first: 50,
      },
    },
  })
  const qtdAulas = (aulasSubmodulo?.aulas.totalCount || 0) + 1
  return (
    <Page>
      <Page.Header>
        <Page.Titulo>
          {`Criar Aula ${subModulo?.subModulo?.titulo}`}
        </Page.Titulo>
      </Page.Header>

      {aulasBiblioteca && (
        <FormAula
          biblioteca={biblioteca}
          urlVoltar={generatePath(ROTAS.AULA, { subModuloId })}
          subModuloId={subModuloId}
          qtdAulas={qtdAulas}
        />
      )}
    </Page>
  )
}
