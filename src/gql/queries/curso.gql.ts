/* eslint-disable @typescript-eslint/no-unused-expressions */
import { gql } from '@apollo/client'

gql`
query Curso($id: Int!) {
  curso(id: $id) {
    ativo
    createdAt
    deletedAt
    descricao
    id
    nome
    icone 
    url
    updatedAt
  }
}

`

gql`
query Cursos(
  $filter: CursoTypeFilter
  $paging: CursorPaging!
  $sorting: [CursoTypeSort!]!
) {
  cursos(filter: $filter, paging: $paging, sorting: $sorting) {
    edges {
      node {
        ativo
        createdAt
        deletedAt
        descricao
        id
        nome
        updatedAt
        icone 
       # url
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
query CursosModuloSelect(
  $filter: CursoTypeFilter
  $paging: CursorPaging!
  $sorting: [CursoTypeSort!]!
) {
  cursos(filter: $filter, paging: $paging, sorting: $sorting) {
    edges {
      node{
        id
        nome        
        modulos{
          id
          titulo
        }
      }
    }
    
  }
}
`
