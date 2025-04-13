/* eslint-disable @typescript-eslint/no-unused-expressions */
import { gql } from '@apollo/client'

gql`
 mutation createOneAula($input: CreateOneAulaTypeInput!) {
  CreateOneAula(input: $input) {
    titulo
  }
}
`

gql`
 mutation updateOneAula($input: UpdateOneAulaTypeInput!) {
  UpdateOneAula(input: $input) {
    titulo
  }
}
`

gql`
 mutation deleteOneAula($input: DeleteOneAulaTypeInput!) {
  deleteAula(input: $input) {
    titulo
  }
}
`
