import { InputField } from '@/components/form/InputField'
import { Button } from '@/components/ui/button'

import { Form } from '@/components/ui/form'

import { InputNumberField } from '@/components/form/InputNumberField'
import type { ModuloQuery } from '@/gql/generated/graphql'
import { Link } from 'react-router'
import { useFormModulo } from './useFormModulo'

function FormModulo({
  modulo,
  disabled = false,
  urlVoltar,
  biblioteca = false,
  cursoId,
  quantidadeModulos,
}: {
  modulo?: ModuloQuery['modulo']
  disabled?: boolean
  urlVoltar: string
  biblioteca?: boolean
  cursoId: string
  quantidadeModulos?: number
}) {
  const { form, onSubmit } = useFormModulo({
    modulo,
    biblioteca,
    urlVoltar,
    cursoId,
    quantidadeModulos,
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
            label="Titulo"
            placeholder="Titulo"
            name="titulo"
          />
        </div>
        <div className="col-span-12  ">
          <InputField
            disabled={disabled}
            label="Descrição"
            placeholder="Descrição"
            name="descricao"
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
        {/* 
        <div className="col-span-6 md:col-span-3  ">
          <SelectField
            disabled={disabled}
            label="Curso"
            description="Selecione o curso "
            options={cursoOptions}
            name="cursoId"
          />
        </div> */}

        {/* <div className="col-span-12 md:col-span-6  ">
          <CheckboxField
            disabled={disabled}
            label="Aula complementar"
            description="Se for verdadeiro o modulo terá aula complementar (BIBLIOTECA)"
            name="biblioteca"
          />
        </div> */}

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
export { FormModulo }
