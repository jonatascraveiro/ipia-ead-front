import { ROTAS } from '@/routes/rotas'
import {
  BookPlus,
  ClockAlert,
  DiamondPlus,
  Group,
  Home,
  SpellCheck,
  Users2,
} from 'lucide-react'
import type React from 'react'

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
    name: 'Turmas',
    icon: <SpellCheck />,
    path: ROTAS.TURMA,
  },
  {
    name: 'Cursos',
    icon: <DiamondPlus />,
    path: ROTAS.CURSO,
  },
  {
    name: 'Modulos',
    icon: <Group />,
    path: ROTAS.MODULO,
  },
  {
    name: 'Aulas',
    icon: <ClockAlert />,
    path: ROTAS.AULA,
  },
  {
    name: 'Material Complementar',
    icon: <BookPlus />,
    path: ROTAS.AULA_COMPLEMENTAR,
  },
  {
    name: 'Alunos',
    icon: <Users2 />,
    path: ROTAS.ALUNOS,
  },
  // {
  //   name: 'Usuários',
  //   icon: <User />,
  //   path: ROTAS.USUARIO,
  //   // subItems: [
  //   //   { name: 'Listar Usuários', path: ROTAS.USUARIO },
  //   //   { name: 'Criar Usuário', path: ROTAS.USUARIO_CRIAR },
  //   // ],
  // },
]

export { menuOpcoes }
