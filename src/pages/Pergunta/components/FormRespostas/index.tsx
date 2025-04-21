import { Button } from '@/components/ui/button'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import DataTable from '@/components/DataTable'
import { TextareaField } from '@/components/form/TextareaField'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useModal } from '@/hooks/useModal'
import { useTabelaRespostas } from '../TabelaRespostas/useTabela'
import { useFormPerguntas } from './useForm'

function FormResposta({
  resposta,
  respostas,
}: {
  resposta?: {
    id: number
    descricao: string
    perguntaId: number
    correta: boolean
  }
  respostas?: {
    __typename?: 'Respostas'
    descricao: string
    id: number
    perguntaId: number
    correta: boolean
  }[]
}) {
  const { isOpen, toggleModal, openModal } = useModal()
  const { form, onSubmit } = useFormPerguntas({
    resposta,
    toggleModal: toggleModal,
  })

  const { tabela } = useTabelaRespostas({
    respostas,
    handleEditarForm: (data) => {
      form.reset({
        descricao: data?.descricao,
        id: data?.id,
        perguntaId: data?.perguntaId,
        correta: String(data?.correta),
      })
      openModal()
    },
  })

  const toggleFormulario = () => {
    form.reset({
      descricao: '',
      id: undefined,
      perguntaId: resposta?.perguntaId,
      correta: 'false',
    })
    toggleModal()
  }

  return (
    <>
      {!isOpen && (
        <Button onClick={toggleFormulario} className="my-2">
          Adicionar resposta
        </Button>
      )}
      {isOpen && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => onSubmit(data))}
            className="m-4 mb-2 grid grid-cols-12 gap-4 md:gap-6 items-center"
          >
            <div className="col-span-8  ">
              <TextareaField
                label="Descrição"
                placeholder="descrição da resposta"
                name="descricao"
              />
            </div>
            <div className="col-span-2  ">
              <FormField
                control={form.control}
                name="correta"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Resposta.</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={String(field.value)}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="true" />
                          </FormControl>
                          <FormLabel className="font-normal">Correta</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="false" />
                          </FormControl>
                          <FormLabel className="font-normal">Errada</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
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

      <DataTable omitPagination {...tabela} />
    </>
  )
}
export { FormResposta }
