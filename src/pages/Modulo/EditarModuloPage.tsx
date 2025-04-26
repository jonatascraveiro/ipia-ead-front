import { Page } from '@/components/Page'
import { useCursoQuery, useModuloQuery } from '@/gql/generated/graphql'
import { ROTAS } from '@/routes/rotas'
import { generatePath, useParams } from 'react-router'
import { FormModulo } from './components/FormModulo'
import { SkeletonForm } from './components/FormModulo/skeletonForm'
import { FormSubModulo } from './components/FormSubModulo'

export function EditarModuloPage({
  biblioteca = false,
}: { biblioteca?: boolean }) {
  const id = useParams().id as string

  const cursoId = useParams().cursoId as string
  const { data: curso } = useCursoQuery({
    variables: {
      id: +cursoId,
    },
    skip: !cursoId,
  })

  const { data, loading } = useModuloQuery({
    variables: {
      id: +id,
    },
    skip: !id,
  })

  return (
    <Page>
      <Page.Header>
        <Page.Titulo>
          Editar {biblioteca ? 'Biblioteca' : 'Modulo'} do curso{' '}
          {curso?.curso?.nome}
        </Page.Titulo>
      </Page.Header>
      {loading && <SkeletonForm />}
      {!loading && data?.modulo && (
        <>
          <div className="p-5 mb-6 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
            <FormModulo
              modulo={data.modulo}
              urlVoltar={generatePath(
                biblioteca ? ROTAS.BIBLIOTECA : ROTAS.MODULO,
                {
                  cursoId,
                },
              )}
              biblioteca={biblioteca}
            />
          </div>
          <div className="p-5 mb-6 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
            <h2 className="text-2xl">Sub Módulos do Módulo</h2>
            <FormSubModulo
              subModulos={data.modulo.subModulos || []}
              urlVoltar={generatePath(
                biblioteca ? ROTAS.BIBLIOTECA : ROTAS.MODULO,
                {
                  cursoId,
                },
              )}
              moduloId={+id}
            />
          </div>
        </>
      )}
    </Page>
  )
}

// titulo, mensagem , ordem, arquivo,moduloId
//url -> arquivo
