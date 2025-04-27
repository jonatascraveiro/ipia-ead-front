import DataTable from '@/components/DataTable'
import { Page } from '@/components/Page'
import { InputField } from '@/components/form/InputField'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { useSubModuloQuery } from '@/gql/generated/graphql'
import { ROTAS } from '@/routes/rotas'
import { Search, Trash2Icon } from 'lucide-react'
import { Link, generatePath, useParams } from 'react-router'
import { useTabelaFormulario } from './components/Tabela/useTabela'

export function FormularioPage() {
  const subModuloId = useParams().subModuloId || 0
  const { data: subModulo } = useSubModuloQuery({
    variables: {
      id: +subModuloId,
    },
    skip: !subModuloId,
  })
  const urlVoltar = generatePath(ROTAS.MODULO_EDITAR, {
    id: subModulo?.subModulo?.modulo?.id || 0,
    cursoId: subModulo?.subModulo?.modulo?.curso?.id || 0,
  })

  // url={generatePath(ROTAS.MODULO_EDITAR, {
  //   id: subModulo?.subModulo?.modulo?.id || 0,
  //   cursoId: subModulo?.subModulo?.modulo?.curso?.id || 0,
  // })}
  const { tabela, form, handleFilter, limparFiltro } = useTabelaFormulario({
    subModuloId: +subModuloId,
  })

  return (
    <Page>
      <Page.Header>
        <Page.Titulo url={urlVoltar}>
          Formulários do {subModulo?.subModulo?.titulo}
        </Page.Titulo>
        <Link
          to={generatePath(ROTAS.FORMULARIO_CRIAR, {
            subModuloId,
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
