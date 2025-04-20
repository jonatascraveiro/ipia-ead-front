import { Page } from '@/components/Page'
import { FormFormulario } from './components/FormFormulario'

export function CriarFormularioPage() {
  return (
    <Page>
      <Page.Header>
        <Page.Titulo>Criar Formulario</Page.Titulo>
      </Page.Header>

      <FormFormulario />
    </Page>
  )
}
