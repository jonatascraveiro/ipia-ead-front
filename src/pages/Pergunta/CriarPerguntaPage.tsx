import { Page } from '@/components/Page'
import { FormPerguntas } from './components/FormPerguntas'

export function CriarPerguntaPage() {
  return (
    <Page>
      <Page.Header>
        <Page.Titulo>Criar Pergunta</Page.Titulo>
      </Page.Header>

      <FormPerguntas />
    </Page>
  )
}
