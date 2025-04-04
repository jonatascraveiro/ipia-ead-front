import AppLayout from '@/layout/AppLayout'
import AuthLayout from '@/layout/AuthLayout'
import { Dashboard } from '@/pages/Dashboard/Dashboard'




import { BrowserRouter, Route, Routes } from 'react-router'
import { PrivateRoute } from './PrivateRoute'
import { Login } from '@/pages/Login/Login'
import { NotFound } from '@/pages/NotFound'
import { CandidatosPage } from '@/pages/Candidato/CandidatosPage'
import { CriarCandidatoPage } from '@/pages/Candidato/components/CriarCandidato/CriarCandidatoPage'
import { ROTAS } from './rotas'
import { CriarDocumentoPage } from '@/pages/Documento/components/CriarDocumento/CriarDocumentoPage'
import { DocumentosPage } from '@/pages/Documento/DocumentosPage'



export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					element={
						<PrivateRoute>
							<AppLayout />
						</PrivateRoute>
					}
				>
					<Route path={ROTAS.DASHBOARD} element={<Dashboard />} />
					<Route path={ROTAS.CANDIDATO} index element={<CandidatosPage />} />
					<Route path={ROTAS.CANDIDATO_CRIAR} index element={<CriarCandidatoPage />} />


					<Route path={ROTAS.DOCUMENTO} index element={<DocumentosPage />} />
					<Route path={ROTAS.DOCUMENTO_CRIAR} index element={<CriarDocumentoPage />} />

				</Route>

				<Route element={<AuthLayout />}>
					<Route path={ROTAS.LOGIN} element={<Login />} />
				</Route>

				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}
