/* eslint-disable @typescript-eslint/no-unused-expressions */
import { gql } from '@apollo/client'

gql`
 mutation CreateOneInscricao($input: CreateOneInscricaoTypeInput!) {
  CreateOneInscricao(input: $input) {
    id
  }
}
`

gql`
 mutation UpdateOneInscricao($input: UpdateOneInscricaoTypeInput!) {
  UpdateOneInscricao(input: $input) {
    id
  }
}
`

gql`
 mutation DeleteOneInscricao($input: DeleteOneInscricaoTypeInput!) {
  DeleteOneInscricao(input: $input) {
    id
  }
}
`
