import { z } from 'zod'

export const schemaSenha = z.object({
  id: z.number(),
  senha: z
    .string({ required_error: 'Senha é obrigatório' })
    .min(6, 'A senha precisa ter pelo menos 6 caracteres'),
  nome: z.string(),
  matricula: z.string(),
})
export type FormSenha = z.infer<typeof schemaSenha>
