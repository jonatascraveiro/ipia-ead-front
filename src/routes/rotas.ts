const ROTAS = {
  DASHBOARD: '/',

  ALUNOS: '/alunos',

  AULA: '/sub-modulo/:subModuloId/aula',
  AULA_CRIAR: '/sub-modulo/:subModuloId/aula/criar',
  AULA_VISUALIZAR: '/sub-modulo/:subModuloId/aula/:id',
  AULA_EDITAR: '/sub-modulo/:subModuloId/aula/:id/editar',

  MATERIAL_COMPLEMENTAR: '/biblioteca/:moduloId/material-complementar',
  MATERIAL_COMPLEMENTAR_CRIAR:
    '/biblioteca/:moduloId/material-complementar/criar',
  MATERIAL_COMPLEMENTAR_VISUALIZAR:
    '/biblioteca/:moduloId/material-complementar/:id',
  MATERIAL_COMPLEMENTAR_EDITAR:
    '/biblioteca/:moduloId/material-complementar/:id/editar',

  CURSO: '/curso',
  CURSO_CRIAR: '/curso/criar',
  CURSO_VISUALIZAR: '/curso/:id',
  CURSO_EDITAR: '/curso/:id/editar',

  FORMULARIO: '/sub-modulo/:subModuloId/formulario',
  FORMULARIO_CRIAR: '/sub-modulo/:subModuloId/formulario/criar',
  FORMULARIO_VISUALIZAR: '/sub-modulo/:subModuloId/formulario/:id',
  FORMULARIO_EDITAR: '/sub-modulo/:subModuloId/formulario/:id/editar',

  INSCRICOES: '/inscricoes',

  IMPORTACOES: '/importacoes',

  INSRICAO_IMPORTACAO: '/inscricao-importacao/:id',

  PERGUNTA: '/pergunta',
  PERGUNTA_CRIAR: '/pergunta/criar',
  PERGUNTA_VISUALIZAR: '/pergunta/:id',
  PERGUNTA_EDITAR: '/pergunta/:id/editar',

  MODULO: '/curso/:cursoId/modulo',
  MODULO_CRIAR: '/curso/:cursoId/modulo/criar',
  MODULO_VISUALIZAR: '/curso/:cursoId/modulo/:id',
  MODULO_EDITAR: '/curso/:cursoId/modulo/:id/editar',
  MODULO_SUBMODULO_EDITAR: '/curso/:cursoId/modulo/:id/subdmodulo',

  BIBLIOTECA: '/curso/:cursoId/biblioteca',
  BIBLIOTECA_CRIAR: '/curso/:cursoId/biblioteca/criar',
  BIBLIOTECA_VISUALIZAR: '/curso/:cursoId/biblioteca/:id',
  BIBLIOTECA_EDITAR: '/curso/:cursoId/biblioteca/:id/editar',

  TURMA: '/curso/:cursoId/turma',
  TURMA_CRIAR: '/curso/:cursoId/turma/criar',
  TURMA_VISUALIZAR: '/curso/:cursoId/turma/:id',
  TURMA_EDITAR: '/curso/:cursoId/turma/:id/editar',

  USUARIO: '/usuario',
  USUARIO_EDITAR: '/usuario/:id',
  USUARIO_CRIAR: '/usuario/criar',
  LOGIN: '/login',
}

export { ROTAS }
