import { z } from 'zod'

export const schema = z.object({
  id: z.number().optional(),
  titulo: z
    .string({ required_error: 'Título é obrigatório' })
    .min(1, 'Título é obrigatório'),
  descricao: z
    .string({ required_error: 'Descrição é obrigatório' })
    .min(1, 'Descrição é obrigatório'),
  videoUrl: z.string(),
  moduloId: z
    .number({ required_error: 'Modulo é obrigatório' })
    .min(1, 'Modulo é obrigatório'),
  // cursoId: z
  //   .string({
  //     required_error: 'Curso é obrigatório',
  //     invalid_type_error: 'Curso é obrigatório',
  //     coerce: true,
  //   })
  //   .min(1, 'Curso é obrigatório'),

  cursoId: z
    .number({ required_error: 'Curso é obrigatório' })
    .min(1, 'Curso é obrigatório'),
  ordem: z
    .number({ required_error: 'Ordem é obrigatório' })
    .min(1, 'Ordem é obrigatório'),
  duracao: z
    .number({ required_error: 'Duração é obrigatório' })
    .min(1, 'Duração é obrigatório'),
})

export type AulaSchemaInput = z.input<typeof schema>

export type AulaSchemaOutput = z.output<typeof schema>
