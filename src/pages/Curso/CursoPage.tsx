import DataTable from '@/components/DataTable'
import { Page } from '@/components/Page'
import { InputField } from '@/components/form/InputField'
import { SelectField } from '@/components/form/SelectField'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Search, Trash2Icon } from 'lucide-react'
import { Link } from 'react-router'
import { useTabelaCurso } from './components/TabelaCurso/useTabelaCurso'

export function CursoPage() {
  const { tabela, form, handleFilter, limparFiltro } = useTabelaCurso()

  return (
    <Page>
      <Page.Header>
        <Page.Titulo>Cursos</Page.Titulo>{' '}
        <Link to="/curso/criar">
          <Button>Novo Curso</Button>
        </Link>
      </Page.Header>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleFilter)}
          className="grid grid-cols-12 gap-4 md:gap-6 mb-2 mx-2"
        >
          <div className=" xl:col-span-3 col-span-12 md:col-span-6 ">
            <InputField label="Nome" placeholder="nome do Curso" name="nome" />
          </div>

          <div className=" xl:col-span-3 col-span-12 md:col-span-6 ">
            <SelectField
              label="Status"
              name="status"
              placeholder="Selecione"
              options={[
                {
                  label: 'Ativo',
                  value: 1,
                },
                {
                  label: 'Inativo',
                  value: 2,
                },
              ]}
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
