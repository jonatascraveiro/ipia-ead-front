import { InputField } from '@/components/form/InputField'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { APP_NAME } from '@/utils/constants'
import { useLogin } from './useLogin'

function Login() {
  const { form, onSubmit } = useLogin()

  return (
    <div className="flex flex-col justify-center align-center flex-1 w-full min-h-screen max-w-lg mx-auto my-auto p-4 sm:p-2  ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 border border-1 p-15  rounded-xl bg-white"
        >
          <div className="flex flex-col  items-center space-y-3">
            <img src="/images/logo/logo-empresa.png" alt="Logo" width={250} />
            <h1 className="text-3xl sm:text-4xl font-bold">{APP_NAME}</h1>
          </div>

          <div>
            <InputField
              label="Email"
              type="email"
              name="email"
              placeholder="email@email.com"
            />
          </div>

          <div className="relative">
            <InputField
              name="password"
              label="Senha"
              placeholder="Entre com sua senha"
              type="password"
            />
          </div>

          <div className="space-y-5">
            <Button variant={'default'} className="w-full" type="submit">
              Entrar
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export { Login }
