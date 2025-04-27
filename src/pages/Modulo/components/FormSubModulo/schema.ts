import { z } from 'zod'

export const schema = z
  .object({
    id: z.number().optional(),
    titulo: z.string({ required_error: 'Título é obrigatório' }),
    url: z.string().optional(),
    mensagem: z.string({ required_error: 'Mensagem é obrigatório' }),
    moduloId: z
      .number({ required_error: 'Curso é obrigatório' })
      .min(1, 'Curso é obrigatório'),

    ordem: z
      .number({ required_error: 'Ordem é obrigatório' })
      .min(1, 'Ordem é obrigatório'),
    imagem: z.instanceof(File).optional(),
  })
  // .superRefine(({ id, imagem }, ctx) => {
  //   const isUpdate = !!id
  //   if (!isUpdate) {
  //     if (!imagem) {
  //       ctx.addIssue({
  //         path: ['imagem'],
  //         code: z.ZodIssueCode.custom,
  //         message: 'A imagem é obrigatório',
  //       })
  //     }
  //   }
  //   if (imagem) {
  //     if (imagem.size > 2 * 1024 * 1024) {
  //       ctx.addIssue({
  //         path: ['imagem'],
  //         code: z.ZodIssueCode.custom,
  //         message: 'A imagem deve ter no máximo 2MB',
  //       })
  //     }
  //     if (!imagem.type.startsWith('image/')) {
  //       ctx.addIssue({
  //         path: ['imagem'],
  //         code: z.ZodIssueCode.custom,
  //         message: 'Apenas arquivos de imagem são permitidos',
  //       })
  //     }
  //   }
  // })
  .transform((data) => {
    return {
      ...data,
      ordem: +data.ordem,
      moduloId: +data.moduloId,
    }
  })

export type ModuloSchema = z.infer<typeof schema>
