/* eslint-disable @typescript-eslint/no-unused-expressions */
import { gql } from '@apollo/client'

gql`
 mutation createOnePergunta($input: CreateOnePerguntasInput!) {
  createOnePergunta(input: $input) {
    id
  }
}
`

gql`
 mutation updateOnePergunta($input: UpdateOnePerguntasInput!) {
  updateOnePergunta(input: $input) {
    id
  }
}
`

gql`
 mutation deleteOnePergunta($input: DeleteOnePerguntasInput!) {
  deleteOnePergunta(input: $input) {
    id
  }
}
`
