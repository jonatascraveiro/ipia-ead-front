import DataTable from '@/components/DataTable'
import { Page } from '@/components/Page'
import { InputField } from '@/components/form/InputField'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { useTurmaQuery } from '@/gql/generated/graphql'
import { Search, Trash2Icon } from 'lucide-react'
import { generatePath, useParams } from 'react-router'
import { useTabelaTurmaModulo } from './components/TabelaModulo/useTabelaTurmaModulo'

import { DatePickerField } from '@/components/form/DatePickerField'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { ROTAS } from '@/routes/rotas'
export function TurmaModuloPage() {
  const { cursoId, turmaId } = useParams() as {
    cursoId: string
    turmaId: string
  }

  const { data: turma } = useTurmaQuery({
    variables: {
      id: +turmaId,
    },
    skip: !turmaId,
  })

  const {
    tabela,
    form,
    handleFilter,
    limparFiltro,

    formulario,
    handleSubmitForm,
    modal,
  } = useTabelaTurmaModulo({
    cursoId,
    turmaId,
  })

  const urlVoltar = generatePath(ROTAS.TURMA, {
    cursoId,
  })
  return (
    <Page>
      <Page.Header>
        <Page.Titulo url={urlVoltar}>
          Módulos da Turma {turma?.turma?.nome}
        </Page.Titulo>
      </Page.Header>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(() => handleFilter())}
          className="grid grid-cols-12 gap-4 md:gap-6 mb-2 mx-2"
        >
          <div className=" xl:col-span-3 col-span-12 md:col-span-6 ">
            <InputField label="Titulo" placeholder="Titulo " name="nome" />
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
          <Form {...formulario}>
            <DialogHeader>
              <DialogTitle>Data liberação do módulo</DialogTitle>
            </DialogHeader>

            <form
              onSubmit={formulario.handleSubmit(handleSubmitForm)}
              className="grid grid-cols-12 gap-4 md:gap-6 mb-2 mx-2"
            >
              <div className="col-span-12 ">
                <div className="font-bold">Módulo</div>
                <div>{formulario.getValues('modulo')}</div>
              </div>
              <div className=" col-span-12 ">
                <DatePickerField
                  label="Data liberação"
                  placeholder="data de início do módulo"
                  name="dataLiberacao"
                  closeOnSelect
                />
              </div>

              <div className="  col-span-12 flex gap-3">
                <Button type="submit">Enviar</Button>

                <Button
                  variant="outline"
                  onClick={() => {
                    modal.closeModal()
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
