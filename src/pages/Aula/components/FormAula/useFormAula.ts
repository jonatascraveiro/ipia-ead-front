import {
  type AulaQuery,
  ModuloTypeSortFields,
  SortDirection,
  useCreateOneAulaMutation,
  useCursosModuloSelectQuery,
  useModulosSelectQuery,
  useUpdateOneAulaMutation,
} from '@/gql/generated/graphql'
import { ROTAS } from '@/routes/rotas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { CursoTypeSortFields } from './../../../../gql/generated/graphql'
import { type AulaSchemaInput, type AulaSchemaOutput, schema } from './schema'

export const useFormAula = ({
  aula,
  biblioteca,
}: { aula?: AulaQuery['aula']; biblioteca?: boolean }) => {
  const navigate = useNavigate()

  const form = useForm<AulaSchemaInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      id: aula?.id || undefined,
      titulo: aula?.titulo || '',
      descricao: aula?.descricao || '',
      ordem: aula?.ordem || 1,
      duracao: aula?.duracao || 30,
      moduloId: aula?.modulo?.id || undefined,
      cursoId: aula?.modulo?.curso?.id || undefined,

      videoUrl: aula?.videoUrl,
    },
  })

  const [criar] = useCreateOneAulaMutation()
  const [editar] = useUpdateOneAulaMutation()

  const { data: cursos } = useCursosModuloSelectQuery({
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

  const { data: modulos } = useModulosSelectQuery({
    variables: {
      paging: {
        first: 99,
      },
      filter: {
        cursoId: { eq: Number(form.watch('cursoId')) },
        biblioteca: { is: biblioteca },
      },
      sorting: {
        field: ModuloTypeSortFields.Titulo,
        direction: SortDirection.Asc,
      },
    },
    skip: !form.watch('cursoId'),
  })
  const moduloOptions =
    modulos?.modulos.edges.map(({ node }) => ({
      value: node.id,
      label: node.titulo,
    })) || []

  const handleVoltar = () => {
    navigate(biblioteca ? ROTAS.AULA_COMPLEMENTAR : ROTAS.AULA)
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
              moduloId: +data.moduloId,
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
            moduloId: +data.moduloId,
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

  return { form, onSubmit, moduloOptions, cursoOptions }
}
