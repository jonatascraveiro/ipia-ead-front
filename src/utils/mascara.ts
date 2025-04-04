export const cpfMask = (cpf?: string | null) => {
	if (cpf) {
		return cpf
			.replace(/(\d{3})(\d)/, '$1.$2')
			.replace(/(\d{3})(\d)/, '$1.$2')
			.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
	}
	return '';
};

export const isMaskedCPF = (cpf: string) => {
	// Expressão regular para o formato 'XXX.XXX.XXX-XX'
	const maskedCPFRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
	return maskedCPFRegex.test(cpf);
};
export const mascara = {
	CPF: cpfMask,
};

export const validadorMascara = {
	CPF: isMaskedCPF,
};
