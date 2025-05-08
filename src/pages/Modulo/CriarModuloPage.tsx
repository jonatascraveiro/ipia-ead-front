import { Page } from '@/components/Page'
import { useCursoQuery } from '@/gql/generated/graphql'
import { ROTAS } from '@/routes/rotas'
import { generatePath, useParams } from 'react-router'
import { FormModulo } from './components/FormModulo'
import { SkeletonForm } from './components/FormModulo/skeletonForm'

export function CriarModuloPage({
  biblioteca = false,
}: { biblioteca?: boolean }) {
  const cursoId = useParams().cursoId as string
  const { data: curso, loading } = useCursoQuery({
    variables: {
      id: +cursoId,
      bilbioteca: biblioteca,
    },
    skip: !cursoId,
  })
  const qtdModulos = (curso?.curso?.modulos?.length || 0) + 1

  return (
    <Page>
      <Page.Header>
        <Page.Titulo>
          Criar {biblioteca ? 'Biblioteca' : 'Módulo'} do curso{' '}
          {curso?.curso?.nome}
        </Page.Titulo>
      </Page.Header>

      {loading && <SkeletonForm />}

      {!loading && curso?.curso && (
        <FormModulo
          urlVoltar={generatePath(
            biblioteca ? ROTAS.BIBLIOTECA : ROTAS.MODULO,
            {
              cursoId,
            },
          )}
          quantidadeModulos={qtdModulos}
          biblioteca={biblioteca}
          cursoId={cursoId}
        />
      )}
    </Page>
  )
}
