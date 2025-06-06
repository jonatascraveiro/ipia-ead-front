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
        }
        status
        dataInscricao
        turma {
          id
          nome
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
