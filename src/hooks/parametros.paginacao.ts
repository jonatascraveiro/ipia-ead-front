import {
  createParser,
  createSerializer,
  parseAsInteger,
  parseAsString,
  useQueryStates,
} from 'nuqs'
import { createSearchParamsCache } from 'nuqs/server'

const pageParser = createParser({
  parse: (query) => {
    const page = parseAsInteger.parse(query)
    return page === null ? 1 : page
  },
  serialize: (value) => {
    return parseAsInteger.serialize(value)
  },
})

const paginationParsers = {
  page: pageParser.withDefault(1),
  pageSize: parseAsInteger.withDefault(10),
  searchTerm: parseAsString.withDefault('').withOptions({
    shallow: false,
  }),
  statusId: parseAsString.withDefault('').withOptions({
    shallow: false,
  }),
  sortColumn: parseAsString.withDefault('').withOptions({
    shallow: false,
  }),
  sortOrder: parseAsString.withDefault('').withOptions({
    shallow: false,
  }),
}

export const serializeUrlPaginacao = createSerializer(paginationParsers)
const paginationUrlKeys = {
  page: 'page',
  pageSize: 'pageSize',
  searchTerm: 'searchTerm',
  sortColumn: 'sortColumn',
  statusId: 'statusId',
  sortOrder: 'order',
}

export function usePaginacaoParametros() {
  return useQueryStates(paginationParsers, {
    urlKeys: paginationUrlKeys,
  })
}

export const serializaParametrosPaginacao = ({
  paginacao: { page, pageSize, searchTerm, sortColumn, sortOrder, statusId },
}: {
  paginacao: {
    page: number
    pageSize: number
    searchTerm: string
    statusId: string
    sortColumn: string
    sortOrder: string
  }
}) => {
  const serializeParams = [
    { key: 'page', value: page || 1 },
    { key: 'pageSize', value: pageSize || 10 },
    { key: 'searchTerm', value: searchTerm },
    { key: 'statusId', value: statusId },
    { key: 'sortColumn', value: sortColumn },
    { key: 'sortOrder', value: sortOrder },
  ]
    .filter(({ value }) => value)
    .map(({ key, value }) => `${key}=${value}`)
    .join('&')
  return serializeParams
}

export const searchParamsCache = createSearchParamsCache({
  searchTerm: parseAsString.withDefault(''),
  page: parseAsInteger.withDefault(1),
  pageSize: parseAsInteger.withDefault(10),
})
