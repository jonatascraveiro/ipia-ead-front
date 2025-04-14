import { z } from 'zod'

export const schema = z.object({
  id: z.number().optional(),
  nome: z
    .string({ required_error: 'Nome é obrigatório' })
    .min(1, 'Nome é obrigatório'),
  descricao: z
    .string({ required_error: 'Descrição é obrigatório' })
    .min(1, 'Descrição é obrigatório'),
  ativo: z.boolean(),
})

export type CursoSchema = z.infer<typeof schema>
