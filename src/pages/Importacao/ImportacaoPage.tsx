import DataTable from '@/components/DataTable'
import { Page } from '@/components/Page'
import { InputField } from '@/components/form/InputField'
import { Button } from '@/components/ui/button'
import { Form, FormMessage } from '@/components/ui/form'
import { DownloadIcon, Search, Trash2Icon, UploadIcon } from 'lucide-react'
import { useTabelaInscricao } from './components/Tabela/useTabela'

import { SelectField } from '@/components/form/SelectField'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { FileUploader } from '@/components/ui/file-uploader'

export function ImportacaoPage() {
  const {
    tabela,
    form,
    handleFilter,
    limparFiltro,
    formImportacao,
    handleSubmitImportacao,
    modal,
    cursoOptions,
    turmaOptions,
  } = useTabelaInscricao()
  console.log(cursoOptions)
  return (
    <Page>
      <Page.Header>
        <Page.Titulo>Importações</Page.Titulo>

        <Button onClick={modal.openModal}>
          {' '}
          <UploadIcon />
          Nova Importação
        </Button>
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
            <InputField
              label="Curso"
              placeholder="Nome do curso"
              name="curso"
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

      <Dialog open={modal.isOpen} onOpenChange={modal.closeModal}>
        <DialogContent className="w-80 sm:w-full  sm:max-w-lg w-max">
          <Form {...formImportacao}>
            <DialogHeader>
              <DialogTitle>Importar alunos</DialogTitle>
            </DialogHeader>

            <form
              onSubmit={formImportacao.handleSubmit(handleSubmitImportacao)}
              className="grid grid-cols-12 gap-4 md:gap-6 mb-2 mx-2"
            >
              <div className="col-span-12 ">
                <SelectField
                  label="Curso"
                  placeholder="Selecione o curso"
                  description="Selecione o CURSO da planilha a ser importada"
                  name="cursoId"
                  options={cursoOptions}
                />{' '}
              </div>
              <div className="col-span-12 ">
                <SelectField
                  label="Turma"
                  placeholder="Turma da planilha a ser importada"
                  description="Selecione a TURMA da planilha a ser importada"
                  name="turmaId"
                  {...turmaOptions}
                />{' '}
              </div>
              <div className=" col-span-12 ">
                <FileUploader
                  maxFiles={1}
                  maxSize={1024 * 1024 * 5} // 5MB
                  accept={['text/csv']}
                  onFilesReady={(files) =>
                    formImportacao.setValue('arquivo', files[0])
                  }
                  className="w-full max-w-lg"
                  label="Planilha (.csv)"
                  description="Selecione a planilha a ser  importada no formato .csv"
                />

                <FormMessage>
                  {formImportacao.formState.errors.arquivo?.message}
                </FormMessage>
              </div>

              <div className=" col-span-12 ">
                <a
                  className="mt-10"
                  href="/arquivo/nome_escola_turma.csv"
                  download
                >
                  <Button>
                    <DownloadIcon /> Baixar modelo de planilha
                  </Button>
                </a>
                <FormMessage>
                  Importar alunos apenas da turma selecionada acima
                </FormMessage>
                <FormMessage>Não alterar a ordem das colunas</FormMessage>
                <FormMessage>
                  Importar apenas arquivo do formato .csv
                </FormMessage>
              </div>

              <div className="  col-span-12 flex gap-3">
                <Button type="submit">Enviar</Button>

                <Button
                  variant="outline"
                  onClick={() => {
                    modal.closeModal()
                    formImportacao.reset()
                  }}
                  type="reset"
                >
                  Cancelar
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </Page>
  )
}
