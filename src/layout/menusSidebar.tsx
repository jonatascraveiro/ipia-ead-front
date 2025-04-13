import { ROTAS } from '@/routes/rotas'
import { ClockAlert, DiamondPlus, Group, Home } from 'lucide-react'
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
  // {
  //   name: 'Turmas',
  //   icon: <SpellCheck />,
  //   path: ROTAS.TURMA,
  //   // subItems: [
  //   //   { name: 'Listar Turmas', path: ROTAS.TURMA },
  //   //   { name: 'Criar Turma', path: ROTAS.TURMA_CRIAR },
  //   // ],
  // },
  {
    name: 'Cursos',
    icon: <DiamondPlus />,
    path: ROTAS.CURSO,
    // subItems: [
    //   { name: 'Listar Cursos', path: ROTAS.CURSO },
    //   { name: 'Criar Curso', path: ROTAS.CURSO_CRIAR },
    // ],
  },
  {
    name: 'Modulos',
    icon: <Group />,
    path: ROTAS.MODULO,
    // subItems: [
    //   { name: 'Listar Cursos', path: ROTAS.CURSO },
    //   { name: 'Criar Curso', path: ROTAS.CURSO_CRIAR },
    // ],
  },
  {
    name: 'Aulas',
    icon: <ClockAlert />,
    path: ROTAS.AULA,
    // subItems: [
    //   { name: 'Listar Aulas', path: ROTAS.AULA },
    //   { name: 'Criar Aula', path: ROTAS.AULA_CRIAR },
    // ],
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
