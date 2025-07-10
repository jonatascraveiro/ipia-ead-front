import DataTable from '@/components/DataTable'
import { Page } from '@/components/Page'
import { InputField } from '@/components/form/InputField'
import { SelectFieldString } from '@/components/form/SelectFieldString'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Search, Trash2Icon } from 'lucide-react'
import { useTabelaInscricao } from './components/Tabela/useTabela'

export function InscricaoPage() {
  const { tabela, form, handleFilter, limparFiltro } = useTabelaInscricao()

  return (
    <Page>
      <Page.Header>
        <Page.Titulo>Inscrições</Page.Titulo>
      </Page.Header>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleFilter)}
          className="grid grid-cols-12 gap-4 md:gap-6 mb-2 mx-2"
        >
          <div className=" xl:col-span-3 col-span-12 md:col-span-6 ">
            <InputField
              label="Turma"
              placeholder="Nome da turma"
              name="turma"
            />
          </div>

          <div className=" xl:col-span-3 col-span-12 md:col-span-6 ">
            <InputField label="Aluno" placeholder="Nome do aluno" name="nome" />
          </div>
          <div className=" xl:col-span-2 col-span-12 md:col-span-5 ">
            <InputField
              label="Matrícula"
              placeholder="Matrícula do aluno"
              name="matricula"
            />
          </div>

          <div className=" xl:col-span-2 col-span-12 md:col-span-5 ">
            <SelectFieldString
              label="Status Inscrição"
              placeholder="Selecione o status"
              name="status"
              options={[
                {
                  label: 'Todas',
                  value: '0',
                },
                {
                  label: 'Realizada',
                  value: 'true',
                },
                {
                  label: 'Pendente',
                  value: 'false',
                },
              ]}
            />
          </div>

          <div className=" xl:col-span-2 col-span-12 md:col-span-2 flex  items-end gap-3">
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
