import { IS_DEV } from '@/utils/constants'
import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client'
import { uploadLink } from './apollo-client'
import { authMiddleware } from './authLink'
import { errorLog } from './errorLog'

export const apolloClient = new ApolloClient({
  link: ApolloLink.from([authMiddleware, errorLog, uploadLink]),
  cache: new InMemoryCache({}),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
    },
  },
  connectToDevTools: IS_DEV,
})
