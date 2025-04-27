import { z } from 'zod'

export const schema = z.object({
  id: z.number().optional(),
  titulo: z
    .string({ required_error: 'Título é obrigatório' })
    .min(1, 'Título é obrigatório'),
  descricao: z
    .string({ invalid_type_error: 'Descrição é obrigatório' })
    .optional(),
  videoUrl: z
    .string({
      invalid_type_error: 'Formato inválido da URL do vídeo',
    })
    .optional(),
  moduloId: z
    .number({ required_error: 'Modulo é obrigatório' })
    .min(1, 'Modulo é obrigatório'),

  ordem: z
    .number({ required_error: 'Ordem é obrigatório' })
    .min(1, 'Ordem é obrigatório'),
  duracao: z
    .number({ required_error: 'Duração é obrigatório' })
    .min(1, 'Duração é obrigatório'),
})

export type AulaSchemaInput = z.input<typeof schema>

export type AulaSchemaOutput = z.output<typeof schema>
