/* eslint-disable @typescript-eslint/no-unused-expressions */
import { gql } from '@apollo/client'

gql`
query Formulario($id: Int!) {
  formulario(id: $id) {
    id
        nome  
        modulo{
          titulo
          id
          curso{
            id 
            nome
          }
        }
    
  }
}

`

gql`
query Formularios(
  $filter: FormulariosFilter
  $paging: CursorPaging!
  $sorting: [FormulariosSort!]!
) {
  formularios(filter: $filter, paging: $paging, sorting: $sorting) {
    edges {
      node {
        
         id
        nome  
        modulo{
          titulo
          id
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
query FormulariosSelect(
  $filter: FormulariosFilter
  $paging: CursorPaging!
  $sorting: [FormulariosSort!]!
) {
  formularios(filter: $filter, paging: $paging, sorting: $sorting) {
    edges {
      node {              
        id
        nome        
      }
    }    
  }
}
`
