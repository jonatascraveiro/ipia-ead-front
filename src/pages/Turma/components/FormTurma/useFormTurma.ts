import { useCriarTurma, useEditarTurma } from '@/services/turma'
import type { TurmaType } from '@/types/turma'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import type { z } from 'zod'
import { schema } from './schema'

export const useFormTurma = ({ turma }: { turma?: TurmaType }) => {
  const navigate = useNavigate()

  const form = useForm<z.input<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      id: turma?.id || undefined,
      nome: turma?.nome || '',
    },
  })

  const criar = useCriarTurma()
  const editar = useEditarTurma()
  const onSubmit = (data: z.infer<typeof schema>) => {
    if (data.id) {
      editar.mutate(
        { id: data.id, ...data },
        {
          onSuccess() {
            toast.success('Turma editada com sucesso')
            navigate('/turma')
          },
        },
      )
      return
    }
    criar.mutate(data, {
      onSuccess() {
        toast.success('Turma criada com sucesso')
        navigate('/turma')
      },
    })
  }

  return { form, onSubmit }
}
