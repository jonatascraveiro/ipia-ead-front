
import { ROTAS } from '@/routes/rotas'
import { Folder, HeartPulse, Home, User, Users } from 'lucide-react'
import React from 'react'

export type NavItem = {
	name: string
	icon: React.ReactNode
	path?: string
	subItems?: { name: string; path: string }[]
}


const menuOpcoes: NavItem[] = [
	{
		icon: <Home />,
		name: 'Inicio',
		path: '/',
	},
	{
		name: 'Candidatos',
		icon: <Users />,
		subItems: [
			{ name: 'Listar Candidatos', path: ROTAS.CANDIDATO, },
			{ name: 'Criar Candidato', path: ROTAS.CANDIDATO_CRIAR, },
		],
	},
	{
		name: 'Documentos',
		icon: <Folder />,
		subItems: [
			{ name: 'Listar Documentos', path: ROTAS.DOCUMENTO },
			{ name: 'Criar Documento', path: ROTAS.DOCUMENTO_CRIAR },
		],
	},
	{
		name: 'Exames',
		icon: <HeartPulse />,
		subItems: [
			{ name: 'Listar Documentos', path: ROTAS.DOCUMENTO },
			{ name: 'Criar Documento', path: ROTAS.DOCUMENTO_CRIAR },
		],
	},
	{
		name: 'Usuários',
		icon: <User />,
		subItems: [
			{ name: 'Listar Usuários', path: ROTAS.DOCUMENTO },
			{ name: 'Criar Usuário', path: ROTAS.DOCUMENTO_CRIAR },
		],
	},



]



export { menuOpcoes }
