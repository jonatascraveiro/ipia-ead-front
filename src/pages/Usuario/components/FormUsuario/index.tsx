import { InputField } from '@/components/form/InputField'
import { Button } from '@/components/ui/button'

import { Form } from '@/components/ui/form'
import { useCriarUsuario } from './useCriarUsuario'

function FormUsuario() {
  const { form } = useCriarUsuario()

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => console.log(data))}
        className="mx-2 mb-2 grid grid-cols-12 gap-4 md:gap-6"
      >
        <div className="col-span-12 md:col-span-6 xl:col-span-6 ">
          <InputField
            label="Nome"
            placeholder="Nome do candidato"
            name="nome"
          />
        </div>

        <div className=" xl:col-span-6 col-span-12 md:col-span-6 ">
          <InputField
            label="Email"
            placeholder="email@email.com"
            name="email"
          />
        </div>
        <div className=" xl:col-span-6 col-span-12 md:col-span-6 ">
          <InputField
            label="Senha"
            placeholder="xxxxxxxx"
            type="password"
            name="senha"
          />
        </div>
        <div className=" xl:col-span-6 col-span-12 md:col-span-6 ">
          <InputField
            label="Confirmar Senha"
            placeholder="Confirmar senha"
            name="confirmar_senha"
          />
        </div>

        <div className=" xl:col-span-3 col-span-12 md:col-span-6 flex  items-end gap-3">
          <Button type="submit">Salvar</Button>
          <Button variant={'outline'} onClick={() => form.reset()} type="reset">
            Cancelar
          </Button>
        </div>
      </form>
    </Form>
  )
}
export { FormUsuario }
