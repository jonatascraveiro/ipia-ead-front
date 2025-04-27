import { Page } from '@/components/Page'
import { usePerguntaQuery } from '@/gql/generated/graphql'
import { generatePath, useParams } from 'react-router'

import { ROTAS } from '@/routes/rotas'
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
  const urlVoltar = generatePath(ROTAS.FORMULARIO_EDITAR, {
    subModuloId: data?.pergunta?.formulario?.subModulo?.id || 0,
    id: data?.pergunta?.formulario?.id || 0,
  })
  return (
    <Page>
      <Page.Header>
        <Page.Titulo url={urlVoltar}>
          Pergunta {data?.pergunta?.descricao}
        </Page.Titulo>
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
              respostas={data.pergunta.respostas}
              resposta={{
                id: 0,
                perguntaId: data.pergunta.id,
                descricao: '',
              }}
            />
          </div>
        </>
      )}
    </Page>
  )
}
