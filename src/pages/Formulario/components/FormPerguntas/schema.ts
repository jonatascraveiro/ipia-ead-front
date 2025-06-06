import { z } from 'zod'

export const schema = z
  .object({
    id: z.number().optional(),
    descricao: z
      .string({ required_error: 'Descrição é obrigatório' })
      .min(1, 'Descrição é obrigatório'),
    tipo: z
      .string({ required_error: 'Tipo é obrigatório' })
      .min(1, 'Tipo é obrigatório'),
    formularioId: z
      .number({ required_error: 'Formulário é obrigatório' })
      .min(1, 'Formulário é obrigatório'),
    multiEscolha: z.boolean(),
  })
  .transform((data) => {
    return {
      ...data,
      formularioId: +data.formularioId,
    }
  })

export type PerguntaSchema = z.infer<typeof schema>
