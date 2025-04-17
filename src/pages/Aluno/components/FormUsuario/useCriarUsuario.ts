import { useForm } from 'react-hook-form'
import type { z } from 'zod'
import type { schema } from './schema'

export const useCriarUsuario = () => {
  const form = useForm<z.infer<typeof schema>>({
    defaultValues: {
      nome: '',
      email: '',
      senha: '',
      confirmar_senha: '',
    },
  })

  return { form }
}
