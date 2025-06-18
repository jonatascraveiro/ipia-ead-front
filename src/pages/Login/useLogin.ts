import { useAuth } from '@/context/AuthContext'
import { useLoginMutation } from '@/gql/generated/graphql'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { type FormData, loginSchema } from './schema'

const useLogin = () => {
  const { login } = useAuth()
  const [loginMutate] = useLoginMutation()

  const form = useForm<FormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      password: '',
      email: '',
    },
  })

  const onSubmit = (values: FormData) => {
    loginMutate({
      variables: {
        input: {
          email: values.email,
          password: values.password,
        },
      },
      onCompleted(data) {
        login(
          {
            token: data.login.token,
            email: values.email,
            nome: values.email,
          },
          () => {
            window.location.href = '/'
          },
        )
      },
    })
  }

  return {
    form,
    onSubmit,
  }
}

export { useLogin }
