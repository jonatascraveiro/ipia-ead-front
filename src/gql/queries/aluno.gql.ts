/* eslint-disable @typescript-eslint/no-unused-expressions */
import { gql } from '@apollo/client'

gql`

query Alunos(
  $filter: AlunoTypeFilter
  $paging: CursorPaging!
  $sorting: [AlunoTypeSort!]!
) {
  alunos(filter: $filter, paging: $paging, sorting: $sorting) {
    edges {
      node {              
        id
        nome      
        cpf
        email
        
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
