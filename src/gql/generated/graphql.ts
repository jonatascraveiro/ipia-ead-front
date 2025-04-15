import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ConnectionCursor: { input: any; output: any; }
  DateTime: { input: any; output: any; }
};

export type AlunoType = {
  __typename?: 'AlunoType';
  /** cpf do aluno */
  cpf: Scalars['String']['output'];
  /** data criação do registro */
  createdAt: Scalars['DateTime']['output'];
  /** data da exclusão do registro */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** email do aluno */
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  /** nome do aluno */
  nome: Scalars['String']['output'];
  /** senha do aluno */
  senha: Scalars['String']['output'];
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AlunoTypeAggregateGroupBy = {
  __typename?: 'AlunoTypeAggregateGroupBy';
  cpf?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nome?: Maybe<Scalars['String']['output']>;
  senha?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AlunoTypeAvgAggregate = {
  __typename?: 'AlunoTypeAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type AlunoTypeConnection = {
  __typename?: 'AlunoTypeConnection';
  /** Array of edges. */
  edges: Array<AlunoTypeEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type AlunoTypeCountAggregate = {
  __typename?: 'AlunoTypeCountAggregate';
  cpf?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nome?: Maybe<Scalars['Int']['output']>;
  senha?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type AlunoTypeEdge = {
  __typename?: 'AlunoTypeEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the AlunoType */
  node: AlunoType;
};

export type AlunoTypeFilter = {
  and?: InputMaybe<Array<AlunoTypeFilter>>;
  cpf?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  nome?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AlunoTypeFilter>>;
  senha?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AlunoTypeMaxAggregate = {
  __typename?: 'AlunoTypeMaxAggregate';
  cpf?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nome?: Maybe<Scalars['String']['output']>;
  senha?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AlunoTypeMinAggregate = {
  __typename?: 'AlunoTypeMinAggregate';
  cpf?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nome?: Maybe<Scalars['String']['output']>;
  senha?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AlunoTypeSort = {
  direction: SortDirection;
  field: AlunoTypeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum AlunoTypeSortFields {
  Cpf = 'cpf',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Email = 'email',
  Id = 'id',
  Nome = 'nome',
  Senha = 'senha',
  UpdatedAt = 'updatedAt'
}

export type AlunoTypeSumAggregate = {
  __typename?: 'AlunoTypeSumAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type AulaType = {
  __typename?: 'AulaType';
  /** data criação do registro */
  createdAt: Scalars['DateTime']['output'];
  /** data da exclusão do registro */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** descricao do modulo */
  descricao: Scalars['String']['output'];
  /** video url do modulo */
  duracao: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  modulo?: Maybe<ModuloType>;
  /** id do modulo */
  moduloId: Scalars['Float']['output'];
  /** ordem do modulo */
  ordem: Scalars['Float']['output'];
  /** titulo do modulo */
  titulo: Scalars['String']['output'];
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** video url da aula */
  videoUrl: Scalars['String']['output'];
};

export type AulaTypeAggregateGroupBy = {
  __typename?: 'AulaTypeAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  descricao?: Maybe<Scalars['String']['output']>;
  duracao?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  moduloId?: Maybe<Scalars['Float']['output']>;
  ordem?: Maybe<Scalars['Float']['output']>;
  titulo?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  videoUrl?: Maybe<Scalars['String']['output']>;
};

export type AulaTypeAvgAggregate = {
  __typename?: 'AulaTypeAvgAggregate';
  duracao?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  moduloId?: Maybe<Scalars['Float']['output']>;
  ordem?: Maybe<Scalars['Float']['output']>;
};

export type AulaTypeConnection = {
  __typename?: 'AulaTypeConnection';
  /** Array of edges. */
  edges: Array<AulaTypeEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type AulaTypeCountAggregate = {
  __typename?: 'AulaTypeCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  descricao?: Maybe<Scalars['Int']['output']>;
  duracao?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  moduloId?: Maybe<Scalars['Int']['output']>;
  ordem?: Maybe<Scalars['Int']['output']>;
  titulo?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
  videoUrl?: Maybe<Scalars['Int']['output']>;
};

export type AulaTypeDeleteResponse = {
  __typename?: 'AulaTypeDeleteResponse';
  /** data criação do registro */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** data da exclusão do registro */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** descricao do modulo */
  descricao?: Maybe<Scalars['String']['output']>;
  /** video url do modulo */
  duracao?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** id do modulo */
  moduloId?: Maybe<Scalars['Float']['output']>;
  /** ordem do modulo */
  ordem?: Maybe<Scalars['Float']['output']>;
  /** titulo do modulo */
  titulo?: Maybe<Scalars['String']['output']>;
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** video url da aula */
  videoUrl?: Maybe<Scalars['String']['output']>;
};

export type AulaTypeEdge = {
  __typename?: 'AulaTypeEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the AulaType */
  node: AulaType;
};

export type AulaTypeFilter = {
  and?: InputMaybe<Array<AulaTypeFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  duracao?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  modulo?: InputMaybe<AulaTypeFilterModuloTypeFilter>;
  moduloId?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<AulaTypeFilter>>;
  ordem?: InputMaybe<NumberFieldComparison>;
  titulo?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  videoUrl?: InputMaybe<StringFieldComparison>;
};

export type AulaTypeFilterModuloTypeFilter = {
  and?: InputMaybe<Array<AulaTypeFilterModuloTypeFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  cursoId?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<AulaTypeFilterModuloTypeFilter>>;
  ordem?: InputMaybe<NumberFieldComparison>;
  titulo?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AulaTypeMaxAggregate = {
  __typename?: 'AulaTypeMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  descricao?: Maybe<Scalars['String']['output']>;
  duracao?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  moduloId?: Maybe<Scalars['Float']['output']>;
  ordem?: Maybe<Scalars['Float']['output']>;
  titulo?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  videoUrl?: Maybe<Scalars['String']['output']>;
};

export type AulaTypeMinAggregate = {
  __typename?: 'AulaTypeMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  descricao?: Maybe<Scalars['String']['output']>;
  duracao?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  moduloId?: Maybe<Scalars['Float']['output']>;
  ordem?: Maybe<Scalars['Float']['output']>;
  titulo?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  videoUrl?: Maybe<Scalars['String']['output']>;
};

export type AulaTypeSort = {
  direction: SortDirection;
  field: AulaTypeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum AulaTypeSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Descricao = 'descricao',
  Duracao = 'duracao',
  Id = 'id',
  ModuloId = 'moduloId',
  Ordem = 'ordem',
  Titulo = 'titulo',
  UpdatedAt = 'updatedAt',
  VideoUrl = 'videoUrl'
}

export type AulaTypeSumAggregate = {
  __typename?: 'AulaTypeSumAggregate';
  duracao?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  moduloId?: Maybe<Scalars['Float']['output']>;
  ordem?: Maybe<Scalars['Float']['output']>;
};

export type AuthInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AuthType = {
  __typename?: 'AuthType';
  token: Scalars['String']['output'];
};

export type BooleanFieldComparison = {
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateAulaInput = {
  descricao: Scalars['String']['input'];
  duracao: Scalars['Float']['input'];
  moduloId: Scalars['Float']['input'];
  ordem: Scalars['Float']['input'];
  titulo: Scalars['String']['input'];
  videoUrl: Scalars['String']['input'];
};

export type CreateCursoInput = {
  /** curso está ativo? */
  ativo: Scalars['Boolean']['input'];
  /** descrição do curso */
  descricao: Scalars['String']['input'];
  /** nome do curso */
  nome: Scalars['String']['input'];
};

export type CreateInscricaoInput = {
  /** ID do aluno */
  alunoId: Scalars['Float']['input'];
  /** Data da inscrição */
  dataInscricao: Scalars['DateTime']['input'];
  /** Status da inscrição */
  status: Scalars['Boolean']['input'];
  /** ID da turma */
  turmaId: Scalars['Float']['input'];
};

export type CreateModuloInput = {
  cursoId: Scalars['Float']['input'];
  descricao: Scalars['String']['input'];
  ordem: Scalars['Float']['input'];
  titulo: Scalars['String']['input'];
};

export type CreateOneAulaTypeInput = {
  /** The record to create */
  aulaType: CreateAulaInput;
};

export type CreateOneCursoTypeInput = {
  /** The record to create */
  cursoType: CreateCursoInput;
};

export type CreateOneInscricaoTypeInput = {
  /** The record to create */
  inscricaoType: CreateInscricaoInput;
};

export type CreateOneModuloTypeInput = {
  /** The record to create */
  moduloType: CreateModuloInput;
};

export type CreateOneProgressoTypeInput = {
  /** The record to create */
  progressoType: CreateProgressoInput;
};

export type CreateOneTurmaTypeInput = {
  /** The record to create */
  turmaType: CreateTurmaInput;
};

export type CreateProgressoInput = {
  alunoId: Scalars['Float']['input'];
  aulaId: Scalars['Float']['input'];
  cursoId: Scalars['Float']['input'];
  moduloId: Scalars['Float']['input'];
};

export type CreateTurmaInput = {
  cursoId: Scalars['Float']['input'];
  descricao: Scalars['String']['input'];
  duracao: Scalars['Float']['input'];
  fim: Scalars['DateTime']['input'];
  inicio: Scalars['DateTime']['input'];
  nome: Scalars['String']['input'];
};

export type CursoType = {
  __typename?: 'CursoType';
  /** curso está ativo */
  ativo: Scalars['Boolean']['output'];
  /** data criação do registro */
  createdAt: Scalars['DateTime']['output'];
  /** data da exclusão do registro */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** descricao do curso */
  descricao: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  modulos?: Maybe<Array<ModuloType>>;
  /** nome do curso */
  nome: Scalars['String']['output'];
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CursoTypeModulosArgs = {
  filter?: ModuloTypeFilter;
  sorting?: Array<ModuloTypeSort>;
};

export type CursoTypeAggregateGroupBy = {
  __typename?: 'CursoTypeAggregateGroupBy';
  ativo?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  descricao?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nome?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CursoTypeAvgAggregate = {
  __typename?: 'CursoTypeAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type CursoTypeConnection = {
  __typename?: 'CursoTypeConnection';
  /** Array of edges. */
  edges: Array<CursoTypeEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type CursoTypeCountAggregate = {
  __typename?: 'CursoTypeCountAggregate';
  ativo?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  descricao?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nome?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type CursoTypeDeleteResponse = {
  __typename?: 'CursoTypeDeleteResponse';
  /** curso está ativo */
  ativo?: Maybe<Scalars['Boolean']['output']>;
  /** data criação do registro */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** data da exclusão do registro */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** descricao do curso */
  descricao?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** nome do curso */
  nome?: Maybe<Scalars['String']['output']>;
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CursoTypeEdge = {
  __typename?: 'CursoTypeEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the CursoType */
  node: CursoType;
};

export type CursoTypeFilter = {
  and?: InputMaybe<Array<CursoTypeFilter>>;
  ativo?: InputMaybe<BooleanFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  modulos?: InputMaybe<CursoTypeFilterModuloTypeFilter>;
  nome?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CursoTypeFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CursoTypeFilterModuloTypeFilter = {
  and?: InputMaybe<Array<CursoTypeFilterModuloTypeFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  cursoId?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<CursoTypeFilterModuloTypeFilter>>;
  ordem?: InputMaybe<NumberFieldComparison>;
  titulo?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CursoTypeMaxAggregate = {
  __typename?: 'CursoTypeMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  descricao?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nome?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CursoTypeMinAggregate = {
  __typename?: 'CursoTypeMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  descricao?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nome?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CursoTypeSort = {
  direction: SortDirection;
  field: CursoTypeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CursoTypeSortFields {
  Ativo = 'ativo',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Descricao = 'descricao',
  Id = 'id',
  Nome = 'nome',
  UpdatedAt = 'updatedAt'
}

export type CursoTypeSumAggregate = {
  __typename?: 'CursoTypeSumAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type CursorPaging = {
  /** Paginate after opaque cursor */
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  /** Paginate before opaque cursor */
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  /** Paginate first */
  first?: InputMaybe<Scalars['Int']['input']>;
  /** Paginate last */
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type DateFieldComparison = {
  between?: InputMaybe<DateFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  notBetween?: InputMaybe<DateFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateFieldComparisonBetween = {
  lower: Scalars['DateTime']['input'];
  upper: Scalars['DateTime']['input'];
};

export type DeleteOneAulaTypeInput = {
  /** The id of the record to delete. */
  id: Scalars['Int']['input'];
};

export type DeleteOneCursoTypeInput = {
  /** The id of the record to delete. */
  id: Scalars['Int']['input'];
};

export type DeleteOneInscricaoTypeInput = {
  /** The id of the record to delete. */
  id: Scalars['Int']['input'];
};

export type DeleteOneModuloTypeInput = {
  /** The id of the record to delete. */
  id: Scalars['Int']['input'];
};

export type DeleteOneTurmaTypeInput = {
  /** The id of the record to delete. */
  id: Scalars['Int']['input'];
};

export type DeleteOneUsuarioDtoInput = {
  /** The id of the record to delete. */
  id: Scalars['Int']['input'];
};

export type InscricaoType = {
  __typename?: 'InscricaoType';
  aluno?: Maybe<AlunoType>;
  /** Id do aluno */
  alunoId: Scalars['Float']['output'];
  /** data criação do registro */
  createdAt: Scalars['DateTime']['output'];
  /** Data da inscrição */
  dataInscricao: Scalars['DateTime']['output'];
  /** data da exclusão do registro */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  /** Status da inscrição */
  status: Scalars['Boolean']['output'];
  turma?: Maybe<TurmaType>;
  /** Id da turma */
  turmaId: Scalars['Float']['output'];
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type InscricaoTypeAggregateGroupBy = {
  __typename?: 'InscricaoTypeAggregateGroupBy';
  alunoId?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dataInscricao?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  turmaId?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type InscricaoTypeAvgAggregate = {
  __typename?: 'InscricaoTypeAvgAggregate';
  alunoId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  turmaId?: Maybe<Scalars['Float']['output']>;
};

export type InscricaoTypeConnection = {
  __typename?: 'InscricaoTypeConnection';
  /** Array of edges. */
  edges: Array<InscricaoTypeEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type InscricaoTypeCountAggregate = {
  __typename?: 'InscricaoTypeCountAggregate';
  alunoId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Int']['output']>;
  dataInscricao?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  turmaId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type InscricaoTypeDeleteResponse = {
  __typename?: 'InscricaoTypeDeleteResponse';
  /** Id do aluno */
  alunoId?: Maybe<Scalars['Float']['output']>;
  /** data criação do registro */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Data da inscrição */
  dataInscricao?: Maybe<Scalars['DateTime']['output']>;
  /** data da exclusão do registro */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** Status da inscrição */
  status?: Maybe<Scalars['Boolean']['output']>;
  /** Id da turma */
  turmaId?: Maybe<Scalars['Float']['output']>;
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type InscricaoTypeEdge = {
  __typename?: 'InscricaoTypeEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the InscricaoType */
  node: InscricaoType;
};

export type InscricaoTypeFilter = {
  aluno?: InputMaybe<InscricaoTypeFilterAlunoTypeFilter>;
  alunoId?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<InscricaoTypeFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  dataInscricao?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<InscricaoTypeFilter>>;
  status?: InputMaybe<BooleanFieldComparison>;
  turma?: InputMaybe<InscricaoTypeFilterTurmaTypeFilter>;
  turmaId?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type InscricaoTypeFilterAlunoTypeFilter = {
  and?: InputMaybe<Array<InscricaoTypeFilterAlunoTypeFilter>>;
  cpf?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  nome?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InscricaoTypeFilterAlunoTypeFilter>>;
  senha?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type InscricaoTypeFilterTurmaTypeFilter = {
  and?: InputMaybe<Array<InscricaoTypeFilterTurmaTypeFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  cursoId?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  duracao?: InputMaybe<StringFieldComparison>;
  fim?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  inicio?: InputMaybe<DateFieldComparison>;
  nome?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InscricaoTypeFilterTurmaTypeFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type InscricaoTypeMaxAggregate = {
  __typename?: 'InscricaoTypeMaxAggregate';
  alunoId?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dataInscricao?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  turmaId?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type InscricaoTypeMinAggregate = {
  __typename?: 'InscricaoTypeMinAggregate';
  alunoId?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dataInscricao?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  turmaId?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type InscricaoTypeSort = {
  direction: SortDirection;
  field: InscricaoTypeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum InscricaoTypeSortFields {
  AlunoId = 'alunoId',
  CreatedAt = 'createdAt',
  DataInscricao = 'dataInscricao',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Status = 'status',
  TurmaId = 'turmaId',
  UpdatedAt = 'updatedAt'
}

export type InscricaoTypeSumAggregate = {
  __typename?: 'InscricaoTypeSumAggregate';
  alunoId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  turmaId?: Maybe<Scalars['Float']['output']>;
};

export type IntFieldComparison = {
  between?: InputMaybe<IntFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
  notBetween?: InputMaybe<IntFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntFieldComparisonBetween = {
  lower: Scalars['Int']['input'];
  upper: Scalars['Int']['input'];
};

export type ModuloType = {
  __typename?: 'ModuloType';
  /** data criação do registro */
  createdAt: Scalars['DateTime']['output'];
  curso?: Maybe<CursoType>;
  /** id do curso */
  cursoId: Scalars['Float']['output'];
  /** data da exclusão do registro */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** descricao do modulo */
  descricao: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  /** ordem do modulo */
  ordem: Scalars['Float']['output'];
  /** titulo do modulo */
  titulo: Scalars['String']['output'];
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ModuloTypeAggregateGroupBy = {
  __typename?: 'ModuloTypeAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  cursoId?: Maybe<Scalars['Float']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  descricao?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ordem?: Maybe<Scalars['Float']['output']>;
  titulo?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ModuloTypeAvgAggregate = {
  __typename?: 'ModuloTypeAvgAggregate';
  cursoId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  ordem?: Maybe<Scalars['Float']['output']>;
};

export type ModuloTypeConnection = {
  __typename?: 'ModuloTypeConnection';
  /** Array of edges. */
  edges: Array<ModuloTypeEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ModuloTypeCountAggregate = {
  __typename?: 'ModuloTypeCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  cursoId?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  descricao?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ordem?: Maybe<Scalars['Int']['output']>;
  titulo?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type ModuloTypeDeleteResponse = {
  __typename?: 'ModuloTypeDeleteResponse';
  /** data criação do registro */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** id do curso */
  cursoId?: Maybe<Scalars['Float']['output']>;
  /** data da exclusão do registro */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** descricao do modulo */
  descricao?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** ordem do modulo */
  ordem?: Maybe<Scalars['Float']['output']>;
  /** titulo do modulo */
  titulo?: Maybe<Scalars['String']['output']>;
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ModuloTypeEdge = {
  __typename?: 'ModuloTypeEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the ModuloType */
  node: ModuloType;
};

export type ModuloTypeFilter = {
  and?: InputMaybe<Array<ModuloTypeFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  curso?: InputMaybe<ModuloTypeFilterCursoTypeFilter>;
  cursoId?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<ModuloTypeFilter>>;
  ordem?: InputMaybe<NumberFieldComparison>;
  titulo?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ModuloTypeFilterCursoTypeFilter = {
  and?: InputMaybe<Array<ModuloTypeFilterCursoTypeFilter>>;
  ativo?: InputMaybe<BooleanFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  nome?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ModuloTypeFilterCursoTypeFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ModuloTypeMaxAggregate = {
  __typename?: 'ModuloTypeMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  cursoId?: Maybe<Scalars['Float']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  descricao?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ordem?: Maybe<Scalars['Float']['output']>;
  titulo?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ModuloTypeMinAggregate = {
  __typename?: 'ModuloTypeMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  cursoId?: Maybe<Scalars['Float']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  descricao?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ordem?: Maybe<Scalars['Float']['output']>;
  titulo?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ModuloTypeSort = {
  direction: SortDirection;
  field: ModuloTypeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ModuloTypeSortFields {
  CreatedAt = 'createdAt',
  CursoId = 'cursoId',
  DeletedAt = 'deletedAt',
  Descricao = 'descricao',
  Id = 'id',
  Ordem = 'ordem',
  Titulo = 'titulo',
  UpdatedAt = 'updatedAt'
}

export type ModuloTypeSumAggregate = {
  __typename?: 'ModuloTypeSumAggregate';
  cursoId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  ordem?: Maybe<Scalars['Float']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  CreateOneAula: AulaType;
  CreateOneCurso: CursoType;
  CreateOneInscricao: InscricaoType;
  CreateOneModulo: ModuloType;
  CreateOneProgresso: ProgressoType;
  CreateOneTurma: TurmaType;
  DeleteOneInscricao: InscricaoTypeDeleteResponse;
  UpdateOneAula: AulaType;
  UpdateOneCurso: CursoType;
  UpdateOneInscricao: InscricaoType;
  UpdateOneModulo: ModuloType;
  UpdateOneTurma: TurmaType;
  deleteAula: AulaTypeDeleteResponse;
  deleteCurso: CursoTypeDeleteResponse;
  deleteModulo: ModuloTypeDeleteResponse;
  deleteTurma: TurmaTypeDeleteResponse;
  deleteUsuario: UsuarioDtoDeleteResponse;
  login: AuthType;
  updateProgresso: ProgressoType;
};


export type MutationCreateOneAulaArgs = {
  input: CreateOneAulaTypeInput;
};


export type MutationCreateOneCursoArgs = {
  input: CreateOneCursoTypeInput;
};


export type MutationCreateOneInscricaoArgs = {
  input: CreateOneInscricaoTypeInput;
};


export type MutationCreateOneModuloArgs = {
  input: CreateOneModuloTypeInput;
};


export type MutationCreateOneProgressoArgs = {
  input: CreateOneProgressoTypeInput;
};


export type MutationCreateOneTurmaArgs = {
  input: CreateOneTurmaTypeInput;
};


export type MutationDeleteOneInscricaoArgs = {
  input: DeleteOneInscricaoTypeInput;
};


export type MutationUpdateOneAulaArgs = {
  input: UpdateOneAulaTypeInput;
};


export type MutationUpdateOneCursoArgs = {
  input: UpdateOneCursoTypeInput;
};


export type MutationUpdateOneInscricaoArgs = {
  input: UpdateOneInscricaoTypeInput;
};


export type MutationUpdateOneModuloArgs = {
  input: UpdateOneModuloTypeInput;
};


export type MutationUpdateOneTurmaArgs = {
  input: UpdateOneTurmaTypeInput;
};


export type MutationDeleteAulaArgs = {
  input: DeleteOneAulaTypeInput;
};


export type MutationDeleteCursoArgs = {
  input: DeleteOneCursoTypeInput;
};


export type MutationDeleteModuloArgs = {
  input: DeleteOneModuloTypeInput;
};


export type MutationDeleteTurmaArgs = {
  input: DeleteOneTurmaTypeInput;
};


export type MutationDeleteUsuarioArgs = {
  input: DeleteOneUsuarioDtoInput;
};


export type MutationLoginArgs = {
  input: AuthInput;
};


export type MutationUpdateProgressoArgs = {
  updateProgressoInput: UpdateProgressoInput;
};

export type NumberFieldComparison = {
  between?: InputMaybe<NumberFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
  notBetween?: InputMaybe<NumberFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NumberFieldComparisonBetween = {
  lower: Scalars['Float']['input'];
  upper: Scalars['Float']['input'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  /** The cursor of the last returned record. */
  endCursor?: Maybe<Scalars['ConnectionCursor']['output']>;
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
  /** The cursor of the first returned record. */
  startCursor?: Maybe<Scalars['ConnectionCursor']['output']>;
};

export type ProgressoType = {
  __typename?: 'ProgressoType';
  /** Id do aluno */
  alunoId?: Maybe<Scalars['Float']['output']>;
  /** assistido  */
  assistido?: Maybe<Scalars['Boolean']['output']>;
  aula?: Maybe<AulaType>;
  /** Id da aula */
  aulaId?: Maybe<Scalars['Float']['output']>;
  /** data criação do registro */
  createdAt: Scalars['DateTime']['output'];
  curso?: Maybe<CursoType>;
  /** Id do curso */
  cursoId?: Maybe<Scalars['Float']['output']>;
  /** data da exclusão do registro */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Fim da aula */
  fim?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  /** Inicio da aula */
  inicio?: Maybe<Scalars['DateTime']['output']>;
  /** Id do modulo */
  moduloId?: Maybe<Scalars['Float']['output']>;
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProgressoTypeAggregateGroupBy = {
  __typename?: 'ProgressoTypeAggregateGroupBy';
  alunoId?: Maybe<Scalars['Float']['output']>;
  assistido?: Maybe<Scalars['Boolean']['output']>;
  aulaId?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  cursoId?: Maybe<Scalars['Float']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fim?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  inicio?: Maybe<Scalars['DateTime']['output']>;
  moduloId?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProgressoTypeAvgAggregate = {
  __typename?: 'ProgressoTypeAvgAggregate';
  alunoId?: Maybe<Scalars['Float']['output']>;
  aulaId?: Maybe<Scalars['Float']['output']>;
  cursoId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  moduloId?: Maybe<Scalars['Float']['output']>;
};

export type ProgressoTypeConnection = {
  __typename?: 'ProgressoTypeConnection';
  /** Array of edges. */
  edges: Array<ProgressoTypeEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ProgressoTypeCountAggregate = {
  __typename?: 'ProgressoTypeCountAggregate';
  alunoId?: Maybe<Scalars['Int']['output']>;
  assistido?: Maybe<Scalars['Int']['output']>;
  aulaId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Int']['output']>;
  cursoId?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  fim?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  inicio?: Maybe<Scalars['Int']['output']>;
  moduloId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type ProgressoTypeEdge = {
  __typename?: 'ProgressoTypeEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the ProgressoType */
  node: ProgressoType;
};

export type ProgressoTypeFilter = {
  alunoId?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<ProgressoTypeFilter>>;
  assistido?: InputMaybe<BooleanFieldComparison>;
  aula?: InputMaybe<ProgressoTypeFilterAulaTypeFilter>;
  aulaId?: InputMaybe<NumberFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  curso?: InputMaybe<ProgressoTypeFilterCursoTypeFilter>;
  cursoId?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  fim?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  inicio?: InputMaybe<DateFieldComparison>;
  moduloId?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<ProgressoTypeFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProgressoTypeFilterAulaTypeFilter = {
  and?: InputMaybe<Array<ProgressoTypeFilterAulaTypeFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  duracao?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  moduloId?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<ProgressoTypeFilterAulaTypeFilter>>;
  ordem?: InputMaybe<NumberFieldComparison>;
  titulo?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  videoUrl?: InputMaybe<StringFieldComparison>;
};

export type ProgressoTypeFilterCursoTypeFilter = {
  and?: InputMaybe<Array<ProgressoTypeFilterCursoTypeFilter>>;
  ativo?: InputMaybe<BooleanFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  nome?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProgressoTypeFilterCursoTypeFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProgressoTypeMaxAggregate = {
  __typename?: 'ProgressoTypeMaxAggregate';
  alunoId?: Maybe<Scalars['Float']['output']>;
  aulaId?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  cursoId?: Maybe<Scalars['Float']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fim?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  inicio?: Maybe<Scalars['DateTime']['output']>;
  moduloId?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProgressoTypeMinAggregate = {
  __typename?: 'ProgressoTypeMinAggregate';
  alunoId?: Maybe<Scalars['Float']['output']>;
  aulaId?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  cursoId?: Maybe<Scalars['Float']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fim?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  inicio?: Maybe<Scalars['DateTime']['output']>;
  moduloId?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProgressoTypeSort = {
  direction: SortDirection;
  field: ProgressoTypeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProgressoTypeSortFields {
  AlunoId = 'alunoId',
  Assistido = 'assistido',
  AulaId = 'aulaId',
  CreatedAt = 'createdAt',
  CursoId = 'cursoId',
  DeletedAt = 'deletedAt',
  Fim = 'fim',
  Id = 'id',
  Inicio = 'inicio',
  ModuloId = 'moduloId',
  UpdatedAt = 'updatedAt'
}

export type ProgressoTypeSumAggregate = {
  __typename?: 'ProgressoTypeSumAggregate';
  alunoId?: Maybe<Scalars['Float']['output']>;
  aulaId?: Maybe<Scalars['Float']['output']>;
  cursoId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  moduloId?: Maybe<Scalars['Float']['output']>;
};

export type Query = {
  __typename?: 'Query';
  aluno?: Maybe<AlunoType>;
  alunos: AlunoTypeConnection;
  aula?: Maybe<AulaType>;
  aulas: AulaTypeConnection;
  curso?: Maybe<CursoType>;
  cursos: CursoTypeConnection;
  inscricao?: Maybe<InscricaoType>;
  inscricoes: InscricaoTypeConnection;
  modulo?: Maybe<ModuloType>;
  modulos: ModuloTypeConnection;
  progresso?: Maybe<ProgressoType>;
  progressos: ProgressoTypeConnection;
  turma?: Maybe<TurmaType>;
  turmas: TurmaTypeConnection;
  usuario?: Maybe<UsuarioDto>;
  usuarios: UsuarioDtoConnection;
};


export type QueryAlunoArgs = {
  id: Scalars['Int']['input'];
};


export type QueryAlunosArgs = {
  filter?: AlunoTypeFilter;
  paging?: CursorPaging;
  sorting?: Array<AlunoTypeSort>;
};


export type QueryAulaArgs = {
  id: Scalars['Int']['input'];
};


export type QueryAulasArgs = {
  filter?: AulaTypeFilter;
  paging?: CursorPaging;
  sorting?: Array<AulaTypeSort>;
};


export type QueryCursoArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCursosArgs = {
  filter?: CursoTypeFilter;
  paging?: CursorPaging;
  sorting?: Array<CursoTypeSort>;
};


export type QueryInscricaoArgs = {
  id: Scalars['Int']['input'];
};


export type QueryInscricoesArgs = {
  filter?: InscricaoTypeFilter;
  paging?: CursorPaging;
  sorting?: Array<InscricaoTypeSort>;
};


export type QueryModuloArgs = {
  id: Scalars['Int']['input'];
};


export type QueryModulosArgs = {
  filter?: ModuloTypeFilter;
  paging?: CursorPaging;
  sorting?: Array<ModuloTypeSort>;
};


export type QueryProgressoArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProgressosArgs = {
  filter?: ProgressoTypeFilter;
  paging?: CursorPaging;
  sorting?: Array<ProgressoTypeSort>;
};


export type QueryTurmaArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTurmasArgs = {
  filter?: TurmaTypeFilter;
  paging?: CursorPaging;
  sorting?: Array<TurmaTypeSort>;
};


export type QueryUsuarioArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUsuariosArgs = {
  filter?: UsuarioDtoFilter;
  paging?: CursorPaging;
  sorting?: Array<UsuarioDtoSort>;
};

/** Sort Directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST'
}

export type StringFieldComparison = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  iLike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  notILike?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TurmaType = {
  __typename?: 'TurmaType';
  /** data criação do registro */
  createdAt: Scalars['DateTime']['output'];
  curso?: Maybe<CursoType>;
  /** id do curso */
  cursoId: Scalars['Float']['output'];
  /** data da exclusão do registro */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** descricao da turma */
  descricao: Scalars['String']['output'];
  /** duracao da turma */
  duracao: Scalars['String']['output'];
  /** fim da turma */
  fim: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  /** inicio da turma */
  inicio: Scalars['DateTime']['output'];
  /** nome da turma */
  nome: Scalars['String']['output'];
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TurmaTypeAggregateGroupBy = {
  __typename?: 'TurmaTypeAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  cursoId?: Maybe<Scalars['Float']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  descricao?: Maybe<Scalars['String']['output']>;
  duracao?: Maybe<Scalars['String']['output']>;
  fim?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  inicio?: Maybe<Scalars['DateTime']['output']>;
  nome?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TurmaTypeAvgAggregate = {
  __typename?: 'TurmaTypeAvgAggregate';
  cursoId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type TurmaTypeConnection = {
  __typename?: 'TurmaTypeConnection';
  /** Array of edges. */
  edges: Array<TurmaTypeEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type TurmaTypeCountAggregate = {
  __typename?: 'TurmaTypeCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  cursoId?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  descricao?: Maybe<Scalars['Int']['output']>;
  duracao?: Maybe<Scalars['Int']['output']>;
  fim?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  inicio?: Maybe<Scalars['Int']['output']>;
  nome?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type TurmaTypeDeleteResponse = {
  __typename?: 'TurmaTypeDeleteResponse';
  /** data criação do registro */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** id do curso */
  cursoId?: Maybe<Scalars['Float']['output']>;
  /** data da exclusão do registro */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** descricao da turma */
  descricao?: Maybe<Scalars['String']['output']>;
  /** duracao da turma */
  duracao?: Maybe<Scalars['String']['output']>;
  /** fim da turma */
  fim?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** inicio da turma */
  inicio?: Maybe<Scalars['DateTime']['output']>;
  /** nome da turma */
  nome?: Maybe<Scalars['String']['output']>;
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TurmaTypeEdge = {
  __typename?: 'TurmaTypeEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the TurmaType */
  node: TurmaType;
};

export type TurmaTypeFilter = {
  and?: InputMaybe<Array<TurmaTypeFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  curso?: InputMaybe<TurmaTypeFilterCursoTypeFilter>;
  cursoId?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  duracao?: InputMaybe<StringFieldComparison>;
  fim?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  inicio?: InputMaybe<DateFieldComparison>;
  nome?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TurmaTypeFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type TurmaTypeFilterCursoTypeFilter = {
  and?: InputMaybe<Array<TurmaTypeFilterCursoTypeFilter>>;
  ativo?: InputMaybe<BooleanFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  nome?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TurmaTypeFilterCursoTypeFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type TurmaTypeMaxAggregate = {
  __typename?: 'TurmaTypeMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  cursoId?: Maybe<Scalars['Float']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  descricao?: Maybe<Scalars['String']['output']>;
  duracao?: Maybe<Scalars['String']['output']>;
  fim?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  inicio?: Maybe<Scalars['DateTime']['output']>;
  nome?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TurmaTypeMinAggregate = {
  __typename?: 'TurmaTypeMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  cursoId?: Maybe<Scalars['Float']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  descricao?: Maybe<Scalars['String']['output']>;
  duracao?: Maybe<Scalars['String']['output']>;
  fim?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  inicio?: Maybe<Scalars['DateTime']['output']>;
  nome?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TurmaTypeSort = {
  direction: SortDirection;
  field: TurmaTypeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum TurmaTypeSortFields {
  CreatedAt = 'createdAt',
  CursoId = 'cursoId',
  DeletedAt = 'deletedAt',
  Descricao = 'descricao',
  Duracao = 'duracao',
  Fim = 'fim',
  Id = 'id',
  Inicio = 'inicio',
  Nome = 'nome',
  UpdatedAt = 'updatedAt'
}

export type TurmaTypeSumAggregate = {
  __typename?: 'TurmaTypeSumAggregate';
  cursoId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type UpdateAulaInput = {
  descricao?: InputMaybe<Scalars['String']['input']>;
  duracao?: InputMaybe<Scalars['Float']['input']>;
  moduloId?: InputMaybe<Scalars['Float']['input']>;
  ordem?: InputMaybe<Scalars['Float']['input']>;
  titulo?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCursoInput = {
  /** curso está ativo? */
  ativo?: InputMaybe<Scalars['Boolean']['input']>;
  /** descrição do curso */
  descricao?: InputMaybe<Scalars['String']['input']>;
  /** nome do curso */
  nome?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateInscricaoInput = {
  /** ID do aluno */
  alunoId?: InputMaybe<Scalars['Float']['input']>;
  /** Data da inscrição */
  dataInscricao?: InputMaybe<Scalars['DateTime']['input']>;
  /** Status da inscrição */
  status?: InputMaybe<Scalars['Boolean']['input']>;
  /** ID da turma */
  turmaId?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateModuloInput = {
  cursoId?: InputMaybe<Scalars['Float']['input']>;
  descricao?: InputMaybe<Scalars['String']['input']>;
  ordem?: InputMaybe<Scalars['Float']['input']>;
  titulo?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOneAulaTypeInput = {
  /** The id of the record to update */
  id: Scalars['Int']['input'];
  /** The update to apply. */
  update: UpdateAulaInput;
};

export type UpdateOneCursoTypeInput = {
  /** The id of the record to update */
  id: Scalars['Int']['input'];
  /** The update to apply. */
  update: UpdateCursoInput;
};

export type UpdateOneInscricaoTypeInput = {
  /** The id of the record to update */
  id: Scalars['Int']['input'];
  /** The update to apply. */
  update: UpdateInscricaoInput;
};

export type UpdateOneModuloTypeInput = {
  /** The id of the record to update */
  id: Scalars['Int']['input'];
  /** The update to apply. */
  update: UpdateModuloInput;
};

export type UpdateOneTurmaTypeInput = {
  /** The id of the record to update */
  id: Scalars['Int']['input'];
  /** The update to apply. */
  update: UpdateTurmaInput;
};

export type UpdateProgressoInput = {
  alunoId?: InputMaybe<Scalars['Float']['input']>;
  aulaId?: InputMaybe<Scalars['Float']['input']>;
  cursoId?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['Float']['input'];
  moduloId?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateTurmaInput = {
  cursoId?: InputMaybe<Scalars['Float']['input']>;
  descricao?: InputMaybe<Scalars['String']['input']>;
  duracao?: InputMaybe<Scalars['Float']['input']>;
  fim?: InputMaybe<Scalars['DateTime']['input']>;
  inicio?: InputMaybe<Scalars['DateTime']['input']>;
  nome?: InputMaybe<Scalars['String']['input']>;
};

export type UsuarioDto = {
  __typename?: 'UsuarioDto';
  /** informa se o usuario esta ativo. */
  ativo: Scalars['Boolean']['output'];
  /** data criação do registro */
  createdAt: Scalars['DateTime']['output'];
  /** data da exclusão do registro */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** email do usuário */
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  /** nome do usuário */
  nome: Scalars['String']['output'];
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsuarioDtoAggregateGroupBy = {
  __typename?: 'UsuarioDtoAggregateGroupBy';
  ativo?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nome?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsuarioDtoAvgAggregate = {
  __typename?: 'UsuarioDtoAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type UsuarioDtoConnection = {
  __typename?: 'UsuarioDtoConnection';
  /** Array of edges. */
  edges: Array<UsuarioDtoEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type UsuarioDtoCountAggregate = {
  __typename?: 'UsuarioDtoCountAggregate';
  ativo?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nome?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type UsuarioDtoDeleteResponse = {
  __typename?: 'UsuarioDtoDeleteResponse';
  /** informa se o usuario esta ativo. */
  ativo?: Maybe<Scalars['Boolean']['output']>;
  /** data criação do registro */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** data da exclusão do registro */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** email do usuário */
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** nome do usuário */
  nome?: Maybe<Scalars['String']['output']>;
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsuarioDtoEdge = {
  __typename?: 'UsuarioDtoEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the UsuarioDto */
  node: UsuarioDto;
};

export type UsuarioDtoFilter = {
  and?: InputMaybe<Array<UsuarioDtoFilter>>;
  ativo?: InputMaybe<BooleanFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  nome?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UsuarioDtoFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UsuarioDtoMaxAggregate = {
  __typename?: 'UsuarioDtoMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nome?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsuarioDtoMinAggregate = {
  __typename?: 'UsuarioDtoMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nome?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsuarioDtoSort = {
  direction: SortDirection;
  field: UsuarioDtoSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UsuarioDtoSortFields {
  Ativo = 'ativo',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Email = 'email',
  Id = 'id',
  Nome = 'nome',
  UpdatedAt = 'updatedAt'
}

export type UsuarioDtoSumAggregate = {
  __typename?: 'UsuarioDtoSumAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type CreateOneAulaMutationVariables = Exact<{
  input: CreateOneAulaTypeInput;
}>;


export type CreateOneAulaMutation = { __typename?: 'Mutation', CreateOneAula: { __typename?: 'AulaType', titulo: string } };

export type UpdateOneAulaMutationVariables = Exact<{
  input: UpdateOneAulaTypeInput;
}>;


export type UpdateOneAulaMutation = { __typename?: 'Mutation', UpdateOneAula: { __typename?: 'AulaType', titulo: string } };

export type DeleteOneAulaMutationVariables = Exact<{
  input: DeleteOneAulaTypeInput;
}>;


export type DeleteOneAulaMutation = { __typename?: 'Mutation', deleteAula: { __typename?: 'AulaTypeDeleteResponse', titulo?: string | null } };

export type LoginMutationVariables = Exact<{
  input: AuthInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthType', token: string } };

export type CreateOneCursoMutationVariables = Exact<{
  input: CreateOneCursoTypeInput;
}>;


export type CreateOneCursoMutation = { __typename?: 'Mutation', CreateOneCurso: { __typename?: 'CursoType', id: number } };

export type UpdateOneCursoMutationVariables = Exact<{
  input: UpdateOneCursoTypeInput;
}>;


export type UpdateOneCursoMutation = { __typename?: 'Mutation', UpdateOneCurso: { __typename?: 'CursoType', id: number } };

export type DeleteOneCursoMutationVariables = Exact<{
  input: DeleteOneCursoTypeInput;
}>;


export type DeleteOneCursoMutation = { __typename?: 'Mutation', deleteCurso: { __typename?: 'CursoTypeDeleteResponse', id?: number | null } };

export type CreateOneModuloMutationVariables = Exact<{
  input: CreateOneModuloTypeInput;
}>;


export type CreateOneModuloMutation = { __typename?: 'Mutation', CreateOneModulo: { __typename?: 'ModuloType', titulo: string } };

export type UpdateOneModuloMutationVariables = Exact<{
  input: UpdateOneModuloTypeInput;
}>;


export type UpdateOneModuloMutation = { __typename?: 'Mutation', UpdateOneModulo: { __typename?: 'ModuloType', titulo: string } };

export type DeleteOneModuloMutationVariables = Exact<{
  input: DeleteOneModuloTypeInput;
}>;


export type DeleteOneModuloMutation = { __typename?: 'Mutation', deleteModulo: { __typename?: 'ModuloTypeDeleteResponse', titulo?: string | null } };

export type CreateOneTurmaMutationVariables = Exact<{
  input: CreateOneTurmaTypeInput;
}>;


export type CreateOneTurmaMutation = { __typename?: 'Mutation', CreateOneTurma: { __typename?: 'TurmaType', id: number } };

export type UpdateOneTurmaMutationVariables = Exact<{
  input: UpdateOneTurmaTypeInput;
}>;


export type UpdateOneTurmaMutation = { __typename?: 'Mutation', UpdateOneTurma: { __typename?: 'TurmaType', id: number } };

export type DeleteOneTurmaMutationVariables = Exact<{
  input: DeleteOneTurmaTypeInput;
}>;


export type DeleteOneTurmaMutation = { __typename?: 'Mutation', deleteTurma: { __typename?: 'TurmaTypeDeleteResponse', id?: number | null } };

export type AulaQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type AulaQuery = { __typename?: 'Query', aula?: { __typename?: 'AulaType', ordem: number, moduloId: number, descricao: string, id: number, titulo: string, videoUrl: string, duracao: number, modulo?: { __typename?: 'ModuloType', titulo: string, id: number, curso?: { __typename?: 'CursoType', id: number, nome: string } | null } | null } | null };

export type AulasQueryVariables = Exact<{
  filter?: InputMaybe<AulaTypeFilter>;
  paging: CursorPaging;
  sorting: Array<AulaTypeSort> | AulaTypeSort;
}>;


export type AulasQuery = { __typename?: 'Query', aulas: { __typename?: 'AulaTypeConnection', edges: Array<{ __typename?: 'AulaTypeEdge', node: { __typename?: 'AulaType', ordem: number, moduloId: number, descricao: string, id: number, titulo: string, videoUrl: string, duracao: number, modulo?: { __typename?: 'ModuloType', titulo: string } | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: any | null, hasNextPage?: boolean | null, hasPreviousPage?: boolean | null, startCursor?: any | null } } };

export type CursoQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type CursoQuery = { __typename?: 'Query', curso?: { __typename?: 'CursoType', ativo: boolean, createdAt: any, deletedAt?: any | null, descricao: string, id: number, nome: string, updatedAt?: any | null } | null };

export type CursosQueryVariables = Exact<{
  filter?: InputMaybe<CursoTypeFilter>;
  paging: CursorPaging;
  sorting: Array<CursoTypeSort> | CursoTypeSort;
}>;


export type CursosQuery = { __typename?: 'Query', cursos: { __typename?: 'CursoTypeConnection', edges: Array<{ __typename?: 'CursoTypeEdge', node: { __typename?: 'CursoType', ativo: boolean, createdAt: any, deletedAt?: any | null, descricao: string, id: number, nome: string, updatedAt?: any | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: any | null, hasNextPage?: boolean | null, hasPreviousPage?: boolean | null, startCursor?: any | null } } };

export type CursosModuloSelectQueryVariables = Exact<{
  filter?: InputMaybe<CursoTypeFilter>;
  paging: CursorPaging;
  sorting: Array<CursoTypeSort> | CursoTypeSort;
}>;


export type CursosModuloSelectQuery = { __typename?: 'Query', cursos: { __typename?: 'CursoTypeConnection', edges: Array<{ __typename?: 'CursoTypeEdge', node: { __typename?: 'CursoType', id: number, nome: string, modulos?: Array<{ __typename?: 'ModuloType', id: number, titulo: string }> | null } }> } };

export type ModuloQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ModuloQuery = { __typename?: 'Query', modulo?: { __typename?: 'ModuloType', ordem: number, cursoId: number, descricao: string, id: number, titulo: string, curso?: { __typename?: 'CursoType', nome: string } | null } | null };

export type ModulosQueryVariables = Exact<{
  filter?: InputMaybe<ModuloTypeFilter>;
  paging: CursorPaging;
  sorting: Array<ModuloTypeSort> | ModuloTypeSort;
}>;


export type ModulosQuery = { __typename?: 'Query', modulos: { __typename?: 'ModuloTypeConnection', edges: Array<{ __typename?: 'ModuloTypeEdge', node: { __typename?: 'ModuloType', ordem: number, cursoId: number, descricao: string, id: number, titulo: string, curso?: { __typename?: 'CursoType', nome: string } | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: any | null, hasNextPage?: boolean | null, hasPreviousPage?: boolean | null, startCursor?: any | null } } };

export type ModulosSelectQueryVariables = Exact<{
  filter?: InputMaybe<ModuloTypeFilter>;
  paging: CursorPaging;
  sorting: Array<ModuloTypeSort> | ModuloTypeSort;
}>;


export type ModulosSelectQuery = { __typename?: 'Query', modulos: { __typename?: 'ModuloTypeConnection', edges: Array<{ __typename?: 'ModuloTypeEdge', node: { __typename?: 'ModuloType', id: number, titulo: string } }> } };

export type TurmaQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type TurmaQuery = { __typename?: 'Query', turma?: { __typename?: 'TurmaType', duracao: string, fim: any, inicio: any, cursoId: number, descricao: string, id: number, nome: string, curso?: { __typename?: 'CursoType', nome: string, id: number } | null } | null };

export type TurmasQueryVariables = Exact<{
  filter?: InputMaybe<TurmaTypeFilter>;
  paging: CursorPaging;
  sorting: Array<TurmaTypeSort> | TurmaTypeSort;
}>;


export type TurmasQuery = { __typename?: 'Query', turmas: { __typename?: 'TurmaTypeConnection', edges: Array<{ __typename?: 'TurmaTypeEdge', node: { __typename?: 'TurmaType', duracao: string, fim: any, inicio: any, cursoId: number, descricao: string, id: number, nome: string, curso?: { __typename?: 'CursoType', nome: string, id: number } | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: any | null, hasNextPage?: boolean | null, hasPreviousPage?: boolean | null, startCursor?: any | null } } };

export type TurmasSelectQueryVariables = Exact<{
  filter?: InputMaybe<TurmaTypeFilter>;
  paging: CursorPaging;
  sorting: Array<TurmaTypeSort> | TurmaTypeSort;
}>;


export type TurmasSelectQuery = { __typename?: 'Query', turmas: { __typename?: 'TurmaTypeConnection', edges: Array<{ __typename?: 'TurmaTypeEdge', node: { __typename?: 'TurmaType', id: number, nome: string } }> } };


export const CreateOneAulaDocument = gql`
    mutation createOneAula($input: CreateOneAulaTypeInput!) {
  CreateOneAula(input: $input) {
    titulo
  }
}
    `;
export type CreateOneAulaMutationFn = Apollo.MutationFunction<CreateOneAulaMutation, CreateOneAulaMutationVariables>;

/**
 * __useCreateOneAulaMutation__
 *
 * To run a mutation, you first call `useCreateOneAulaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneAulaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneAulaMutation, { data, loading, error }] = useCreateOneAulaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneAulaMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneAulaMutation, CreateOneAulaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneAulaMutation, CreateOneAulaMutationVariables>(CreateOneAulaDocument, options);
      }
export type CreateOneAulaMutationHookResult = ReturnType<typeof useCreateOneAulaMutation>;
export type CreateOneAulaMutationResult = Apollo.MutationResult<CreateOneAulaMutation>;
export type CreateOneAulaMutationOptions = Apollo.BaseMutationOptions<CreateOneAulaMutation, CreateOneAulaMutationVariables>;
export const UpdateOneAulaDocument = gql`
    mutation updateOneAula($input: UpdateOneAulaTypeInput!) {
  UpdateOneAula(input: $input) {
    titulo
  }
}
    `;
export type UpdateOneAulaMutationFn = Apollo.MutationFunction<UpdateOneAulaMutation, UpdateOneAulaMutationVariables>;

/**
 * __useUpdateOneAulaMutation__
 *
 * To run a mutation, you first call `useUpdateOneAulaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneAulaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneAulaMutation, { data, loading, error }] = useUpdateOneAulaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneAulaMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneAulaMutation, UpdateOneAulaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneAulaMutation, UpdateOneAulaMutationVariables>(UpdateOneAulaDocument, options);
      }
export type UpdateOneAulaMutationHookResult = ReturnType<typeof useUpdateOneAulaMutation>;
export type UpdateOneAulaMutationResult = Apollo.MutationResult<UpdateOneAulaMutation>;
export type UpdateOneAulaMutationOptions = Apollo.BaseMutationOptions<UpdateOneAulaMutation, UpdateOneAulaMutationVariables>;
export const DeleteOneAulaDocument = gql`
    mutation deleteOneAula($input: DeleteOneAulaTypeInput!) {
  deleteAula(input: $input) {
    titulo
  }
}
    `;
export type DeleteOneAulaMutationFn = Apollo.MutationFunction<DeleteOneAulaMutation, DeleteOneAulaMutationVariables>;

/**
 * __useDeleteOneAulaMutation__
 *
 * To run a mutation, you first call `useDeleteOneAulaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneAulaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneAulaMutation, { data, loading, error }] = useDeleteOneAulaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOneAulaMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneAulaMutation, DeleteOneAulaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneAulaMutation, DeleteOneAulaMutationVariables>(DeleteOneAulaDocument, options);
      }
export type DeleteOneAulaMutationHookResult = ReturnType<typeof useDeleteOneAulaMutation>;
export type DeleteOneAulaMutationResult = Apollo.MutationResult<DeleteOneAulaMutation>;
export type DeleteOneAulaMutationOptions = Apollo.BaseMutationOptions<DeleteOneAulaMutation, DeleteOneAulaMutationVariables>;
export const LoginDocument = gql`
    mutation login($input: AuthInput!) {
  login(input: $input) {
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const CreateOneCursoDocument = gql`
    mutation createOneCurso($input: CreateOneCursoTypeInput!) {
  CreateOneCurso(input: $input) {
    id
  }
}
    `;
export type CreateOneCursoMutationFn = Apollo.MutationFunction<CreateOneCursoMutation, CreateOneCursoMutationVariables>;

/**
 * __useCreateOneCursoMutation__
 *
 * To run a mutation, you first call `useCreateOneCursoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneCursoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneCursoMutation, { data, loading, error }] = useCreateOneCursoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneCursoMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneCursoMutation, CreateOneCursoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneCursoMutation, CreateOneCursoMutationVariables>(CreateOneCursoDocument, options);
      }
export type CreateOneCursoMutationHookResult = ReturnType<typeof useCreateOneCursoMutation>;
export type CreateOneCursoMutationResult = Apollo.MutationResult<CreateOneCursoMutation>;
export type CreateOneCursoMutationOptions = Apollo.BaseMutationOptions<CreateOneCursoMutation, CreateOneCursoMutationVariables>;
export const UpdateOneCursoDocument = gql`
    mutation updateOneCurso($input: UpdateOneCursoTypeInput!) {
  UpdateOneCurso(input: $input) {
    id
  }
}
    `;
export type UpdateOneCursoMutationFn = Apollo.MutationFunction<UpdateOneCursoMutation, UpdateOneCursoMutationVariables>;

/**
 * __useUpdateOneCursoMutation__
 *
 * To run a mutation, you first call `useUpdateOneCursoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneCursoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneCursoMutation, { data, loading, error }] = useUpdateOneCursoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneCursoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneCursoMutation, UpdateOneCursoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneCursoMutation, UpdateOneCursoMutationVariables>(UpdateOneCursoDocument, options);
      }
export type UpdateOneCursoMutationHookResult = ReturnType<typeof useUpdateOneCursoMutation>;
export type UpdateOneCursoMutationResult = Apollo.MutationResult<UpdateOneCursoMutation>;
export type UpdateOneCursoMutationOptions = Apollo.BaseMutationOptions<UpdateOneCursoMutation, UpdateOneCursoMutationVariables>;
export const DeleteOneCursoDocument = gql`
    mutation deleteOneCurso($input: DeleteOneCursoTypeInput!) {
  deleteCurso(input: $input) {
    id
  }
}
    `;
export type DeleteOneCursoMutationFn = Apollo.MutationFunction<DeleteOneCursoMutation, DeleteOneCursoMutationVariables>;

/**
 * __useDeleteOneCursoMutation__
 *
 * To run a mutation, you first call `useDeleteOneCursoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneCursoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneCursoMutation, { data, loading, error }] = useDeleteOneCursoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOneCursoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneCursoMutation, DeleteOneCursoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneCursoMutation, DeleteOneCursoMutationVariables>(DeleteOneCursoDocument, options);
      }
export type DeleteOneCursoMutationHookResult = ReturnType<typeof useDeleteOneCursoMutation>;
export type DeleteOneCursoMutationResult = Apollo.MutationResult<DeleteOneCursoMutation>;
export type DeleteOneCursoMutationOptions = Apollo.BaseMutationOptions<DeleteOneCursoMutation, DeleteOneCursoMutationVariables>;
export const CreateOneModuloDocument = gql`
    mutation createOneModulo($input: CreateOneModuloTypeInput!) {
  CreateOneModulo(input: $input) {
    titulo
  }
}
    `;
export type CreateOneModuloMutationFn = Apollo.MutationFunction<CreateOneModuloMutation, CreateOneModuloMutationVariables>;

/**
 * __useCreateOneModuloMutation__
 *
 * To run a mutation, you first call `useCreateOneModuloMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneModuloMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneModuloMutation, { data, loading, error }] = useCreateOneModuloMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneModuloMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneModuloMutation, CreateOneModuloMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneModuloMutation, CreateOneModuloMutationVariables>(CreateOneModuloDocument, options);
      }
export type CreateOneModuloMutationHookResult = ReturnType<typeof useCreateOneModuloMutation>;
export type CreateOneModuloMutationResult = Apollo.MutationResult<CreateOneModuloMutation>;
export type CreateOneModuloMutationOptions = Apollo.BaseMutationOptions<CreateOneModuloMutation, CreateOneModuloMutationVariables>;
export const UpdateOneModuloDocument = gql`
    mutation updateOneModulo($input: UpdateOneModuloTypeInput!) {
  UpdateOneModulo(input: $input) {
    titulo
  }
}
    `;
export type UpdateOneModuloMutationFn = Apollo.MutationFunction<UpdateOneModuloMutation, UpdateOneModuloMutationVariables>;

/**
 * __useUpdateOneModuloMutation__
 *
 * To run a mutation, you first call `useUpdateOneModuloMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneModuloMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneModuloMutation, { data, loading, error }] = useUpdateOneModuloMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneModuloMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneModuloMutation, UpdateOneModuloMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneModuloMutation, UpdateOneModuloMutationVariables>(UpdateOneModuloDocument, options);
      }
export type UpdateOneModuloMutationHookResult = ReturnType<typeof useUpdateOneModuloMutation>;
export type UpdateOneModuloMutationResult = Apollo.MutationResult<UpdateOneModuloMutation>;
export type UpdateOneModuloMutationOptions = Apollo.BaseMutationOptions<UpdateOneModuloMutation, UpdateOneModuloMutationVariables>;
export const DeleteOneModuloDocument = gql`
    mutation deleteOneModulo($input: DeleteOneModuloTypeInput!) {
  deleteModulo(input: $input) {
    titulo
  }
}
    `;
export type DeleteOneModuloMutationFn = Apollo.MutationFunction<DeleteOneModuloMutation, DeleteOneModuloMutationVariables>;

/**
 * __useDeleteOneModuloMutation__
 *
 * To run a mutation, you first call `useDeleteOneModuloMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneModuloMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneModuloMutation, { data, loading, error }] = useDeleteOneModuloMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOneModuloMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneModuloMutation, DeleteOneModuloMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneModuloMutation, DeleteOneModuloMutationVariables>(DeleteOneModuloDocument, options);
      }
export type DeleteOneModuloMutationHookResult = ReturnType<typeof useDeleteOneModuloMutation>;
export type DeleteOneModuloMutationResult = Apollo.MutationResult<DeleteOneModuloMutation>;
export type DeleteOneModuloMutationOptions = Apollo.BaseMutationOptions<DeleteOneModuloMutation, DeleteOneModuloMutationVariables>;
export const CreateOneTurmaDocument = gql`
    mutation createOneTurma($input: CreateOneTurmaTypeInput!) {
  CreateOneTurma(input: $input) {
    id
  }
}
    `;
export type CreateOneTurmaMutationFn = Apollo.MutationFunction<CreateOneTurmaMutation, CreateOneTurmaMutationVariables>;

/**
 * __useCreateOneTurmaMutation__
 *
 * To run a mutation, you first call `useCreateOneTurmaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneTurmaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneTurmaMutation, { data, loading, error }] = useCreateOneTurmaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneTurmaMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneTurmaMutation, CreateOneTurmaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneTurmaMutation, CreateOneTurmaMutationVariables>(CreateOneTurmaDocument, options);
      }
export type CreateOneTurmaMutationHookResult = ReturnType<typeof useCreateOneTurmaMutation>;
export type CreateOneTurmaMutationResult = Apollo.MutationResult<CreateOneTurmaMutation>;
export type CreateOneTurmaMutationOptions = Apollo.BaseMutationOptions<CreateOneTurmaMutation, CreateOneTurmaMutationVariables>;
export const UpdateOneTurmaDocument = gql`
    mutation updateOneTurma($input: UpdateOneTurmaTypeInput!) {
  UpdateOneTurma(input: $input) {
    id
  }
}
    `;
export type UpdateOneTurmaMutationFn = Apollo.MutationFunction<UpdateOneTurmaMutation, UpdateOneTurmaMutationVariables>;

/**
 * __useUpdateOneTurmaMutation__
 *
 * To run a mutation, you first call `useUpdateOneTurmaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneTurmaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneTurmaMutation, { data, loading, error }] = useUpdateOneTurmaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneTurmaMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneTurmaMutation, UpdateOneTurmaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneTurmaMutation, UpdateOneTurmaMutationVariables>(UpdateOneTurmaDocument, options);
      }
export type UpdateOneTurmaMutationHookResult = ReturnType<typeof useUpdateOneTurmaMutation>;
export type UpdateOneTurmaMutationResult = Apollo.MutationResult<UpdateOneTurmaMutation>;
export type UpdateOneTurmaMutationOptions = Apollo.BaseMutationOptions<UpdateOneTurmaMutation, UpdateOneTurmaMutationVariables>;
export const DeleteOneTurmaDocument = gql`
    mutation deleteOneTurma($input: DeleteOneTurmaTypeInput!) {
  deleteTurma(input: $input) {
    id
  }
}
    `;
export type DeleteOneTurmaMutationFn = Apollo.MutationFunction<DeleteOneTurmaMutation, DeleteOneTurmaMutationVariables>;

/**
 * __useDeleteOneTurmaMutation__
 *
 * To run a mutation, you first call `useDeleteOneTurmaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneTurmaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneTurmaMutation, { data, loading, error }] = useDeleteOneTurmaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOneTurmaMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneTurmaMutation, DeleteOneTurmaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneTurmaMutation, DeleteOneTurmaMutationVariables>(DeleteOneTurmaDocument, options);
      }
export type DeleteOneTurmaMutationHookResult = ReturnType<typeof useDeleteOneTurmaMutation>;
export type DeleteOneTurmaMutationResult = Apollo.MutationResult<DeleteOneTurmaMutation>;
export type DeleteOneTurmaMutationOptions = Apollo.BaseMutationOptions<DeleteOneTurmaMutation, DeleteOneTurmaMutationVariables>;
export const AulaDocument = gql`
    query Aula($id: Int!) {
  aula(id: $id) {
    ordem
    moduloId
    descricao
    id
    titulo
    videoUrl
    duracao
    modulo {
      titulo
      id
      curso {
        id
        nome
      }
    }
  }
}
    `;

/**
 * __useAulaQuery__
 *
 * To run a query within a React component, call `useAulaQuery` and pass it any options that fit your needs.
 * When your component renders, `useAulaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAulaQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAulaQuery(baseOptions: Apollo.QueryHookOptions<AulaQuery, AulaQueryVariables> & ({ variables: AulaQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AulaQuery, AulaQueryVariables>(AulaDocument, options);
      }
export function useAulaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AulaQuery, AulaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AulaQuery, AulaQueryVariables>(AulaDocument, options);
        }
export function useAulaSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AulaQuery, AulaQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AulaQuery, AulaQueryVariables>(AulaDocument, options);
        }
export type AulaQueryHookResult = ReturnType<typeof useAulaQuery>;
export type AulaLazyQueryHookResult = ReturnType<typeof useAulaLazyQuery>;
export type AulaSuspenseQueryHookResult = ReturnType<typeof useAulaSuspenseQuery>;
export type AulaQueryResult = Apollo.QueryResult<AulaQuery, AulaQueryVariables>;
export const AulasDocument = gql`
    query Aulas($filter: AulaTypeFilter, $paging: CursorPaging!, $sorting: [AulaTypeSort!]!) {
  aulas(filter: $filter, paging: $paging, sorting: $sorting) {
    edges {
      node {
        ordem
        moduloId
        descricao
        id
        titulo
        videoUrl
        duracao
        modulo {
          titulo
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `;

/**
 * __useAulasQuery__
 *
 * To run a query within a React component, call `useAulasQuery` and pass it any options that fit your needs.
 * When your component renders, `useAulasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAulasQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useAulasQuery(baseOptions: Apollo.QueryHookOptions<AulasQuery, AulasQueryVariables> & ({ variables: AulasQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AulasQuery, AulasQueryVariables>(AulasDocument, options);
      }
export function useAulasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AulasQuery, AulasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AulasQuery, AulasQueryVariables>(AulasDocument, options);
        }
export function useAulasSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AulasQuery, AulasQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AulasQuery, AulasQueryVariables>(AulasDocument, options);
        }
export type AulasQueryHookResult = ReturnType<typeof useAulasQuery>;
export type AulasLazyQueryHookResult = ReturnType<typeof useAulasLazyQuery>;
export type AulasSuspenseQueryHookResult = ReturnType<typeof useAulasSuspenseQuery>;
export type AulasQueryResult = Apollo.QueryResult<AulasQuery, AulasQueryVariables>;
export const CursoDocument = gql`
    query Curso($id: Int!) {
  curso(id: $id) {
    ativo
    createdAt
    deletedAt
    descricao
    id
    nome
    updatedAt
  }
}
    `;

/**
 * __useCursoQuery__
 *
 * To run a query within a React component, call `useCursoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCursoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCursoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCursoQuery(baseOptions: Apollo.QueryHookOptions<CursoQuery, CursoQueryVariables> & ({ variables: CursoQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CursoQuery, CursoQueryVariables>(CursoDocument, options);
      }
export function useCursoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CursoQuery, CursoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CursoQuery, CursoQueryVariables>(CursoDocument, options);
        }
export function useCursoSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CursoQuery, CursoQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CursoQuery, CursoQueryVariables>(CursoDocument, options);
        }
export type CursoQueryHookResult = ReturnType<typeof useCursoQuery>;
export type CursoLazyQueryHookResult = ReturnType<typeof useCursoLazyQuery>;
export type CursoSuspenseQueryHookResult = ReturnType<typeof useCursoSuspenseQuery>;
export type CursoQueryResult = Apollo.QueryResult<CursoQuery, CursoQueryVariables>;
export const CursosDocument = gql`
    query Cursos($filter: CursoTypeFilter, $paging: CursorPaging!, $sorting: [CursoTypeSort!]!) {
  cursos(filter: $filter, paging: $paging, sorting: $sorting) {
    edges {
      node {
        ativo
        createdAt
        deletedAt
        descricao
        id
        nome
        updatedAt
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `;

/**
 * __useCursosQuery__
 *
 * To run a query within a React component, call `useCursosQuery` and pass it any options that fit your needs.
 * When your component renders, `useCursosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCursosQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useCursosQuery(baseOptions: Apollo.QueryHookOptions<CursosQuery, CursosQueryVariables> & ({ variables: CursosQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CursosQuery, CursosQueryVariables>(CursosDocument, options);
      }
export function useCursosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CursosQuery, CursosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CursosQuery, CursosQueryVariables>(CursosDocument, options);
        }
export function useCursosSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CursosQuery, CursosQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CursosQuery, CursosQueryVariables>(CursosDocument, options);
        }
export type CursosQueryHookResult = ReturnType<typeof useCursosQuery>;
export type CursosLazyQueryHookResult = ReturnType<typeof useCursosLazyQuery>;
export type CursosSuspenseQueryHookResult = ReturnType<typeof useCursosSuspenseQuery>;
export type CursosQueryResult = Apollo.QueryResult<CursosQuery, CursosQueryVariables>;
export const CursosModuloSelectDocument = gql`
    query CursosModuloSelect($filter: CursoTypeFilter, $paging: CursorPaging!, $sorting: [CursoTypeSort!]!) {
  cursos(filter: $filter, paging: $paging, sorting: $sorting) {
    edges {
      node {
        id
        nome
        modulos {
          id
          titulo
        }
      }
    }
  }
}
    `;

/**
 * __useCursosModuloSelectQuery__
 *
 * To run a query within a React component, call `useCursosModuloSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useCursosModuloSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCursosModuloSelectQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useCursosModuloSelectQuery(baseOptions: Apollo.QueryHookOptions<CursosModuloSelectQuery, CursosModuloSelectQueryVariables> & ({ variables: CursosModuloSelectQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CursosModuloSelectQuery, CursosModuloSelectQueryVariables>(CursosModuloSelectDocument, options);
      }
export function useCursosModuloSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CursosModuloSelectQuery, CursosModuloSelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CursosModuloSelectQuery, CursosModuloSelectQueryVariables>(CursosModuloSelectDocument, options);
        }
export function useCursosModuloSelectSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CursosModuloSelectQuery, CursosModuloSelectQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CursosModuloSelectQuery, CursosModuloSelectQueryVariables>(CursosModuloSelectDocument, options);
        }
export type CursosModuloSelectQueryHookResult = ReturnType<typeof useCursosModuloSelectQuery>;
export type CursosModuloSelectLazyQueryHookResult = ReturnType<typeof useCursosModuloSelectLazyQuery>;
export type CursosModuloSelectSuspenseQueryHookResult = ReturnType<typeof useCursosModuloSelectSuspenseQuery>;
export type CursosModuloSelectQueryResult = Apollo.QueryResult<CursosModuloSelectQuery, CursosModuloSelectQueryVariables>;
export const ModuloDocument = gql`
    query Modulo($id: Int!) {
  modulo(id: $id) {
    ordem
    cursoId
    descricao
    id
    titulo
    curso {
      nome
    }
  }
}
    `;

/**
 * __useModuloQuery__
 *
 * To run a query within a React component, call `useModuloQuery` and pass it any options that fit your needs.
 * When your component renders, `useModuloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useModuloQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useModuloQuery(baseOptions: Apollo.QueryHookOptions<ModuloQuery, ModuloQueryVariables> & ({ variables: ModuloQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ModuloQuery, ModuloQueryVariables>(ModuloDocument, options);
      }
export function useModuloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ModuloQuery, ModuloQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ModuloQuery, ModuloQueryVariables>(ModuloDocument, options);
        }
export function useModuloSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ModuloQuery, ModuloQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ModuloQuery, ModuloQueryVariables>(ModuloDocument, options);
        }
export type ModuloQueryHookResult = ReturnType<typeof useModuloQuery>;
export type ModuloLazyQueryHookResult = ReturnType<typeof useModuloLazyQuery>;
export type ModuloSuspenseQueryHookResult = ReturnType<typeof useModuloSuspenseQuery>;
export type ModuloQueryResult = Apollo.QueryResult<ModuloQuery, ModuloQueryVariables>;
export const ModulosDocument = gql`
    query Modulos($filter: ModuloTypeFilter, $paging: CursorPaging!, $sorting: [ModuloTypeSort!]!) {
  modulos(filter: $filter, paging: $paging, sorting: $sorting) {
    edges {
      node {
        ordem
        cursoId
        curso {
          nome
        }
        descricao
        id
        titulo
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `;

/**
 * __useModulosQuery__
 *
 * To run a query within a React component, call `useModulosQuery` and pass it any options that fit your needs.
 * When your component renders, `useModulosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useModulosQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useModulosQuery(baseOptions: Apollo.QueryHookOptions<ModulosQuery, ModulosQueryVariables> & ({ variables: ModulosQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ModulosQuery, ModulosQueryVariables>(ModulosDocument, options);
      }
export function useModulosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ModulosQuery, ModulosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ModulosQuery, ModulosQueryVariables>(ModulosDocument, options);
        }
export function useModulosSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ModulosQuery, ModulosQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ModulosQuery, ModulosQueryVariables>(ModulosDocument, options);
        }
export type ModulosQueryHookResult = ReturnType<typeof useModulosQuery>;
export type ModulosLazyQueryHookResult = ReturnType<typeof useModulosLazyQuery>;
export type ModulosSuspenseQueryHookResult = ReturnType<typeof useModulosSuspenseQuery>;
export type ModulosQueryResult = Apollo.QueryResult<ModulosQuery, ModulosQueryVariables>;
export const ModulosSelectDocument = gql`
    query ModulosSelect($filter: ModuloTypeFilter, $paging: CursorPaging!, $sorting: [ModuloTypeSort!]!) {
  modulos(filter: $filter, paging: $paging, sorting: $sorting) {
    edges {
      node {
        id
        titulo
      }
    }
  }
}
    `;

/**
 * __useModulosSelectQuery__
 *
 * To run a query within a React component, call `useModulosSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useModulosSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useModulosSelectQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useModulosSelectQuery(baseOptions: Apollo.QueryHookOptions<ModulosSelectQuery, ModulosSelectQueryVariables> & ({ variables: ModulosSelectQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ModulosSelectQuery, ModulosSelectQueryVariables>(ModulosSelectDocument, options);
      }
export function useModulosSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ModulosSelectQuery, ModulosSelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ModulosSelectQuery, ModulosSelectQueryVariables>(ModulosSelectDocument, options);
        }
export function useModulosSelectSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ModulosSelectQuery, ModulosSelectQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ModulosSelectQuery, ModulosSelectQueryVariables>(ModulosSelectDocument, options);
        }
export type ModulosSelectQueryHookResult = ReturnType<typeof useModulosSelectQuery>;
export type ModulosSelectLazyQueryHookResult = ReturnType<typeof useModulosSelectLazyQuery>;
export type ModulosSelectSuspenseQueryHookResult = ReturnType<typeof useModulosSelectSuspenseQuery>;
export type ModulosSelectQueryResult = Apollo.QueryResult<ModulosSelectQuery, ModulosSelectQueryVariables>;
export const TurmaDocument = gql`
    query Turma($id: Int!) {
  turma(id: $id) {
    duracao
    fim
    inicio
    cursoId
    descricao
    id
    nome
    curso {
      nome
      id
    }
  }
}
    `;

/**
 * __useTurmaQuery__
 *
 * To run a query within a React component, call `useTurmaQuery` and pass it any options that fit your needs.
 * When your component renders, `useTurmaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTurmaQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTurmaQuery(baseOptions: Apollo.QueryHookOptions<TurmaQuery, TurmaQueryVariables> & ({ variables: TurmaQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TurmaQuery, TurmaQueryVariables>(TurmaDocument, options);
      }
export function useTurmaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TurmaQuery, TurmaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TurmaQuery, TurmaQueryVariables>(TurmaDocument, options);
        }
export function useTurmaSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<TurmaQuery, TurmaQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TurmaQuery, TurmaQueryVariables>(TurmaDocument, options);
        }
export type TurmaQueryHookResult = ReturnType<typeof useTurmaQuery>;
export type TurmaLazyQueryHookResult = ReturnType<typeof useTurmaLazyQuery>;
export type TurmaSuspenseQueryHookResult = ReturnType<typeof useTurmaSuspenseQuery>;
export type TurmaQueryResult = Apollo.QueryResult<TurmaQuery, TurmaQueryVariables>;
export const TurmasDocument = gql`
    query Turmas($filter: TurmaTypeFilter, $paging: CursorPaging!, $sorting: [TurmaTypeSort!]!) {
  turmas(filter: $filter, paging: $paging, sorting: $sorting) {
    edges {
      node {
        duracao
        fim
        inicio
        cursoId
        curso {
          nome
          id
        }
        descricao
        id
        nome
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `;

/**
 * __useTurmasQuery__
 *
 * To run a query within a React component, call `useTurmasQuery` and pass it any options that fit your needs.
 * When your component renders, `useTurmasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTurmasQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useTurmasQuery(baseOptions: Apollo.QueryHookOptions<TurmasQuery, TurmasQueryVariables> & ({ variables: TurmasQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TurmasQuery, TurmasQueryVariables>(TurmasDocument, options);
      }
export function useTurmasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TurmasQuery, TurmasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TurmasQuery, TurmasQueryVariables>(TurmasDocument, options);
        }
export function useTurmasSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<TurmasQuery, TurmasQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TurmasQuery, TurmasQueryVariables>(TurmasDocument, options);
        }
export type TurmasQueryHookResult = ReturnType<typeof useTurmasQuery>;
export type TurmasLazyQueryHookResult = ReturnType<typeof useTurmasLazyQuery>;
export type TurmasSuspenseQueryHookResult = ReturnType<typeof useTurmasSuspenseQuery>;
export type TurmasQueryResult = Apollo.QueryResult<TurmasQuery, TurmasQueryVariables>;
export const TurmasSelectDocument = gql`
    query TurmasSelect($filter: TurmaTypeFilter, $paging: CursorPaging!, $sorting: [TurmaTypeSort!]!) {
  turmas(filter: $filter, paging: $paging, sorting: $sorting) {
    edges {
      node {
        id
        nome
      }
    }
  }
}
    `;

/**
 * __useTurmasSelectQuery__
 *
 * To run a query within a React component, call `useTurmasSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useTurmasSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTurmasSelectQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useTurmasSelectQuery(baseOptions: Apollo.QueryHookOptions<TurmasSelectQuery, TurmasSelectQueryVariables> & ({ variables: TurmasSelectQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TurmasSelectQuery, TurmasSelectQueryVariables>(TurmasSelectDocument, options);
      }
export function useTurmasSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TurmasSelectQuery, TurmasSelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TurmasSelectQuery, TurmasSelectQueryVariables>(TurmasSelectDocument, options);
        }
export function useTurmasSelectSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<TurmasSelectQuery, TurmasSelectQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TurmasSelectQuery, TurmasSelectQueryVariables>(TurmasSelectDocument, options);
        }
export type TurmasSelectQueryHookResult = ReturnType<typeof useTurmasSelectQuery>;
export type TurmasSelectLazyQueryHookResult = ReturnType<typeof useTurmasSelectLazyQuery>;
export type TurmasSelectSuspenseQueryHookResult = ReturnType<typeof useTurmasSelectSuspenseQuery>;
export type TurmasSelectQueryResult = Apollo.QueryResult<TurmasSelectQuery, TurmasSelectQueryVariables>;