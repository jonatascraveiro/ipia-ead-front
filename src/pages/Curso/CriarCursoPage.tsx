import { Page } from '@/components/Page'
import { ROTAS } from '@/routes/rotas'
import { FormCurso } from './components/FormCurso'

export function CriarCursoPage() {
  return (
    <Page>
      <Page.Header>
        <Page.Titulo>Criar Curso</Page.Titulo>
      </Page.Header>

      <FormCurso urlVoltar={ROTAS.CURSO} />
    </Page>
  )
}
