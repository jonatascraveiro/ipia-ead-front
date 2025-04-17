import AppLayout from '@/layout/AppLayout'
import AuthLayout from '@/layout/AuthLayout'
import { Dashboard } from '@/pages/Dashboard/Dashboard'

import { Login } from '@/pages/Login/Login'
import { NotFound } from '@/pages/NotFound'

import { AulaPage } from '@/pages/Aula/AulaPage'
import { CriarAulaPage } from '@/pages/Aula/CriarAulaPage'
import { EditarAulaPage } from '@/pages/Aula/EditarAulaPage'
import { VisualizarAulaPage } from '@/pages/Aula/VisualizarAulaPage'
import { CriarCursoPage } from '@/pages/Curso/CriarCursoPage'
import { CursoPage } from '@/pages/Curso/CursoPage'

import { AlunosPage } from '@/pages/Aluno/AlunosPage'
import { EditarCursoPage } from '@/pages/Curso/EditarCursoPage'
import { VisualizarCursoPage } from '@/pages/Curso/VisualizarCursoPage'
import { CriarModuloPage } from '@/pages/Modulo/CriarModuloPage'
import { EditarModuloPage } from '@/pages/Modulo/EditarModuloPage'
import { ModuloPage } from '@/pages/Modulo/ModuloPage'
import { CriarTurmaPage } from '@/pages/Turma/CriarTurmaPage'
import { EditarTurmaPage } from '@/pages/Turma/EditarTurmaPage'
import { TurmaPage } from '@/pages/Turma/TurmaPage'
import { VisualizarTurmaPage } from '@/pages/Turma/VisualizarTurmaPage'
import { CriarUsuarioPage } from '@/pages/Usuario/CriarUsuarioPage'
import { UsuariosPage } from '@/pages/Usuario/UsuarioPage'
import { BrowserRouter, Route, Routes } from 'react-router'
import { PrivateRoute } from './PrivateRoute'
import { ROTAS } from './rotas'

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
          <Route path={ROTAS.DASHBOARD} index element={<Dashboard />} />

          <Route path={ROTAS.ALUNOS} element={<AlunosPage />} />

          <Route path={ROTAS.AULA} element={<AulaPage />} />
          <Route path={ROTAS.AULA_CRIAR} element={<CriarAulaPage />} />
          <Route
            path={ROTAS.AULA_VISUALIZAR}
            element={<VisualizarAulaPage />}
          />
          <Route path={ROTAS.AULA_EDITAR} element={<EditarAulaPage />} />

          <Route
            path={ROTAS.AULA_COMPLEMENTAR}
            element={<AulaPage biblioteca={true} />}
          />
          <Route
            path={ROTAS.AULA_COMPLEMENTAR_CRIAR}
            element={<CriarAulaPage biblioteca={true} />}
          />
          <Route
            path={ROTAS.AULA_COMPLEMENTAR_VISUALIZAR}
            element={<VisualizarAulaPage biblioteca={true} />}
          />
          <Route
            path={ROTAS.AULA_COMPLEMENTAR_EDITAR}
            element={<EditarAulaPage biblioteca={true} />}
          />

          <Route path={ROTAS.CURSO} element={<CursoPage />} />
          <Route path={ROTAS.CURSO_CRIAR} element={<CriarCursoPage />} />
          <Route
            path={ROTAS.CURSO_VISUALIZAR}
            element={<VisualizarCursoPage />}
          />
          <Route path={ROTAS.CURSO_EDITAR} element={<EditarCursoPage />} />

          <Route path={ROTAS.MODULO} element={<ModuloPage />} />
          <Route path={ROTAS.MODULO_CRIAR} element={<CriarModuloPage />} />

          <Route path={ROTAS.MODULO_EDITAR} element={<EditarModuloPage />} />

          <Route path={ROTAS.TURMA} element={<TurmaPage />} />
          <Route path={ROTAS.TURMA_CRIAR} element={<CriarTurmaPage />} />
          <Route
            path={ROTAS.TURMA_VISUALIZAR}
            element={<VisualizarTurmaPage />}
          />
          <Route path={ROTAS.TURMA_EDITAR} element={<EditarTurmaPage />} />

          <Route path={ROTAS.USUARIO} element={<UsuariosPage />} />
          <Route path={ROTAS.USUARIO_CRIAR} element={<CriarUsuarioPage />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path={ROTAS.LOGIN} element={<Login />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
