/* eslint-disable @typescript-eslint/no-unused-expressions */
import { gql } from '@apollo/client'

gql`
 mutation createOneCurso($input: CreateOneCursoTypeInput!) {
  CreateOneCurso(input: $input) {
    id
  }
}
`

gql`
 mutation updateOneCurso($input: UpdateOneCursoTypeInput!) {
  UpdateOneCurso(input: $input) {
    id
  }
}
`

gql`
 mutation deleteOneCurso($input: DeleteOneCursoTypeInput!) {
  deleteCurso(input: $input) {
    id
  }
}
`
