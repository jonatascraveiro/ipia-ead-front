import { InputField } from '@/components/form/InputField'
import { Button } from '@/components/ui/button'

import { Form } from '@/components/ui/form'

import { SelectField } from '@/components/form/SelectField'
import type { PerguntasQuery } from '@/gql/generated/graphql'
import { Link } from 'react-router'
import { useFormPerguntas } from './useForm'

function FormPerguntas({
  pergunta,
  disabled = false,
}: {
  pergunta?: PerguntasQuery['perguntas']['edges'][0]['node']
  disabled?: boolean
}) {
  const { form, onSubmit, cursoOptions, moduloOptions, formularioOptions } =
    useFormPerguntas({
      pergunta,
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

        <div className="col-span-6 md:col-span-3  ">
          <SelectField
            disabled={disabled}
            label="Curso"
            description="Selecione o curso "
            options={cursoOptions}
            onChange={() => {
              form.setValue('moduloId', 0)
              form.setValue('formularioId', 0)
            }}
            name="cursoId"
          />
        </div>
        <div className="col-span-3  ">
          <SelectField
            disabled={disabled}
            label="Módulo"
            description="Modulo da aula"
            options={moduloOptions}
            name="moduloId"
          />
        </div>
        <div className="col-span-6 md:col-span-3  ">
          <SelectField
            disabled={disabled}
            label="Formulário"
            description="Selecione o Formulário "
            options={formularioOptions}
            name="formularioId"
          />
        </div>

        <div className=" col-span-12  flex  items-end gap-3">
          {!disabled && <Button type="submit">Salvar</Button>}
          <Link to="/pergunta">
            <Button variant={'outline'} type="reset">
              Voltar
            </Button>
          </Link>
        </div>
      </form>
    </Form>
  )
}
export { FormPerguntas }
