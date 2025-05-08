import { InputField } from '@/components/form/InputField'
import { Button } from '@/components/ui/button'

import { Form } from '@/components/ui/form'

import { EditorFormularioHtml } from '@/components/ui/editor'

import { InputNumberField } from '@/components/form/InputNumberField'
import { Label } from '@/components/ui/label'
import type { AulaQuery } from '@/gql/generated/graphql'
import { Link } from 'react-router'
import { useFormAula } from './useFormAula'

function FormAula({
  aula,
  disabled = false,
  qtdAulas = 1,
  urlVoltar,
}: {
  aula?: AulaQuery['aula']
  disabled?: boolean
  biblioteca: boolean
  urlVoltar: string
  qtdAulas?: number
}) {
  const { form, onSubmit } = useFormAula({
    aula,
    urlVoltar,
    qtdAulas,
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
          <Label className="mb-2"> Conteúdo da aula</Label>
          <EditorFormularioHtml
            data={form.getValues('descricao') || ''}
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
export { FormAula }
