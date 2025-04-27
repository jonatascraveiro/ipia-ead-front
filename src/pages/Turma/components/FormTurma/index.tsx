import { InputField } from '@/components/form/InputField'
import { Button } from '@/components/ui/button'

import { Form } from '@/components/ui/form'

import { DatePickerField } from '@/components/form/DatePickerField'
import { TextareaField } from '@/components/form/TextareaField'
import type { TurmaQuery } from '@/gql/generated/graphql'
import { Link } from 'react-router'
import { useFormTurma } from './useFormTurma'

function FormTurma({
  turma,
  disabled = false,
  urlVoltar,
}: {
  turma?: TurmaQuery['turma']
  disabled?: boolean
  urlVoltar: string
}) {
  const { form, onSubmit } = useFormTurma({ turma, urlVoltar })

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

        <div className="col-span-12  ">
          <TextareaField
            disabled={disabled}
            label="Descrição"
            placeholder="descrição da turma"
            name="descricao"
          />
        </div>
        <div className="col-span-12  md:col-span-3 ">
          <InputField
            disabled={disabled}
            label="Duração"
            placeholder="Duração da turma"
            name="duracao"
          />
        </div>

        <div className="col-span-12 md:col-span-3 xl:col-span-2 ">
          <DatePickerField
            disabled={disabled}
            label="Início"
            placeholder="data de inicio da turma"
            name="inicio"
          />
        </div>

        <div className="col-span-12 md:col-span-3 xl:col-span-2">
          <DatePickerField
            disabled={disabled}
            label="Término"
            placeholder="data de término da turma"
            name="fim"
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
export { FormTurma }
