import { ROTAS } from '@/routes/rotas'
import {
  DiamondPlus,
  Home,
  NotebookText,
  UploadIcon,
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
    path: ROTAS.DASHBOARD,
  },
  {
    name: 'Cursos',
    icon: <DiamondPlus />,
    path: ROTAS.CURSO,
  },

  // {
  //   name: 'Módulos',
  //   icon: <Group />,
  //   path: ROTAS.MODULO,
  // },

  // {
  //   name: 'Aulas',
  //   icon: <ClockAlert />,
  //   path: ROTAS.AULA,
  // },

  // {
  //   name: 'Aula Complementar',
  //   icon: <BookPlus />,
  //   path: ROTAS.AULA_COMPLEMENTAR,
  // },

  // {
  //   name: 'Formulários',
  //   icon: <FileQuestion />,
  //   path: ROTAS.FORMULARIO,
  // },
  // {
  //   name: 'Perguntas',
  //   icon: <ListTodo />,
  //   path: ROTAS.PERGUNTA,
  // },

  // {
  //   name: 'Turmas',
  //   icon: <SpellCheck />,
  //   path: ROTAS.TURMA,
  // },

  {
    name: 'Alunos',
    icon: <Users2 />,
    path: ROTAS.ALUNOS,
  },
  {
    name: 'Inscrições',
    icon: <NotebookText />,
    path: ROTAS.INSCRICOES,
  },
  {
    name: 'Importações',
    icon: <UploadIcon />,
    path: ROTAS.IMPORTACOES,
  },
]

export { menuOpcoes }
