import { apiUrl } from '@/utils/constants'
import type { ApolloLink } from '@apollo/client'

import createUploadLink from 'apollo-upload-client/createUploadLink.mjs'

// export const URL_API = 'https://solicitacao-api.jos3duardo.com.br/graphql';

export const uploadLink = createUploadLink({
  uri: apiUrl,
  headers: {
    'Apollo-Require-Preflight': 'true',
  },
}) as unknown as ApolloLink
