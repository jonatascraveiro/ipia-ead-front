/* eslint-disable @typescript-eslint/no-unused-expressions */
import { gql } from '@apollo/client'

gql`
 mutation createOneSubModulo($input: CreateSubModuloInput! , $arquivo: Upload) {
  createOneSubModulo(input: $input, arquivo: $arquivo) {
    id
  }
}
`

gql`
 mutation updateOneSubModulo($update: UpdateSubModuloInput! ,$arquivo: Upload, $id: Float!) {
  updateOneSubModulo(update: $update,arquivo: $arquivo, id: $id) {
    id
  }
}
`

gql`
 mutation deleteOneSubModulo($id: Float!) {
  deleteOneSubModulo(id: $id) {
    id
  }
}
`
