import { Page } from '@/components/Page'
import { usePerguntaQuery } from '@/gql/generated/graphql'
import { useParams } from 'react-router'

import { SkeletonForm } from './components/FormPerguntas/skeletonForm'
import { FormResposta } from './components/FormRespostas'

export function EditarPerguntaPage() {
  const id = useParams().id as string
  const { data, loading } = usePerguntaQuery({
    variables: {
      id: Number(id),
    },

    skip: !id,
  })

  return (
    <Page>
      <Page.Header>
        <Page.Titulo back>Pergunta {data?.pergunta?.descricao}</Page.Titulo>
      </Page.Header>
      {loading && <SkeletonForm />}
      {!loading && data?.pergunta && (
        <>
          {/* <div className="p-5 mb-6 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
            <FormPerguntas pergunta={data.pergunta} />
          </div> */}
          <div className="p-5 mb-6 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
            <h2 className="text-2xl">Respostas da pergunta</h2>
            <FormResposta
              respostas={data.pergunta.respostas || undefined}
              resposta={{
                id: 0,
                perguntaId: data.pergunta.id,
                descricao: '',
                correta: false,
              }}
            />
          </div>
        </>
      )}
    </Page>
  )
}
