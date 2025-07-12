/* eslint-disable @typescript-eslint/no-unused-expressions */
import { gql } from '@apollo/client'

gql`
 mutation createOneModulo($input: CreateOneModuloTypeInput!) {
  CreateOneModulo(input: $input) {
    titulo
  }
}
`

gql`
 mutation updateOneModulo($input: UpdateOneModuloTypeInput!) {
  UpdateOneModulo(input: $input) {
    titulo
  }
}
`

gql`
 mutation deleteOneModulo($id: Float!) {
  deleteOneModulo(id: $id) {
    titulo
  }
}
`
