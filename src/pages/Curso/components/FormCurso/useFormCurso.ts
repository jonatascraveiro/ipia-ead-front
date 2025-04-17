import {
  type CursoQuery,
  useCreateOneCursoMutation,
  useUpdateOneCursoMutation,
} from '@/gql/generated/graphql'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { type CursoSchema, schema } from './schema'

export const useFormCurso = ({ curso }: { curso?: CursoQuery['curso'] }) => {
  const navigate = useNavigate()

  const form = useForm<CursoSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      id: curso?.id || undefined,
      nome: curso?.nome || '',
      descricao: curso?.descricao || '',
      ativo: !!curso?.ativo as boolean,
      url: curso?.url || '',
      icone: curso?.icone || '',
    },
  })

  const [criar] = useCreateOneCursoMutation()
  const [editar] = useUpdateOneCursoMutation()
  const onSubmit = (data: CursoSchema) => {
    if (data.id) {
      editar({
        variables: {
          input: {
            id: data.id,
            update: data,
          },
        },

        onCompleted() {
          toast.success('Curso editado com sucesso')
          navigate('/curso')
        },
      })
      return
    }
    criar({
      variables: {
        input: {
          cursoType: data,
        },
      },

      onCompleted() {
        toast.success('Curso criado com sucesso')
        navigate('/curso')
      },
    })
  }

  return { form, onSubmit }
}
