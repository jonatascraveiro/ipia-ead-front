function getAvatarInitials(fullName: string) {
	const names = fullName.trim().split(/\s+/);
	const firstNameInitial = names[0] ? names[0][0] : '';
	const lastNameInitial =
		names.length > 1 ? names[names.length - 1][0] : names[0][1];

	return (firstNameInitial + lastNameInitial).toUpperCase();
}

export { getAvatarInitials };
