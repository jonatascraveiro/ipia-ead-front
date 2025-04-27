import DataTable from '@/components/DataTable'
import { Page } from '@/components/Page'
import { InputField } from '@/components/form/InputField'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { useSubModuloQuery } from '@/gql/generated/graphql'
import { ROTAS } from '@/routes/rotas'
import { Search, Trash2Icon } from 'lucide-react'
import { Link, generatePath, useParams } from 'react-router'
import { useTabelaAula } from './components/TabelaAula/useTabelaAula'

export function AulaPage({ biblioteca = false }: { biblioteca?: boolean }) {
  const subModuloId = useParams().subModuloId as string
  const { data: subModulo } = useSubModuloQuery({
    variables: {
      id: +subModuloId,
    },
    skip: !subModuloId,
  })

  const { tabela, form, handleFilter, limparFiltro } = useTabelaAula({
    biblioteca,
    subModuloId,
  })

  return (
    <Page>
      {/* {biblioteca && (
        <Page.Header>
          <Page.Titulo>
            Material complementar {subModulo?.subModulo?.titulo}
          </Page.Titulo>
          <Link to={ROTAS.MATERIAL_COMPLEMENTAR_CRIAR}>
            <Button>Nova Aula </Button>
          </Link>
        </Page.Header>
      )} */}
      {!biblioteca && (
        <Page.Header>
          <Page.Titulo
            url={generatePath(ROTAS.MODULO_EDITAR, {
              id: subModulo?.subModulo?.modulo?.id || 0,
              cursoId: subModulo?.subModulo?.modulo?.curso?.id || 0,
            })}
          >
            Aulas {subModulo?.subModulo?.titulo}
          </Page.Titulo>
          <Link to={generatePath(ROTAS.AULA_CRIAR, { subModuloId })}>
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
