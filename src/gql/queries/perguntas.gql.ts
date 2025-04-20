/* eslint-disable @typescript-eslint/no-unused-expressions */
import { gql } from '@apollo/client'

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
            resposta
            selecionada            
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
