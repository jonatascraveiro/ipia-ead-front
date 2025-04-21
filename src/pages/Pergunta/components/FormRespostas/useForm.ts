import {
  useCreateOneRespostaMutation,
  useUpdateOneRespostaMutation,
} from '@/gql/generated/graphql'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { type RespostaSchema, schema } from './schema'

export const useFormPerguntas = ({
  resposta,
}: {
  resposta?: {
    id: number
    descricao: string
    perguntaId: number
    respostaCerta: boolean
  }
}) => {
  const form = useForm<RespostaSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      id: resposta?.id || undefined,
      descricao: resposta?.descricao || '',
      perguntaId: resposta?.perguntaId || 1,
      respostaCerta: String(resposta?.respostaCerta) || 'false',
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
              id: data.id,
              descricao: data.descricao,
              perguntaId: data.perguntaId,
            },
          },
        },

        onCompleted() {
          toast.success('Resposta editada com sucesso')
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
          },
        },
      },
      onCompleted() {
        toast.success('Resposta criada com sucesso')
      },
    })
  }

  return { form, onSubmit }
}
