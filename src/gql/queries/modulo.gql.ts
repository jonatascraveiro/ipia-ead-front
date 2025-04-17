/* eslint-disable @typescript-eslint/no-unused-expressions */
import { gql } from '@apollo/client'

gql`
query Modulo($id: Int!) {
  modulo(id: $id) {
    ordem
    cursoId    
    descricao
    id
    titulo
    curso {
      nome
    }
    biblioteca
    
  }
}

`

gql`
query Modulos(
  $filter: ModuloTypeFilter
  $paging: CursorPaging!
  $sorting: [ModuloTypeSort!]!
) {
  modulos(filter: $filter, paging: $paging, sorting: $sorting) {
    edges {
      node {
        ordem
        cursoId       
        curso{
          nome
        }
        descricao
        id
        titulo
        biblioteca
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
query ModulosSelect(
  $filter: ModuloTypeFilter
  $paging: CursorPaging!
  $sorting: [ModuloTypeSort!]!
) {
  modulos(filter: $filter, paging: $paging, sorting: $sorting) {
    edges {
      node {              
        id
        titulo        
      }
    }    
  }
}
`
