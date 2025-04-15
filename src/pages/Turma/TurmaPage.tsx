import DataTable from '@/components/DataTable'
import { Page } from '@/components/Page'
import { InputField } from '@/components/form/InputField'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Search, Trash2Icon } from 'lucide-react'
import { Link } from 'react-router'
import { useTabelaTurma } from './components/TabelaTurma/useTabelaTurma'

export function TurmaPage() {
  const { tabela, form, handleFilter, limparFiltro } = useTabelaTurma()

  return (
    <Page>
      <Page.Header>
        <Page.Titulo>Turmas</Page.Titulo>
        <Link to="/turma/criar">
          <Button>Nova Turma</Button>
        </Link>
      </Page.Header>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleFilter)}
          className="grid grid-cols-12 gap-4 md:gap-6 mb-2 mx-2"
        >
          <div className=" xl:col-span-3 col-span-12 md:col-span-6 ">
            <InputField label="Nome" placeholder="nome do Turma" name="nome" />
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
