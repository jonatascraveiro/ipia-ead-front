import { z } from 'zod'

export const schema = z.object({
  id: z.number().optional(),
  perguntaId: z.number(),
  respostaCerta: z.string(),
  descricao: z
    .string({ required_error: 'Descrição é obrigatório' })
    .min(1, 'Descrição é obrigatório'),
})

export type RespostaSchema = z.infer<typeof schema>
