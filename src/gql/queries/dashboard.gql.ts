/* eslint-disable @typescript-eslint/no-unused-expressions */
import { gql } from '@apollo/client'

gql`

query Dashboard {
  respostas {
    totalCount
    __typename
  }
  perguntas {
    totalCount
    __typename
  }
  formularios {
    totalCount
    __typename
  }
  modulos {
    totalCount
    __typename
  }
 aulasBiblioteca: aulas(filter: { moduloId: { isNot: null } }) {
    totalCount
  }
   aulas(filter: { moduloId: { is: null } }) {
    totalCount
  }
  todasAulas:aulas{
    totalCount
  }
  turmas {
    totalCount
    __typename
  }
  inscricoes {
    totalCount
    __typename
  }
  alunos {
    totalCount
    __typename
  }
  cursos {
    totalCount
    __typename
  }
}

`
