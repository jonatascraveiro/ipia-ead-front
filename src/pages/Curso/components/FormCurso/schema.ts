import { z } from 'zod'

export const schema = z.object({
  id: z.number().optional(),
  nome: z
    .string({ required_error: 'Nome é obrigatório' })
    .min(1, 'Nome é obrigatório'),
  descricao: z
    .string({ required_error: 'Descrição é obrigatório' })
    .min(1, 'Descrição é obrigatório'),
  url: z
    .string({ required_error: 'Url da imagem é obrigatório' })
    .min(1, 'Url é obrigatório'),
  icone: z
    .string({ required_error: 'Nome do icone é obrigatório' })
    .min(1, 'Nome é obrigatório'),
  ativo: z.boolean(),
})

export type CursoSchema = z.infer<typeof schema>
