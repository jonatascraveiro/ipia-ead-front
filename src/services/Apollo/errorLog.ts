import { onError } from '@apollo/client/link/error'
import { toast } from 'react-toastify'

export const ERROR_LOGIN = 'email ou senha incorretos.'
export const ERROR_UNAUTHORIZED = 'Unauthorized'

export const errorLog = onError(({ graphQLErrors }) => {
  console.log({ graphQLErrors })
  if (graphQLErrors) {
    if (
      graphQLErrors.some(({ message }) =>
        [ERROR_LOGIN].includes(message as string),
      )
    ) {
      toast.error('Usuário ou senha incorretos')
    }

    if (
      graphQLErrors.some(({ message }) =>
        [ERROR_UNAUTHORIZED].includes(message as string),
      ) &&
      graphQLErrors.some(({ path }) => path?.includes('login'))
    ) {
      toast.error('Usuário ou senha incorretos')
    }

    if (
      graphQLErrors.some(
        ({ extensions }) => extensions?.code === 'INTERNAL_SERVER_ERROR',
      )
    ) {
      const message = graphQLErrors[0].message
      toast.error(message)
    }

    if (
      graphQLErrors.some(
        ({ extensions }) => extensions?.code === 'DATABASE_ERROR',
      )
    ) {
      const message = graphQLErrors[0].message
      toast.error(message)
    }
  }
})
