import { z } from 'zod'

export const schema = z
  .object({
    nome: z.string({ required_error: 'Nome é obrigatório' }),
    email: z
      .string({ required_error: 'Nome é obrigatório' })
      .email('Email inválido'),
    senha: z.string({ required_error: 'Senha é obrigatório' }),
    confirmar_senha: z.string({ required_error: 'Senha é obrigatório' }),
  })
  .superRefine(({ senha, confirmar_senha }, ctx) => {
    if (senha !== confirmar_senha) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'As senhas informadas são diferentes',
      })
    }
  })
