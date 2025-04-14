/* eslint-disable @typescript-eslint/no-unused-expressions */
import { gql } from '@apollo/client'

gql`
  mutation login($input: AuthInput!) {
    login(input: $input) {
      token
      
    }
  }
`
