import { z } from 'zod'

export const schema = z.object({
  id: z.number().optional(),
  nome: z
    .string({ required_error: 'Nome é obrigatório' })
    .min(1, 'Nome é obrigatório'),
})

export type FormularioSchema = z.infer<typeof schema>
