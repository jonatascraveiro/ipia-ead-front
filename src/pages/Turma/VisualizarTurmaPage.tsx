import { Page } from '@/components/Page'
import { useCursoQuery, useTurmaQuery } from '@/gql/generated/graphql'
import { ROTAS } from '@/routes/rotas'
import { generatePath, useParams } from 'react-router'
import { FormTurma } from './components/FormTurma'
import { SkeletonForm } from './components/FormTurma/skeletonForm'

export function VisualizarTurmaPage() {
  const cursoId = useParams().cursoId as string
  const { data: curso } = useCursoQuery({
    variables: {
      id: +cursoId,
    },
    skip: !cursoId,
  })

  const id = useParams().id

  const { data, loading } = useTurmaQuery({
    variables: {
      id: Number(id),
    },
  })

  const urlVoltar = generatePath(ROTAS.TURMA, {
    cursoId,
  })

  return (
    <Page>
      <Page.Header>
        <Page.Titulo url={urlVoltar}>
          Visualizar Turma do curso {curso?.curso?.nome}
        </Page.Titulo>
      </Page.Header>
      {loading && <SkeletonForm />}
      {!loading && data?.turma && (
        <FormTurma
          disabled
          turma={data?.turma}
          urlVoltar={generatePath(ROTAS.TURMA, { cursoId })}
        />
      )}
    </Page>
  )
}
