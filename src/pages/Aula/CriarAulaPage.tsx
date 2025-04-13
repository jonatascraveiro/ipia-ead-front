import { Page } from '@/components/Page'
import { FormAula } from './components/FormAula'

export function CriarAulaPage() {
  return (
    <Page>
      <Page.Header>
        <Page.Titulo>Criar Aula</Page.Titulo>
      </Page.Header>

      <FormAula />
    </Page>
  )
}
