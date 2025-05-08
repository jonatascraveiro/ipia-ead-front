/* eslint-disable @typescript-eslint/no-unused-expressions */
import { gql } from '@apollo/client'

gql`
query Aula($id: Int!) {
 aula(id: $id) {
    ordem
    moduloId    
    descricao
    id
    titulo
    videoUrl
    duracao
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
query Aulas(
  $filter: AulaTypeFilter
  $paging: CursorPaging!
  $sorting: [AulaTypeSort!]!
) {
 aulas(filter: $filter, paging: $paging, sorting: $sorting) {
    edges {
      node {
        ordem
        moduloId       
        descricao
        id
        titulo
        videoUrl
        duracao
        modulo{
          titulo
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
query AulasTotal($filter: AulaTypeFilter, $paging: CursorPaging!, ) {
  aulas(filter: $filter, paging: $paging) {
      totalCount
  }
}
  
`
