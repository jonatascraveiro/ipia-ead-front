import { InputField } from '@/components/form/InputField'
import { Button } from '@/components/ui/button'

import { CheckboxField } from '@/components/form/CheckboxField'
import { Form } from '@/components/ui/form'
import type { CursoType } from '@/types/curso'
import { Link } from 'react-router'
import { useFormCurso } from './useFormCurso'

function FormCurso({
  curso,
  disabled = false,
}: { curso?: CursoType; disabled?: boolean }) {
  const { form, onSubmit } = useFormCurso({ curso })

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
            placeholder="Nome do curso"
            name="nome"
          />
        </div>
        <div className="col-span-12  ">
          <InputField
            disabled={disabled}
            label="Descrição"
            placeholder="Descrição do curso"
            name="descricao"
          />
        </div>

        <div className="col-span-12  ">
          <CheckboxField
            disabled={disabled}
            label="Ativo"
            description="Status do curso"
            name="ativo"
          />
        </div>

        <div className=" col-span-12  flex  items-end gap-3">
          {!disabled && <Button type="submit">Salvar</Button>}
          <Link to="/curso">
            <Button variant={'outline'} type="reset">
              Voltar
            </Button>
          </Link>
        </div>
      </form>
    </Form>
  )
}
export { FormCurso }
