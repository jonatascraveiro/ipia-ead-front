/* eslint-disable @typescript-eslint/no-unused-expressions */
import { gql } from '@apollo/client'

gql`
query Pergunta($id: Int!) {
  pergunta(id: $id)   {        
         id
        descricao  
        multiEscolha
        tipo
        formularioId
        formulario{
          nome
          id
          modulo{
          titulo
          id
          curso{
            id
            nome
          }
        }
        }
       
        respostas {
            descricao
            id
            perguntaId
            correta          
          }      
      
    }
}

`

gql`
query Perguntas(
  $filter: PerguntasFilter
  $paging: CursorPaging!
  $sorting: [PerguntasSort!]!
) {
  perguntas(filter: $filter, paging: $paging, sorting: $sorting) {
    edges {
      node {        
         id
        descricao  
        multiEscolha
        tipo
        formularioId
        formulario{
          nome
          id
          modulo{
          titulo
          id
          curso{
            id
            nome
          }
        }
        }
       
        respostas {
            descricao
            id
            perguntaId
            correta          
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
