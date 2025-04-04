import { useAuth } from '@/context/AuthContext';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

export function PrivateRoute({ children }: { children: React.ReactNode }) {
	const { isAuthenticated } = useAuth();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setLoading(false);
	}, []);

	useEffect(() => {
		if (!isAuthenticated && !loading) {
			navigate('/login');
		}
	}, [isAuthenticated, loading, navigate]);

	return isAuthenticated && !loading ? children : null;
}
