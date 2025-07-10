import { z } from 'zod'

export const schema = z
  .object({
    cursoId: z.number().min(1, 'Curso é obrigatório'),
    turmaId: z.number().min(1, 'Turma é obrigatório'),

    arquivo: z.instanceof(File, { message: 'O Arquivo é obrigatório' }),
  })
  .superRefine(({ arquivo }, ctx) => {
    if (!arquivo) {
      ctx.addIssue({
        path: ['arquivo'],
        code: z.ZodIssueCode.custom,
        message: 'O arquivo é obrigatório',
      })
    }

    if (arquivo) {
      if (arquivo.size > 5 * 1024 * 1024) {
        ctx.addIssue({
          path: ['arquivo'],
          code: z.ZodIssueCode.custom,
          message: 'O arquivo deve ter no máximo 5MB',
        })
      }
      if (!arquivo.type.startsWith('text/csv')) {
        ctx.addIssue({
          path: ['arquivo'],
          code: z.ZodIssueCode.custom,
          message: 'Apenas arquivo .csv é permitido',
        })
      }
    }
  })

export type ImportacaoSchema = z.infer<typeof schema>
