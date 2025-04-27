/* eslint-disable @typescript-eslint/no-unused-expressions */
import { gql } from '@apollo/client'

gql`
query Formulario($id: Int!) {
  formulario(id: $id) {
    id
        nome  
        perguntas(sorting:{
      field:descricao,direction:ASC
    }) {
          id
        descricao  
        multiEscolha
        tipo
        formularioId
        }
        subModulo{
          titulo
          id
          modulo{
            id 
            titulo
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
        perguntas {
      id
    }
    subModulo{
          titulo
          id
          modulo{
            id 
            titulo
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
