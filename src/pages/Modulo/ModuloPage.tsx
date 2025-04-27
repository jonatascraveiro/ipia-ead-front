import DataTable from '@/components/DataTable'
import { Page } from '@/components/Page'
import { InputField } from '@/components/form/InputField'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { useCursoQuery } from '@/gql/generated/graphql'
import { ROTAS } from '@/routes/rotas'
import { Search, Trash2Icon } from 'lucide-react'
import { Link, generatePath, useParams } from 'react-router'
import { useTabelaModulo } from './components/TabelaModulo/useTabelaModulo'

export function ModuloPage({ biblioteca = false }: { biblioteca?: boolean }) {
  const cursoId = useParams().cursoId as string
  const { data: curso } = useCursoQuery({
    variables: {
      id: +cursoId,
    },
    skip: !cursoId,
  })

  const { tabela, form, handleFilter, limparFiltro } = useTabelaModulo({
    cursoId,
    biblioteca,
  })

  return (
    <Page>
      <Page.Header>
        <Page.Titulo url={ROTAS.CURSO}>
          {' '}
          {biblioteca ? 'Biblioteca' : 'Módulo'} do curso de{' '}
          {curso?.curso?.nome}
        </Page.Titulo>
        {!biblioteca && (
          <Link to={generatePath(ROTAS.MODULO_CRIAR, { cursoId })}>
            <Button>Novo Módulo</Button>
          </Link>
        )}
        {biblioteca && (
          <Link to={generatePath(ROTAS.BIBLIOTECA_CRIAR, { cursoId })}>
            <Button>Nova Biblioteca</Button>
          </Link>
        )}
      </Page.Header>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(() => handleFilter())}
          className="grid grid-cols-12 gap-4 md:gap-6 mb-2 mx-2"
        >
          <div className=" xl:col-span-3 col-span-12 md:col-span-6 ">
            <InputField label="Titulo" placeholder="Titulo " name="nome" />
          </div>

          <div className=" xl:col-span-3 col-span-12 md:col-span-6 flex  items-end gap-3">
            <Button type="submit">
              <Search />
            </Button>

            <Button
              variant="outline"
              onClick={() => limparFiltro()}
              type="reset"
            >
              <Trash2Icon />
            </Button>
          </div>
        </form>
      </Form>

      <DataTable {...tabela} />
    </Page>
  )
}
