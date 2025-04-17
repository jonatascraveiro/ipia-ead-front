import { Page } from '@/components/Page'
import { FormAula } from './components/FormAula'

export function CriarAulaPage({
  biblioteca = false,
}: { biblioteca?: boolean }) {
  return (
    <Page>
      <Page.Header>
        <Page.Titulo>
          {biblioteca ? 'Criar Aula Complementar' : 'Criar Aula'}
        </Page.Titulo>
      </Page.Header>

      <FormAula biblioteca={biblioteca} />
    </Page>
  )
}
