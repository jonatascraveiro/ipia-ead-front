import { InputField } from '@/components/form/InputField'
import { Button } from '@/components/ui/button'

import { Form } from '@/components/ui/form'

import type { TurmaType } from '@/types/turma'
import { Link } from 'react-router'
import { useFormTurma } from './useFormTurma'

function FormTurma({
  turma,
  disabled = false,
}: { turma?: TurmaType; disabled?: boolean }) {
  const { form, onSubmit } = useFormTurma({ turma })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-2 mb-2 grid grid-cols-12 gap-4 md:gap-6"
      >
        <div className="col-span-12  ">
          <InputField
            disabled={disabled}
            label="Nome"
            placeholder="Nome do turma"
            name="nome"
          />
        </div>

        <div className=" col-span-12  flex  items-end gap-3">
          {!disabled && <Button type="submit">Salvar</Button>}
          <Link to="/turma">
            <Button variant={'outline'} type="reset">
              Voltar
            </Button>
          </Link>
        </div>
      </form>
    </Form>
  )
}
export { FormTurma }
