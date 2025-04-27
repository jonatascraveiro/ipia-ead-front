import { Page } from '@/components/Page'
import { useCursoQuery } from '@/gql/generated/graphql'
import { ROTAS } from '@/routes/rotas'
import { generatePath, useParams } from 'react-router'
import { FormTurma } from './components/FormTurma'

export function CriarTurmaPage() {
  const cursoId = useParams().cursoId as string
  const { data: curso } = useCursoQuery({
    variables: {
      id: +cursoId,
    },
    skip: !cursoId,
  })
  const urlVoltar = generatePath(ROTAS.TURMA, {
    cursoId,
  })

  return (
    <Page>
      <Page.Header>
        <Page.Titulo url={urlVoltar}>
          Criar Turma {curso?.curso?.nome}
        </Page.Titulo>
      </Page.Header>

      <FormTurma urlVoltar={generatePath(ROTAS.TURMA, { cursoId })} />
    </Page>
  )
}
