import {
  useCreateOnePerguntaMutation,
  useUpdateOnePerguntaMutation,
} from '@/gql/generated/graphql'
import { apolloClient } from '@/services/Apollo/client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { type PerguntaSchema, schema } from './schema'

export const useFormPerguntas = ({
  toggleModal,
}: {
  toggleModal: () => void
}) => {
  const form = useForm<PerguntaSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      id: undefined,
      descricao: '',
      formularioId: 0,
      tipo: 'Múltipla escolha',
      multiEscolha: false,
    },
  })

  const [criar] = useCreateOnePerguntaMutation()
  const [editar] = useUpdateOnePerguntaMutation()

  const onSubmit = (data: PerguntaSchema) => {
    if (data.id) {
      editar({
        variables: {
          input: {
            id: data.id,
            update: {
              descricao: data.descricao,
              multiEscolha: data.multiEscolha,
              tipo: data.tipo,
              formularioId: +data.formularioId,
            },
          },
        },

        onCompleted() {
          toast.success('Pergunta editada com sucesso')
          apolloClient.cache.evict({ fieldName: 'formulario' })
          toggleModal()
        },
      })
      return
    }
    criar({
      variables: {
        input: {
          perguntas: {
            descricao: data.descricao,
            multiEscolha: data.multiEscolha,
            tipo: data.tipo,
            formularioId: +data.formularioId,
          },
        },
      },

      onCompleted(data) {
        toast.success('Pergunta criada com sucesso')
        apolloClient.cache.evict({ fieldName: 'formulario' })
        toggleModal()
      },
    })
  }

  return { form, onSubmit }
}
