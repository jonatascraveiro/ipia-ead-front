import { z } from 'zod'

export const loginSchema = z.object({
	password: z.string().min(3, 'A senha  precisa ter pelo menos 6 caracteres'),
	email: z.string().email('E-mail inválido'),
});
export type FormData = z.infer<typeof loginSchema>;
