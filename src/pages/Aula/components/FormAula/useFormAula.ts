import {
  type AulaQuery,
  useCreateOneAulaMutation,
  useUpdateOneAulaMutation,
} from '@/gql/generated/graphql'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { type AulaSchemaInput, type AulaSchemaOutput, schema } from './schema'

export const useFormAula = ({
  aula,

  urlVoltar,
  subModuloId,
  qtdAulas,
}: {
  aula?: AulaQuery['aula']
  biblioteca?: boolean
  subModuloId: string
  urlVoltar: string
  qtdAulas: number
}) => {
  const navigate = useNavigate()

  const form = useForm<AulaSchemaInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      id: aula?.id || undefined,
      titulo: aula?.titulo || '',
      descricao: aula?.descricao || '',
      ordem: aula?.ordem || qtdAulas,
      duracao: aula?.duracao || 30,
      subModuloId: +subModuloId || undefined,

      videoUrl: aula?.videoUrl || '',
    },
  })

  const [criar] = useCreateOneAulaMutation()
  const [editar] = useUpdateOneAulaMutation()

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

  // const { data: modulos } = useModulosSelectQuery({
  //   variables: {
  //     paging: {
  //       first: 99,
  //     },
  //     filter: {
  //       cursoId: { eq: Number(form.watch('cursoId')) },
  //       biblioteca: { is: biblioteca },
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

  const handleVoltar = () => {
    navigate(urlVoltar)
  }

  const onSubmit = (data: AulaSchemaOutput) => {
    if (data.id) {
      editar({
        variables: {
          input: {
            id: data.id,
            update: {
              titulo: data.titulo,
              ordem: data.ordem,
              subModuloId: +data.subModuloId,
              descricao: data.descricao,
              duracao: data.duracao,
              videoUrl: data.videoUrl,
            },
          },
        },

        onCompleted() {
          toast.success('Aula editada com sucesso')
          handleVoltar()
        },
      })
      return
    }
    criar({
      variables: {
        input: {
          aulaType: {
            titulo: data.titulo,
            ordem: data.ordem,
            subModuloId: +data.subModuloId,
            descricao: data.descricao,
            duracao: +data.duracao,
            videoUrl: data.videoUrl || '',
          },
        },
      },

      onCompleted() {
        toast.success('Aula criada com sucesso')
        handleVoltar()
      },
    })
  }

  return { form, onSubmit }
}
