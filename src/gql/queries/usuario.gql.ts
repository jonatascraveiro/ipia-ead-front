/* eslint-disable @typescript-eslint/no-unused-expressions */
import { gql } from '@apollo/client'

gql`
query Usuarios(
  $filter: UsuarioTypeFilter
  $paging: CursorPaging!
  $sorting: [UsuarioTypeSort!]!
) {
  usuarios(filter: $filter, paging: $paging, sorting: $sorting) {
    edges {
      node{
        ativo
        nome
        email
        ativo
        id
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

// usuarios ( filter = {} UsuarioDtoFilter! , paging = {"first":10} CursorPaging! , sorting = [] [UsuarioDtoSort!]! ) UsuarioDtoConnection!
