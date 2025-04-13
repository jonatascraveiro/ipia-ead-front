import { Page } from '@/components/Page'
import { FormCurso } from './components/FormCurso'

export function CriarCursoPage() {
  return (
    <Page>
      <Page.Header>
        <Page.Titulo>Criar Curso</Page.Titulo>
      </Page.Header>

      <FormCurso />
    </Page>
  )
}
