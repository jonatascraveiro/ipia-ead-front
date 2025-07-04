import {
  AlunoTypeSortFields,
  SortDirection,
  useAlunosQuery,
  useUpdateOneAlunoMutation,
} from '@/gql/generated/graphql'
import { useCursorPaginacao } from '@/hooks/parametros.paginacao'
import { useModal } from '@/hooks/useModal'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { getColumns } from './columns'
import { type FormSenha, schemaSenha } from './schema'

export const useTabelaAlunos = () => {
  const form = useForm<{ nome: string; matricula: string }>({
    defaultValues: {
      nome: '',
      matricula: '',
    },
  })

  const formSenha = useForm<FormSenha>({
    defaultValues: {
      senha: '',
      nome: '',
      matricula: '',
      id: 0,
    },
    resolver: zodResolver(schemaSenha),
  })
  const modal = useModal()
  const [updateAluno] = useUpdateOneAlunoMutation()

  const { limparPaginacao, paging } = useCursorPaginacao()

  const handleFilter = () => {
    limparPaginacao()
  }

  const handleSubmitSenha = ({ senha, id, nome, matricula }: FormSenha) => {
    limparPaginacao()
    updateAluno({
      variables: {
        input: {
          id,
          senha,
          nome,
          matricula,
        },
      },
      onCompleted() {
        toast.success('Senha alterada com sucesso')
        modal.closeModal()
        formSenha.reset()
      },
    })
  }

  const { nome, matricula } = form.getValues()
  const limparFiltro = () => {
    form.reset()
    limparPaginacao()
  }

  const { data, loading } = useAlunosQuery({
    variables: {
      filter: {
        nome: { iLike: `%${nome || ''}%` },
        matricula: { iLike: `%${matricula || ''}%` },
      },
      paging,
      sorting: {
        field: AlunoTypeSortFields.Nome,
        direction: SortDirection.Asc,
      },
    },
  })

  const columns = useMemo(
    () =>
      getColumns({
        editar: (data) => {
          formSenha.reset({
            id: data.id,
            senha: '',
            matricula: data.matricula || '',
            nome: data.nome,
          })
          modal.openModal()
        },
      }),
    [formSenha, modal],
  )

  return {
    tabela: {
      data: data?.alunos.edges.map((edge) => edge.node) || [],
      loading,
      columns,
      pagination: data?.alunos.pageInfo,
    },
    form,
    handleFilter,
    limparFiltro,
    modal,
    formSenha,
    handleSubmitSenha,
  }
}
