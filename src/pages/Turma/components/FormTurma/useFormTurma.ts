import {
  type TurmaQuery,
  useCreateOneTurmaMutation,
  useUpdateOneTurmaMutation,
} from '@/gql/generated/graphql'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router'
import { toast } from 'react-toastify'
import type { z } from 'zod'
import { type TurmaSchema, schema } from './schema'

export const useFormTurma = ({
  turma,
  urlVoltar,
}: { turma?: TurmaQuery['turma']; urlVoltar: string }) => {
  const navigate = useNavigate()
  const cursoId = useParams().cursoId as string

  const dataInicio = turma?.inicio ? new Date(turma?.inicio) : new Date()
  const dataFim = turma?.fim ? new Date(turma?.fim) : new Date()

  const form = useForm<z.input<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      id: turma?.id || undefined,
      nome: turma?.nome || '',
      descricao: turma?.descricao || '',
      inicio: dataInicio,
      fim: dataFim,
      cursoId: +cursoId,
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
              duracao: data.duracao,
            },
          },
        },

        onCompleted() {
          toast.success('Turma editado com sucesso')
          navigate(urlVoltar)
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
            duracao: data.duracao,
          },
        },
      },

      onCompleted() {
        toast.success('Turma criado com sucesso')
        navigate(urlVoltar)
      },
    })
  }

  return { form, onSubmit }
}
