import { Button } from '@/components/ui/button'

import { Form } from '@/components/ui/form'

import DataTable from '@/components/DataTable'
import { TextareaField } from '@/components/form/TextareaField'
import { useModal } from '@/hooks/useModal'
import { useTabelaRespostas } from '../TabelaRespostas/useTabela'
import { useFormPerguntas } from './useForm'

function FormResposta({
  resposta,
  respostas,
}: {
  resposta?: { id: number; descricao: string; perguntaId: number }
  respostas?: {
    __typename?: 'Respostas'
    descricao: string
    id: number
    perguntaId: number
    resposta?: string | null
    selecionada?: boolean | null
  }[]
}) {
  const { form, onSubmit } = useFormPerguntas({
    resposta,
  })

  const { isOpen, toggleModal } = useModal()

  const { tabela } = useTabelaRespostas({
    respostas,
    handleEditarForm: (data) => {
      form.reset({
        descricao: data?.descricao,
        id: data?.id,
        perguntaId: data?.perguntaId,
      })
      toggleModal()
    },
  })

  const toggleFormulario = () => {
    form.reset({
      descricao: '',
      id: undefined,
      perguntaId: resposta?.perguntaId,
    })
    toggleModal()
  }

  return (
    <>
      {!isOpen && (
        <Button onClick={toggleFormulario} className="my-2">
          Nova reposta
        </Button>
      )}
      {isOpen && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => onSubmit(data))}
            className="mx-2 mb-2 grid grid-cols-12 gap-4 md:gap-6"
          >
            <div className="col-span-10  ">
              <TextareaField
                label="Resposta"
                placeholder="descrição da resposta"
                name="descricao"
              />
            </div>

            <div className="col-span-2  flex  items-end gap-3">
              <Button type="submit">Salvar</Button>

              <Button
                variant={'outline'}
                type="reset"
                onClick={toggleFormulario}
              >
                Cancelar
              </Button>
            </div>
          </form>
        </Form>
      )}

      <DataTable {...tabela} />
    </>
  )
}
export { FormResposta }
