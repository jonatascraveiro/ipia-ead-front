import { Page } from '@/components/Page'
import { FormUsuario } from './components/FormUsuario'

export function CriarUsuarioPage() {
  return (
    <Page>
      <Page.Header>
        <Page.Titulo>Criar Usuário</Page.Titulo>
      </Page.Header>

      <FormUsuario />
    </Page>
  )
}
