/* eslint-disable @typescript-eslint/no-unused-expressions */
import { gql } from '@apollo/client'

gql`
query Inscricao($id: Int!) {
  inscricao(id: $id) {

    id
    aluno {
      id
      cpf
      nome
    }
    dataInscricao
    turma {
      id
      descricao
    }
  }
}

`

gql`
query Inscricoes(
  $filter: InscricaoTypeFilter
  $paging: CursorPaging!
  $sorting: [InscricaoTypeSort!]!
) {
  inscricoes(filter: $filter, paging: $paging, sorting: $sorting) {
    edges {
      cursor
      node {
        id
        aluno {
          id
          cpf
          nome
          matricula
        }
        status
        dataInscricao
        turma {
          id
          nome
          curso{
            id
            nome
          }
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}


`

gql`
query InscricoesImportacao(
  $filter: InscricaoTypeFilter
  $paging: CursorPaging!
  $sorting: [InscricaoTypeSort!]!
) {
  inscricoes(filter: $filter, paging: $paging, sorting: $sorting) {
    edges {
      cursor
      node {
        id
        aluno {
          id
          matricula
          nome
        }
        descricaoStatus
        status
        dataInscricao
     
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}


`
