import DataTable from '@/components/DataTable'
import { Page } from '@/components/Page'
import { InputField } from '@/components/form/InputField'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Search, Trash2Icon } from 'lucide-react'
import { useTabelaAlunos } from './components/TabelaAluno/useTabelaAlunos'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

export function AlunosPage() {
  const {
    tabela,
    form,
    handleFilter,
    limparFiltro,
    modal,
    formSenha,
    handleSubmitSenha,
  } = useTabelaAlunos()

  return (
    <Page>
      <Page.Header>
        <Page.Titulo>Alunos</Page.Titulo>
      </Page.Header>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleFilter)}
          className="grid grid-cols-12 gap-4 md:gap-6 mb-2 mx-2"
        >
          <div className=" xl:col-span-3 col-span-12 md:col-span-6 ">
            <InputField label="Nome" placeholder="nome do aluno" name="nome" />
          </div>
          <div className=" xl:col-span-3 col-span-12 md:col-span-6 ">
            <InputField
              label="Matrícula"
              placeholder="Matrícula do aluno"
              name="matricula"
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
        <DialogContent>
          <Form {...formSenha}>
            <DialogHeader>
              <DialogTitle>Editar aluno</DialogTitle>
            </DialogHeader>

            <form
              onSubmit={formSenha.handleSubmit(handleSubmitSenha)}
              className="grid grid-cols-12 gap-4 md:gap-6 mb-2 mx-2"
            >
              <div className="col-span-12 ">
                <InputField
                  label="Nome"
                  placeholder="Nome do aluno"
                  name="nome"
                />{' '}
              </div>
              <div className=" col-span-12 ">
                <InputField
                  label="Matrícula"
                  placeholder="Matrícula do aluno"
                  name="matricula"
                />
              </div>
              <div className=" col-span-12  ">
                <InputField
                  label="Senha"
                  placeholder="Senha do aluno"
                  name="senha"
                  autoFocus
                />
              </div>

              <div className="  col-span-12 flex gap-3">
                <Button type="submit">Salvar</Button>

                <Button
                  variant="outline"
                  onClick={() => {
                    modal.closeModal()
                    formSenha.reset()
                  }}
                  type="reset"
                >
                  Cancelar
                </Button>
              </div>
            </form>
          </Form>

          {/*          
            <DialogClose asChild>
              <Button variant="outline" onClick={onCancel}>
                Cancelar
              </Button>
            </DialogClose>
            <Button
              onClick={() => {
                onConfirm?.()
              }}
            >
              Confirmar
            </Button>
          </DialogFooter> */}
        </DialogContent>
      </Dialog>
    </Page>
  )
}
