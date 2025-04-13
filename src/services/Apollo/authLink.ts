import { ApolloLink } from '@apollo/client';
import Cookies from 'js-cookie';

export const authMiddleware = new ApolloLink((operation, forward) => {
	const token = Cookies.get('token');

	operation.setContext({
		headers: {
			authorization: token ? `Bearer ${token}` : null,
		},
	});

	return forward(operation);
});
