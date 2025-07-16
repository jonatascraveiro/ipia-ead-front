import { InputField } from '@/components/form/InputField'
import { Button } from '@/components/ui/button'

import { Form } from '@/components/ui/form'

import type { FormularioQuery } from '@/gql/generated/graphql'
import { Link } from 'react-router'
import { useFormFormulario } from './useForm'

function FormFormulario({
  formulario,
  disabled = false,
  urlVoltar,
  subModuloId,
  aulaId,
}: {
  formulario?: FormularioQuery['formulario']
  disabled?: boolean
  urlVoltar: string
  subModuloId?: number
  aulaId?: number
}) {
  const { form, onSubmit } = useFormFormulario({
    formulario,
    urlVoltar,
    subModuloId,
    aulaId,
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => onSubmit(data))}
        className="mx-2 mb-2 grid grid-cols-12 gap-4 md:gap-6"
      >
        <div className="col-span-12  ">
          <InputField
            disabled={disabled}
            label="Nome"
            placeholder="Nome do formulário"
            name="nome"
          />
        </div>

        <div className=" col-span-12  flex  items-end gap-3">
          {!disabled && <Button type="submit">Salvar</Button>}
          <Link to={urlVoltar}>
            <Button variant={'outline'} type="reset">
              Voltar
            </Button>
          </Link>
        </div>
      </form>
    </Form>
  )
}
export { FormFormulario }
