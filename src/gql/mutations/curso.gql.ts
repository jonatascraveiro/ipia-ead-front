/* eslint-disable @typescript-eslint/no-unused-expressions */
import { gql } from '@apollo/client'

gql`
 mutation createOneCurso($input: CreateCursoInput! $arquivo: Upload) {
  createOneCurso(input: $input, arquivo: $arquivo) {
    id
  }
}
`

gql`
mutation updateOneCurso($arquivo: Upload, $update: UpdateCursoInput!, $id: Float!) {
  updateOneCurso(arquivo: $arquivo, id: $id, update: $update) {  
    id  
  }
}
`

// gql`
//  mutation deleteCurso($input: DeleteOneCursoTypeInput!) {
//   deleteCurso(input: $input) {
//     id
//   }
// }
// `

// updateOneCurso ( arquivo Upload , id Float! , update UpdateCursoInput! ) CursoType
