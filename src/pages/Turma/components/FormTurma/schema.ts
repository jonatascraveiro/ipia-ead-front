import { z } from 'zod'

export const schema = z.object({
  id: z.number().optional(),
  nome: z
    .string({ required_error: 'Nome é obrigatório' })
    .min(1, 'Nome é obrigatório'),
  descricao: z
    .string({ required_error: 'Descrição é obrigatório' })
    .min(1, 'Descrição é obrigatório'),
  duracao: z
    .string({ required_error: 'Descrição é obrigatório' })
    .min(1, 'Descrição é obrigatório'),
  inicio: z.date({ required_error: 'Início é obrigatório' }),
  fim: z.date({ required_error: 'Fim é obrigatório' }),
  cursoId: z
    .number({ required_error: 'Curso é obrigatório' })
    .min(1, 'Curso é obrigatório'),
})

export type TurmaSchema = z.infer<typeof schema>
