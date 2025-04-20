import { z } from 'zod'

export const schema = z
  .object({
    id: z.number().optional(),
    nome: z
      .string({ required_error: 'Nome é obrigatório' })
      .min(1, 'Nome é obrigatório'),

    formularioId: z
      .number({ required_error: 'Curso é obrigatório' })
      .min(1, 'Curso é obrigatório'),
  })
  .transform((data) => {
    return {
      ...data,
      formularioId: +data.formularioId,
    }
  })

export type PerguntaSchema = z.infer<typeof schema>
