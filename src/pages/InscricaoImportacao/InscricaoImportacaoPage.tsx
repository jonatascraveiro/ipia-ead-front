import DataTable from '@/components/DataTable'
import { Page } from '@/components/Page'
import { InputField } from '@/components/form/InputField'
import { SelectFieldString } from '@/components/form/SelectFieldString'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Form } from '@/components/ui/form'
import { ROTAS } from '@/routes/rotas'
import { format } from 'date-fns'
import { Search, Trash2Icon } from 'lucide-react'
import { generatePath } from 'react-router'
import { useTabelaInscricao } from './components/Tabela/useTabela'

export function InscricaoImportacaoPage() {
  const { tabela, form, handleFilter, limparFiltro, importacao } =
    useTabelaInscricao()
  const urlVoltar = generatePath(ROTAS.IMPORTACOES)
  return (
    <Page>
      <Page.Header>
        <Page.Titulo url={urlVoltar}>Inscrições Importadas</Page.Titulo>
      </Page.Header>
      <Card className="px-2 my-4">
        <div>Planilha {importacao?.nomePlanilha}</div>
        <div className="grid grid-cols-12 gap-4 md:gap-6 ">
          <div className="  col-span-12 md:col-span-6 ">
            Turma: {importacao?.turma?.nome}
          </div>
          <div className="  col-span-12 md:col-span-6 ">
            {/* Curso: {importacao?.turma?.curso?.nome} */}
          </div>
          <div className=" xl:col-span-4 col-span-12 md:col-span-6 ">
            Quantidade de alunos: {importacao?.quantidadeImportada}
          </div>
          <div className=" xl:col-span-4 col-span-12 md:col-span-6 ">
            Importada por: {importacao?.usuario?.nome}
          </div>
          <div className=" xl:col-span-4 col-span-12 md:col-span-6 ">
            Data importação:{' '}
            {importacao?.createdAt &&
              format(importacao?.createdAt, 'dd/MM/yyyy HH:mm')}
          </div>
        </div>
      </Card>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleFilter)}
          className="grid grid-cols-12 gap-4 md:gap-6 mb-2 mx-2"
        >
          <div className=" xl:col-span-3 col-span-12 md:col-span-6 ">
            <InputField label="Aluno" placeholder="Nome do aluno" name="nome" />
          </div>

          <div className=" xl:col-span-3 col-span-12 md:col-span-6 ">
            <InputField
              label="Matrícula"
              placeholder="Matrícula do aluno"
              name="matricula"
            />
          </div>
          <div className=" xl:col-span-3 col-span-12 md:col-span-6 ">
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
