import { InputField } from '@/components/form/InputField'
import { Button } from '@/components/ui/button'

import { Form } from '@/components/ui/form'

import DataTable from '@/components/DataTable'
import type { SubModuloType } from '@/gql/generated/graphql'
import { useModal } from '@/hooks/useModal'
import { useTabelaPerguntas } from '../TabelaPerguntas/useTabelaPerguntas'
import { useFormPerguntas } from './useFormPerguntas'

function FormPerguntas({
  perguntas,
  disabled = false,
  formularioId,
}: {
  perguntas?: Partial<SubModuloType>[]
  disabled?: boolean

  formularioId?: number
}) {
  const { isOpen, toggleModal, openModal } = useModal()

  const { form, onSubmit } = useFormPerguntas({
    toggleModal: toggleModal,
  })

  const { tabela } = useTabelaPerguntas({
    perguntas: perguntas || [],
    handleEditarForm: (pergunta) => {
      form.reset({
        id: pergunta?.id || undefined,
        descricao: pergunta?.descricao || '',
        formularioId: formularioId,

        tipo: pergunta?.tipo || 'Múltipla escolha',
        multiEscolha: pergunta?.multiEscolha ?? false,
      })
      openModal()
    },
  })

  const toggleFormulario = () => {
    form.reset({
      id: undefined,
      descricao: '',
      formularioId: formularioId,
      tipo: 'Múltipla escolha',
      multiEscolha: false,
    })
    toggleModal()
  }

  return (
    <>
      {!isOpen && (
        <Button onClick={toggleFormulario} className="my-2">
          Adicionar Pergunta
        </Button>
      )}
      {isOpen && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => onSubmit(data))}
            className="m-2 grid grid-cols-12 gap-4 md:gap-6 "
          >
            <div className="col-span-12  ">
              <InputField
                disabled={disabled}
                label="Pergunta"
                placeholder="descricão da pergunta"
                name="descricao"
              />
            </div>
            <div className="col-span-12  ">
              <InputField
                disabled
                label="Tipo"
                placeholder="Tipo da pergunta"
                name="tipo"
              />
            </div>

            <div className=" col-span-12  flex  items-end gap-3">
              {!disabled && <Button type="submit">Salvar</Button>}

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
      {!isOpen && <DataTable omitPagination {...tabela} />}
    </>
  )
}
export { FormPerguntas }
