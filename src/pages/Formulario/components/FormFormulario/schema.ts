import { z } from 'zod'

export const schema = z
  .object({
    id: z.number().optional(),
    nome: z
      .string({ required_error: 'Nome é obrigatório' })
      .min(1, 'Nome é obrigatório'),

    subModuloId: z
      .number({ required_error: 'Módulo do curso é obrigatório' })
      .min(1, 'Módulo do curso é obrigatório'),
  })
  .transform((data) => {
    return {
      ...data,
      subModuloId: +data.subModuloId,
    }
  })

export type FormularioSchema = z.infer<typeof schema>
