import { z } from 'zod'

export const schema = z.object({
  id: z.number().min(0, 'Curso é obrigatório'),
  moduloId: z.number().min(1, 'Módulo é obrigatório'),
  modulo: z.string(),
  dataLiberacao: z.date({ required_error: 'Data Liberação é obrigatório' }),
})

export type FormSchema = z.infer<typeof schema>
