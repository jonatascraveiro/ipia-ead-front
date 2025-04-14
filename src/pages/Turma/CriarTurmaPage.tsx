import { Page } from '@/components/Page'
import { FormTurma } from './components/FormTurma'

export function CriarTurmaPage() {
  return (
    <Page>
      <Page.Header>
        <Page.Titulo>Criar Turma</Page.Titulo>
      </Page.Header>

      <FormTurma />
    </Page>
  )
}
