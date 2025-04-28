import { Page } from '@/components/Page'
import { useCursoQuery } from '@/gql/generated/graphql'
import { ROTAS } from '@/routes/rotas'
import { generatePath, useParams } from 'react-router'
import { FormModulo } from './components/FormModulo'

export function CriarModuloPage({
  biblioteca = false,
}: { biblioteca?: boolean }) {
  const cursoId = useParams().cursoId as string
  const { data: curso } = useCursoQuery({
    variables: {
      id: +cursoId,
    },
    skip: !cursoId,
  })

  return (
    <Page>
      <Page.Header>
        <Page.Titulo>
          Criar {biblioteca ? 'Biblioteca' : 'Módulo'} do curso{' '}
          {curso?.curso?.nome}
        </Page.Titulo>
      </Page.Header>

      <FormModulo
        urlVoltar={generatePath(biblioteca ? ROTAS.BIBLIOTECA : ROTAS.MODULO, {
          cursoId,
        })}
        biblioteca={biblioteca}
        cursoId={cursoId}
      />
    </Page>
  )
}
