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
  aulas(filter: { modulo: { biblioteca: { is: true } } }) {
    totalCount
    __typename
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
