import { Page } from '@/components/Page'
import {
  PerguntasSortFields,
  SortDirection,
  usePerguntasQuery,
} from '@/gql/generated/graphql'
import { useParams } from 'react-router'

import { FormPerguntas } from './components/FormPerguntas'
import { SkeletonForm } from './components/FormPerguntas/skeletonForm'
import { FormResposta } from './components/FormRespostas'

export function EditarPerguntaPage() {
  const id = useParams().id as string
  const { data, loading } = usePerguntasQuery({
    variables: {
      filter: {
        id: { eq: +id },
      },
      paging: {
        first: 1,
      },
      sorting: {
        field: PerguntasSortFields.Descricao,
        direction: SortDirection.Asc,
      },
    },

    skip: !id,
  })

  const respostasTeste = [
    {
      id: 3,
      descricao: 'Resposta 3',
      perguntaId: 1,
    },
    {
      id: 2,
      descricao:
        'A principal diferença entre AngularJS (ou Angular 1) e Angular 4 está na arquitetura e tecnologia usada. Eles são frameworks completamente diferentes, apesar do nome parecido. Aqui vai um resumo das principais diferenças e um exemplo de código para mostrar isso na prática.A principal diferença entre AngularJS (ou Angular 1) e Angular 4 está na arquitetura e tecnologia usada. Eles são frameworks completamente diferentes, apesar do nome parecido. Aqui vai um resumo das principais diferenças e um exemplo de código para mostrar isso na prática.',
      perguntaId: 1,
    },
  ]

  return (
    <Page>
      <Page.Header>
        <Page.Titulo>Editar Pergunta</Page.Titulo>
      </Page.Header>
      {loading && <SkeletonForm />}
      {!loading && data?.perguntas.edges[0]?.node && (
        <>
          <div className="p-5 mb-6 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
            <FormPerguntas pergunta={data.perguntas.edges[0].node} />
          </div>
          <div className="p-5 mb-6 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
            <h2 className="text-2xl">Respostas da pergunta</h2>
            <FormResposta
              respostas={respostasTeste}
              resposta={{
                id: 0,
                perguntaId: data.perguntas.edges[0].node.id,
                descricao: '',
              }}
            />
          </div>
        </>
      )}
    </Page>
  )
}
