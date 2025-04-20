import { z } from 'zod'

export const schema = z.object({
  id: z.number().optional(),
  perguntaId: z.number(),
  descricao: z
    .string({ required_error: 'Descrição é obrigatório' })
    .min(1, 'Descrição é obrigatório'),
})
// .transform((data) => {
//   return {
//     ...data,
//     perguntaId: +data.perguntaId,
//   }
// })

export type RespostaSchema = z.infer<typeof schema>
