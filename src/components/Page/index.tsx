import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router'
import { Button } from '../ui/button'

const Page = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>
}

const PageHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-8 border-b-2 border-gray-200  flex  flex-col  sm:flex-row  sm:items-center justify-between gap-2">
      {children}
    </div>
  )
}

const Titulo = ({
  children,
  url,
}: { children: React.ReactNode; url?: string }) => {
  return (
    <h1 className="text-2xl mb-4">
      <IconeVoltar url={url} /> {children}
    </h1>
  )
}

const IconeVoltar = ({ url }: { url?: string }) => {
  if (url) {
    return (
      <Link to={url}>
        <Button className="me-3">
          <ArrowLeft className="size-4" />
        </Button>
      </Link>
    )
  }
  return null
}

const Breadcrumbs = ({ paths }: { paths: string[] }) => {
  return (
    <ul className="flex gap-2">
      {paths.map((path) => {
        return <li key={path}>{path}</li>
      })}
    </ul>
  )
}

Page.Header = PageHeader

Page.Titulo = Titulo

Page.BreadCrumbs = Breadcrumbs

export { Page, PageHeader, Titulo, Breadcrumbs }
