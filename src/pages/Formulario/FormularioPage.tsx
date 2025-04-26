import DataTable from '@/components/DataTable'
import { Page } from '@/components/Page'
import { InputField } from '@/components/form/InputField'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { useModuloQuery } from '@/gql/generated/graphql'
import { ROTAS } from '@/routes/rotas'
import { Search, Trash2Icon } from 'lucide-react'
import { Link, generatePath, useParams } from 'react-router'
import { useTabelaFormulario } from './components/Tabela/useTabela'

export function FormularioPage() {
  const moduloId = useParams().moduloId as string
  const { data: modulo } = useModuloQuery({
    variables: {
      id: +moduloId,
    },
    skip: !moduloId,
  })

  const { tabela, form, handleFilter, limparFiltro } = useTabelaFormulario()

  return (
    <Page>
      <Page.Header>
        <Page.Titulo>Formulários do {modulo?.modulo?.titulo}</Page.Titulo>
        <Link
          to={generatePath(ROTAS.MODULO, {
            cursoId: modulo?.modulo?.curso?.id,
          })}
        >
          <Button>Novo Formulário</Button>
        </Link>
      </Page.Header>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(() => handleFilter())}
          className="grid grid-cols-12 gap-4 md:gap-6 mb-2 mx-2"
        >
          <div className=" xl:col-span-3 col-span-12 md:col-span-6 ">
            <InputField
              label="Titulo"
              placeholder="Titulo do Formulário"
              name="nome"
            />
          </div>
          <div className=" xl:col-span-3 col-span-12 md:col-span-6 ">
            <InputField
              label="Módulo"
              placeholder="Nome do módulo"
              name="modulo"
            />
          </div>

          <div className=" xl:col-span-3 col-span-12 md:col-span-6 flex  items-end gap-3">
            <Button type="submit">
              <Search />
            </Button>

            <Button
              variant="outline"
              onClick={() => limparFiltro()}
              type="reset"
            >
              <Trash2Icon />
            </Button>
          </div>
        </form>
      </Form>

      <DataTable {...tabela} />
    </Page>
  )
}
