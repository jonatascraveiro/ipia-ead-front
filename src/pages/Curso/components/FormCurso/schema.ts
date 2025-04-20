import { z } from 'zod'

export const schema = z
  .object({
    id: z.number().optional(),
    nome: z
      .string({ required_error: 'Nome é obrigatório' })
      .min(1, 'Nome é obrigatório'),
    descricao: z
      .string({ required_error: 'Descrição é obrigatório' })
      .min(1, 'Descrição é obrigatório'),
    imagem: z.instanceof(File).optional(),

    icone: z
      .string({ required_error: 'Nome do icone é obrigatório' })
      .min(1, 'Nome é obrigatório'),
    ativo: z.boolean(),
  })
  .superRefine(({ id, imagem }, ctx) => {
    const isUpdate = !!id
    if (!isUpdate) {
      if (!imagem) {
        ctx.addIssue({
          path: ['imagem'],
          code: z.ZodIssueCode.custom,
          message: 'A imagem é obrigatório',
        })
      }
    }
    if (imagem) {
      if (imagem.size > 2 * 1024 * 1024) {
        ctx.addIssue({
          path: ['imagem'],
          code: z.ZodIssueCode.custom,
          message: 'A imagem deve ter no máximo 2MB',
        })
      }
      if (!imagem.type.startsWith('image/')) {
        ctx.addIssue({
          path: ['imagem'],
          code: z.ZodIssueCode.custom,
          message: 'Apenas arquivos de imagem são permitidos',
        })
      }
    }
  })

export type CursoSchema = z.infer<typeof schema>
