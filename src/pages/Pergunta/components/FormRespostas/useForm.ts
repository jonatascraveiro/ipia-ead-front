import {
  useCreateOneRespostaMutation,
  useUpdateOneRespostaMutation,
} from '@/gql/generated/graphql'
import { apolloClient } from '@/services/Apollo/client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { type RespostaSchema, schema } from './schema'

export const useFormPerguntas = ({
  resposta,
  toggleModal,
}: {
  resposta?: {
    id: number
    descricao: string
    perguntaId: number
    correta: boolean
  }
  toggleModal: () => void
}) => {
  const form = useForm<RespostaSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      id: resposta?.id || undefined,
      descricao: resposta?.descricao || '',
      perguntaId: resposta?.perguntaId || 1,
      correta: String(resposta?.correta) || 'false',
    },
  })

  const [criar] = useCreateOneRespostaMutation()
  const [editar] = useUpdateOneRespostaMutation()

  const onSubmit = (data: RespostaSchema) => {
    if (data.id) {
      editar({
        variables: {
          input: {
            id: data.id,
            update: {
              descricao: data.descricao,
              perguntaId: data.perguntaId,
              correta: data.correta === 'true',
            },
          },
        },

        onCompleted() {
          toast.success('Resposta editada com sucesso')
          toggleModal()
          apolloClient.cache.evict({ fieldName: 'pergunta' })
        },
      })
      return
    }
    criar({
      variables: {
        input: {
          respostas: {
            descricao: data.descricao,
            perguntaId: data.perguntaId,
            correta: data.correta === 'true',
          },
        },
      },
      onCompleted() {
        toast.success('Resposta criada com sucesso')
        toggleModal()
        apolloClient.cache.evict({ fieldName: 'pergunta' })
      },
    })
  }

  return { form, onSubmit }
}
