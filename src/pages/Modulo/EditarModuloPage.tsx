import { Page } from '@/components/Page'
import { CardForm } from '@/components/common/CardForm'
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

  const urlVoltar = generatePath(biblioteca ? ROTAS.BIBLIOTECA : ROTAS.MODULO, {
    cursoId,
  })

  return (
    <Page>
      <Page.Header>
        <Page.Titulo url={urlVoltar}>
          Editar {biblioteca ? 'Biblioteca' : 'Módulo'} do curso{' '}
          {curso?.curso?.nome}
        </Page.Titulo>
      </Page.Header>
      {loading && <SkeletonForm />}
      {!loading && data?.modulo && (
        <>
          <CardForm>
            <FormModulo
              modulo={data.modulo}
              urlVoltar={urlVoltar}
              biblioteca={biblioteca}
            />
          </CardForm>
          {!biblioteca && (
            <CardForm>
              <CardForm.Titulo>Submódulos </CardForm.Titulo>

              <FormSubModulo
                subModulos={data.modulo.subModulos || []}
                moduloId={+id}
              />
            </CardForm>
          )}
        </>
      )}
    </Page>
  )
}

// titulo, mensagem , ordem, arquivo,moduloId
//url -> arquivo
