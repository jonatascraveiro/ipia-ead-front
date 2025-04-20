/* eslint-disable @typescript-eslint/no-unused-expressions */
import { gql } from '@apollo/client'

gql`
 mutation createOneResposta($input: CreateOneRespostasInput!) {
  createOneResposta(input: $input) {
    id
  }
}
`

gql`
 mutation updateOneResposta($input: UpdateOneRespostasInput!) {
  updateOneResposta(input: $input) {
    id
  }
}
`

gql`
 mutation deleteOneResposta($input: DeleteOneRespostasInput!) {
  deleteOneResposta(input: $input) {
    id
  }
}
`
// createOneResposta ( input CreateOneRespostasInput! ) Respostas!
