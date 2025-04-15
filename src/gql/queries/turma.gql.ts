/* eslint-disable @typescript-eslint/no-unused-expressions */
import { gql } from '@apollo/client'

gql`
query Turma($id: Int!) {
  turma(id: $id) {
    duracao
    fim
    inicio
    cursoId    
    descricao
    id
    nome    
    curso{
      nome
      id
     }
    
  }
}

`

gql`
query Turmas(
  $filter: TurmaTypeFilter
  $paging: CursorPaging!
  $sorting: [TurmaTypeSort!]!
) {
  turmas(filter: $filter, paging: $paging, sorting: $sorting) {
    edges {
      node {
        duracao
        fim
        inicio
        cursoId       
        curso{
          nome
          id
        }
        descricao
        id
        nome
        
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
query TurmasSelect(
  $filter: TurmaTypeFilter
  $paging: CursorPaging!
  $sorting: [TurmaTypeSort!]!
) {
  turmas(filter: $filter, paging: $paging, sorting: $sorting) {
    edges {
      node {              
        id
        nome        
      }
    }    
  }
}
`
