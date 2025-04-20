import {
  CursoTypeSortFields,
  type FormularioQuery,
  SortDirection,
  useCreateOneFormularioMutation,
  useCursosQuery,
  useUpdateOneFormularioMutation,
} from '@/gql/generated/graphql'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { type FormularioSchema, schema } from './schema'

export const useFormFormulario = ({
  formulario,
}: { formulario?: FormularioQuery['formulario'] }) => {
  const navigate = useNavigate()

  const form = useForm<FormularioSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      id: formulario?.id || undefined,
      nome: formulario?.nome || '',
      cursoId: formulario?.curso?.id || 1,
    },
  })

  const [criar] = useCreateOneFormularioMutation()
  const [editar] = useUpdateOneFormularioMutation()

  const { data: cursos } = useCursosQuery({
    variables: {
      paging: {
        first: 99,
      },
      sorting: {
        field: CursoTypeSortFields.Nome,
        direction: SortDirection.Asc,
      },
    },
  })

  const cursoOptions =
    cursos?.cursos.edges.map(({ node }) => ({
      value: node.id,
      label: node.nome,
    })) || []

  const onSubmit = (data: FormularioSchema) => {
    if (data.id) {
      editar({
        variables: {
          input: {
            id: data.id,
            update: {
              nome: data.nome,

              cursoId: +data.cursoId,
            },
          },
        },

        onCompleted() {
          toast.success('Formulário editado com sucesso')
          navigate('/formulario')
        },
      })
      return
    }
    criar({
      variables: {
        input: {
          formularios: {
            nome: data.nome,
            cursoId: data.cursoId,
          },
        },
      },

      onCompleted() {
        toast.success('Formulário criado com sucesso')
        navigate('/formulario')
      },
    })
  }

  return { form, onSubmit, cursoOptions }
}
