import {
  type ModuloQuery,
  useCreateOneModuloMutation,
  useUpdateOneModuloMutation,
} from '@/gql/generated/graphql'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { type ModuloSchema, schema } from './schema'

export const useFormModulo = ({
  modulo,
  biblioteca,
  urlVoltar,
}: {
  modulo?: ModuloQuery['modulo']
  biblioteca: boolean
  urlVoltar: string
}) => {
  const navigate = useNavigate()

  const form = useForm<ModuloSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      id: modulo?.id || undefined,
      titulo: modulo?.titulo || '',
      descricao: modulo?.descricao || '',
      ordem: modulo?.ordem || 1,
      cursoId: modulo?.cursoId || 1,
      biblioteca: biblioteca,
    },
  })

  const [criar] = useCreateOneModuloMutation()
  const [editar] = useUpdateOneModuloMutation()

  // const { data: cursos } = useCursosModuloSelectQuery({
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

  const onSubmit = (data: ModuloSchema) => {
    if (data.id) {
      editar({
        variables: {
          input: {
            id: data.id,
            update: {
              titulo: data.titulo,
              ordem: data.ordem,
              cursoId: +data.cursoId,
              descricao: data.descricao,
              biblioteca: data.biblioteca,
            },
          },
        },

        onCompleted() {
          toast.success(
            `${biblioteca ? 'Biblioteca editada' : 'Módulo editado'}  com sucesso`,
          )
          navigate(urlVoltar)
        },
      })
      return
    }
    criar({
      variables: {
        input: {
          moduloType: {
            titulo: data.titulo,
            ordem: data.ordem,
            cursoId: data.cursoId,
            descricao: data.descricao,
            biblioteca: data.biblioteca,
          },
        },
      },

      onCompleted() {
        toast.success(
          `${biblioteca ? 'Biblioteca criada' : 'Módulo criado'}  com sucesso`,
        )
        navigate(urlVoltar)
      },
    })
  }

  return { form, onSubmit }
}
