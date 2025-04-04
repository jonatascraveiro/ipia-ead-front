import { z } from 'zod';
import { validadorMascara } from './mascara';

export const cpfSemMascara = z
	.string()
	.refine((value) => validadorMascara.CPF(value), {
		message: 'CPF inválido',
	})
	.transform((value) => {
		const isValidCpf = validadorMascara.CPF(value);
		return isValidCpf ? value.replace(/[^a-zA-Z0-9\s]/g, '') : value;
	});

export const zodSchema = {
	cpfSemMascara,
};
