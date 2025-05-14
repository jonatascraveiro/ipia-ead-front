import {
  type SubModuloType,
  useCreateOneSubModuloMutation,
  useUpdateOneSubModuloMutation,
} from '@/gql/generated/graphql'
import { apolloClient } from '@/services/Apollo/client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { type ModuloSchema, schema } from './schema'

export const useFormSubModulo = ({
  subModulo,
  toggleModal,
}: {
  subModulo?: Partial<SubModuloType>

  toggleModal: () => void
}) => {
  const form = useForm<ModuloSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      id: subModulo?.id || undefined,
      titulo: subModulo?.titulo || '',
      mensagem: subModulo?.mensagem || '',
      ordem: subModulo?.ordem || 1,
      imagem: undefined,
      url: subModulo?.url || '',
      moduloId: subModulo?.moduloId || 1,
    },
  })

  const [criar] = useCreateOneSubModuloMutation()
  const [editar] = useUpdateOneSubModuloMutation()

  const onSubmit = (data: ModuloSchema) => {
    const { imagem, id } = data
    data.imagem = undefined
    data.id = undefined
    data.url = undefined
    if (id) {
      editar({
        variables: {
          id: id,
          update: {
            ...data,
          },
          arquivo: imagem || undefined,
        },

        onCompleted() {
          toast.success(`Sub-módulo editado com sucesso`)
          toggleModal()
          apolloClient.cache.evict({ fieldName: 'modulo' })
        },
      })
      return
    }
    criar({
      variables: {
        arquivo: imagem,
        input: data,
      },

      onCompleted() {
        toast.success(`Sub-módulo criado  com sucesso`)
        toggleModal()
        apolloClient.cache.evict({ fieldName: 'modulo' })
      },
    })
  }

  return { form, onSubmit }
}
