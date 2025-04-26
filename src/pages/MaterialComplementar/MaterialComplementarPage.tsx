import DataTable from '@/components/DataTable'
import { Page } from '@/components/Page'
import { InputField } from '@/components/form/InputField'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { useModuloQuery } from '@/gql/generated/graphql'
import { ROTAS } from '@/routes/rotas'
import { Search, Trash2Icon } from 'lucide-react'
import { Link, generatePath, useParams } from 'react-router'
import { useTabelaAula } from './components/TabelaAula/useTabelaAula'

export function MaterialComplementarPage({
  biblioteca = false,
}: { biblioteca?: boolean }) {
  const moduloId = useParams().moduloId as string
  const { data: modulo } = useModuloQuery({
    variables: {
      id: +moduloId,
    },
    skip: !moduloId,
  })

  const { tabela, form, handleFilter, limparFiltro } = useTabelaAula({
    biblioteca,
  })

  const urlVoltar = generatePath(ROTAS.BIBLIOTECA, {
    cursoId: modulo?.modulo?.curso?.id || 0,
  })

  return (
    <Page>
      {biblioteca && (
        <Page.Header>
          <Page.Titulo url={urlVoltar}>
            Material complementar {modulo?.modulo?.titulo}
          </Page.Titulo>
          <Link
            to={generatePath(ROTAS.MATERIAL_COMPLEMENTAR_CRIAR, { moduloId })}
          >
            <Button>Nova Aula </Button>
          </Link>
        </Page.Header>
      )}
      {!biblioteca && (
        <Page.Header>
          <Page.Titulo>Aulas</Page.Titulo>
          <Link to={ROTAS.AULA_CRIAR}>
            <Button>Nova Aula</Button>
          </Link>
        </Page.Header>
      )}

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleFilter)}
          className="grid grid-cols-12 gap-4 md:gap-6 mb-2 mx-2"
        >
          <div className=" xl:col-span-3 col-span-12 md:col-span-6 ">
            <InputField
              label="Nome"
              placeholder="Buscar por nome"
              name="nome"
            />
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
