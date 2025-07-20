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

import { CriarFormularioAulaPage } from '@/pages/Formulario/CriarFormularioAulaPage'
import { SubmoduloFormularioPage } from '@/pages/Formulario/SubmoduloFormularioPage'
import { ImportacaoPage } from '@/pages/Importacao/ImportacaoPage'
import { InscricaoPage } from '@/pages/Inscricao/IncricaoPage'
import { InscricaoImportacaoPage } from '@/pages/InscricaoImportacao/InscricaoImportacaoPage'
import { CriarMaterialComplementarPage } from '@/pages/MaterialComplementar/CriarMaterialComplementarPage'
import { EditarMaterialComplementarPage } from '@/pages/MaterialComplementar/EditarMaterialComplementarPage'
import { MaterialComplementarPage } from '@/pages/MaterialComplementar/MaterialComplementarPage'
import { CriarModuloPage } from '@/pages/Modulo/CriarModuloPage'
import { EditarModuloPage } from '@/pages/Modulo/EditarModuloPage'
import { EditarSubModuloPage } from '@/pages/Modulo/EditarSubModuloPage'
import { ModuloPage } from '@/pages/Modulo/ModuloPage'
import { EditarPerguntaPage } from '@/pages/Pergunta/EditarPerguntaPage'
import { PerguntaPage } from '@/pages/Pergunta/PerguntaPage'
import { CriarTurmaPage } from '@/pages/Turma/CriarTurmaPage'
import { EditarTurmaPage } from '@/pages/Turma/EditarTurmaPage'
import { TurmaPage } from '@/pages/Turma/TurmaPage'
import { VisualizarTurmaPage } from '@/pages/Turma/VisualizarTurmaPage'
import { TurmaModuloPage } from '@/pages/TurmaModulo/TurmaModuloPage'
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

          <Route
            path={ROTAS.FORMULARIO}
            element={<SubmoduloFormularioPage />}
          />

          <Route
            path={ROTAS.FORMULARIO_AULA}
            element={<CriarFormularioAulaPage />}
          />

          <Route path={ROTAS.AULA} element={<AulaPage />} />
          <Route path={ROTAS.AULA_CRIAR} element={<CriarAulaPage />} />
          <Route
            path={ROTAS.AULA_VISUALIZAR}
            element={<VisualizarAulaPage />}
          />
          <Route path={ROTAS.AULA_EDITAR} element={<EditarAulaPage />} />

          <Route
            path={ROTAS.MATERIAL_COMPLEMENTAR}
            element={<MaterialComplementarPage biblioteca={true} />}
          />
          <Route
            path={ROTAS.MATERIAL_COMPLEMENTAR_CRIAR}
            element={<CriarMaterialComplementarPage biblioteca={true} />}
          />

          <Route
            path={ROTAS.MATERIAL_COMPLEMENTAR_EDITAR}
            element={<EditarMaterialComplementarPage biblioteca={true} />}
          />

          <Route path={ROTAS.CURSO} element={<CursoPage />} />
          <Route path={ROTAS.CURSO_CRIAR} element={<CriarCursoPage />} />
          <Route
            path={ROTAS.CURSO_VISUALIZAR}
            element={<VisualizarCursoPage />}
          />
          <Route path={ROTAS.CURSO_EDITAR} element={<EditarCursoPage />} />

          <Route path={ROTAS.INSCRICOES} element={<InscricaoPage />} />
          <Route path={ROTAS.IMPORTACOES} element={<ImportacaoPage />} />
          <Route
            path={ROTAS.INSRICAO_IMPORTACAO}
            element={<InscricaoImportacaoPage />}
          />

          <Route path={ROTAS.PERGUNTA} element={<PerguntaPage />} />

          <Route
            path={ROTAS.PERGUNTA_EDITAR}
            element={<EditarPerguntaPage />}
          />

          <Route path={ROTAS.MODULO} element={<ModuloPage />} />
          <Route path={ROTAS.MODULO_CRIAR} element={<CriarModuloPage />} />

          <Route path={ROTAS.MODULO_EDITAR} element={<EditarModuloPage />} />
          <Route
            path={ROTAS.MODULO_SUBMODULO_EDITAR}
            element={<EditarSubModuloPage />}
          />

          <Route path={ROTAS.BIBLIOTECA} element={<ModuloPage biblioteca />} />
          <Route
            path={ROTAS.BIBLIOTECA_CRIAR}
            element={<CriarModuloPage biblioteca />}
          />

          <Route
            path={ROTAS.BIBLIOTECA_EDITAR}
            element={<EditarModuloPage biblioteca />}
          />

          <Route path={ROTAS.TURMA} element={<TurmaPage />} />
          <Route path={ROTAS.TURMA_CRIAR} element={<CriarTurmaPage />} />
          <Route
            path={ROTAS.TURMA_VISUALIZAR}
            element={<VisualizarTurmaPage />}
          />
          <Route path={ROTAS.TURMA_EDITAR} element={<EditarTurmaPage />} />

          <Route path={ROTAS.TURMA_MODULO} element={<TurmaModuloPage />} />

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
