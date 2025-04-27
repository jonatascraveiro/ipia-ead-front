import {
  type FormularioQuery,
  useCreateOneFormularioMutation,
  useUpdateOneFormularioMutation,
} from '@/gql/generated/graphql'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { type FormularioSchema, schema } from './schema'

export const useFormFormulario = ({
  formulario,
  urlVoltar,
  subModuloId,
}: {
  formulario?: FormularioQuery['formulario']
  urlVoltar: string
  subModuloId: number
}) => {
  const navigate = useNavigate()

  const form = useForm<FormularioSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      id: formulario?.id || undefined,
      nome: formulario?.nome || '',
      subModuloId: subModuloId,
    },
  })

  const [criar] = useCreateOneFormularioMutation()
  const [editar] = useUpdateOneFormularioMutation()

  // const { data: cursos } = useCursosQuery({
  //   variables: {
  //     paging: {
  //       first: 99,
  //     },
  //     sorting: {
  //       field: CursoTypeSortFields.Nome,
  //       direction: SortDirection.Asc,
  //     },
  //   },
  // })

  // const cursoOptions =
  //   cursos?.cursos.edges.map(({ node }) => ({
  //     value: node.id,
  //     label: node.nome,
  //   })) || []

  // const { data: modulos } = useModulosSelectQuery({
  //   variables: {
  //     paging: {
  //       first: 99,
  //     },
  //     filter: {
  //       cursoId: { eq: Number(form.watch('cursoId')) },
  //       biblioteca: { is: false },
  //     },
  //     sorting: {
  //       field: ModuloTypeSortFields.Titulo,
  //       direction: SortDirection.Asc,
  //     },
  //   },
  //   skip: !form.watch('cursoId'),
  // })
  // const moduloOptions =
  //   modulos?.modulos.edges.map(({ node }) => ({
  //     value: node.id,
  //     label: node.titulo,
  //   })) || []

  const onSubmit = (data: FormularioSchema) => {
    if (data.id) {
      editar({
        variables: {
          input: {
            id: data.id,
            update: {
              nome: data.nome,

              subModuloId: +data.subModuloId,
            },
          },
        },

        onCompleted() {
          toast.success('Formulário editado com sucesso')
          navigate(urlVoltar)
        },
      })
      return
    }
    criar({
      variables: {
        input: {
          formularios: {
            nome: data.nome,
            subModuloId: data.subModuloId,
          },
        },
      },

      onCompleted() {
        toast.success('Formulário criado com sucesso')
        navigate(urlVoltar)
      },
    })
  }

  return { form, onSubmit }
}
