import {
  CursoTypeSortFields,
  FormulariosSortFields,
  ModuloTypeSortFields,
  type PerguntasQuery,
  SortDirection,
  useCreateOnePerguntaMutation,
  useCursosQuery,
  useFormulariosSelectQuery,
  useModulosSelectQuery,
  useUpdateOnePerguntaMutation,
} from '@/gql/generated/graphql'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { type PerguntaSchema, schema } from './schema'

export const useFormPerguntas = ({
  pergunta,
}: { pergunta?: PerguntasQuery['perguntas']['edges'][0]['node'] }) => {
  const navigate = useNavigate()

  const form = useForm<PerguntaSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      id: pergunta?.id || undefined,
      descricao: pergunta?.descricao || '',
      formularioId: pergunta?.formulario?.id || 1,
      moduloId: pergunta?.formulario?.modulo?.id || 1,
      cursoId: pergunta?.formulario?.modulo?.curso?.id || 1,
      tipo: pergunta?.tipo || 'selecao unica',
      multiEscolha: pergunta?.multiEscolha ?? false,
    },
  })

  const [criar] = useCreateOnePerguntaMutation()
  const [editar] = useUpdateOnePerguntaMutation()

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

  const { data: modulos } = useModulosSelectQuery({
    variables: {
      paging: {
        first: 99,
      },
      filter: {
        cursoId: { eq: Number(form.watch('cursoId')) },
        biblioteca: { is: false },
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

  const { data: formularios } = useFormulariosSelectQuery({
    variables: {
      paging: {
        first: 99,
      },
      filter: {
        moduloId: { eq: Number(form.watch('moduloId')) },
      },
      sorting: {
        field: FormulariosSortFields.Nome,
        direction: SortDirection.Asc,
      },
    },
    skip: !form.watch('moduloId'),
  })

  const formularioOptions =
    formularios?.formularios.edges.map(({ node }) => ({
      value: node.id,
      label: node.nome,
    })) || []

  const onSubmit = (data: PerguntaSchema) => {
    if (data.id) {
      editar({
        variables: {
          input: {
            id: data.id,
            update: {
              descricao: data.descricao,
              multiEscolha: data.multiEscolha,
              tipo: data.tipo,
              formularioId: +data.formularioId,
            },
          },
        },

        onCompleted() {
          toast.success('Formulário editado com sucesso')
          navigate('/pergunta')
        },
      })
      return
    }
    criar({
      variables: {
        input: {
          perguntas: {
            descricao: data.descricao,
            multiEscolha: data.multiEscolha,
            tipo: data.tipo,
            formularioId: +data.formularioId,
          },
        },
      },

      onCompleted(data) {
        toast.success('Formulário criado com sucesso')
        console.log(data)
        navigate(`/pergunta/${data.createOnePergunta.id}/editar`)
      },
    })
  }

  return { form, onSubmit, cursoOptions, formularioOptions, moduloOptions }
}
