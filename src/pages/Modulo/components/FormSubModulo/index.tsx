import { InputField } from '@/components/form/InputField'
import { Button } from '@/components/ui/button'

import { Form } from '@/components/ui/form'

import DataTable from '@/components/DataTable'
import { InputNumberField } from '@/components/form/InputNumberField'
import type { SubModuloType } from '@/gql/generated/graphql'
import { useModal } from '@/hooks/useModal'
import { useTabelaSubModulo } from '../TabelaSubModulo/useTabelaSubModulo'
import { useFormSubModulo } from './useFormModulo'

function FormSubModulo({
  subModulos,
  disabled = false,
  moduloId,
}: {
  subModulos?: Partial<SubModuloType>[]
  disabled?: boolean
  biblioteca?: boolean
  moduloId: number
}) {
  const { isOpen, toggleModal, openModal } = useModal()

  const { form, onSubmit } = useFormSubModulo({
    subModulo: undefined,
    toggleModal: toggleModal,
  })

  const { tabela } = useTabelaSubModulo({
    subModulos,
    handleEditarForm: (data) => {
      form.reset({
        mensagem: data.mensagem,
        id: data.id,
        titulo: data.titulo,
        ordem: data.ordem,
        moduloId: data.moduloId,
        // imagem: undefined,
        // url: data.url,
      })
      openModal()
    },
  })

  const toggleFormulario = () => {
    form.reset({
      mensagem: '',
      id: undefined,
      titulo: '',
      moduloId: moduloId,
      ordem: subModulos?.length ? subModulos.length + 1 : 1,
      imagem: undefined,
      // url: '',
    })
    toggleModal()
  }

  return (
    <>
      {!isOpen && (
        <Button onClick={toggleFormulario} className="my-2">
          Adicionar Submódulo
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
                label="Titulo"
                placeholder="Titulo"
                name="titulo"
              />
            </div>
            <div className="col-span-12  ">
              <InputField
                disabled={disabled}
                label="Mensagem"
                placeholder="Mensagem"
                name="mensagem"
              />
            </div>

            <div className="col-span-6 md:col-span-3  ">
              <InputNumberField
                disabled={disabled}
                label="Ordem"
                description="Ordem"
                name="ordem"
              />
            </div>

            {/* <div className="col-span-6  ">
              <InputFileField
                disabled={disabled}
                label="Imagem de fundo do card  (TAMANHO 1280x720px)"
                description="Imagem deve ser no tamanho 1280x720px"
                name="imagem"
                urlPreview={form.watch('url') || ''}
              />
            </div> */}

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
export { FormSubModulo }
