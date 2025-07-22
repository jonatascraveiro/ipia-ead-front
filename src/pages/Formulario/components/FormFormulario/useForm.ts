import {
  type FormularioQuery,
  useCreateOneFormularioMutation,
  useUpdateOneFormularioMutation,
} from '@/gql/generated/graphql'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { type FormularioSchema, schema } from './schema'

export const useFormFormulario = ({
  formulario,
  subModuloId,
  aulaId,
}: {
  formulario?: FormularioQuery['formulario']

  subModuloId?: number
  aulaId?: number
}) => {
  const form = useForm<FormularioSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      id: formulario?.id || undefined,
      nome: formulario?.nome || '',
    },
  })

  const [criar] = useCreateOneFormularioMutation()
  const [editar] = useUpdateOneFormularioMutation()

  const onSubmit = (data: FormularioSchema) => {
    if (data.id) {
      editar({
        variables: {
          input: {
            id: data.id,
            update: {
              nome: data.nome,
              aulaId: aulaId,
              subModuloId: subModuloId,
            },
          },
        },

        onCompleted() {
          toast.success('Formulário  editado com sucesso')
        },
        refetchQueries: [
          'AulaFormulario',
          'Formularios',
          'SubModuloFormulario',
        ],
      })
      return
    }

    criar({
      variables: {
        input: {
          formularios: {
            nome: data.nome,
            aulaId: aulaId,
            subModuloId: subModuloId,
          },
        },
      },

      onCompleted() {
        toast.success('Formulário criado com sucesso')
      },
      refetchQueries: ['AulaFormulario', 'Formularios', 'SubModuloFormulario'],
    })
  }

  return { form, onSubmit }
}
