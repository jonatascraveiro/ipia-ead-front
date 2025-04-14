import { Page } from '@/components/Page'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router'
import { FormModulo } from './components/FormModulo'

export function CriarModuloPage() {
  return (
    <Page>
      <Page.Header>
        <Page.Titulo>Criar Modulo</Page.Titulo>
        <Link to="/modulo/criar">
          <Button>Novo Modulo</Button>
        </Link>
      </Page.Header>

      <FormModulo />
    </Page>
  )
}
