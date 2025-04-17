import { InputField } from '@/components/form/InputField'
import { Button } from '@/components/ui/button'

import { Form } from '@/components/ui/form'

import EditorTeste from '@/components/ui/editor'

import { InputNumberField } from '@/components/form/InputNumberField'
import { SelectField } from '@/components/form/SelectField'
import type { AulaQuery } from '@/gql/generated/graphql'
import { Link } from 'react-router'
import { useFormAula } from './useFormAula'

function FormAula({
  aula,
  disabled = false,
  biblioteca = false,
}: { aula?: AulaQuery['aula']; disabled?: boolean; biblioteca: boolean }) {
  const { form, onSubmit, moduloOptions, cursoOptions } = useFormAula({
    aula,
    biblioteca,
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-2 mb-2 grid grid-cols-12 gap-4 md:gap-6"
      >
        <div className="col-span-12  ">
          <InputField
            disabled={disabled}
            label="Titulo"
            placeholder="Titulo da aula"
            name="titulo"
          />
        </div>
        <div className="col-span-12  ">
          <EditorTeste
            data={form.getValues('descricao')}
            setData={(val) => {
              form.setValue('descricao', val)
            }}
          />
        </div>
        <div className="col-span-3  ">
          <InputNumberField
            disabled={disabled}
            label="Ordem"
            description="Ordem do modulo"
            name="ordem"
          />
        </div>
        <div className="col-span-3  ">
          <InputNumberField
            disabled={disabled}
            label="Duração"
            description="Duração da aula em minutos"
            name="duracao"
          />
        </div>

        <div className="col-span-3  ">
          <SelectField
            disabled={disabled}
            label="Curso"
            description="Selecione o curso "
            options={cursoOptions}
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

        <div className="col-span-12  ">
          <InputField
            disabled={disabled}
            label="Video Url"
            placeholder="video da aula"
            name="videoUrl"
          />
        </div>

        <div className=" col-span-12  flex  items-end gap-3">
          {!disabled && <Button type="submit">Salvar</Button>}
          <Link to="/aula">
            <Button variant={'outline'} type="reset">
              Voltar
            </Button>
          </Link>
        </div>
      </form>
    </Form>
  )
}
export { FormAula }
