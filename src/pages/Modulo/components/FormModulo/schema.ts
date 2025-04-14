import { z } from 'zod'

export const schema = z
  .object({
    id: z.number().optional(),
    titulo: z
      .string({ required_error: 'Título é obrigatório' })
      .min(1, 'Título é obrigatório'),
    descricao: z
      .string({ required_error: 'Descrição é obrigatório' })
      .min(1, 'Descrição é obrigatório'),
    cursoId: z
      .number({ required_error: 'Curso é obrigatório' })
      .min(1, 'Curso é obrigatório'),

    ordem: z
      .number({ required_error: 'Ordem é obrigatório' })
      .min(1, 'Ordem é obrigatório'),
  })
  .transform((data) => {
    return {
      ...data,
      ordem: +data.ordem,
      cursoId: +data.cursoId,
    }
  })

export type ModuloSchema = z.infer<typeof schema>
