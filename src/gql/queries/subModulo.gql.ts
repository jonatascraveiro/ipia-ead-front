/* eslint-disable @typescript-eslint/no-unused-expressions */
import { gql } from '@apollo/client'

gql`
query SubModulo($id: Int!) {
  subModulo(id: $id) {
 
     # arquivoId
      
      id
      mensagem
      modulo{
        id
        titulo
        curso{
            id 
            nome
        }
      }
      moduloId
      ordem
      titulo
      updatedAt
     # url
  
    
  }
}

`

gql`
query SubModulos(
  $filter: SubModuloTypeFilter!
  $paging: CursorPaging!
  $sorting: [SubModuloTypeSort!]!
) {
  subModulos(filter: $filter, paging: $paging, sorting: $sorting) {
    edges {
      node {
      #  arquivoId
      
      id
      mensagem
      modulo{
        id
        titulo
      }
      moduloId
      ordem
      titulo
      updatedAt
      url
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
