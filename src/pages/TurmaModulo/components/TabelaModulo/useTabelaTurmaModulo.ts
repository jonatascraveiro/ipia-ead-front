import {
  ModuloTypeSortFields,
  type ModulosTurmaQuery,
  SortDirection,
  useCreateOneModuloLiberacaTravaMutation,
  useModulosTurmaQuery,
  useUpdateOneModuloLiberacaTravaMutation,
} from '@/gql/generated/graphql'
import { useCursorPaginacao } from '@/hooks/parametros.paginacao'
import { useModal } from '@/hooks/useModal'
import { zodResolver } from '@hookform/resolvers/zod'
import { parseISO } from 'date-fns'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { getColumns } from './columns'
import { type FormSchema, schema } from './schema'

export const useTabelaTurmaModulo = ({
  cursoId,
  turmaId,
}: { cursoId: string; turmaId: string }) => {
  const form = useForm<{ nome: string }>({
    defaultValues: {
      nome: '',
    },
  })
  const modal = useModal()

  const formulario = useForm<FormSchema>({
    defaultValues: {
      id: 0,
      moduloId: 0,
      modulo: '',
      dataLiberacao: new Date(),
    },
    resolver: zodResolver(schema),
  })
  console.log('formulario', formulario.formState.errors)
  const { limparPaginacao, paging } = useCursorPaginacao()

  const nome = form.getValues('nome')

  const limparFiltro = () => {
    form.reset()
    limparPaginacao()
  }

  const handleFilter = () => {
    limparPaginacao()
  }

  const handleSubmitForm = (data: FormSchema) => {
    // importar({
    //   variables: {
    //     input: {
    //       turmaId: data.turmaId,
    //     },
    //     file: data.arquivo,
    //   },
    //   onCompleted: () => {},
    // })
    // toast.success('Planila enviada para ser processada com sucesso')

    if (data.id > 0) {
      return editar({
        variables: {
          input: {
            id: data?.id as number,
            update: {
              dataLiberacao: data.dataLiberacao,
            },
          },
        },
        onCompleted: (data) => {
          toast.success('Data Módulo atualizado com sucesso')

          modal.closeModal()
        },
        refetchQueries: ['ModulosTurma'],
      })
    }

    criar({
      variables: {
        input: {
          moduloLiberacaoTravaType: {
            moduloId: +data.moduloId,
            turmaId: +turmaId,
            dataLiberacao: data.dataLiberacao,
          },
        },
      },
      onCompleted: () => {
        toast.success('Data Módulo liberado com sucesso')

        modal.closeModal()
      },
      refetchQueries: ['ModulosTurma'],
    })
  }

  const [criar] = useCreateOneModuloLiberacaTravaMutation()
  const [editar] = useUpdateOneModuloLiberacaTravaMutation()

  const handleCriar = useCallback(
    (data: ModulosTurmaQuery['modulos']['edges'][0]['node']) => {
      formulario.reset({
        id: 0,
        moduloId: +data.id,
        modulo: data.titulo,
        dataLiberacao: new Date(),
      })
      modal.openModal()
    },
    [formulario, modal],
  )
  const handleEditar = useCallback(
    (data: ModulosTurmaQuery['modulos']['edges'][0]['node']) => {
      formulario.reset({
        id: data.moduloLiberacaoTravas?.[0]?.id as number,
        moduloId: +data.id,
        modulo: data.titulo,
        dataLiberacao: parseISO(data.moduloLiberacaoTravas?.[0]?.dataLiberacao),
      })
      modal.openModal()
    },
    [formulario, modal],
  )

  const { data, loading } = useModulosTurmaQuery({
    variables: {
      filter: {
        titulo: { iLike: `%${nome || ''}%` },
        cursoId: { eq: +cursoId },
        biblioteca: { is: false },
      },
      turmaId: +turmaId,
      paging,
      sorting: [
        {
          field: ModuloTypeSortFields.Ordem,
          direction: SortDirection.Asc,
        },
        {
          field: ModuloTypeSortFields.Titulo,
          direction: SortDirection.Asc,
        },
      ],
    },
  })

  const columns = useMemo(
    () =>
      getColumns({
        editar: handleEditar,
        criar: handleCriar,
      }),
    [handleEditar, handleCriar],
  )

  return {
    columns,
    tabela: {
      data: data?.modulos.edges.map((edge) => edge.node) || [],
      loading,
      columns,
      pagination: data?.modulos.pageInfo,
    },
    form,
    handleFilter,
    limparFiltro,

    modal,
    formulario,
    handleSubmitForm,
  }
}
