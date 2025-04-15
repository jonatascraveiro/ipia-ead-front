import {
  CursoTypeSortFields,
  SortDirection,
  type TurmaQuery,
  useCreateOneTurmaMutation,
  useCursosModuloSelectQuery,
  useUpdateOneTurmaMutation,
} from '@/gql/generated/graphql'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import type { z } from 'zod'
import { type TurmaSchema, schema } from './schema'

export const useFormTurma = ({ turma }: { turma?: TurmaQuery['turma'] }) => {
  const navigate = useNavigate()

  const form = useForm<z.input<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      id: turma?.id || undefined,
      nome: turma?.nome || '',
      descricao: turma?.descricao || '',
      inicio: new Date(turma?.inicio || ''),
      fim: new Date(turma?.fim || ''),
      cursoId: turma?.cursoId || undefined,
      duracao: turma?.duracao || '10',
    },
  })

  const [criar] = useCreateOneTurmaMutation()
  const [editar] = useUpdateOneTurmaMutation()
  const onSubmit = (data: TurmaSchema) => {
    if (data.id) {
      editar({
        variables: {
          input: {
            id: data.id,
            update: {
              nome: data.nome,
              descricao: data.descricao,
              inicio: data.inicio,
              fim: data.fim,
              cursoId: data.cursoId,
              duracao: +data.duracao,
            },
          },
        },

        onCompleted() {
          toast.success('Turma editado com sucesso')
          navigate('/turma')
        },
      })
      return
    }
    criar({
      variables: {
        input: {
          turmaType: {
            nome: data.nome,
            descricao: data.descricao,
            inicio: data.inicio,
            fim: data.fim,
            cursoId: data.cursoId,
            duracao: +data.duracao,
          },
        },
      },

      onCompleted() {
        toast.success('Turma criado com sucesso')
        navigate('/turma')
      },
    })
  }

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

  return { form, onSubmit, cursoOptions }
}
