/* eslint-disable @typescript-eslint/no-unused-expressions */
import { gql } from '@apollo/client'

gql`
mutation createArquivo($arquivo:Upload!){
    createArquivo(arquivo:$arquivo ) {
    createdAt
    deletedAt
    extensao
    id
    mimetype
    nome
    pathBucket
    tamanho
    updatedAt
    url
  }
}
`
