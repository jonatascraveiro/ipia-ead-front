/* eslint-disable @typescript-eslint/no-unused-expressions */
import { gql } from '@apollo/client'

gql`
 mutation createOneFormulario($input: CreateOneFormulariosInput!) {
  createOneFormulario(input: $input) {
    id
  }
}
`

gql`
 mutation updateOneFormulario($input: UpdateOneFormulariosInput!) {
  updateOneFormulario(input: $input) {
    id
  }
}
`

gql`
 mutation deleteOneFormulario($input: DeleteOneFormulariosInput!) {
  deleteOneFormulario(input: $input) {
    id
  }
}
`
