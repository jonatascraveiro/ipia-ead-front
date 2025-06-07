/* eslint-disable @typescript-eslint/no-unused-expressions */
import { gql } from '@apollo/client'

gql`
 mutation createOneTurma($input: CreateOneTurmaTypeInput!) {
  CreateOneTurma(input: $input) {
    id
  }
}
`

gql`
 mutation updateOneTurma($input: UpdateOneTurmaTypeInput!) {
  UpdateOneTurma(input: $input) {
    id
  }
}
`

gql`
 mutation deleteOneTurma($input: DeleteOneTurmaTypeInput!) {
  deleteOneTurma(input: $input) {
    id
  }
}
`
