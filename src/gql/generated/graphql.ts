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
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type AddCidadesToEstadoInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type AlunoType = {
  __typename?: 'AlunoType';
  alunosProgressos?: Maybe<Array<ProgressoType>>;
  /** ano_serie do aluno */
  anoSerie?: Maybe<Scalars['String']['output']>;
  arquivo?: Maybe<Arquivo>;
  /** dados do aluno atualizado */
  atualizado?: Maybe<Scalars['Boolean']['output']>;
  /** bairro do aluno */
  bairro?: Maybe<Scalars['String']['output']>;
  /** cpf do aluno */
  cpf?: Maybe<Scalars['String']['output']>;
  /** data criação do registro */
  createdAt: Scalars['DateTime']['output'];
  /** data_nascimento do aluno */
  dataNascimento?: Maybe<Scalars['String']['output']>;
  /** data da exclusão do registro */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** email do aluno */
  email: Scalars['String']['output'];
  /** E-mail do responsável */
  emailResponsavel?: Maybe<Scalars['String']['output']>;
  /** escola do aluno */
  escola?: Maybe<Scalars['String']['output']>;
  /** estado do aluno */
  estado?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  inscricoes?: Maybe<Array<InscricaoType>>;
  /** logradouro do aluno */
  logradouro?: Maybe<Scalars['String']['output']>;
  /** matricula do aluno */
  matricula?: Maybe<Scalars['String']['output']>;
  /** municipio do aluno */
  municipio?: Maybe<Scalars['String']['output']>;
  /** municipio escola */
  municipioEscola?: Maybe<Scalars['String']['output']>;
  /** nome do aluno */
  nome: Scalars['String']['output'];
  /** numero do endereco do aluno */
  numero?: Maybe<Scalars['String']['output']>;
  /** regia de importacao do aluno */
  regiaoPlanilha?: Maybe<Scalars['String']['output']>;
  /** responsavel 1 do aluno */
  responsavel1?: Maybe<Scalars['String']['output']>;
  /** responsavel 2 do aluno */
  responsavel2?: Maybe<Scalars['String']['output']>;
  /** senha do aluno */
  senha: Scalars['String']['output'];
  /** turma do aluno */
  turma?: Maybe<Scalars['String']['output']>;
  /** turno do aluno */
  turno?: Maybe<Scalars['String']['output']>;
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** whats app do aluno */
  whatsAppAluno?: Maybe<Scalars['String']['output']>;
  /** whats app do responsavel */
  whatsAppResponsavel1?: Maybe<Scalars['String']['output']>;
};


export type AlunoTypeAlunosProgressosArgs = {
  filter?: ProgressoTypeFilter;
  sorting?: Array<ProgressoTypeSort>;
};


export type AlunoTypeInscricoesArgs = {
  filter?: InscricaoTypeFilter;
  sorting?: Array<InscricaoTypeSort>;
};

export type AlunoTypeAggregateGroupBy = {
  __typename?: 'AlunoTypeAggregateGroupBy';
  anoSerie?: Maybe<Scalars['String']['output']>;
  atualizado?: Maybe<Scalars['Boolean']['output']>;
  bairro?: Maybe<Scalars['String']['output']>;
  cpf?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dataNascimento?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailResponsavel?: Maybe<Scalars['String']['output']>;
  escola?: Maybe<Scalars['String']['output']>;
  estado?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  logradouro?: Maybe<Scalars['String']['output']>;
  matricula?: Maybe<Scalars['String']['output']>;
  municipio?: Maybe<Scalars['String']['output']>;
  municipioEscola?: Maybe<Scalars['String']['output']>;
  nome?: Maybe<Scalars['String']['output']>;
  numero?: Maybe<Scalars['String']['output']>;
  regiaoPlanilha?: Maybe<Scalars['String']['output']>;
  responsavel1?: Maybe<Scalars['String']['output']>;
  responsavel2?: Maybe<Scalars['String']['output']>;
  senha?: Maybe<Scalars['String']['output']>;
  turma?: Maybe<Scalars['String']['output']>;
  turno?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  whatsAppAluno?: Maybe<Scalars['String']['output']>;
  whatsAppResponsavel1?: Maybe<Scalars['String']['output']>;
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
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type AlunoTypeCountAggregate = {
  __typename?: 'AlunoTypeCountAggregate';
  anoSerie?: Maybe<Scalars['Int']['output']>;
  atualizado?: Maybe<Scalars['Int']['output']>;
  bairro?: Maybe<Scalars['Int']['output']>;
  cpf?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Int']['output']>;
  dataNascimento?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['Int']['output']>;
  emailResponsavel?: Maybe<Scalars['Int']['output']>;
  escola?: Maybe<Scalars['Int']['output']>;
  estado?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  logradouro?: Maybe<Scalars['Int']['output']>;
  matricula?: Maybe<Scalars['Int']['output']>;
  municipio?: Maybe<Scalars['Int']['output']>;
  municipioEscola?: Maybe<Scalars['Int']['output']>;
  nome?: Maybe<Scalars['Int']['output']>;
  numero?: Maybe<Scalars['Int']['output']>;
  regiaoPlanilha?: Maybe<Scalars['Int']['output']>;
  responsavel1?: Maybe<Scalars['Int']['output']>;
  responsavel2?: Maybe<Scalars['Int']['output']>;
  senha?: Maybe<Scalars['Int']['output']>;
  turma?: Maybe<Scalars['Int']['output']>;
  turno?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
  whatsAppAluno?: Maybe<Scalars['Int']['output']>;
  whatsAppResponsavel1?: Maybe<Scalars['Int']['output']>;
};

export type AlunoTypeEdge = {
  __typename?: 'AlunoTypeEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the AlunoType */
  node: AlunoType;
};

export type AlunoTypeFilter = {
  alunosProgressos?: InputMaybe<AlunoTypeFilterProgressoTypeFilter>;
  and?: InputMaybe<Array<AlunoTypeFilter>>;
  anoSerie?: InputMaybe<StringFieldComparison>;
  arquivo?: InputMaybe<AlunoTypeFilterArquivoFilter>;
  atualizado?: InputMaybe<BooleanFieldComparison>;
  bairro?: InputMaybe<StringFieldComparison>;
  cpf?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  dataNascimento?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailResponsavel?: InputMaybe<StringFieldComparison>;
  escola?: InputMaybe<StringFieldComparison>;
  estado?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  inscricoes?: InputMaybe<AlunoTypeFilterInscricaoTypeFilter>;
  logradouro?: InputMaybe<StringFieldComparison>;
  matricula?: InputMaybe<StringFieldComparison>;
  municipio?: InputMaybe<StringFieldComparison>;
  municipioEscola?: InputMaybe<StringFieldComparison>;
  nome?: InputMaybe<StringFieldComparison>;
  numero?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AlunoTypeFilter>>;
  regiaoPlanilha?: InputMaybe<StringFieldComparison>;
  responsavel1?: InputMaybe<StringFieldComparison>;
  responsavel2?: InputMaybe<StringFieldComparison>;
  senha?: InputMaybe<StringFieldComparison>;
  turma?: InputMaybe<StringFieldComparison>;
  turno?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  whatsAppAluno?: InputMaybe<StringFieldComparison>;
  whatsAppResponsavel1?: InputMaybe<StringFieldComparison>;
};

export type AlunoTypeFilterArquivoFilter = {
  and?: InputMaybe<Array<AlunoTypeFilterArquivoFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  nome?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AlunoTypeFilterArquivoFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AlunoTypeFilterInscricaoTypeFilter = {
  alunoId?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<AlunoTypeFilterInscricaoTypeFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  dataInscricao?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricaoStatus?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  importacaoHistoricoId?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<AlunoTypeFilterInscricaoTypeFilter>>;
  status?: InputMaybe<BooleanFieldComparison>;
  turmaId?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AlunoTypeFilterProgressoTypeFilter = {
  alunoId?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<AlunoTypeFilterProgressoTypeFilter>>;
  assistido?: InputMaybe<BooleanFieldComparison>;
  aulaId?: InputMaybe<NumberFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  cursoId?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  fim?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  inicio?: InputMaybe<DateFieldComparison>;
  moduloId?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<AlunoTypeFilterProgressoTypeFilter>>;
  subMmoduloId?: InputMaybe<NumberFieldComparison>;
  turmaId?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AlunoTypeMaxAggregate = {
  __typename?: 'AlunoTypeMaxAggregate';
  anoSerie?: Maybe<Scalars['String']['output']>;
  bairro?: Maybe<Scalars['String']['output']>;
  cpf?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dataNascimento?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailResponsavel?: Maybe<Scalars['String']['output']>;
  escola?: Maybe<Scalars['String']['output']>;
  estado?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  logradouro?: Maybe<Scalars['String']['output']>;
  matricula?: Maybe<Scalars['String']['output']>;
  municipio?: Maybe<Scalars['String']['output']>;
  municipioEscola?: Maybe<Scalars['String']['output']>;
  nome?: Maybe<Scalars['String']['output']>;
  numero?: Maybe<Scalars['String']['output']>;
  regiaoPlanilha?: Maybe<Scalars['String']['output']>;
  responsavel1?: Maybe<Scalars['String']['output']>;
  responsavel2?: Maybe<Scalars['String']['output']>;
  senha?: Maybe<Scalars['String']['output']>;
  turma?: Maybe<Scalars['String']['output']>;
  turno?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  whatsAppAluno?: Maybe<Scalars['String']['output']>;
  whatsAppResponsavel1?: Maybe<Scalars['String']['output']>;
};

export type AlunoTypeMinAggregate = {
  __typename?: 'AlunoTypeMinAggregate';
  anoSerie?: Maybe<Scalars['String']['output']>;
  bairro?: Maybe<Scalars['String']['output']>;
  cpf?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dataNascimento?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailResponsavel?: Maybe<Scalars['String']['output']>;
  escola?: Maybe<Scalars['String']['output']>;
  estado?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  logradouro?: Maybe<Scalars['String']['output']>;
  matricula?: Maybe<Scalars['String']['output']>;
  municipio?: Maybe<Scalars['String']['output']>;
  municipioEscola?: Maybe<Scalars['String']['output']>;
  nome?: Maybe<Scalars['String']['output']>;
  numero?: Maybe<Scalars['String']['output']>;
  regiaoPlanilha?: Maybe<Scalars['String']['output']>;
  responsavel1?: Maybe<Scalars['String']['output']>;
  responsavel2?: Maybe<Scalars['String']['output']>;
  senha?: Maybe<Scalars['String']['output']>;
  turma?: Maybe<Scalars['String']['output']>;
  turno?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  whatsAppAluno?: Maybe<Scalars['String']['output']>;
  whatsAppResponsavel1?: Maybe<Scalars['String']['output']>;
};

export type AlunoTypeSort = {
  direction: SortDirection;
  field: AlunoTypeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum AlunoTypeSortFields {
  AnoSerie = 'anoSerie',
  Atualizado = 'atualizado',
  Bairro = 'bairro',
  Cpf = 'cpf',
  CreatedAt = 'createdAt',
  DataNascimento = 'dataNascimento',
  DeletedAt = 'deletedAt',
  Email = 'email',
  EmailResponsavel = 'emailResponsavel',
  Escola = 'escola',
  Estado = 'estado',
  Id = 'id',
  Logradouro = 'logradouro',
  Matricula = 'matricula',
  Municipio = 'municipio',
  MunicipioEscola = 'municipioEscola',
  Nome = 'nome',
  Numero = 'numero',
  RegiaoPlanilha = 'regiaoPlanilha',
  Responsavel1 = 'responsavel1',
  Responsavel2 = 'responsavel2',
  Senha = 'senha',
  Turma = 'turma',
  Turno = 'turno',
  UpdatedAt = 'updatedAt',
  WhatsAppAluno = 'whatsAppAluno',
  WhatsAppResponsavel1 = 'whatsAppResponsavel1'
}

export type AlunoTypeSumAggregate = {
  __typename?: 'AlunoTypeSumAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Arquivo = {
  __typename?: 'Arquivo';
  /** data criação do registro */
  createdAt: Scalars['DateTime']['output'];
  /** data da exclusão do registro */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** extensão do arquivo */
  extensao: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  /** mimetype do arquivo */
  mimetype: Scalars['String']['output'];
  /** nome do arquivo */
  nome: Scalars['String']['output'];
  /** path bucket */
  pathBucket?: Maybe<Scalars['String']['output']>;
  /** tamanho do arquivo */
  tamanho: Scalars['Float']['output'];
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** url do arquivo */
  url: Scalars['String']['output'];
};

export type ArquivoAggregateGroupBy = {
  __typename?: 'ArquivoAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nome?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ArquivoAvgAggregate = {
  __typename?: 'ArquivoAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type ArquivoConnection = {
  __typename?: 'ArquivoConnection';
  /** Array of edges. */
  edges: Array<ArquivoEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ArquivoCountAggregate = {
  __typename?: 'ArquivoCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nome?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type ArquivoDeleteResponse = {
  __typename?: 'ArquivoDeleteResponse';
  /** data criação do registro */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** data da exclusão do registro */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** extensão do arquivo */
  extensao?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** mimetype do arquivo */
  mimetype?: Maybe<Scalars['String']['output']>;
  /** nome do arquivo */
  nome?: Maybe<Scalars['String']['output']>;
  /** path bucket */
  pathBucket?: Maybe<Scalars['String']['output']>;
  /** tamanho do arquivo */
  tamanho?: Maybe<Scalars['Float']['output']>;
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** url do arquivo */
  url?: Maybe<Scalars['String']['output']>;
};

export type ArquivoEdge = {
  __typename?: 'ArquivoEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the Arquivo */
  node: Arquivo;
};

export type ArquivoFilter = {
  and?: InputMaybe<Array<ArquivoFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  nome?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ArquivoFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ArquivoMaxAggregate = {
  __typename?: 'ArquivoMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nome?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ArquivoMinAggregate = {
  __typename?: 'ArquivoMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nome?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ArquivoSort = {
  direction: SortDirection;
  field: ArquivoSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ArquivoSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Nome = 'nome',
  UpdatedAt = 'updatedAt'
}

export type ArquivoSumAggregate = {
  __typename?: 'ArquivoSumAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type AulaType = {
  __typename?: 'AulaType';
  aulasProgressos?: Maybe<Array<ProgressoType>>;
  /** data criação do registro */
  createdAt: Scalars['DateTime']['output'];
  /** data da exclusão do registro */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** descricao do modulo */
  descricao?: Maybe<Scalars['String']['output']>;
  /** video url do modulo */
  duracao: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  modulo?: Maybe<ModuloType>;
  /** id do modulo */
  moduloId?: Maybe<Scalars['Float']['output']>;
  /** ordem do modulo */
  ordem: Scalars['Float']['output'];
  subModulo?: Maybe<SubModuloType>;
  /** id do sub modulo */
  subModuloId?: Maybe<Scalars['Float']['output']>;
  /** titulo do modulo */
  titulo: Scalars['String']['output'];
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** video url da aula */
  videoUrl?: Maybe<Scalars['String']['output']>;
};


export type AulaTypeAulasProgressosArgs = {
  filter?: ProgressoTypeFilter;
  sorting?: Array<ProgressoTypeSort>;
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
  subModuloId?: Maybe<Scalars['Float']['output']>;
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
  subModuloId?: Maybe<Scalars['Float']['output']>;
};

export type AulaTypeConnection = {
  __typename?: 'AulaTypeConnection';
  /** Array of edges. */
  edges: Array<AulaTypeEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
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
  subModuloId?: Maybe<Scalars['Int']['output']>;
  titulo?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
  videoUrl?: Maybe<Scalars['Int']['output']>;
};

export type AulaTypeDeleteFilter = {
  and?: InputMaybe<Array<AulaTypeDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  duracao?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  moduloId?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<AulaTypeDeleteFilter>>;
  ordem?: InputMaybe<NumberFieldComparison>;
  subModuloId?: InputMaybe<NumberFieldComparison>;
  titulo?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  videoUrl?: InputMaybe<StringFieldComparison>;
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
  /** id do sub modulo */
  subModuloId?: Maybe<Scalars['Float']['output']>;
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
  aulasProgressos?: InputMaybe<AulaTypeFilterProgressoTypeFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  duracao?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  modulo?: InputMaybe<AulaTypeFilterModuloTypeFilter>;
  moduloId?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<AulaTypeFilter>>;
  ordem?: InputMaybe<NumberFieldComparison>;
  subModulo?: InputMaybe<AulaTypeFilterSubModuloTypeFilter>;
  subModuloId?: InputMaybe<NumberFieldComparison>;
  titulo?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  videoUrl?: InputMaybe<StringFieldComparison>;
};

export type AulaTypeFilterModuloTypeFilter = {
  and?: InputMaybe<Array<AulaTypeFilterModuloTypeFilter>>;
  biblioteca?: InputMaybe<BooleanFieldComparison>;
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

export type AulaTypeFilterProgressoTypeFilter = {
  alunoId?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<AulaTypeFilterProgressoTypeFilter>>;
  assistido?: InputMaybe<BooleanFieldComparison>;
  aulaId?: InputMaybe<NumberFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  cursoId?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  fim?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  inicio?: InputMaybe<DateFieldComparison>;
  moduloId?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<AulaTypeFilterProgressoTypeFilter>>;
  subMmoduloId?: InputMaybe<NumberFieldComparison>;
  turmaId?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AulaTypeFilterSubModuloTypeFilter = {
  and?: InputMaybe<Array<AulaTypeFilterSubModuloTypeFilter>>;
  arquivoId?: InputMaybe<NumberFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  mensagem?: InputMaybe<StringFieldComparison>;
  moduloId?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<AulaTypeFilterSubModuloTypeFilter>>;
  ordem?: InputMaybe<NumberFieldComparison>;
  titulo?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
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
  subModuloId?: Maybe<Scalars['Float']['output']>;
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
  subModuloId?: Maybe<Scalars['Float']['output']>;
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
  SubModuloId = 'subModuloId',
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
  subModuloId?: Maybe<Scalars['Float']['output']>;
};

export type AuthAuloInput = {
  senha: Scalars['String']['input'];
  username: Scalars['String']['input'];
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

export type Cidade = {
  __typename?: 'Cidade';
  /** código IBGE */
  codigoIbge: Scalars['String']['output'];
  /** data em que a cidade foi cadastrada */
  createdAt: Scalars['DateTime']['output'];
  /** data em que a cidade foi removida */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** nome da cidade */
  descricao: Scalars['String']['output'];
  estado: Estado;
  /** id do estado */
  estadoId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** data em que a cidade foi atualizada */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CidadeAggregateGroupBy = {
  __typename?: 'CidadeAggregateGroupBy';
  codigoIbge?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  descricao?: Maybe<Scalars['String']['output']>;
  estadoId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CidadeCountAggregate = {
  __typename?: 'CidadeCountAggregate';
  codigoIbge?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  descricao?: Maybe<Scalars['Int']['output']>;
  estadoId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type CidadeFilter = {
  and?: InputMaybe<Array<CidadeFilter>>;
  codigoIbge?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  estado?: InputMaybe<CidadeFilterEstadoFilter>;
  estadoId?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CidadeFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CidadeFilterEstadoFilter = {
  and?: InputMaybe<Array<CidadeFilterEstadoFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CidadeFilterEstadoFilter>>;
  sigla?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CidadeMaxAggregate = {
  __typename?: 'CidadeMaxAggregate';
  codigoIbge?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  descricao?: Maybe<Scalars['String']['output']>;
  estadoId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CidadeMinAggregate = {
  __typename?: 'CidadeMinAggregate';
  codigoIbge?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  descricao?: Maybe<Scalars['String']['output']>;
  estadoId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CidadeSort = {
  direction: SortDirection;
  field: CidadeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CidadeSortFields {
  CodigoIbge = 'codigoIbge',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Descricao = 'descricao',
  EstadoId = 'estadoId',
  UpdatedAt = 'updatedAt'
}

export type CreateArquivo = {
  /** data criação do registro */
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** data da exclusão do registro */
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** extensão do arquivo */
  extensao?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  /** mimetype do arquivo */
  mimetype?: InputMaybe<Scalars['String']['input']>;
  /** nome do arquivo */
  nome?: InputMaybe<Scalars['String']['input']>;
  /** path bucket */
  pathBucket?: InputMaybe<Scalars['String']['input']>;
  /** tamanho do arquivo */
  tamanho?: InputMaybe<Scalars['Float']['input']>;
  /** data atualização do registro */
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** url do arquivo */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAulaInput = {
  descricao?: InputMaybe<Scalars['String']['input']>;
  duracao: Scalars['Float']['input'];
  moduloId?: InputMaybe<Scalars['Float']['input']>;
  ordem: Scalars['Float']['input'];
  subModuloId?: InputMaybe<Scalars['Float']['input']>;
  titulo: Scalars['String']['input'];
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCursoInput = {
  /** curso está ativo? */
  ativo: Scalars['Boolean']['input'];
  /** descrição do curso */
  descricao: Scalars['String']['input'];
  /** icone do curso */
  icone: Scalars['String']['input'];
  /** nome do curso */
  nome: Scalars['String']['input'];
};

export type CreateEnderecoInput = {
  /** bairro */
  bairro: Scalars['String']['input'];
  /** cep */
  cep: Scalars['String']['input'];
  /** id da cidade */
  cidadeId: Scalars['Float']['input'];
  /** complemento */
  complemento?: InputMaybe<Scalars['String']['input']>;
  /** logradouro */
  logradouro: Scalars['String']['input'];
  /** número do endereço */
  numero?: InputMaybe<Scalars['String']['input']>;
};

export type CreateFormularioInput = {
  /** nome da formulário */
  nome: Scalars['String']['input'];
  /** id do sub modulo */
  subModuloId: Scalars['Float']['input'];
};

export type CreateImportacaoHistoricoInput = {
  turmaId: Scalars['Float']['input'];
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

export type CreateManyArquivosInput = {
  /** Array of records to create */
  arquivos: Array<CreateArquivo>;
};

export type CreateModuloInput = {
  biblioteca: Scalars['Boolean']['input'];
  cursoId: Scalars['Float']['input'];
  descricao: Scalars['String']['input'];
  ordem: Scalars['Float']['input'];
  titulo: Scalars['String']['input'];
};

export type CreateModuloLiberacaoTravaInput = {
  /** data de liberaçãao */
  dataLiberacao: Scalars['DateTime']['input'];
  /** id do modulo */
  moduloId: Scalars['Float']['input'];
  /** id do turma */
  turmaId: Scalars['Float']['input'];
};

export type CreateOneArquivoInput = {
  /** The record to create */
  arquivo: CreateArquivo;
};

export type CreateOneAulaTypeInput = {
  /** The record to create */
  aulaType: CreateAulaInput;
};

export type CreateOneEnderecoInput = {
  /** The record to create */
  endereco: CreateEnderecoInput;
};

export type CreateOneFormulariosInput = {
  /** The record to create */
  formularios: CreateFormularioInput;
};

export type CreateOneInscricaoTypeInput = {
  /** The record to create */
  inscricaoType: CreateInscricaoInput;
};

export type CreateOneModuloLiberacaoTravaTypeInput = {
  /** The record to create */
  moduloLiberacaoTravaType: CreateModuloLiberacaoTravaInput;
};

export type CreateOneModuloTypeInput = {
  /** The record to create */
  moduloType: CreateModuloInput;
};

export type CreateOnePerguntasInput = {
  /** The record to create */
  perguntas: CreatePerguntaInput;
};

export type CreateOneProgressoTypeInput = {
  /** The record to create */
  progressoType: CreateProgressoInput;
};

export type CreateOneRespostasInput = {
  /** The record to create */
  respostas: CreateRespostaInput;
};

export type CreateOneRespostasPerguntasInput = {
  /** The record to create */
  respostasPerguntas: CreateRespostaPerguntaInput;
};

export type CreateOneTurmaTypeInput = {
  /** The record to create */
  turmaType: CreateTurmaInput;
};

export type CreatePerguntaInput = {
  /** descreva a pergunta */
  descricao: Scalars['String']['input'];
  /** selecione o formulário */
  formularioId: Scalars['Float']['input'];
  /** pergunta é multi escolha */
  multiEscolha: Scalars['Boolean']['input'];
  /** tipo */
  tipo?: InputMaybe<Scalars['String']['input']>;
};

export type CreateProgressoInput = {
  alunoId: Scalars['Float']['input'];
  aulaId: Scalars['Float']['input'];
  cursoId: Scalars['Float']['input'];
  moduloId: Scalars['Float']['input'];
  subModuloId: Scalars['Float']['input'];
  turmaId: Scalars['Float']['input'];
};

export type CreateRespostaInput = {
  /** resposta correta */
  correta: Scalars['Boolean']['input'];
  /** descreva a resposta */
  descricao?: InputMaybe<Scalars['String']['input']>;
  /** selecione a pergunta */
  perguntaId: Scalars['Float']['input'];
};

export type CreateRespostaPerguntaInput = {
  /** Id do aluno */
  alunoId?: InputMaybe<Scalars['Float']['input']>;
  /** Id do curso */
  cursoId?: InputMaybe<Scalars['Float']['input']>;
  /** Id do módulo */
  moduloId?: InputMaybe<Scalars['Float']['input']>;
  /** Id da pergunta */
  perguntaId?: InputMaybe<Scalars['Float']['input']>;
  /** Id da resposta */
  respostaId?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateSubModuloInput = {
  /** mensagem do modulo */
  mensagem: Scalars['String']['input'];
  /** id do modulo */
  moduloId: Scalars['Float']['input'];
  /** ordem do modulo */
  ordem: Scalars['Float']['input'];
  /** titulo do modulo */
  titulo: Scalars['String']['input'];
};

export type CreateTurmaInput = {
  cursoId: Scalars['Float']['input'];
  descricao: Scalars['String']['input'];
  duracao: Scalars['String']['input'];
  fim: Scalars['DateTime']['input'];
  inicio: Scalars['DateTime']['input'];
  nome: Scalars['String']['input'];
};

export type CursoProgressoType = {
  __typename?: 'CursoProgressoType';
  /** status de conclusão do módulo */
  concluido: Scalars['Boolean']['output'];
  /** id do modulo */
  moduloId: Scalars['Float']['output'];
};

export type CursoType = {
  __typename?: 'CursoType';
  arquivo?: Maybe<Arquivo>;
  /** id do arquivo */
  arquivoId?: Maybe<Scalars['Float']['output']>;
  /** curso está ativo */
  ativo: Scalars['Boolean']['output'];
  /** data criação do registro */
  createdAt: Scalars['DateTime']['output'];
  cursosProgressos?: Maybe<Array<ProgressoType>>;
  /** data da exclusão do registro */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** descricao do curso */
  descricao: Scalars['String']['output'];
  /** icone do curso */
  icone?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  modulos?: Maybe<Array<ModuloType>>;
  /** nome do curso */
  nome: Scalars['String']['output'];
  turma?: Maybe<TurmaType>;
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** url da imagem do curso */
  url?: Maybe<Scalars['String']['output']>;
};


export type CursoTypeCursosProgressosArgs = {
  filter?: ProgressoTypeFilter;
  sorting?: Array<ProgressoTypeSort>;
};


export type CursoTypeModulosArgs = {
  filter?: ModuloTypeFilter;
  sorting?: Array<ModuloTypeSort>;
};

export type CursoTypeAggregateGroupBy = {
  __typename?: 'CursoTypeAggregateGroupBy';
  arquivoId?: Maybe<Scalars['Float']['output']>;
  ativo?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  descricao?: Maybe<Scalars['String']['output']>;
  icone?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nome?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type CursoTypeAvgAggregate = {
  __typename?: 'CursoTypeAvgAggregate';
  arquivoId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type CursoTypeConnection = {
  __typename?: 'CursoTypeConnection';
  /** Array of edges. */
  edges: Array<CursoTypeEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type CursoTypeCountAggregate = {
  __typename?: 'CursoTypeCountAggregate';
  arquivoId?: Maybe<Scalars['Int']['output']>;
  ativo?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  descricao?: Maybe<Scalars['Int']['output']>;
  icone?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nome?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
  url?: Maybe<Scalars['Int']['output']>;
};

export type CursoTypeDeleteFilter = {
  and?: InputMaybe<Array<CursoTypeDeleteFilter>>;
  arquivoId?: InputMaybe<NumberFieldComparison>;
  ativo?: InputMaybe<BooleanFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  icone?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  nome?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CursoTypeDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
};

export type CursoTypeDeleteResponse = {
  __typename?: 'CursoTypeDeleteResponse';
  /** id do arquivo */
  arquivoId?: Maybe<Scalars['Float']['output']>;
  /** curso está ativo */
  ativo?: Maybe<Scalars['Boolean']['output']>;
  /** data criação do registro */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** data da exclusão do registro */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** descricao do curso */
  descricao?: Maybe<Scalars['String']['output']>;
  /** icone do curso */
  icone?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** nome do curso */
  nome?: Maybe<Scalars['String']['output']>;
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** url da imagem do curso */
  url?: Maybe<Scalars['String']['output']>;
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
  arquivo?: InputMaybe<CursoTypeFilterArquivoFilter>;
  arquivoId?: InputMaybe<NumberFieldComparison>;
  ativo?: InputMaybe<BooleanFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  cursosProgressos?: InputMaybe<CursoTypeFilterProgressoTypeFilter>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  icone?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  modulos?: InputMaybe<CursoTypeFilterModuloTypeFilter>;
  nome?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CursoTypeFilter>>;
  turma?: InputMaybe<CursoTypeFilterTurmaTypeFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
};

export type CursoTypeFilterArquivoFilter = {
  and?: InputMaybe<Array<CursoTypeFilterArquivoFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  nome?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CursoTypeFilterArquivoFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CursoTypeFilterModuloTypeFilter = {
  and?: InputMaybe<Array<CursoTypeFilterModuloTypeFilter>>;
  biblioteca?: InputMaybe<BooleanFieldComparison>;
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

export type CursoTypeFilterProgressoTypeFilter = {
  alunoId?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<CursoTypeFilterProgressoTypeFilter>>;
  assistido?: InputMaybe<BooleanFieldComparison>;
  aulaId?: InputMaybe<NumberFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  cursoId?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  fim?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  inicio?: InputMaybe<DateFieldComparison>;
  moduloId?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<CursoTypeFilterProgressoTypeFilter>>;
  subMmoduloId?: InputMaybe<NumberFieldComparison>;
  turmaId?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CursoTypeFilterTurmaTypeFilter = {
  and?: InputMaybe<Array<CursoTypeFilterTurmaTypeFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  cursoId?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  duracao?: InputMaybe<StringFieldComparison>;
  fim?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  inicio?: InputMaybe<DateFieldComparison>;
  nome?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CursoTypeFilterTurmaTypeFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CursoTypeMaxAggregate = {
  __typename?: 'CursoTypeMaxAggregate';
  arquivoId?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  descricao?: Maybe<Scalars['String']['output']>;
  icone?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nome?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type CursoTypeMinAggregate = {
  __typename?: 'CursoTypeMinAggregate';
  arquivoId?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  descricao?: Maybe<Scalars['String']['output']>;
  icone?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nome?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type CursoTypeSort = {
  direction: SortDirection;
  field: CursoTypeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CursoTypeSortFields {
  ArquivoId = 'arquivoId',
  Ativo = 'ativo',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Descricao = 'descricao',
  Icone = 'icone',
  Id = 'id',
  Nome = 'nome',
  UpdatedAt = 'updatedAt',
  Url = 'url'
}

export type CursoTypeSumAggregate = {
  __typename?: 'CursoTypeSumAggregate';
  arquivoId?: Maybe<Scalars['Float']['output']>;
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

export type DateScalarFilterComparison = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  iLike?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['Date']['input']>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
  notILike?: InputMaybe<Scalars['Date']['input']>;
  notIn?: InputMaybe<Array<Scalars['Date']['input']>>;
  notLike?: InputMaybe<Scalars['Date']['input']>;
};

export type DeleteManyAulaTypesInput = {
  /** Filter to find records to delete */
  filter: AulaTypeDeleteFilter;
};

export type DeleteManyCursoTypesInput = {
  /** Filter to find records to delete */
  filter: CursoTypeDeleteFilter;
};

export type DeleteManyModuloLiberacaoTravaTypesInput = {
  /** Filter to find records to delete */
  filter: ModuloLiberacaoTravaTypeDeleteFilter;
};

export type DeleteManyModuloTypesInput = {
  /** Filter to find records to delete */
  filter: ModuloTypeDeleteFilter;
};

export type DeleteManyResponse = {
  __typename?: 'DeleteManyResponse';
  /** The number of records deleted. */
  deletedCount: Scalars['Int']['output'];
};

export type DeleteManySubModuloTypesInput = {
  /** Filter to find records to delete */
  filter: SubModuloTypeDeleteFilter;
};

export type DeleteManyTurmaTypesInput = {
  /** Filter to find records to delete */
  filter: TurmaTypeDeleteFilter;
};

export type DeleteOneArquivoInput = {
  /** The id of the record to delete. */
  id: Scalars['Int']['input'];
};

export type DeleteOneAulaTypeInput = {
  /** The id of the record to delete. */
  id: Scalars['Int']['input'];
};

export type DeleteOneCursoTypeInput = {
  /** The id of the record to delete. */
  id: Scalars['Int']['input'];
};

export type DeleteOneFormulariosInput = {
  /** The id of the record to delete. */
  id: Scalars['Int']['input'];
};

export type DeleteOneInscricaoTypeInput = {
  /** The id of the record to delete. */
  id: Scalars['Int']['input'];
};

export type DeleteOneModuloLiberacaoTravaTypeInput = {
  /** The id of the record to delete. */
  id: Scalars['Int']['input'];
};

export type DeleteOneModuloTypeInput = {
  /** The id of the record to delete. */
  id: Scalars['Int']['input'];
};

export type DeleteOnePerguntasInput = {
  /** The id of the record to delete. */
  id: Scalars['Int']['input'];
};

export type DeleteOneRespostasInput = {
  /** The id of the record to delete. */
  id: Scalars['Int']['input'];
};

export type DeleteOneRespostasPerguntasInput = {
  /** The id of the record to delete. */
  id: Scalars['Int']['input'];
};

export type DeleteOneSubModuloTypeInput = {
  /** The id of the record to delete. */
  id: Scalars['Int']['input'];
};

export type DeleteOneTurmaTypeInput = {
  /** The id of the record to delete. */
  id: Scalars['Int']['input'];
};

export type DeleteOneUsuarioTypeInput = {
  /** The id of the record to delete. */
  id: Scalars['Int']['input'];
};

export type Endereco = {
  __typename?: 'Endereco';
  /** bairro */
  bairro: Scalars['String']['output'];
  /** cep */
  cep: Scalars['String']['output'];
  cidade?: Maybe<Cidade>;
  /** id da cidade */
  cidadeId: Scalars['Float']['output'];
  /** complemento */
  complemento?: Maybe<Scalars['String']['output']>;
  /** data criação do registro */
  createdAt: Scalars['DateTime']['output'];
  /** data da exclusão do registro */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  /** logradouro */
  logradouro: Scalars['String']['output'];
  /** número do endereço */
  numero?: Maybe<Scalars['String']['output']>;
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type EnderecoAggregateGroupBy = {
  __typename?: 'EnderecoAggregateGroupBy';
  bairro?: Maybe<Scalars['String']['output']>;
  cep?: Maybe<Scalars['String']['output']>;
  cidadeId?: Maybe<Scalars['Float']['output']>;
  complemento?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  logradouro?: Maybe<Scalars['String']['output']>;
  numero?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type EnderecoAvgAggregate = {
  __typename?: 'EnderecoAvgAggregate';
  cidadeId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type EnderecoConnection = {
  __typename?: 'EnderecoConnection';
  /** Array of nodes. */
  nodes: Array<Endereco>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type EnderecoCountAggregate = {
  __typename?: 'EnderecoCountAggregate';
  bairro?: Maybe<Scalars['Int']['output']>;
  cep?: Maybe<Scalars['Int']['output']>;
  cidadeId?: Maybe<Scalars['Int']['output']>;
  complemento?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  logradouro?: Maybe<Scalars['Int']['output']>;
  numero?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type EnderecoFilter = {
  and?: InputMaybe<Array<EnderecoFilter>>;
  bairro?: InputMaybe<StringFieldComparison>;
  cep?: InputMaybe<StringFieldComparison>;
  cidade?: InputMaybe<EnderecoFilterCidadeFilter>;
  cidadeId?: InputMaybe<NumberFieldComparison>;
  complemento?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  logradouro?: InputMaybe<StringFieldComparison>;
  numero?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<EnderecoFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type EnderecoFilterCidadeFilter = {
  and?: InputMaybe<Array<EnderecoFilterCidadeFilter>>;
  codigoIbge?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  estadoId?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<EnderecoFilterCidadeFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type EnderecoMaxAggregate = {
  __typename?: 'EnderecoMaxAggregate';
  bairro?: Maybe<Scalars['String']['output']>;
  cep?: Maybe<Scalars['String']['output']>;
  cidadeId?: Maybe<Scalars['Float']['output']>;
  complemento?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  logradouro?: Maybe<Scalars['String']['output']>;
  numero?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type EnderecoMinAggregate = {
  __typename?: 'EnderecoMinAggregate';
  bairro?: Maybe<Scalars['String']['output']>;
  cep?: Maybe<Scalars['String']['output']>;
  cidadeId?: Maybe<Scalars['Float']['output']>;
  complemento?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  logradouro?: Maybe<Scalars['String']['output']>;
  numero?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type EnderecoSort = {
  direction: SortDirection;
  field: EnderecoSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum EnderecoSortFields {
  Bairro = 'bairro',
  Cep = 'cep',
  CidadeId = 'cidadeId',
  Complemento = 'complemento',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Logradouro = 'logradouro',
  Numero = 'numero',
  UpdatedAt = 'updatedAt'
}

export type EnderecoSumAggregate = {
  __typename?: 'EnderecoSumAggregate';
  cidadeId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Estado = {
  __typename?: 'Estado';
  cidades?: Maybe<EstadoCidadesConnection>;
  /** data em que o estado foi cadastrado */
  createdAt: Scalars['DateTime']['output'];
  /** data em que o estado foi removido */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** nome do estado */
  descricao: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** sigla do estado */
  sigla: Scalars['String']['output'];
  /** data em que o estado foi atualizado */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type EstadoCidadesArgs = {
  filter?: CidadeFilter;
  paging?: OffsetPaging;
  sorting?: Array<CidadeSort>;
};

export type EstadoAggregateGroupBy = {
  __typename?: 'EstadoAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  descricao?: Maybe<Scalars['String']['output']>;
  sigla?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type EstadoCidadesConnection = {
  __typename?: 'EstadoCidadesConnection';
  /** Array of nodes. */
  nodes: Array<Cidade>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
};

export type EstadoConnection = {
  __typename?: 'EstadoConnection';
  /** Array of nodes. */
  nodes: Array<Estado>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
};

export type EstadoCountAggregate = {
  __typename?: 'EstadoCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  descricao?: Maybe<Scalars['Int']['output']>;
  sigla?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type EstadoFilter = {
  and?: InputMaybe<Array<EstadoFilter>>;
  cidades?: InputMaybe<EstadoFilterCidadeFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<EstadoFilter>>;
  sigla?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type EstadoFilterCidadeFilter = {
  and?: InputMaybe<Array<EstadoFilterCidadeFilter>>;
  codigoIbge?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  estadoId?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<EstadoFilterCidadeFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type EstadoMaxAggregate = {
  __typename?: 'EstadoMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  descricao?: Maybe<Scalars['String']['output']>;
  sigla?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type EstadoMinAggregate = {
  __typename?: 'EstadoMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  descricao?: Maybe<Scalars['String']['output']>;
  sigla?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type EstadoSort = {
  direction: SortDirection;
  field: EstadoSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum EstadoSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Descricao = 'descricao',
  Sigla = 'sigla',
  UpdatedAt = 'updatedAt'
}

export type Formularios = {
  __typename?: 'Formularios';
  /** data criação do registro */
  createdAt: Scalars['DateTime']['output'];
  /** data da exclusão do registro */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  /** nome do formulário */
  nome: Scalars['String']['output'];
  perguntas?: Maybe<Array<Perguntas>>;
  subModulo?: Maybe<SubModuloType>;
  /** id do submodulo */
  subModuloId: Scalars['Float']['output'];
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type FormulariosPerguntasArgs = {
  filter?: PerguntasFilter;
  sorting?: Array<PerguntasSort>;
};

export type FormulariosAggregateGroupBy = {
  __typename?: 'FormulariosAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nome?: Maybe<Scalars['String']['output']>;
  subModuloId?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FormulariosAvgAggregate = {
  __typename?: 'FormulariosAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  subModuloId?: Maybe<Scalars['Float']['output']>;
};

export type FormulariosConnection = {
  __typename?: 'FormulariosConnection';
  /** Array of edges. */
  edges: Array<FormulariosEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type FormulariosCountAggregate = {
  __typename?: 'FormulariosCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nome?: Maybe<Scalars['Int']['output']>;
  subModuloId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type FormulariosDeleteResponse = {
  __typename?: 'FormulariosDeleteResponse';
  /** data criação do registro */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** data da exclusão do registro */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** nome do formulário */
  nome?: Maybe<Scalars['String']['output']>;
  /** id do submodulo */
  subModuloId?: Maybe<Scalars['Float']['output']>;
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FormulariosEdge = {
  __typename?: 'FormulariosEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the Formularios */
  node: Formularios;
};

export type FormulariosFilter = {
  and?: InputMaybe<Array<FormulariosFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  nome?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<FormulariosFilter>>;
  perguntas?: InputMaybe<FormulariosFilterPerguntasFilter>;
  subModulo?: InputMaybe<FormulariosFilterSubModuloTypeFilter>;
  subModuloId?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type FormulariosFilterPerguntasFilter = {
  and?: InputMaybe<Array<FormulariosFilterPerguntasFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  formularioId?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  multiEscolha?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<FormulariosFilterPerguntasFilter>>;
  tipo?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type FormulariosFilterSubModuloTypeFilter = {
  and?: InputMaybe<Array<FormulariosFilterSubModuloTypeFilter>>;
  arquivoId?: InputMaybe<NumberFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  mensagem?: InputMaybe<StringFieldComparison>;
  moduloId?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<FormulariosFilterSubModuloTypeFilter>>;
  ordem?: InputMaybe<NumberFieldComparison>;
  titulo?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
};

export type FormulariosMaxAggregate = {
  __typename?: 'FormulariosMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nome?: Maybe<Scalars['String']['output']>;
  subModuloId?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FormulariosMinAggregate = {
  __typename?: 'FormulariosMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nome?: Maybe<Scalars['String']['output']>;
  subModuloId?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FormulariosSort = {
  direction: SortDirection;
  field: FormulariosSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum FormulariosSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Nome = 'nome',
  SubModuloId = 'subModuloId',
  UpdatedAt = 'updatedAt'
}

export type FormulariosSumAggregate = {
  __typename?: 'FormulariosSumAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  subModuloId?: Maybe<Scalars['Float']['output']>;
};

export type ImportacaoHistoricoType = {
  __typename?: 'ImportacaoHistoricoType';
  /** data criação do registro */
  createdAt: Scalars['DateTime']['output'];
  curso?: Maybe<CursoType>;
  /** ID do curso */
  cursoId: Scalars['Float']['output'];
  /** data da exclusão do registro */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Erros durante a importação */
  errosImport?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  /** Nome da planilha */
  nomePlanilha: Scalars['String']['output'];
  /** Quantidade de registros importados */
  quantidadeImportada: Scalars['Float']['output'];
  /** Status da importa o */
  status: Scalars['String']['output'];
  turma?: Maybe<TurmaType>;
  /** ID da turma */
  turmaId: Scalars['Float']['output'];
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  usuario?: Maybe<UsuarioType>;
  /** ID do usu rio */
  usuarioId: Scalars['Float']['output'];
};

export type ImportacaoHistoricoTypeAggregateGroupBy = {
  __typename?: 'ImportacaoHistoricoTypeAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  cursoId?: Maybe<Scalars['Float']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  errosImport?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nomePlanilha?: Maybe<Scalars['String']['output']>;
  quantidadeImportada?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  turmaId?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  usuarioId?: Maybe<Scalars['Float']['output']>;
};

export type ImportacaoHistoricoTypeAvgAggregate = {
  __typename?: 'ImportacaoHistoricoTypeAvgAggregate';
  cursoId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  quantidadeImportada?: Maybe<Scalars['Float']['output']>;
  turmaId?: Maybe<Scalars['Float']['output']>;
  usuarioId?: Maybe<Scalars['Float']['output']>;
};

export type ImportacaoHistoricoTypeConnection = {
  __typename?: 'ImportacaoHistoricoTypeConnection';
  /** Array of edges. */
  edges: Array<ImportacaoHistoricoTypeEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ImportacaoHistoricoTypeCountAggregate = {
  __typename?: 'ImportacaoHistoricoTypeCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  cursoId?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  errosImport?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nomePlanilha?: Maybe<Scalars['Int']['output']>;
  quantidadeImportada?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  turmaId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
  usuarioId?: Maybe<Scalars['Int']['output']>;
};

export type ImportacaoHistoricoTypeEdge = {
  __typename?: 'ImportacaoHistoricoTypeEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the ImportacaoHistoricoType */
  node: ImportacaoHistoricoType;
};

export type ImportacaoHistoricoTypeFilter = {
  and?: InputMaybe<Array<ImportacaoHistoricoTypeFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  curso?: InputMaybe<ImportacaoHistoricoTypeFilterCursoTypeFilter>;
  cursoId?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  errosImport?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  nomePlanilha?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ImportacaoHistoricoTypeFilter>>;
  quantidadeImportada?: InputMaybe<NumberFieldComparison>;
  status?: InputMaybe<StringFieldComparison>;
  turma?: InputMaybe<ImportacaoHistoricoTypeFilterTurmaTypeFilter>;
  turmaId?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  usuario?: InputMaybe<ImportacaoHistoricoTypeFilterUsuarioTypeFilter>;
  usuarioId?: InputMaybe<NumberFieldComparison>;
};

export type ImportacaoHistoricoTypeFilterCursoTypeFilter = {
  and?: InputMaybe<Array<ImportacaoHistoricoTypeFilterCursoTypeFilter>>;
  arquivoId?: InputMaybe<NumberFieldComparison>;
  ativo?: InputMaybe<BooleanFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  icone?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  nome?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ImportacaoHistoricoTypeFilterCursoTypeFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
};

export type ImportacaoHistoricoTypeFilterTurmaTypeFilter = {
  and?: InputMaybe<Array<ImportacaoHistoricoTypeFilterTurmaTypeFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  cursoId?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  duracao?: InputMaybe<StringFieldComparison>;
  fim?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  inicio?: InputMaybe<DateFieldComparison>;
  nome?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ImportacaoHistoricoTypeFilterTurmaTypeFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ImportacaoHistoricoTypeFilterUsuarioTypeFilter = {
  and?: InputMaybe<Array<ImportacaoHistoricoTypeFilterUsuarioTypeFilter>>;
  ativo?: InputMaybe<BooleanFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  nome?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ImportacaoHistoricoTypeFilterUsuarioTypeFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ImportacaoHistoricoTypeMaxAggregate = {
  __typename?: 'ImportacaoHistoricoTypeMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  cursoId?: Maybe<Scalars['Float']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  errosImport?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nomePlanilha?: Maybe<Scalars['String']['output']>;
  quantidadeImportada?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  turmaId?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  usuarioId?: Maybe<Scalars['Float']['output']>;
};

export type ImportacaoHistoricoTypeMinAggregate = {
  __typename?: 'ImportacaoHistoricoTypeMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  cursoId?: Maybe<Scalars['Float']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  errosImport?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nomePlanilha?: Maybe<Scalars['String']['output']>;
  quantidadeImportada?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  turmaId?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  usuarioId?: Maybe<Scalars['Float']['output']>;
};

export type ImportacaoHistoricoTypeSort = {
  direction: SortDirection;
  field: ImportacaoHistoricoTypeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ImportacaoHistoricoTypeSortFields {
  CreatedAt = 'createdAt',
  CursoId = 'cursoId',
  DeletedAt = 'deletedAt',
  ErrosImport = 'errosImport',
  Id = 'id',
  NomePlanilha = 'nomePlanilha',
  QuantidadeImportada = 'quantidadeImportada',
  Status = 'status',
  TurmaId = 'turmaId',
  UpdatedAt = 'updatedAt',
  UsuarioId = 'usuarioId'
}

export type ImportacaoHistoricoTypeSumAggregate = {
  __typename?: 'ImportacaoHistoricoTypeSumAggregate';
  cursoId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  quantidadeImportada?: Maybe<Scalars['Float']['output']>;
  turmaId?: Maybe<Scalars['Float']['output']>;
  usuarioId?: Maybe<Scalars['Float']['output']>;
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
  /** Descricao status da inscrição */
  descricaoStatus?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  importacaoHistorico?: Maybe<ImportacaoHistoricoType>;
  /** Id da importacao */
  importacaoHistoricoId?: Maybe<Scalars['Float']['output']>;
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
  descricaoStatus?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  importacaoHistoricoId?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  turmaId?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type InscricaoTypeAvgAggregate = {
  __typename?: 'InscricaoTypeAvgAggregate';
  alunoId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  importacaoHistoricoId?: Maybe<Scalars['Float']['output']>;
  turmaId?: Maybe<Scalars['Float']['output']>;
};

export type InscricaoTypeConnection = {
  __typename?: 'InscricaoTypeConnection';
  /** Array of edges. */
  edges: Array<InscricaoTypeEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type InscricaoTypeCountAggregate = {
  __typename?: 'InscricaoTypeCountAggregate';
  alunoId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Int']['output']>;
  dataInscricao?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  descricaoStatus?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  importacaoHistoricoId?: Maybe<Scalars['Int']['output']>;
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
  /** Descricao status da inscrição */
  descricaoStatus?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** Id da importacao */
  importacaoHistoricoId?: Maybe<Scalars['Float']['output']>;
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
  descricaoStatus?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  importacaoHistorico?: InputMaybe<InscricaoTypeFilterImportacaoHistoricoTypeFilter>;
  importacaoHistoricoId?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<InscricaoTypeFilter>>;
  status?: InputMaybe<BooleanFieldComparison>;
  turma?: InputMaybe<InscricaoTypeFilterTurmaTypeFilter>;
  turmaId?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type InscricaoTypeFilterAlunoTypeFilter = {
  and?: InputMaybe<Array<InscricaoTypeFilterAlunoTypeFilter>>;
  anoSerie?: InputMaybe<StringFieldComparison>;
  atualizado?: InputMaybe<BooleanFieldComparison>;
  bairro?: InputMaybe<StringFieldComparison>;
  cpf?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  dataNascimento?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailResponsavel?: InputMaybe<StringFieldComparison>;
  escola?: InputMaybe<StringFieldComparison>;
  estado?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  logradouro?: InputMaybe<StringFieldComparison>;
  matricula?: InputMaybe<StringFieldComparison>;
  municipio?: InputMaybe<StringFieldComparison>;
  municipioEscola?: InputMaybe<StringFieldComparison>;
  nome?: InputMaybe<StringFieldComparison>;
  numero?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InscricaoTypeFilterAlunoTypeFilter>>;
  regiaoPlanilha?: InputMaybe<StringFieldComparison>;
  responsavel1?: InputMaybe<StringFieldComparison>;
  responsavel2?: InputMaybe<StringFieldComparison>;
  senha?: InputMaybe<StringFieldComparison>;
  turma?: InputMaybe<StringFieldComparison>;
  turno?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  whatsAppAluno?: InputMaybe<StringFieldComparison>;
  whatsAppResponsavel1?: InputMaybe<StringFieldComparison>;
};

export type InscricaoTypeFilterImportacaoHistoricoTypeFilter = {
  and?: InputMaybe<Array<InscricaoTypeFilterImportacaoHistoricoTypeFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  cursoId?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  errosImport?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  nomePlanilha?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InscricaoTypeFilterImportacaoHistoricoTypeFilter>>;
  quantidadeImportada?: InputMaybe<NumberFieldComparison>;
  status?: InputMaybe<StringFieldComparison>;
  turmaId?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  usuarioId?: InputMaybe<NumberFieldComparison>;
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
  descricaoStatus?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  importacaoHistoricoId?: Maybe<Scalars['Float']['output']>;
  turmaId?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type InscricaoTypeMinAggregate = {
  __typename?: 'InscricaoTypeMinAggregate';
  alunoId?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dataInscricao?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  descricaoStatus?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  importacaoHistoricoId?: Maybe<Scalars['Float']['output']>;
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
  DescricaoStatus = 'descricaoStatus',
  Id = 'id',
  ImportacaoHistoricoId = 'importacaoHistoricoId',
  Status = 'status',
  TurmaId = 'turmaId',
  UpdatedAt = 'updatedAt'
}

export type InscricaoTypeSumAggregate = {
  __typename?: 'InscricaoTypeSumAggregate';
  alunoId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  importacaoHistoricoId?: Maybe<Scalars['Float']['output']>;
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

export type ModuloLiberacaoTravaType = {
  __typename?: 'ModuloLiberacaoTravaType';
  /** data criação do registro */
  createdAt: Scalars['DateTime']['output'];
  /** data de liberaçãao */
  dataLiberacao?: Maybe<Scalars['Date']['output']>;
  /** data da exclusão do registro */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  modulo?: Maybe<ModuloType>;
  /** id do modulo */
  moduloId: Scalars['Float']['output'];
  /** id do turma */
  turmaId: Scalars['Float']['output'];
  turmas?: Maybe<Array<TurmaType>>;
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ModuloLiberacaoTravaTypeTurmasArgs = {
  filter?: TurmaTypeFilter;
  sorting?: Array<TurmaTypeSort>;
};

export type ModuloLiberacaoTravaTypeAggregateGroupBy = {
  __typename?: 'ModuloLiberacaoTravaTypeAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dataLiberacao?: Maybe<Scalars['Date']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  moduloId?: Maybe<Scalars['Float']['output']>;
  turmaId?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ModuloLiberacaoTravaTypeAvgAggregate = {
  __typename?: 'ModuloLiberacaoTravaTypeAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  moduloId?: Maybe<Scalars['Float']['output']>;
  turmaId?: Maybe<Scalars['Float']['output']>;
};

export type ModuloLiberacaoTravaTypeConnection = {
  __typename?: 'ModuloLiberacaoTravaTypeConnection';
  /** Array of edges. */
  edges: Array<ModuloLiberacaoTravaTypeEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ModuloLiberacaoTravaTypeCountAggregate = {
  __typename?: 'ModuloLiberacaoTravaTypeCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  dataLiberacao?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  moduloId?: Maybe<Scalars['Int']['output']>;
  turmaId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type ModuloLiberacaoTravaTypeDeleteFilter = {
  and?: InputMaybe<Array<ModuloLiberacaoTravaTypeDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  dataLiberacao?: InputMaybe<DateScalarFilterComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  moduloId?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<ModuloLiberacaoTravaTypeDeleteFilter>>;
  turmaId?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ModuloLiberacaoTravaTypeDeleteResponse = {
  __typename?: 'ModuloLiberacaoTravaTypeDeleteResponse';
  /** data criação do registro */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** data de liberaçãao */
  dataLiberacao?: Maybe<Scalars['Date']['output']>;
  /** data da exclusão do registro */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** id do modulo */
  moduloId?: Maybe<Scalars['Float']['output']>;
  /** id do turma */
  turmaId?: Maybe<Scalars['Float']['output']>;
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ModuloLiberacaoTravaTypeEdge = {
  __typename?: 'ModuloLiberacaoTravaTypeEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the ModuloLiberacaoTravaType */
  node: ModuloLiberacaoTravaType;
};

export type ModuloLiberacaoTravaTypeFilter = {
  and?: InputMaybe<Array<ModuloLiberacaoTravaTypeFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  dataLiberacao?: InputMaybe<DateScalarFilterComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  modulo?: InputMaybe<ModuloLiberacaoTravaTypeFilterModuloTypeFilter>;
  moduloId?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<ModuloLiberacaoTravaTypeFilter>>;
  turma?: InputMaybe<ModuloLiberacaoTravaTypeFilterTurmaTypeFilter>;
  turmaId?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ModuloLiberacaoTravaTypeFilterModuloTypeFilter = {
  and?: InputMaybe<Array<ModuloLiberacaoTravaTypeFilterModuloTypeFilter>>;
  biblioteca?: InputMaybe<BooleanFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  cursoId?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<ModuloLiberacaoTravaTypeFilterModuloTypeFilter>>;
  ordem?: InputMaybe<NumberFieldComparison>;
  titulo?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ModuloLiberacaoTravaTypeFilterTurmaTypeFilter = {
  and?: InputMaybe<Array<ModuloLiberacaoTravaTypeFilterTurmaTypeFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  cursoId?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  duracao?: InputMaybe<StringFieldComparison>;
  fim?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  inicio?: InputMaybe<DateFieldComparison>;
  nome?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ModuloLiberacaoTravaTypeFilterTurmaTypeFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ModuloLiberacaoTravaTypeMaxAggregate = {
  __typename?: 'ModuloLiberacaoTravaTypeMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dataLiberacao?: Maybe<Scalars['Date']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  moduloId?: Maybe<Scalars['Float']['output']>;
  turmaId?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ModuloLiberacaoTravaTypeMinAggregate = {
  __typename?: 'ModuloLiberacaoTravaTypeMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dataLiberacao?: Maybe<Scalars['Date']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  moduloId?: Maybe<Scalars['Float']['output']>;
  turmaId?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ModuloLiberacaoTravaTypeSort = {
  direction: SortDirection;
  field: ModuloLiberacaoTravaTypeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ModuloLiberacaoTravaTypeSortFields {
  CreatedAt = 'createdAt',
  DataLiberacao = 'dataLiberacao',
  DeletedAt = 'deletedAt',
  Id = 'id',
  ModuloId = 'moduloId',
  TurmaId = 'turmaId',
  UpdatedAt = 'updatedAt'
}

export type ModuloLiberacaoTravaTypeSumAggregate = {
  __typename?: 'ModuloLiberacaoTravaTypeSumAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  moduloId?: Maybe<Scalars['Float']['output']>;
  turmaId?: Maybe<Scalars['Float']['output']>;
};

export type ModuloType = {
  __typename?: 'ModuloType';
  aulas?: Maybe<Array<AulaType>>;
  /** modulo biblioteca */
  biblioteca: Scalars['Boolean']['output'];
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
  moduloLiberacaoTravas?: Maybe<Array<ModuloLiberacaoTravaType>>;
  modulosProgressos?: Maybe<Array<ProgressoType>>;
  /** ordem do modulo */
  ordem: Scalars['Float']['output'];
  subModulos?: Maybe<Array<SubModuloType>>;
  /** titulo do modulo */
  titulo: Scalars['String']['output'];
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ModuloTypeAulasArgs = {
  filter?: AulaTypeFilter;
  sorting?: Array<AulaTypeSort>;
};


export type ModuloTypeModuloLiberacaoTravasArgs = {
  filter?: ModuloLiberacaoTravaTypeFilter;
  sorting?: Array<ModuloLiberacaoTravaTypeSort>;
};


export type ModuloTypeModulosProgressosArgs = {
  filter?: ProgressoTypeFilter;
  sorting?: Array<ProgressoTypeSort>;
};


export type ModuloTypeSubModulosArgs = {
  filter?: SubModuloTypeFilter;
  sorting?: Array<SubModuloTypeSort>;
};

export type ModuloTypeAggregateGroupBy = {
  __typename?: 'ModuloTypeAggregateGroupBy';
  biblioteca?: Maybe<Scalars['Boolean']['output']>;
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
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ModuloTypeCountAggregate = {
  __typename?: 'ModuloTypeCountAggregate';
  biblioteca?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Int']['output']>;
  cursoId?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  descricao?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ordem?: Maybe<Scalars['Int']['output']>;
  titulo?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type ModuloTypeDeleteFilter = {
  and?: InputMaybe<Array<ModuloTypeDeleteFilter>>;
  biblioteca?: InputMaybe<BooleanFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  cursoId?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<ModuloTypeDeleteFilter>>;
  ordem?: InputMaybe<NumberFieldComparison>;
  titulo?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ModuloTypeDeleteResponse = {
  __typename?: 'ModuloTypeDeleteResponse';
  /** modulo biblioteca */
  biblioteca?: Maybe<Scalars['Boolean']['output']>;
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
  aulas?: InputMaybe<ModuloTypeFilterAulaTypeFilter>;
  biblioteca?: InputMaybe<BooleanFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  curso?: InputMaybe<ModuloTypeFilterCursoTypeFilter>;
  cursoId?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  moduloLiberacaoTrava?: InputMaybe<ModuloTypeFilterModuloLiberacaoTravaTypeFilter>;
  modulosProgressos?: InputMaybe<ModuloTypeFilterProgressoTypeFilter>;
  or?: InputMaybe<Array<ModuloTypeFilter>>;
  ordem?: InputMaybe<NumberFieldComparison>;
  subModulos?: InputMaybe<ModuloTypeFilterSubModuloTypeFilter>;
  titulo?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ModuloTypeFilterAulaTypeFilter = {
  and?: InputMaybe<Array<ModuloTypeFilterAulaTypeFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  duracao?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  moduloId?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<ModuloTypeFilterAulaTypeFilter>>;
  ordem?: InputMaybe<NumberFieldComparison>;
  subModuloId?: InputMaybe<NumberFieldComparison>;
  titulo?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  videoUrl?: InputMaybe<StringFieldComparison>;
};

export type ModuloTypeFilterCursoTypeFilter = {
  and?: InputMaybe<Array<ModuloTypeFilterCursoTypeFilter>>;
  arquivoId?: InputMaybe<NumberFieldComparison>;
  ativo?: InputMaybe<BooleanFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  icone?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  nome?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ModuloTypeFilterCursoTypeFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
};

export type ModuloTypeFilterModuloLiberacaoTravaTypeFilter = {
  and?: InputMaybe<Array<ModuloTypeFilterModuloLiberacaoTravaTypeFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  dataLiberacao?: InputMaybe<DateScalarFilterComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  moduloId?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<ModuloTypeFilterModuloLiberacaoTravaTypeFilter>>;
  turmaId?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ModuloTypeFilterProgressoTypeFilter = {
  alunoId?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<ModuloTypeFilterProgressoTypeFilter>>;
  assistido?: InputMaybe<BooleanFieldComparison>;
  aulaId?: InputMaybe<NumberFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  cursoId?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  fim?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  inicio?: InputMaybe<DateFieldComparison>;
  moduloId?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<ModuloTypeFilterProgressoTypeFilter>>;
  subMmoduloId?: InputMaybe<NumberFieldComparison>;
  turmaId?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ModuloTypeFilterSubModuloTypeFilter = {
  and?: InputMaybe<Array<ModuloTypeFilterSubModuloTypeFilter>>;
  arquivoId?: InputMaybe<NumberFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  mensagem?: InputMaybe<StringFieldComparison>;
  moduloId?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<ModuloTypeFilterSubModuloTypeFilter>>;
  ordem?: InputMaybe<NumberFieldComparison>;
  titulo?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
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
  Biblioteca = 'biblioteca',
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
  CreateOneInscricao: InscricaoType;
  CreateOneModulo: ModuloType;
  CreateOneModuloLiberacaoTrava: ModuloLiberacaoTravaType;
  CreateOneProgresso: ProgressoType;
  CreateOneTurma: TurmaType;
  DeleteOneInscricao: InscricaoTypeDeleteResponse;
  UpdateOneAula: AulaType;
  UpdateOneInscricao: InscricaoType;
  UpdateOneModulo: ModuloType;
  UpdateOneModuloLiberacaoTrava: ModuloLiberacaoTravaType;
  UpdateOneTurma: TurmaType;
  addCidadesToEstado: Estado;
  createArquivo?: Maybe<Arquivo>;
  createManyArquivos: Array<Arquivo>;
  createOneArquivo: Arquivo;
  createOneCurso?: Maybe<CursoType>;
  createOneEndereco: Endereco;
  createOneFormulario: Formularios;
  createOnePergunta: Perguntas;
  createOneResposta: Respostas;
  createOneRespostaPergunta: RespostasPerguntas;
  createOneSubModulo?: Maybe<SubModuloType>;
  deleteArquivo: ArquivoDeleteResponse;
  deleteManyAula: DeleteManyResponse;
  deleteManyCursos: DeleteManyResponse;
  deleteManyModuloLiberacaoTravas: DeleteManyResponse;
  deleteManyModulos: DeleteManyResponse;
  deleteManySubModulos: DeleteManyResponse;
  deleteManyTurma: DeleteManyResponse;
  deleteModulo: ModuloTypeDeleteResponse;
  deleteModuloLiberacaoTrava: ModuloLiberacaoTravaTypeDeleteResponse;
  deleteOneAula: AulaTypeDeleteResponse;
  deleteOneCurso: CursoTypeDeleteResponse;
  deleteOneFormulario: FormulariosDeleteResponse;
  deleteOnePergunta: PerguntasDeleteResponse;
  deleteOneResposta: RespostasDeleteResponse;
  deleteOneRespostaPergunta: RespostasPerguntasDeleteResponse;
  deleteOneSubModulo: SubModuloTypeDeleteResponse;
  deleteOneTurma: TurmaTypeDeleteResponse;
  deleteUsuario: UsuarioTypeDeleteResponse;
  importAluno?: Maybe<Array<AlunoType>>;
  importarHistorico: ImportacaoHistoricoType;
  login: AuthType;
  loginAluno: AuthType;
  removeCidadesFromEstado: Estado;
  removeEstadoFromCidade: Cidade;
  setCidadesOnEstado: Estado;
  setEstadoOnCidade: Cidade;
  updateArquivo: Arquivo;
  updateOneAluno?: Maybe<AlunoType>;
  updateOneCurso?: Maybe<CursoType>;
  updateOneEndereco: Endereco;
  updateOneFormulario: Formularios;
  updateOnePergunta: Perguntas;
  updateOneResposta: Respostas;
  updateOneRespostaPergunta: RespostasPerguntas;
  updateOneSubModulo?: Maybe<SubModuloType>;
  updateProgresso: ProgressoType;
};


export type MutationCreateOneAulaArgs = {
  input: CreateOneAulaTypeInput;
};


export type MutationCreateOneInscricaoArgs = {
  input: CreateOneInscricaoTypeInput;
};


export type MutationCreateOneModuloArgs = {
  input: CreateOneModuloTypeInput;
};


export type MutationCreateOneModuloLiberacaoTravaArgs = {
  input: CreateOneModuloLiberacaoTravaTypeInput;
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


export type MutationUpdateOneInscricaoArgs = {
  input: UpdateOneInscricaoTypeInput;
};


export type MutationUpdateOneModuloArgs = {
  input: UpdateOneModuloTypeInput;
};


export type MutationUpdateOneModuloLiberacaoTravaArgs = {
  input: UpdateOneModuloLiberacaoTravaTypeInput;
};


export type MutationUpdateOneTurmaArgs = {
  input: UpdateOneTurmaTypeInput;
};


export type MutationAddCidadesToEstadoArgs = {
  input: AddCidadesToEstadoInput;
};


export type MutationCreateArquivoArgs = {
  arquivo: Scalars['Upload']['input'];
};


export type MutationCreateManyArquivosArgs = {
  input: CreateManyArquivosInput;
};


export type MutationCreateOneArquivoArgs = {
  input: CreateOneArquivoInput;
};


export type MutationCreateOneCursoArgs = {
  arquivo?: InputMaybe<Scalars['Upload']['input']>;
  input: CreateCursoInput;
};


export type MutationCreateOneEnderecoArgs = {
  input: CreateOneEnderecoInput;
};


export type MutationCreateOneFormularioArgs = {
  input: CreateOneFormulariosInput;
};


export type MutationCreateOnePerguntaArgs = {
  input: CreateOnePerguntasInput;
};


export type MutationCreateOneRespostaArgs = {
  input: CreateOneRespostasInput;
};


export type MutationCreateOneRespostaPerguntaArgs = {
  input: CreateOneRespostasPerguntasInput;
};


export type MutationCreateOneSubModuloArgs = {
  arquivo?: InputMaybe<Scalars['Upload']['input']>;
  input: CreateSubModuloInput;
};


export type MutationDeleteArquivoArgs = {
  input: DeleteOneArquivoInput;
};


export type MutationDeleteManyAulaArgs = {
  input: DeleteManyAulaTypesInput;
};


export type MutationDeleteManyCursosArgs = {
  input: DeleteManyCursoTypesInput;
};


export type MutationDeleteManyModuloLiberacaoTravasArgs = {
  input: DeleteManyModuloLiberacaoTravaTypesInput;
};


export type MutationDeleteManyModulosArgs = {
  input: DeleteManyModuloTypesInput;
};


export type MutationDeleteManySubModulosArgs = {
  input: DeleteManySubModuloTypesInput;
};


export type MutationDeleteManyTurmaArgs = {
  input: DeleteManyTurmaTypesInput;
};


export type MutationDeleteModuloArgs = {
  input: DeleteOneModuloTypeInput;
};


export type MutationDeleteModuloLiberacaoTravaArgs = {
  input: DeleteOneModuloLiberacaoTravaTypeInput;
};


export type MutationDeleteOneAulaArgs = {
  input: DeleteOneAulaTypeInput;
};


export type MutationDeleteOneCursoArgs = {
  input: DeleteOneCursoTypeInput;
};


export type MutationDeleteOneFormularioArgs = {
  input: DeleteOneFormulariosInput;
};


export type MutationDeleteOnePerguntaArgs = {
  input: DeleteOnePerguntasInput;
};


export type MutationDeleteOneRespostaArgs = {
  input: DeleteOneRespostasInput;
};


export type MutationDeleteOneRespostaPerguntaArgs = {
  input: DeleteOneRespostasPerguntasInput;
};


export type MutationDeleteOneSubModuloArgs = {
  input: DeleteOneSubModuloTypeInput;
};


export type MutationDeleteOneTurmaArgs = {
  input: DeleteOneTurmaTypeInput;
};


export type MutationDeleteUsuarioArgs = {
  input: DeleteOneUsuarioTypeInput;
};


export type MutationImportAlunoArgs = {
  file: Scalars['Upload']['input'];
  separador?: InputMaybe<Scalars['String']['input']>;
};


export type MutationImportarHistoricoArgs = {
  file: Scalars['Upload']['input'];
  input: CreateImportacaoHistoricoInput;
};


export type MutationLoginArgs = {
  input: AuthInput;
};


export type MutationLoginAlunoArgs = {
  input: AuthAuloInput;
};


export type MutationRemoveCidadesFromEstadoArgs = {
  input: RemoveCidadesFromEstadoInput;
};


export type MutationRemoveEstadoFromCidadeArgs = {
  input: RemoveEstadoFromCidadeInput;
};


export type MutationSetCidadesOnEstadoArgs = {
  input: SetCidadesOnEstadoInput;
};


export type MutationSetEstadoOnCidadeArgs = {
  input: SetEstadoOnCidadeInput;
};


export type MutationUpdateArquivoArgs = {
  input: UpdateOneArquivoInput;
};


export type MutationUpdateOneAlunoArgs = {
  updateAlunoInput: UpdateAlunoInput;
};


export type MutationUpdateOneCursoArgs = {
  arquivo?: InputMaybe<Scalars['Upload']['input']>;
  id: Scalars['Float']['input'];
  update: UpdateCursoInput;
};


export type MutationUpdateOneEnderecoArgs = {
  input: UpdateOneEnderecoInput;
};


export type MutationUpdateOneFormularioArgs = {
  input: UpdateOneFormulariosInput;
};


export type MutationUpdateOnePerguntaArgs = {
  input: UpdateOnePerguntasInput;
};


export type MutationUpdateOneRespostaArgs = {
  input: UpdateOneRespostasInput;
};


export type MutationUpdateOneRespostaPerguntaArgs = {
  input: UpdateOneRespostasPerguntasInput;
};


export type MutationUpdateOneSubModuloArgs = {
  arquivo?: InputMaybe<Scalars['Upload']['input']>;
  id: Scalars['Float']['input'];
  update: UpdateSubModuloInput;
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

export type OffsetPageInfo = {
  __typename?: 'OffsetPageInfo';
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
};

export type OffsetPaging = {
  /** Limit the number of records returned */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Offset to start returning records from */
  offset?: InputMaybe<Scalars['Int']['input']>;
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

export type Perguntas = {
  __typename?: 'Perguntas';
  /** data criação do registro */
  createdAt: Scalars['DateTime']['output'];
  /** data da exclusão do registro */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** descrição da pergunta */
  descricao: Scalars['String']['output'];
  formulario?: Maybe<Formularios>;
  /** id do formulário */
  formularioId: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  /** pergunta é multi escolha */
  multiEscolha: Scalars['Boolean']['output'];
  respostas?: Maybe<Array<Respostas>>;
  /** tipo */
  tipo?: Maybe<Scalars['String']['output']>;
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PerguntasRespostasArgs = {
  filter?: RespostasFilter;
  sorting?: Array<RespostasSort>;
};

export type PerguntasAggregateGroupBy = {
  __typename?: 'PerguntasAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  descricao?: Maybe<Scalars['String']['output']>;
  formularioId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  multiEscolha?: Maybe<Scalars['Boolean']['output']>;
  tipo?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PerguntasAvgAggregate = {
  __typename?: 'PerguntasAvgAggregate';
  formularioId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type PerguntasConnection = {
  __typename?: 'PerguntasConnection';
  /** Array of edges. */
  edges: Array<PerguntasEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type PerguntasCountAggregate = {
  __typename?: 'PerguntasCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  descricao?: Maybe<Scalars['Int']['output']>;
  formularioId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  multiEscolha?: Maybe<Scalars['Int']['output']>;
  tipo?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type PerguntasDeleteResponse = {
  __typename?: 'PerguntasDeleteResponse';
  /** data criação do registro */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** data da exclusão do registro */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** descrição da pergunta */
  descricao?: Maybe<Scalars['String']['output']>;
  /** id do formulário */
  formularioId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** pergunta é multi escolha */
  multiEscolha?: Maybe<Scalars['Boolean']['output']>;
  /** tipo */
  tipo?: Maybe<Scalars['String']['output']>;
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PerguntasEdge = {
  __typename?: 'PerguntasEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the Perguntas */
  node: Perguntas;
};

export type PerguntasFilter = {
  and?: InputMaybe<Array<PerguntasFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  formulario?: InputMaybe<PerguntasFilterFormulariosFilter>;
  formularioId?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  multiEscolha?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<PerguntasFilter>>;
  respostas?: InputMaybe<PerguntasFilterRespostasFilter>;
  tipo?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type PerguntasFilterFormulariosFilter = {
  and?: InputMaybe<Array<PerguntasFilterFormulariosFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  nome?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<PerguntasFilterFormulariosFilter>>;
  subModuloId?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type PerguntasFilterRespostasFilter = {
  and?: InputMaybe<Array<PerguntasFilterRespostasFilter>>;
  correta?: InputMaybe<BooleanFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<PerguntasFilterRespostasFilter>>;
  perguntaId?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type PerguntasMaxAggregate = {
  __typename?: 'PerguntasMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  descricao?: Maybe<Scalars['String']['output']>;
  formularioId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  tipo?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PerguntasMinAggregate = {
  __typename?: 'PerguntasMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  descricao?: Maybe<Scalars['String']['output']>;
  formularioId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  tipo?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PerguntasSort = {
  direction: SortDirection;
  field: PerguntasSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PerguntasSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Descricao = 'descricao',
  FormularioId = 'formularioId',
  Id = 'id',
  MultiEscolha = 'multiEscolha',
  Tipo = 'tipo',
  UpdatedAt = 'updatedAt'
}

export type PerguntasSumAggregate = {
  __typename?: 'PerguntasSumAggregate';
  formularioId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type ProgressoCursoInput = {
  /** id do aluno */
  alunoId: Scalars['Float']['input'];
  /** id do curso */
  cursoId: Scalars['Float']['input'];
  /** id da turma */
  turmaId: Scalars['Float']['input'];
};

export type ProgressoSubModuloInput = {
  /** id do aluno */
  alunoId: Scalars['Float']['input'];
  /** id do curso */
  cursoId: Scalars['Float']['input'];
  /** id do sub modulo */
  subModuloId: Scalars['Float']['input'];
  /** id da turma */
  turmaId: Scalars['Float']['input'];
};

export type ProgressoType = {
  __typename?: 'ProgressoType';
  aluno?: Maybe<AlunoType>;
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
  modulo?: Maybe<ModuloType>;
  /** Id do modulo */
  moduloId?: Maybe<Scalars['Float']['output']>;
  /** Id do sub modulo */
  subMmoduloId?: Maybe<Scalars['Float']['output']>;
  subModulo?: Maybe<SubModuloType>;
  turma?: Maybe<TurmaType>;
  /** Id da turma */
  turmaId?: Maybe<Scalars['Float']['output']>;
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
  subMmoduloId?: Maybe<Scalars['Float']['output']>;
  turmaId?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProgressoTypeAvgAggregate = {
  __typename?: 'ProgressoTypeAvgAggregate';
  alunoId?: Maybe<Scalars['Float']['output']>;
  aulaId?: Maybe<Scalars['Float']['output']>;
  cursoId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  moduloId?: Maybe<Scalars['Float']['output']>;
  subMmoduloId?: Maybe<Scalars['Float']['output']>;
  turmaId?: Maybe<Scalars['Float']['output']>;
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
  subMmoduloId?: Maybe<Scalars['Int']['output']>;
  turmaId?: Maybe<Scalars['Int']['output']>;
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
  aluno?: InputMaybe<ProgressoTypeFilterAlunoTypeFilter>;
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
  modulo?: InputMaybe<ProgressoTypeFilterModuloTypeFilter>;
  moduloId?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<ProgressoTypeFilter>>;
  subMmoduloId?: InputMaybe<NumberFieldComparison>;
  subModulo?: InputMaybe<ProgressoTypeFilterSubModuloTypeFilter>;
  turma?: InputMaybe<ProgressoTypeFilterTurmaTypeFilter>;
  turmaId?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProgressoTypeFilterAlunoTypeFilter = {
  and?: InputMaybe<Array<ProgressoTypeFilterAlunoTypeFilter>>;
  anoSerie?: InputMaybe<StringFieldComparison>;
  atualizado?: InputMaybe<BooleanFieldComparison>;
  bairro?: InputMaybe<StringFieldComparison>;
  cpf?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  dataNascimento?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailResponsavel?: InputMaybe<StringFieldComparison>;
  escola?: InputMaybe<StringFieldComparison>;
  estado?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  logradouro?: InputMaybe<StringFieldComparison>;
  matricula?: InputMaybe<StringFieldComparison>;
  municipio?: InputMaybe<StringFieldComparison>;
  municipioEscola?: InputMaybe<StringFieldComparison>;
  nome?: InputMaybe<StringFieldComparison>;
  numero?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProgressoTypeFilterAlunoTypeFilter>>;
  regiaoPlanilha?: InputMaybe<StringFieldComparison>;
  responsavel1?: InputMaybe<StringFieldComparison>;
  responsavel2?: InputMaybe<StringFieldComparison>;
  senha?: InputMaybe<StringFieldComparison>;
  turma?: InputMaybe<StringFieldComparison>;
  turno?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  whatsAppAluno?: InputMaybe<StringFieldComparison>;
  whatsAppResponsavel1?: InputMaybe<StringFieldComparison>;
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
  subModuloId?: InputMaybe<NumberFieldComparison>;
  titulo?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  videoUrl?: InputMaybe<StringFieldComparison>;
};

export type ProgressoTypeFilterCursoTypeFilter = {
  and?: InputMaybe<Array<ProgressoTypeFilterCursoTypeFilter>>;
  arquivoId?: InputMaybe<NumberFieldComparison>;
  ativo?: InputMaybe<BooleanFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  icone?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  nome?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProgressoTypeFilterCursoTypeFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
};

export type ProgressoTypeFilterModuloTypeFilter = {
  and?: InputMaybe<Array<ProgressoTypeFilterModuloTypeFilter>>;
  biblioteca?: InputMaybe<BooleanFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  cursoId?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<ProgressoTypeFilterModuloTypeFilter>>;
  ordem?: InputMaybe<NumberFieldComparison>;
  titulo?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProgressoTypeFilterSubModuloTypeFilter = {
  and?: InputMaybe<Array<ProgressoTypeFilterSubModuloTypeFilter>>;
  arquivoId?: InputMaybe<NumberFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  mensagem?: InputMaybe<StringFieldComparison>;
  moduloId?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<ProgressoTypeFilterSubModuloTypeFilter>>;
  ordem?: InputMaybe<NumberFieldComparison>;
  titulo?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
};

export type ProgressoTypeFilterTurmaTypeFilter = {
  and?: InputMaybe<Array<ProgressoTypeFilterTurmaTypeFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  cursoId?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  duracao?: InputMaybe<StringFieldComparison>;
  fim?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  inicio?: InputMaybe<DateFieldComparison>;
  nome?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProgressoTypeFilterTurmaTypeFilter>>;
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
  subMmoduloId?: Maybe<Scalars['Float']['output']>;
  turmaId?: Maybe<Scalars['Float']['output']>;
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
  subMmoduloId?: Maybe<Scalars['Float']['output']>;
  turmaId?: Maybe<Scalars['Float']['output']>;
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
  SubMmoduloId = 'subMmoduloId',
  TurmaId = 'turmaId',
  UpdatedAt = 'updatedAt'
}

export type ProgressoTypeSumAggregate = {
  __typename?: 'ProgressoTypeSumAggregate';
  alunoId?: Maybe<Scalars['Float']['output']>;
  aulaId?: Maybe<Scalars['Float']['output']>;
  cursoId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  moduloId?: Maybe<Scalars['Float']['output']>;
  subMmoduloId?: Maybe<Scalars['Float']['output']>;
  turmaId?: Maybe<Scalars['Float']['output']>;
};

export type Query = {
  __typename?: 'Query';
  alteraSenhaAluno?: Maybe<Array<AlunoType>>;
  aluno?: Maybe<AlunoType>;
  alunos: AlunoTypeConnection;
  arquivo?: Maybe<Arquivo>;
  arquivos: ArquivoConnection;
  aula?: Maybe<AulaType>;
  aulas: AulaTypeConnection;
  calculaProgressoCurso?: Maybe<Scalars['Float']['output']>;
  calculaProgressoPorModulo?: Maybe<Array<CursoProgressoType>>;
  calculaProgressoSubModulo?: Maybe<Scalars['Float']['output']>;
  cidade?: Maybe<Cidade>;
  cidades: Array<Cidade>;
  curso?: Maybe<CursoType>;
  cursos: CursoTypeConnection;
  endereco?: Maybe<Endereco>;
  enderecos: EnderecoConnection;
  estado?: Maybe<Estado>;
  estados: EstadoConnection;
  formulario?: Maybe<Formularios>;
  formularios: FormulariosConnection;
  importacaoHistoricoType?: Maybe<ImportacaoHistoricoType>;
  importacaoHistoricoTypes: ImportacaoHistoricoTypeConnection;
  inscricao?: Maybe<InscricaoType>;
  inscricoes: InscricaoTypeConnection;
  modulo?: Maybe<ModuloType>;
  moduloLiberacaoTrava?: Maybe<ModuloLiberacaoTravaType>;
  moduloLiberacaoTravas: ModuloLiberacaoTravaTypeConnection;
  modulos: ModuloTypeConnection;
  pergunta?: Maybe<Perguntas>;
  perguntas: PerguntasConnection;
  progresso?: Maybe<ProgressoType>;
  progressos: ProgressoTypeConnection;
  resposta?: Maybe<Respostas>;
  respostaPergunta?: Maybe<RespostasPerguntas>;
  respostas: RespostasConnection;
  respostasPerguntas: RespostasPerguntasConnection;
  subModulo?: Maybe<SubModuloType>;
  subModulos: SubModuloTypeConnection;
  turma?: Maybe<TurmaType>;
  turmas: TurmaTypeConnection;
  usuario?: Maybe<UsuarioType>;
  usuarios: UsuarioTypeConnection;
};


export type QueryAlunoArgs = {
  id: Scalars['Int']['input'];
};


export type QueryAlunosArgs = {
  filter?: AlunoTypeFilter;
  paging?: CursorPaging;
  sorting?: Array<AlunoTypeSort>;
};


export type QueryArquivoArgs = {
  id: Scalars['Int']['input'];
};


export type QueryArquivosArgs = {
  filter?: ArquivoFilter;
  paging?: CursorPaging;
  sorting?: Array<ArquivoSort>;
};


export type QueryAulaArgs = {
  id: Scalars['Int']['input'];
};


export type QueryAulasArgs = {
  filter?: AulaTypeFilter;
  paging?: CursorPaging;
  sorting?: Array<AulaTypeSort>;
};


export type QueryCalculaProgressoCursoArgs = {
  input: ProgressoCursoInput;
};


export type QueryCalculaProgressoPorModuloArgs = {
  input: ProgressoCursoInput;
};


export type QueryCalculaProgressoSubModuloArgs = {
  input: ProgressoSubModuloInput;
};


export type QueryCidadeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCidadesArgs = {
  filter?: CidadeFilter;
  sorting?: Array<CidadeSort>;
};


export type QueryCursoArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCursosArgs = {
  filter?: CursoTypeFilter;
  paging?: CursorPaging;
  sorting?: Array<CursoTypeSort>;
};


export type QueryEnderecoArgs = {
  id: Scalars['Int']['input'];
};


export type QueryEnderecosArgs = {
  filter?: EnderecoFilter;
  paging?: OffsetPaging;
  sorting?: Array<EnderecoSort>;
};


export type QueryEstadoArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEstadosArgs = {
  filter?: EstadoFilter;
  paging?: OffsetPaging;
  sorting?: Array<EstadoSort>;
};


export type QueryFormularioArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFormulariosArgs = {
  filter?: FormulariosFilter;
  paging?: CursorPaging;
  sorting?: Array<FormulariosSort>;
};


export type QueryImportacaoHistoricoTypeArgs = {
  id: Scalars['Int']['input'];
};


export type QueryImportacaoHistoricoTypesArgs = {
  filter?: ImportacaoHistoricoTypeFilter;
  paging?: CursorPaging;
  sorting?: Array<ImportacaoHistoricoTypeSort>;
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


export type QueryModuloLiberacaoTravaArgs = {
  id: Scalars['Int']['input'];
};


export type QueryModuloLiberacaoTravasArgs = {
  filter?: ModuloLiberacaoTravaTypeFilter;
  paging?: CursorPaging;
  sorting?: Array<ModuloLiberacaoTravaTypeSort>;
};


export type QueryModulosArgs = {
  filter?: ModuloTypeFilter;
  paging?: CursorPaging;
  sorting?: Array<ModuloTypeSort>;
};


export type QueryPerguntaArgs = {
  id: Scalars['Int']['input'];
};


export type QueryPerguntasArgs = {
  filter?: PerguntasFilter;
  paging?: CursorPaging;
  sorting?: Array<PerguntasSort>;
};


export type QueryProgressoArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProgressosArgs = {
  filter?: ProgressoTypeFilter;
  paging?: CursorPaging;
  sorting?: Array<ProgressoTypeSort>;
};


export type QueryRespostaArgs = {
  id: Scalars['Int']['input'];
};


export type QueryRespostaPerguntaArgs = {
  id: Scalars['Int']['input'];
};


export type QueryRespostasArgs = {
  filter?: RespostasFilter;
  paging?: CursorPaging;
  sorting?: Array<RespostasSort>;
};


export type QueryRespostasPerguntasArgs = {
  filter?: RespostasPerguntasFilter;
  paging?: CursorPaging;
  sorting?: Array<RespostasPerguntasSort>;
};


export type QuerySubModuloArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySubModulosArgs = {
  filter?: SubModuloTypeFilter;
  paging?: CursorPaging;
  sorting?: Array<SubModuloTypeSort>;
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
  filter?: UsuarioTypeFilter;
  paging?: CursorPaging;
  sorting?: Array<UsuarioTypeSort>;
};

export type RemoveCidadesFromEstadoInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type RemoveEstadoFromCidadeInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The id of relation. */
  relationId: Scalars['ID']['input'];
};

export type Respostas = {
  __typename?: 'Respostas';
  /** resposta correta */
  correta: Scalars['Boolean']['output'];
  /** data criação do registro */
  createdAt: Scalars['DateTime']['output'];
  /** data da exclusão do registro */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** descrição da resposta */
  descricao: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  pergunta?: Maybe<Perguntas>;
  /** id da pergunta */
  perguntaId: Scalars['Float']['output'];
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type RespostasAggregateGroupBy = {
  __typename?: 'RespostasAggregateGroupBy';
  correta?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  descricao?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  perguntaId?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type RespostasAvgAggregate = {
  __typename?: 'RespostasAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  perguntaId?: Maybe<Scalars['Float']['output']>;
};

export type RespostasConnection = {
  __typename?: 'RespostasConnection';
  /** Array of edges. */
  edges: Array<RespostasEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type RespostasCountAggregate = {
  __typename?: 'RespostasCountAggregate';
  correta?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  descricao?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  perguntaId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type RespostasDeleteResponse = {
  __typename?: 'RespostasDeleteResponse';
  /** resposta correta */
  correta?: Maybe<Scalars['Boolean']['output']>;
  /** data criação do registro */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** data da exclusão do registro */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** descrição da resposta */
  descricao?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** id da pergunta */
  perguntaId?: Maybe<Scalars['Float']['output']>;
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type RespostasEdge = {
  __typename?: 'RespostasEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the Respostas */
  node: Respostas;
};

export type RespostasFilter = {
  and?: InputMaybe<Array<RespostasFilter>>;
  correta?: InputMaybe<BooleanFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<RespostasFilter>>;
  pergunta?: InputMaybe<RespostasFilterPerguntasFilter>;
  perguntaId?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type RespostasFilterPerguntasFilter = {
  and?: InputMaybe<Array<RespostasFilterPerguntasFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  formularioId?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  multiEscolha?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<RespostasFilterPerguntasFilter>>;
  tipo?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type RespostasMaxAggregate = {
  __typename?: 'RespostasMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  descricao?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  perguntaId?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type RespostasMinAggregate = {
  __typename?: 'RespostasMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  descricao?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  perguntaId?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type RespostasPerguntas = {
  __typename?: 'RespostasPerguntas';
  /** Id do aluno */
  alunoId?: Maybe<Scalars['Float']['output']>;
  /** data criação do registro */
  createdAt: Scalars['DateTime']['output'];
  cursoId: Scalars['Float']['output'];
  /** data da exclusão do registro */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  moduloId: Scalars['Float']['output'];
  perguntaId: Scalars['Float']['output'];
  respostaId: Scalars['Float']['output'];
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type RespostasPerguntasAggregateGroupBy = {
  __typename?: 'RespostasPerguntasAggregateGroupBy';
  alunoId?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  cursoId?: Maybe<Scalars['Float']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  moduloId?: Maybe<Scalars['Float']['output']>;
  perguntaId?: Maybe<Scalars['Float']['output']>;
  respostaId?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type RespostasPerguntasAvgAggregate = {
  __typename?: 'RespostasPerguntasAvgAggregate';
  alunoId?: Maybe<Scalars['Float']['output']>;
  cursoId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  moduloId?: Maybe<Scalars['Float']['output']>;
  perguntaId?: Maybe<Scalars['Float']['output']>;
  respostaId?: Maybe<Scalars['Float']['output']>;
};

export type RespostasPerguntasConnection = {
  __typename?: 'RespostasPerguntasConnection';
  /** Array of edges. */
  edges: Array<RespostasPerguntasEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type RespostasPerguntasCountAggregate = {
  __typename?: 'RespostasPerguntasCountAggregate';
  alunoId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Int']['output']>;
  cursoId?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  moduloId?: Maybe<Scalars['Int']['output']>;
  perguntaId?: Maybe<Scalars['Int']['output']>;
  respostaId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type RespostasPerguntasDeleteResponse = {
  __typename?: 'RespostasPerguntasDeleteResponse';
  /** Id do aluno */
  alunoId?: Maybe<Scalars['Float']['output']>;
  /** data criação do registro */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  cursoId?: Maybe<Scalars['Float']['output']>;
  /** data da exclusão do registro */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  moduloId?: Maybe<Scalars['Float']['output']>;
  perguntaId?: Maybe<Scalars['Float']['output']>;
  respostaId?: Maybe<Scalars['Float']['output']>;
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type RespostasPerguntasEdge = {
  __typename?: 'RespostasPerguntasEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the RespostasPerguntas */
  node: RespostasPerguntas;
};

export type RespostasPerguntasFilter = {
  alunoId?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<RespostasPerguntasFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  cursoId?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  moduloId?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<RespostasPerguntasFilter>>;
  perguntaId?: InputMaybe<NumberFieldComparison>;
  respostaId?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type RespostasPerguntasMaxAggregate = {
  __typename?: 'RespostasPerguntasMaxAggregate';
  alunoId?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  cursoId?: Maybe<Scalars['Float']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  moduloId?: Maybe<Scalars['Float']['output']>;
  perguntaId?: Maybe<Scalars['Float']['output']>;
  respostaId?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type RespostasPerguntasMinAggregate = {
  __typename?: 'RespostasPerguntasMinAggregate';
  alunoId?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  cursoId?: Maybe<Scalars['Float']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  moduloId?: Maybe<Scalars['Float']['output']>;
  perguntaId?: Maybe<Scalars['Float']['output']>;
  respostaId?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type RespostasPerguntasSort = {
  direction: SortDirection;
  field: RespostasPerguntasSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum RespostasPerguntasSortFields {
  AlunoId = 'alunoId',
  CreatedAt = 'createdAt',
  CursoId = 'cursoId',
  DeletedAt = 'deletedAt',
  Id = 'id',
  ModuloId = 'moduloId',
  PerguntaId = 'perguntaId',
  RespostaId = 'respostaId',
  UpdatedAt = 'updatedAt'
}

export type RespostasPerguntasSumAggregate = {
  __typename?: 'RespostasPerguntasSumAggregate';
  alunoId?: Maybe<Scalars['Float']['output']>;
  cursoId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  moduloId?: Maybe<Scalars['Float']['output']>;
  perguntaId?: Maybe<Scalars['Float']['output']>;
  respostaId?: Maybe<Scalars['Float']['output']>;
};

export type RespostasSort = {
  direction: SortDirection;
  field: RespostasSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum RespostasSortFields {
  Correta = 'correta',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Descricao = 'descricao',
  Id = 'id',
  PerguntaId = 'perguntaId',
  UpdatedAt = 'updatedAt'
}

export type RespostasSumAggregate = {
  __typename?: 'RespostasSumAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  perguntaId?: Maybe<Scalars['Float']['output']>;
};

export type SetCidadesOnEstadoInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type SetEstadoOnCidadeInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The id of relation. */
  relationId: Scalars['ID']['input'];
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

export type SubModuloType = {
  __typename?: 'SubModuloType';
  /** id do arquivo */
  arquivoId?: Maybe<Scalars['Float']['output']>;
  aulas?: Maybe<Array<AulaType>>;
  /** data criação do registro */
  createdAt: Scalars['DateTime']['output'];
  /** data da exclusão do registro */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  formulario?: Maybe<Formularios>;
  id: Scalars['Int']['output'];
  /** mensagem do modulo */
  mensagem: Scalars['String']['output'];
  modulo?: Maybe<ModuloType>;
  /** id do modulo */
  moduloId: Scalars['Float']['output'];
  /** ordem do modulo */
  ordem: Scalars['Float']['output'];
  subModulosProgressos?: Maybe<Array<ProgressoType>>;
  /** titulo do modulo */
  titulo: Scalars['String']['output'];
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** url do modulo */
  url?: Maybe<Scalars['String']['output']>;
};


export type SubModuloTypeAulasArgs = {
  filter?: AulaTypeFilter;
  sorting?: Array<AulaTypeSort>;
};


export type SubModuloTypeSubModulosProgressosArgs = {
  filter?: ProgressoTypeFilter;
  sorting?: Array<ProgressoTypeSort>;
};

export type SubModuloTypeAggregateGroupBy = {
  __typename?: 'SubModuloTypeAggregateGroupBy';
  arquivoId?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  mensagem?: Maybe<Scalars['String']['output']>;
  moduloId?: Maybe<Scalars['Float']['output']>;
  ordem?: Maybe<Scalars['Float']['output']>;
  titulo?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type SubModuloTypeAvgAggregate = {
  __typename?: 'SubModuloTypeAvgAggregate';
  arquivoId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  moduloId?: Maybe<Scalars['Float']['output']>;
  ordem?: Maybe<Scalars['Float']['output']>;
};

export type SubModuloTypeConnection = {
  __typename?: 'SubModuloTypeConnection';
  /** Array of edges. */
  edges: Array<SubModuloTypeEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type SubModuloTypeCountAggregate = {
  __typename?: 'SubModuloTypeCountAggregate';
  arquivoId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  mensagem?: Maybe<Scalars['Int']['output']>;
  moduloId?: Maybe<Scalars['Int']['output']>;
  ordem?: Maybe<Scalars['Int']['output']>;
  titulo?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
  url?: Maybe<Scalars['Int']['output']>;
};

export type SubModuloTypeDeleteFilter = {
  and?: InputMaybe<Array<SubModuloTypeDeleteFilter>>;
  arquivoId?: InputMaybe<NumberFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  mensagem?: InputMaybe<StringFieldComparison>;
  moduloId?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<SubModuloTypeDeleteFilter>>;
  ordem?: InputMaybe<NumberFieldComparison>;
  titulo?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
};

export type SubModuloTypeDeleteResponse = {
  __typename?: 'SubModuloTypeDeleteResponse';
  /** id do arquivo */
  arquivoId?: Maybe<Scalars['Float']['output']>;
  /** data criação do registro */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** data da exclusão do registro */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** mensagem do modulo */
  mensagem?: Maybe<Scalars['String']['output']>;
  /** id do modulo */
  moduloId?: Maybe<Scalars['Float']['output']>;
  /** ordem do modulo */
  ordem?: Maybe<Scalars['Float']['output']>;
  /** titulo do modulo */
  titulo?: Maybe<Scalars['String']['output']>;
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** url do modulo */
  url?: Maybe<Scalars['String']['output']>;
};

export type SubModuloTypeEdge = {
  __typename?: 'SubModuloTypeEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the SubModuloType */
  node: SubModuloType;
};

export type SubModuloTypeFilter = {
  and?: InputMaybe<Array<SubModuloTypeFilter>>;
  arquivoId?: InputMaybe<NumberFieldComparison>;
  aulas?: InputMaybe<SubModuloTypeFilterAulaTypeFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  formulario?: InputMaybe<SubModuloTypeFilterFormulariosFilter>;
  id?: InputMaybe<IntFieldComparison>;
  mensagem?: InputMaybe<StringFieldComparison>;
  modulo?: InputMaybe<SubModuloTypeFilterModuloTypeFilter>;
  moduloId?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<SubModuloTypeFilter>>;
  ordem?: InputMaybe<NumberFieldComparison>;
  subModulosProgressos?: InputMaybe<SubModuloTypeFilterProgressoTypeFilter>;
  titulo?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
};

export type SubModuloTypeFilterAulaTypeFilter = {
  and?: InputMaybe<Array<SubModuloTypeFilterAulaTypeFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  duracao?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  moduloId?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<SubModuloTypeFilterAulaTypeFilter>>;
  ordem?: InputMaybe<NumberFieldComparison>;
  subModuloId?: InputMaybe<NumberFieldComparison>;
  titulo?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  videoUrl?: InputMaybe<StringFieldComparison>;
};

export type SubModuloTypeFilterFormulariosFilter = {
  and?: InputMaybe<Array<SubModuloTypeFilterFormulariosFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  nome?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SubModuloTypeFilterFormulariosFilter>>;
  subModuloId?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type SubModuloTypeFilterModuloTypeFilter = {
  and?: InputMaybe<Array<SubModuloTypeFilterModuloTypeFilter>>;
  biblioteca?: InputMaybe<BooleanFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  cursoId?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<SubModuloTypeFilterModuloTypeFilter>>;
  ordem?: InputMaybe<NumberFieldComparison>;
  titulo?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type SubModuloTypeFilterProgressoTypeFilter = {
  alunoId?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<SubModuloTypeFilterProgressoTypeFilter>>;
  assistido?: InputMaybe<BooleanFieldComparison>;
  aulaId?: InputMaybe<NumberFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  cursoId?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  fim?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  inicio?: InputMaybe<DateFieldComparison>;
  moduloId?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<SubModuloTypeFilterProgressoTypeFilter>>;
  subMmoduloId?: InputMaybe<NumberFieldComparison>;
  turmaId?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type SubModuloTypeMaxAggregate = {
  __typename?: 'SubModuloTypeMaxAggregate';
  arquivoId?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  mensagem?: Maybe<Scalars['String']['output']>;
  moduloId?: Maybe<Scalars['Float']['output']>;
  ordem?: Maybe<Scalars['Float']['output']>;
  titulo?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type SubModuloTypeMinAggregate = {
  __typename?: 'SubModuloTypeMinAggregate';
  arquivoId?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  mensagem?: Maybe<Scalars['String']['output']>;
  moduloId?: Maybe<Scalars['Float']['output']>;
  ordem?: Maybe<Scalars['Float']['output']>;
  titulo?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type SubModuloTypeSort = {
  direction: SortDirection;
  field: SubModuloTypeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum SubModuloTypeSortFields {
  ArquivoId = 'arquivoId',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Mensagem = 'mensagem',
  ModuloId = 'moduloId',
  Ordem = 'ordem',
  Titulo = 'titulo',
  UpdatedAt = 'updatedAt',
  Url = 'url'
}

export type SubModuloTypeSumAggregate = {
  __typename?: 'SubModuloTypeSumAggregate';
  arquivoId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  moduloId?: Maybe<Scalars['Float']['output']>;
  ordem?: Maybe<Scalars['Float']['output']>;
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
  moduloLiberacaoTravas?: Maybe<Array<ModuloLiberacaoTravaType>>;
  /** nome da turma */
  nome: Scalars['String']['output'];
  /** data atualização do registro */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type TurmaTypeModuloLiberacaoTravasArgs = {
  filter?: ModuloLiberacaoTravaTypeFilter;
  sorting?: Array<ModuloLiberacaoTravaTypeSort>;
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
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
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

export type TurmaTypeDeleteFilter = {
  and?: InputMaybe<Array<TurmaTypeDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  cursoId?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  duracao?: InputMaybe<StringFieldComparison>;
  fim?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  inicio?: InputMaybe<DateFieldComparison>;
  nome?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TurmaTypeDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
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
  moduloLiberacaoTravas?: InputMaybe<TurmaTypeFilterModuloLiberacaoTravaTypeFilter>;
  nome?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TurmaTypeFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type TurmaTypeFilterCursoTypeFilter = {
  and?: InputMaybe<Array<TurmaTypeFilterCursoTypeFilter>>;
  arquivoId?: InputMaybe<NumberFieldComparison>;
  ativo?: InputMaybe<BooleanFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  descricao?: InputMaybe<StringFieldComparison>;
  icone?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  nome?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TurmaTypeFilterCursoTypeFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
};

export type TurmaTypeFilterModuloLiberacaoTravaTypeFilter = {
  and?: InputMaybe<Array<TurmaTypeFilterModuloLiberacaoTravaTypeFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  dataLiberacao?: InputMaybe<DateScalarFilterComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  moduloId?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<TurmaTypeFilterModuloLiberacaoTravaTypeFilter>>;
  turmaId?: InputMaybe<NumberFieldComparison>;
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

export type UpdateAlunoInput = {
  /** ano_serie do aluno */
  anoSerie?: InputMaybe<Scalars['String']['input']>;
  /** arquivo de foto do aluno */
  arquivoId?: InputMaybe<Scalars['Float']['input']>;
  /** dados do aluno atualizado */
  atualizado?: InputMaybe<Scalars['Boolean']['input']>;
  /** bairro do aluno */
  bairro?: InputMaybe<Scalars['String']['input']>;
  /** cpf do aluno */
  cpf?: InputMaybe<Scalars['String']['input']>;
  /** data_nascimento do aluno */
  dataNascimento?: InputMaybe<Scalars['String']['input']>;
  /** email do aluno */
  email?: InputMaybe<Scalars['String']['input']>;
  /** E-mail do responsável */
  emailResponsavel?: InputMaybe<Scalars['String']['input']>;
  /** escola do aluno */
  escola?: InputMaybe<Scalars['String']['input']>;
  /** estado do aluno */
  estado?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Float']['input'];
  /** logradouro do aluno */
  logradouro?: InputMaybe<Scalars['String']['input']>;
  /** matricula do aluno */
  matricula?: InputMaybe<Scalars['String']['input']>;
  /** municipio do aluno */
  municipio?: InputMaybe<Scalars['String']['input']>;
  /** municipio escola */
  municipioEscola?: InputMaybe<Scalars['String']['input']>;
  /** nome do aluno */
  nome?: InputMaybe<Scalars['String']['input']>;
  /** numero do endereco do aluno */
  numero?: InputMaybe<Scalars['String']['input']>;
  /** qualificacao_escolhida do aluno */
  qualificacaoId?: InputMaybe<Scalars['String']['input']>;
  /** responsavel 1 do aluno */
  responsavel1?: InputMaybe<Scalars['String']['input']>;
  /** responsavel 2 do aluno */
  responsavel2?: InputMaybe<Scalars['String']['input']>;
  /** senha do aluno */
  senha?: InputMaybe<Scalars['String']['input']>;
  /** turma do aluno */
  turma?: InputMaybe<Scalars['String']['input']>;
  /** turno do aluno */
  turno?: InputMaybe<Scalars['String']['input']>;
  /** whats app do aluno */
  whatsAppAluno?: InputMaybe<Scalars['String']['input']>;
  /** whats app do responsavel */
  whatsAppResponsavel1?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateArquivo = {
  /** data criação do registro */
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** data da exclusão do registro */
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** extensão do arquivo */
  extensao?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  /** mimetype do arquivo */
  mimetype?: InputMaybe<Scalars['String']['input']>;
  /** nome do arquivo */
  nome?: InputMaybe<Scalars['String']['input']>;
  /** path bucket */
  pathBucket?: InputMaybe<Scalars['String']['input']>;
  /** tamanho do arquivo */
  tamanho?: InputMaybe<Scalars['Float']['input']>;
  /** data atualização do registro */
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** url do arquivo */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAulaInput = {
  descricao?: InputMaybe<Scalars['String']['input']>;
  duracao?: InputMaybe<Scalars['Float']['input']>;
  moduloId?: InputMaybe<Scalars['Float']['input']>;
  ordem?: InputMaybe<Scalars['Float']['input']>;
  subModuloId?: InputMaybe<Scalars['Float']['input']>;
  titulo?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCursoInput = {
  /** curso está ativo? */
  ativo?: InputMaybe<Scalars['Boolean']['input']>;
  /** descrição do curso */
  descricao?: InputMaybe<Scalars['String']['input']>;
  /** icone do curso */
  icone?: InputMaybe<Scalars['String']['input']>;
  /** nome do curso */
  nome?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateEnderecoInput = {
  /** bairro */
  bairro?: InputMaybe<Scalars['String']['input']>;
  /** cep */
  cep?: InputMaybe<Scalars['String']['input']>;
  /** id da cidade */
  cidadeId?: InputMaybe<Scalars['Float']['input']>;
  /** complemento */
  complemento?: InputMaybe<Scalars['String']['input']>;
  /** logradouro */
  logradouro?: InputMaybe<Scalars['String']['input']>;
  /** número do endereço */
  numero?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFormularioInput = {
  /** nome da formulário */
  nome?: InputMaybe<Scalars['String']['input']>;
  /** id do sub modulo */
  subModuloId?: InputMaybe<Scalars['Float']['input']>;
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
  biblioteca?: InputMaybe<Scalars['Boolean']['input']>;
  cursoId?: InputMaybe<Scalars['Float']['input']>;
  descricao?: InputMaybe<Scalars['String']['input']>;
  ordem?: InputMaybe<Scalars['Float']['input']>;
  titulo?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateModuloLiberacaoTravaInput = {
  /** data de liberaçãao */
  dataLiberacao?: InputMaybe<Scalars['DateTime']['input']>;
  /** id do modulo */
  moduloId?: InputMaybe<Scalars['Float']['input']>;
  /** id do turma */
  turmaId?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneArquivoInput = {
  /** The id of the record to update */
  id: Scalars['Int']['input'];
  /** The update to apply. */
  update: UpdateArquivo;
};

export type UpdateOneAulaTypeInput = {
  /** The id of the record to update */
  id: Scalars['Int']['input'];
  /** The update to apply. */
  update: UpdateAulaInput;
};

export type UpdateOneEnderecoInput = {
  /** The id of the record to update */
  id: Scalars['Int']['input'];
  /** The update to apply. */
  update: UpdateEnderecoInput;
};

export type UpdateOneFormulariosInput = {
  /** The id of the record to update */
  id: Scalars['Int']['input'];
  /** The update to apply. */
  update: UpdateFormularioInput;
};

export type UpdateOneInscricaoTypeInput = {
  /** The id of the record to update */
  id: Scalars['Int']['input'];
  /** The update to apply. */
  update: UpdateInscricaoInput;
};

export type UpdateOneModuloLiberacaoTravaTypeInput = {
  /** The id of the record to update */
  id: Scalars['Int']['input'];
  /** The update to apply. */
  update: UpdateModuloLiberacaoTravaInput;
};

export type UpdateOneModuloTypeInput = {
  /** The id of the record to update */
  id: Scalars['Int']['input'];
  /** The update to apply. */
  update: UpdateModuloInput;
};

export type UpdateOnePerguntasInput = {
  /** The id of the record to update */
  id: Scalars['Int']['input'];
  /** The update to apply. */
  update: UpdatePerguntaInput;
};

export type UpdateOneRespostasInput = {
  /** The id of the record to update */
  id: Scalars['Int']['input'];
  /** The update to apply. */
  update: UpdateRespostaInput;
};

export type UpdateOneRespostasPerguntasInput = {
  /** The id of the record to update */
  id: Scalars['Int']['input'];
  /** The update to apply. */
  update: UpdateRespostaPerguntaInput;
};

export type UpdateOneTurmaTypeInput = {
  /** The id of the record to update */
  id: Scalars['Int']['input'];
  /** The update to apply. */
  update: UpdateTurmaInput;
};

export type UpdatePerguntaInput = {
  /** descreva a pergunta */
  descricao?: InputMaybe<Scalars['String']['input']>;
  /** selecione o formulário */
  formularioId?: InputMaybe<Scalars['Float']['input']>;
  /** pergunta é multi escolha */
  multiEscolha?: InputMaybe<Scalars['Boolean']['input']>;
  /** tipo */
  tipo?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProgressoInput = {
  alunoId?: InputMaybe<Scalars['Float']['input']>;
  aulaId?: InputMaybe<Scalars['Float']['input']>;
  cursoId?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['Float']['input'];
  moduloId?: InputMaybe<Scalars['Float']['input']>;
  subModuloId?: InputMaybe<Scalars['Float']['input']>;
  turmaId?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateRespostaInput = {
  /** resposta correta */
  correta?: InputMaybe<Scalars['Boolean']['input']>;
  /** descreva a resposta */
  descricao?: InputMaybe<Scalars['String']['input']>;
  /** selecione a pergunta */
  perguntaId?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateRespostaPerguntaInput = {
  /** Id do aluno */
  alunoId?: InputMaybe<Scalars['Float']['input']>;
  /** Id do curso */
  cursoId?: InputMaybe<Scalars['Float']['input']>;
  /** Id do módulo */
  moduloId?: InputMaybe<Scalars['Float']['input']>;
  /** Id da pergunta */
  perguntaId?: InputMaybe<Scalars['Float']['input']>;
  /** Id da resposta */
  respostaId?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateSubModuloInput = {
  /** mensagem do modulo */
  mensagem?: InputMaybe<Scalars['String']['input']>;
  /** id do modulo */
  moduloId?: InputMaybe<Scalars['Float']['input']>;
  /** ordem do modulo */
  ordem?: InputMaybe<Scalars['Float']['input']>;
  /** titulo do modulo */
  titulo?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTurmaInput = {
  cursoId?: InputMaybe<Scalars['Float']['input']>;
  descricao?: InputMaybe<Scalars['String']['input']>;
  duracao?: InputMaybe<Scalars['String']['input']>;
  fim?: InputMaybe<Scalars['DateTime']['input']>;
  inicio?: InputMaybe<Scalars['DateTime']['input']>;
  nome?: InputMaybe<Scalars['String']['input']>;
};

export type UsuarioType = {
  __typename?: 'UsuarioType';
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

export type UsuarioTypeAggregateGroupBy = {
  __typename?: 'UsuarioTypeAggregateGroupBy';
  ativo?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nome?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsuarioTypeAvgAggregate = {
  __typename?: 'UsuarioTypeAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type UsuarioTypeConnection = {
  __typename?: 'UsuarioTypeConnection';
  /** Array of edges. */
  edges: Array<UsuarioTypeEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type UsuarioTypeCountAggregate = {
  __typename?: 'UsuarioTypeCountAggregate';
  ativo?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nome?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type UsuarioTypeDeleteResponse = {
  __typename?: 'UsuarioTypeDeleteResponse';
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

export type UsuarioTypeEdge = {
  __typename?: 'UsuarioTypeEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the UsuarioType */
  node: UsuarioType;
};

export type UsuarioTypeFilter = {
  and?: InputMaybe<Array<UsuarioTypeFilter>>;
  ativo?: InputMaybe<BooleanFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  nome?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UsuarioTypeFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UsuarioTypeMaxAggregate = {
  __typename?: 'UsuarioTypeMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nome?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsuarioTypeMinAggregate = {
  __typename?: 'UsuarioTypeMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nome?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsuarioTypeSort = {
  direction: SortDirection;
  field: UsuarioTypeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UsuarioTypeSortFields {
  Ativo = 'ativo',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Email = 'email',
  Id = 'id',
  Nome = 'nome',
  UpdatedAt = 'updatedAt'
}

export type UsuarioTypeSumAggregate = {
  __typename?: 'UsuarioTypeSumAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type UpdateOneAlunoMutationVariables = Exact<{
  input: UpdateAlunoInput;
}>;


export type UpdateOneAlunoMutation = { __typename?: 'Mutation', updateOneAluno?: { __typename?: 'AlunoType', id: number } | null };

export type CreateArquivoMutationVariables = Exact<{
  arquivo: Scalars['Upload']['input'];
}>;


export type CreateArquivoMutation = { __typename?: 'Mutation', createArquivo?: { __typename?: 'Arquivo', createdAt: any, deletedAt?: any | null, extensao: string, id: number, mimetype: string, nome: string, pathBucket?: string | null, tamanho: number, updatedAt?: any | null, url: string } | null };

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


export type DeleteOneAulaMutation = { __typename?: 'Mutation', deleteOneAula: { __typename?: 'AulaTypeDeleteResponse', titulo?: string | null } };

export type LoginMutationVariables = Exact<{
  input: AuthInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthType', token: string } };

export type CreateOneCursoMutationVariables = Exact<{
  input: CreateCursoInput;
  arquivo?: InputMaybe<Scalars['Upload']['input']>;
}>;


export type CreateOneCursoMutation = { __typename?: 'Mutation', createOneCurso?: { __typename?: 'CursoType', id: number } | null };

export type UpdateOneCursoMutationVariables = Exact<{
  arquivo?: InputMaybe<Scalars['Upload']['input']>;
  update: UpdateCursoInput;
  id: Scalars['Float']['input'];
}>;


export type UpdateOneCursoMutation = { __typename?: 'Mutation', updateOneCurso?: { __typename?: 'CursoType', id: number } | null };

export type DeleteOneCursoMutationVariables = Exact<{
  input: DeleteOneCursoTypeInput;
}>;


export type DeleteOneCursoMutation = { __typename?: 'Mutation', deleteOneCurso: { __typename?: 'CursoTypeDeleteResponse', id?: number | null } };

export type CreateOneModuloLiberacaTravaMutationVariables = Exact<{
  input: CreateOneModuloLiberacaoTravaTypeInput;
}>;


export type CreateOneModuloLiberacaTravaMutation = { __typename?: 'Mutation', CreateOneModuloLiberacaoTrava: { __typename?: 'ModuloLiberacaoTravaType', id: number } };

export type UpdateOneModuloLiberacaTravaMutationVariables = Exact<{
  input: UpdateOneModuloLiberacaoTravaTypeInput;
}>;


export type UpdateOneModuloLiberacaTravaMutation = { __typename?: 'Mutation', UpdateOneModuloLiberacaoTrava: { __typename?: 'ModuloLiberacaoTravaType', id: number } };

export type CreateOneFormularioMutationVariables = Exact<{
  input: CreateOneFormulariosInput;
}>;


export type CreateOneFormularioMutation = { __typename?: 'Mutation', createOneFormulario: { __typename?: 'Formularios', id: number } };

export type UpdateOneFormularioMutationVariables = Exact<{
  input: UpdateOneFormulariosInput;
}>;


export type UpdateOneFormularioMutation = { __typename?: 'Mutation', updateOneFormulario: { __typename?: 'Formularios', id: number } };

export type DeleteOneFormularioMutationVariables = Exact<{
  input: DeleteOneFormulariosInput;
}>;


export type DeleteOneFormularioMutation = { __typename?: 'Mutation', deleteOneFormulario: { __typename?: 'FormulariosDeleteResponse', id?: number | null } };

export type ImportarHistoricoMutationVariables = Exact<{
  file: Scalars['Upload']['input'];
  input: CreateImportacaoHistoricoInput;
}>;


export type ImportarHistoricoMutation = { __typename?: 'Mutation', importarHistorico: { __typename?: 'ImportacaoHistoricoType', id: number } };

export type CreateOneInscricaoMutationVariables = Exact<{
  input: CreateOneInscricaoTypeInput;
}>;


export type CreateOneInscricaoMutation = { __typename?: 'Mutation', CreateOneInscricao: { __typename?: 'InscricaoType', id: number } };

export type UpdateOneInscricaoMutationVariables = Exact<{
  input: UpdateOneInscricaoTypeInput;
}>;


export type UpdateOneInscricaoMutation = { __typename?: 'Mutation', UpdateOneInscricao: { __typename?: 'InscricaoType', id: number } };

export type DeleteOneInscricaoMutationVariables = Exact<{
  input: DeleteOneInscricaoTypeInput;
}>;


export type DeleteOneInscricaoMutation = { __typename?: 'Mutation', DeleteOneInscricao: { __typename?: 'InscricaoTypeDeleteResponse', id?: number | null } };

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

export type CreateOnePerguntaMutationVariables = Exact<{
  input: CreateOnePerguntasInput;
}>;


export type CreateOnePerguntaMutation = { __typename?: 'Mutation', createOnePergunta: { __typename?: 'Perguntas', id: number } };

export type UpdateOnePerguntaMutationVariables = Exact<{
  input: UpdateOnePerguntasInput;
}>;


export type UpdateOnePerguntaMutation = { __typename?: 'Mutation', updateOnePergunta: { __typename?: 'Perguntas', id: number } };

export type DeleteOnePerguntaMutationVariables = Exact<{
  input: DeleteOnePerguntasInput;
}>;


export type DeleteOnePerguntaMutation = { __typename?: 'Mutation', deleteOnePergunta: { __typename?: 'PerguntasDeleteResponse', id?: number | null } };

export type CreateOneRespostaMutationVariables = Exact<{
  input: CreateOneRespostasInput;
}>;


export type CreateOneRespostaMutation = { __typename?: 'Mutation', createOneResposta: { __typename?: 'Respostas', id: number } };

export type UpdateOneRespostaMutationVariables = Exact<{
  input: UpdateOneRespostasInput;
}>;


export type UpdateOneRespostaMutation = { __typename?: 'Mutation', updateOneResposta: { __typename?: 'Respostas', id: number } };

export type DeleteOneRespostaMutationVariables = Exact<{
  input: DeleteOneRespostasInput;
}>;


export type DeleteOneRespostaMutation = { __typename?: 'Mutation', deleteOneResposta: { __typename?: 'RespostasDeleteResponse', id?: number | null } };

export type CreateOneSubModuloMutationVariables = Exact<{
  input: CreateSubModuloInput;
  arquivo?: InputMaybe<Scalars['Upload']['input']>;
}>;


export type CreateOneSubModuloMutation = { __typename?: 'Mutation', createOneSubModulo?: { __typename?: 'SubModuloType', id: number } | null };

export type UpdateOneSubModuloMutationVariables = Exact<{
  update: UpdateSubModuloInput;
  arquivo?: InputMaybe<Scalars['Upload']['input']>;
  id: Scalars['Float']['input'];
}>;


export type UpdateOneSubModuloMutation = { __typename?: 'Mutation', updateOneSubModulo?: { __typename?: 'SubModuloType', id: number } | null };

export type DeleteOneSubModuloMutationVariables = Exact<{
  input: DeleteOneSubModuloTypeInput;
}>;


export type DeleteOneSubModuloMutation = { __typename?: 'Mutation', deleteOneSubModulo: { __typename?: 'SubModuloTypeDeleteResponse', id?: number | null } };

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


export type DeleteOneTurmaMutation = { __typename?: 'Mutation', deleteOneTurma: { __typename?: 'TurmaTypeDeleteResponse', id?: number | null } };

export type AlunosQueryVariables = Exact<{
  filter?: InputMaybe<AlunoTypeFilter>;
  paging: CursorPaging;
  sorting: Array<AlunoTypeSort> | AlunoTypeSort;
}>;


export type AlunosQuery = { __typename?: 'Query', alunos: { __typename?: 'AlunoTypeConnection', edges: Array<{ __typename?: 'AlunoTypeEdge', node: { __typename?: 'AlunoType', id: number, nome: string, cpf?: string | null, email: string, matricula?: string | null, inscricoes?: Array<{ __typename?: 'InscricaoType', id: number, status: boolean, turma?: { __typename?: 'TurmaType', nome: string, id: number } | null }> | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: any | null, hasNextPage?: boolean | null, hasPreviousPage?: boolean | null, startCursor?: any | null } } };

export type AulaQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type AulaQuery = { __typename?: 'Query', aula?: { __typename?: 'AulaType', ordem: number, moduloId?: number | null, descricao?: string | null, id: number, titulo: string, videoUrl?: string | null, duracao: number, modulo?: { __typename?: 'ModuloType', titulo: string, id: number, curso?: { __typename?: 'CursoType', id: number, nome: string } | null } | null } | null };

export type AulasQueryVariables = Exact<{
  filter?: InputMaybe<AulaTypeFilter>;
  paging: CursorPaging;
  sorting: Array<AulaTypeSort> | AulaTypeSort;
}>;


export type AulasQuery = { __typename?: 'Query', aulas: { __typename?: 'AulaTypeConnection', edges: Array<{ __typename?: 'AulaTypeEdge', node: { __typename?: 'AulaType', ordem: number, moduloId?: number | null, descricao?: string | null, id: number, titulo: string, videoUrl?: string | null, duracao: number, modulo?: { __typename?: 'ModuloType', titulo: string } | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: any | null, hasNextPage?: boolean | null, hasPreviousPage?: boolean | null, startCursor?: any | null } } };

export type AulasTotalQueryVariables = Exact<{
  filter?: InputMaybe<AulaTypeFilter>;
  paging: CursorPaging;
}>;


export type AulasTotalQuery = { __typename?: 'Query', aulas: { __typename?: 'AulaTypeConnection', totalCount: number } };

export type CursoQueryVariables = Exact<{
  id: Scalars['Int']['input'];
  bilbioteca?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CursoQuery = { __typename?: 'Query', curso?: { __typename?: 'CursoType', ativo: boolean, createdAt: any, deletedAt?: any | null, descricao: string, id: number, nome: string, icone?: string | null, url?: string | null, updatedAt?: any | null, modulos?: Array<{ __typename?: 'ModuloType', id: number }> | null } | null };

export type CursosQueryVariables = Exact<{
  filter?: InputMaybe<CursoTypeFilter>;
  paging: CursorPaging;
  sorting: Array<CursoTypeSort> | CursoTypeSort;
}>;


export type CursosQuery = { __typename?: 'Query', cursos: { __typename?: 'CursoTypeConnection', edges: Array<{ __typename?: 'CursoTypeEdge', node: { __typename?: 'CursoType', ativo: boolean, createdAt: any, deletedAt?: any | null, descricao: string, id: number, nome: string, updatedAt?: any | null, icone?: string | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: any | null, hasNextPage?: boolean | null, hasPreviousPage?: boolean | null, startCursor?: any | null } } };

export type CursosModuloSelectQueryVariables = Exact<{
  filter?: InputMaybe<CursoTypeFilter>;
  paging: CursorPaging;
  sorting: Array<CursoTypeSort> | CursoTypeSort;
}>;


export type CursosModuloSelectQuery = { __typename?: 'Query', cursos: { __typename?: 'CursoTypeConnection', edges: Array<{ __typename?: 'CursoTypeEdge', node: { __typename?: 'CursoType', id: number, nome: string, modulos?: Array<{ __typename?: 'ModuloType', id: number, titulo: string }> | null } }> } };

export type DashboardQueryVariables = Exact<{ [key: string]: never; }>;


export type DashboardQuery = { __typename?: 'Query', respostas: { __typename: 'RespostasConnection', totalCount: number }, perguntas: { __typename: 'PerguntasConnection', totalCount: number }, formularios: { __typename: 'FormulariosConnection', totalCount: number }, modulos: { __typename: 'ModuloTypeConnection', totalCount: number }, aulasBiblioteca: { __typename?: 'AulaTypeConnection', totalCount: number }, aulas: { __typename?: 'AulaTypeConnection', totalCount: number }, todasAulas: { __typename?: 'AulaTypeConnection', totalCount: number }, turmas: { __typename: 'TurmaTypeConnection', totalCount: number }, inscricoes: { __typename: 'InscricaoTypeConnection', totalCount: number }, alunos: { __typename: 'AlunoTypeConnection', totalCount: number }, cursos: { __typename: 'CursoTypeConnection', totalCount: number } };

export type FormularioQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type FormularioQuery = { __typename?: 'Query', formulario?: { __typename?: 'Formularios', id: number, nome: string, perguntas?: Array<{ __typename?: 'Perguntas', id: number, descricao: string, multiEscolha: boolean, tipo?: string | null, formularioId: number }> | null, subModulo?: { __typename?: 'SubModuloType', titulo: string, id: number, modulo?: { __typename?: 'ModuloType', id: number, titulo: string } | null } | null } | null };

export type FormulariosQueryVariables = Exact<{
  filter?: InputMaybe<FormulariosFilter>;
  paging: CursorPaging;
  sorting: Array<FormulariosSort> | FormulariosSort;
}>;


export type FormulariosQuery = { __typename?: 'Query', formularios: { __typename?: 'FormulariosConnection', edges: Array<{ __typename?: 'FormulariosEdge', node: { __typename?: 'Formularios', id: number, nome: string, perguntas?: Array<{ __typename?: 'Perguntas', id: number }> | null, subModulo?: { __typename?: 'SubModuloType', titulo: string, id: number, modulo?: { __typename?: 'ModuloType', id: number, titulo: string } | null } | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: any | null, hasNextPage?: boolean | null, hasPreviousPage?: boolean | null, startCursor?: any | null } } };

export type FormulariosSelectQueryVariables = Exact<{
  filter?: InputMaybe<FormulariosFilter>;
  paging: CursorPaging;
  sorting: Array<FormulariosSort> | FormulariosSort;
}>;


export type FormulariosSelectQuery = { __typename?: 'Query', formularios: { __typename?: 'FormulariosConnection', edges: Array<{ __typename?: 'FormulariosEdge', node: { __typename?: 'Formularios', id: number, nome: string } }> } };

export type ImportacoesHistoricoQueryVariables = Exact<{
  filter?: InputMaybe<ImportacaoHistoricoTypeFilter>;
  paging: CursorPaging;
  sorting: Array<ImportacaoHistoricoTypeSort> | ImportacaoHistoricoTypeSort;
}>;


export type ImportacoesHistoricoQuery = { __typename?: 'Query', importacaoHistoricoTypes: { __typename?: 'ImportacaoHistoricoTypeConnection', edges: Array<{ __typename?: 'ImportacaoHistoricoTypeEdge', cursor: any, node: { __typename?: 'ImportacaoHistoricoType', createdAt: any, id: number, nomePlanilha: string, quantidadeImportada: number, turmaId: number, status: string, errosImport?: string | null, turma?: { __typename?: 'TurmaType', nome: string, id: number, curso?: { __typename?: 'CursoType', nome: string, id: number } | null } | null, usuario?: { __typename?: 'UsuarioType', nome: string, id: number } | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: any | null, hasNextPage?: boolean | null, hasPreviousPage?: boolean | null, startCursor?: any | null } } };

export type ImportacaoHistoricoQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ImportacaoHistoricoQuery = { __typename?: 'Query', importacaoHistoricoType?: { __typename?: 'ImportacaoHistoricoType', createdAt: any, id: number, nomePlanilha: string, quantidadeImportada: number, turmaId: number, status: string, usuario?: { __typename?: 'UsuarioType', nome: string, id: number } | null, turma?: { __typename?: 'TurmaType', nome: string, id: number, curso?: { __typename?: 'CursoType', nome: string, id: number } | null } | null } | null };

export type InscricaoQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type InscricaoQuery = { __typename?: 'Query', inscricao?: { __typename?: 'InscricaoType', id: number, dataInscricao: any, aluno?: { __typename?: 'AlunoType', id: number, cpf?: string | null, nome: string } | null, turma?: { __typename?: 'TurmaType', id: number, descricao: string } | null } | null };

export type InscricoesQueryVariables = Exact<{
  filter?: InputMaybe<InscricaoTypeFilter>;
  paging: CursorPaging;
  sorting: Array<InscricaoTypeSort> | InscricaoTypeSort;
}>;


export type InscricoesQuery = { __typename?: 'Query', inscricoes: { __typename?: 'InscricaoTypeConnection', edges: Array<{ __typename?: 'InscricaoTypeEdge', cursor: any, node: { __typename?: 'InscricaoType', id: number, status: boolean, dataInscricao: any, aluno?: { __typename?: 'AlunoType', id: number, cpf?: string | null, nome: string, matricula?: string | null } | null, turma?: { __typename?: 'TurmaType', id: number, nome: string, curso?: { __typename?: 'CursoType', id: number, nome: string } | null } | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: any | null, hasNextPage?: boolean | null, hasPreviousPage?: boolean | null, startCursor?: any | null } } };

export type InscricoesImportacaoQueryVariables = Exact<{
  filter?: InputMaybe<InscricaoTypeFilter>;
  paging: CursorPaging;
  sorting: Array<InscricaoTypeSort> | InscricaoTypeSort;
}>;


export type InscricoesImportacaoQuery = { __typename?: 'Query', inscricoes: { __typename?: 'InscricaoTypeConnection', edges: Array<{ __typename?: 'InscricaoTypeEdge', cursor: any, node: { __typename?: 'InscricaoType', id: number, descricaoStatus?: string | null, status: boolean, dataInscricao: any, aluno?: { __typename?: 'AlunoType', id: number, matricula?: string | null, nome: string } | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: any | null, hasNextPage?: boolean | null, hasPreviousPage?: boolean | null, startCursor?: any | null } } };

export type ModuloQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ModuloQuery = { __typename?: 'Query', modulo?: { __typename?: 'ModuloType', ordem: number, cursoId: number, descricao: string, id: number, titulo: string, biblioteca: boolean, curso?: { __typename?: 'CursoType', nome: string, id: number } | null, subModulos?: Array<{ __typename?: 'SubModuloType', id: number, mensagem: string, moduloId: number, ordem: number, titulo: string, updatedAt?: any | null, url?: string | null, modulo?: { __typename?: 'ModuloType', id: number, titulo: string } | null }> | null } | null };

export type ModulosQueryVariables = Exact<{
  filter?: InputMaybe<ModuloTypeFilter>;
  paging: CursorPaging;
  sorting: Array<ModuloTypeSort> | ModuloTypeSort;
}>;


export type ModulosQuery = { __typename?: 'Query', modulos: { __typename?: 'ModuloTypeConnection', edges: Array<{ __typename?: 'ModuloTypeEdge', node: { __typename?: 'ModuloType', ordem: number, cursoId: number, descricao: string, id: number, titulo: string, biblioteca: boolean, curso?: { __typename?: 'CursoType', nome: string, id: number } | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: any | null, hasNextPage?: boolean | null, hasPreviousPage?: boolean | null, startCursor?: any | null } } };

export type ModulosSelectQueryVariables = Exact<{
  filter?: InputMaybe<ModuloTypeFilter>;
  paging: CursorPaging;
  sorting: Array<ModuloTypeSort> | ModuloTypeSort;
}>;


export type ModulosSelectQuery = { __typename?: 'Query', modulos: { __typename?: 'ModuloTypeConnection', edges: Array<{ __typename?: 'ModuloTypeEdge', node: { __typename?: 'ModuloType', id: number, titulo: string } }> } };

export type ModulosTurmaQueryVariables = Exact<{
  filter?: InputMaybe<ModuloTypeFilter>;
  paging: CursorPaging;
  sorting: Array<ModuloTypeSort> | ModuloTypeSort;
  turmaId?: InputMaybe<Scalars['Float']['input']>;
}>;


export type ModulosTurmaQuery = { __typename?: 'Query', modulos: { __typename?: 'ModuloTypeConnection', edges: Array<{ __typename?: 'ModuloTypeEdge', node: { __typename?: 'ModuloType', updatedAt?: any | null, ordem: number, id: number, titulo: string, moduloLiberacaoTravas?: Array<{ __typename?: 'ModuloLiberacaoTravaType', dataLiberacao?: any | null, id: number }> | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: any | null, hasNextPage?: boolean | null, hasPreviousPage?: boolean | null, startCursor?: any | null } } };

export type PerguntaQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type PerguntaQuery = { __typename?: 'Query', pergunta?: { __typename?: 'Perguntas', id: number, descricao: string, multiEscolha: boolean, tipo?: string | null, formularioId: number, formulario?: { __typename?: 'Formularios', nome: string, id: number, subModulo?: { __typename?: 'SubModuloType', titulo: string, id: number, modulo?: { __typename?: 'ModuloType', id: number, titulo: string } | null } | null } | null, respostas?: Array<{ __typename?: 'Respostas', descricao: string, id: number, perguntaId: number, correta: boolean }> | null } | null };

export type PerguntasQueryVariables = Exact<{
  filter?: InputMaybe<PerguntasFilter>;
  paging: CursorPaging;
  sorting: Array<PerguntasSort> | PerguntasSort;
}>;


export type PerguntasQuery = { __typename?: 'Query', perguntas: { __typename?: 'PerguntasConnection', edges: Array<{ __typename?: 'PerguntasEdge', node: { __typename?: 'Perguntas', id: number, descricao: string, multiEscolha: boolean, tipo?: string | null, formularioId: number, formulario?: { __typename?: 'Formularios', nome: string, id: number, subModulo?: { __typename?: 'SubModuloType', titulo: string, id: number, modulo?: { __typename?: 'ModuloType', id: number, titulo: string } | null } | null } | null, respostas?: Array<{ __typename?: 'Respostas', descricao: string, id: number, perguntaId: number, correta: boolean }> | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: any | null, hasNextPage?: boolean | null, hasPreviousPage?: boolean | null, startCursor?: any | null } } };

export type SubModuloQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type SubModuloQuery = { __typename?: 'Query', subModulo?: { __typename?: 'SubModuloType', id: number, mensagem: string, moduloId: number, ordem: number, titulo: string, updatedAt?: any | null, modulo?: { __typename?: 'ModuloType', id: number, titulo: string, curso?: { __typename?: 'CursoType', id: number, nome: string } | null } | null } | null };

export type SubModulosQueryVariables = Exact<{
  filter: SubModuloTypeFilter;
  paging: CursorPaging;
  sorting: Array<SubModuloTypeSort> | SubModuloTypeSort;
}>;


export type SubModulosQuery = { __typename?: 'Query', subModulos: { __typename?: 'SubModuloTypeConnection', edges: Array<{ __typename?: 'SubModuloTypeEdge', node: { __typename?: 'SubModuloType', id: number, mensagem: string, moduloId: number, ordem: number, titulo: string, updatedAt?: any | null, url?: string | null, modulo?: { __typename?: 'ModuloType', id: number, titulo: string } | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: any | null, hasNextPage?: boolean | null, hasPreviousPage?: boolean | null, startCursor?: any | null } } };

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

export type UsuariosQueryVariables = Exact<{
  filter?: InputMaybe<UsuarioTypeFilter>;
  paging: CursorPaging;
  sorting: Array<UsuarioTypeSort> | UsuarioTypeSort;
}>;


export type UsuariosQuery = { __typename?: 'Query', usuarios: { __typename?: 'UsuarioTypeConnection', edges: Array<{ __typename?: 'UsuarioTypeEdge', node: { __typename?: 'UsuarioType', ativo: boolean, nome: string, email: string, id: number } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: any | null, hasNextPage?: boolean | null, hasPreviousPage?: boolean | null, startCursor?: any | null } } };


export const UpdateOneAlunoDocument = gql`
    mutation updateOneAluno($input: UpdateAlunoInput!) {
  updateOneAluno(updateAlunoInput: $input) {
    id
  }
}
    `;
export type UpdateOneAlunoMutationFn = Apollo.MutationFunction<UpdateOneAlunoMutation, UpdateOneAlunoMutationVariables>;

/**
 * __useUpdateOneAlunoMutation__
 *
 * To run a mutation, you first call `useUpdateOneAlunoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneAlunoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneAlunoMutation, { data, loading, error }] = useUpdateOneAlunoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneAlunoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneAlunoMutation, UpdateOneAlunoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneAlunoMutation, UpdateOneAlunoMutationVariables>(UpdateOneAlunoDocument, options);
      }
export type UpdateOneAlunoMutationHookResult = ReturnType<typeof useUpdateOneAlunoMutation>;
export type UpdateOneAlunoMutationResult = Apollo.MutationResult<UpdateOneAlunoMutation>;
export type UpdateOneAlunoMutationOptions = Apollo.BaseMutationOptions<UpdateOneAlunoMutation, UpdateOneAlunoMutationVariables>;
export const CreateArquivoDocument = gql`
    mutation createArquivo($arquivo: Upload!) {
  createArquivo(arquivo: $arquivo) {
    createdAt
    deletedAt
    extensao
    id
    mimetype
    nome
    pathBucket
    tamanho
    updatedAt
    url
  }
}
    `;
export type CreateArquivoMutationFn = Apollo.MutationFunction<CreateArquivoMutation, CreateArquivoMutationVariables>;

/**
 * __useCreateArquivoMutation__
 *
 * To run a mutation, you first call `useCreateArquivoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateArquivoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createArquivoMutation, { data, loading, error }] = useCreateArquivoMutation({
 *   variables: {
 *      arquivo: // value for 'arquivo'
 *   },
 * });
 */
export function useCreateArquivoMutation(baseOptions?: Apollo.MutationHookOptions<CreateArquivoMutation, CreateArquivoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateArquivoMutation, CreateArquivoMutationVariables>(CreateArquivoDocument, options);
      }
export type CreateArquivoMutationHookResult = ReturnType<typeof useCreateArquivoMutation>;
export type CreateArquivoMutationResult = Apollo.MutationResult<CreateArquivoMutation>;
export type CreateArquivoMutationOptions = Apollo.BaseMutationOptions<CreateArquivoMutation, CreateArquivoMutationVariables>;
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
  deleteOneAula(input: $input) {
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
    mutation createOneCurso($input: CreateCursoInput!, $arquivo: Upload) {
  createOneCurso(input: $input, arquivo: $arquivo) {
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
 *      arquivo: // value for 'arquivo'
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
    mutation updateOneCurso($arquivo: Upload, $update: UpdateCursoInput!, $id: Float!) {
  updateOneCurso(arquivo: $arquivo, id: $id, update: $update) {
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
 *      arquivo: // value for 'arquivo'
 *      update: // value for 'update'
 *      id: // value for 'id'
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
  deleteOneCurso(input: $input) {
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
export const CreateOneModuloLiberacaTravaDocument = gql`
    mutation createOneModuloLiberacaTrava($input: CreateOneModuloLiberacaoTravaTypeInput!) {
  CreateOneModuloLiberacaoTrava(input: $input) {
    id
  }
}
    `;
export type CreateOneModuloLiberacaTravaMutationFn = Apollo.MutationFunction<CreateOneModuloLiberacaTravaMutation, CreateOneModuloLiberacaTravaMutationVariables>;

/**
 * __useCreateOneModuloLiberacaTravaMutation__
 *
 * To run a mutation, you first call `useCreateOneModuloLiberacaTravaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneModuloLiberacaTravaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneModuloLiberacaTravaMutation, { data, loading, error }] = useCreateOneModuloLiberacaTravaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneModuloLiberacaTravaMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneModuloLiberacaTravaMutation, CreateOneModuloLiberacaTravaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneModuloLiberacaTravaMutation, CreateOneModuloLiberacaTravaMutationVariables>(CreateOneModuloLiberacaTravaDocument, options);
      }
export type CreateOneModuloLiberacaTravaMutationHookResult = ReturnType<typeof useCreateOneModuloLiberacaTravaMutation>;
export type CreateOneModuloLiberacaTravaMutationResult = Apollo.MutationResult<CreateOneModuloLiberacaTravaMutation>;
export type CreateOneModuloLiberacaTravaMutationOptions = Apollo.BaseMutationOptions<CreateOneModuloLiberacaTravaMutation, CreateOneModuloLiberacaTravaMutationVariables>;
export const UpdateOneModuloLiberacaTravaDocument = gql`
    mutation updateOneModuloLiberacaTrava($input: UpdateOneModuloLiberacaoTravaTypeInput!) {
  UpdateOneModuloLiberacaoTrava(input: $input) {
    id
  }
}
    `;
export type UpdateOneModuloLiberacaTravaMutationFn = Apollo.MutationFunction<UpdateOneModuloLiberacaTravaMutation, UpdateOneModuloLiberacaTravaMutationVariables>;

/**
 * __useUpdateOneModuloLiberacaTravaMutation__
 *
 * To run a mutation, you first call `useUpdateOneModuloLiberacaTravaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneModuloLiberacaTravaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneModuloLiberacaTravaMutation, { data, loading, error }] = useUpdateOneModuloLiberacaTravaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneModuloLiberacaTravaMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneModuloLiberacaTravaMutation, UpdateOneModuloLiberacaTravaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneModuloLiberacaTravaMutation, UpdateOneModuloLiberacaTravaMutationVariables>(UpdateOneModuloLiberacaTravaDocument, options);
      }
export type UpdateOneModuloLiberacaTravaMutationHookResult = ReturnType<typeof useUpdateOneModuloLiberacaTravaMutation>;
export type UpdateOneModuloLiberacaTravaMutationResult = Apollo.MutationResult<UpdateOneModuloLiberacaTravaMutation>;
export type UpdateOneModuloLiberacaTravaMutationOptions = Apollo.BaseMutationOptions<UpdateOneModuloLiberacaTravaMutation, UpdateOneModuloLiberacaTravaMutationVariables>;
export const CreateOneFormularioDocument = gql`
    mutation createOneFormulario($input: CreateOneFormulariosInput!) {
  createOneFormulario(input: $input) {
    id
  }
}
    `;
export type CreateOneFormularioMutationFn = Apollo.MutationFunction<CreateOneFormularioMutation, CreateOneFormularioMutationVariables>;

/**
 * __useCreateOneFormularioMutation__
 *
 * To run a mutation, you first call `useCreateOneFormularioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneFormularioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneFormularioMutation, { data, loading, error }] = useCreateOneFormularioMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneFormularioMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneFormularioMutation, CreateOneFormularioMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneFormularioMutation, CreateOneFormularioMutationVariables>(CreateOneFormularioDocument, options);
      }
export type CreateOneFormularioMutationHookResult = ReturnType<typeof useCreateOneFormularioMutation>;
export type CreateOneFormularioMutationResult = Apollo.MutationResult<CreateOneFormularioMutation>;
export type CreateOneFormularioMutationOptions = Apollo.BaseMutationOptions<CreateOneFormularioMutation, CreateOneFormularioMutationVariables>;
export const UpdateOneFormularioDocument = gql`
    mutation updateOneFormulario($input: UpdateOneFormulariosInput!) {
  updateOneFormulario(input: $input) {
    id
  }
}
    `;
export type UpdateOneFormularioMutationFn = Apollo.MutationFunction<UpdateOneFormularioMutation, UpdateOneFormularioMutationVariables>;

/**
 * __useUpdateOneFormularioMutation__
 *
 * To run a mutation, you first call `useUpdateOneFormularioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneFormularioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneFormularioMutation, { data, loading, error }] = useUpdateOneFormularioMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneFormularioMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneFormularioMutation, UpdateOneFormularioMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneFormularioMutation, UpdateOneFormularioMutationVariables>(UpdateOneFormularioDocument, options);
      }
export type UpdateOneFormularioMutationHookResult = ReturnType<typeof useUpdateOneFormularioMutation>;
export type UpdateOneFormularioMutationResult = Apollo.MutationResult<UpdateOneFormularioMutation>;
export type UpdateOneFormularioMutationOptions = Apollo.BaseMutationOptions<UpdateOneFormularioMutation, UpdateOneFormularioMutationVariables>;
export const DeleteOneFormularioDocument = gql`
    mutation deleteOneFormulario($input: DeleteOneFormulariosInput!) {
  deleteOneFormulario(input: $input) {
    id
  }
}
    `;
export type DeleteOneFormularioMutationFn = Apollo.MutationFunction<DeleteOneFormularioMutation, DeleteOneFormularioMutationVariables>;

/**
 * __useDeleteOneFormularioMutation__
 *
 * To run a mutation, you first call `useDeleteOneFormularioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneFormularioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneFormularioMutation, { data, loading, error }] = useDeleteOneFormularioMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOneFormularioMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneFormularioMutation, DeleteOneFormularioMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneFormularioMutation, DeleteOneFormularioMutationVariables>(DeleteOneFormularioDocument, options);
      }
export type DeleteOneFormularioMutationHookResult = ReturnType<typeof useDeleteOneFormularioMutation>;
export type DeleteOneFormularioMutationResult = Apollo.MutationResult<DeleteOneFormularioMutation>;
export type DeleteOneFormularioMutationOptions = Apollo.BaseMutationOptions<DeleteOneFormularioMutation, DeleteOneFormularioMutationVariables>;
export const ImportarHistoricoDocument = gql`
    mutation ImportarHistorico($file: Upload!, $input: CreateImportacaoHistoricoInput!) {
  importarHistorico(file: $file, input: $input) {
    id
  }
}
    `;
export type ImportarHistoricoMutationFn = Apollo.MutationFunction<ImportarHistoricoMutation, ImportarHistoricoMutationVariables>;

/**
 * __useImportarHistoricoMutation__
 *
 * To run a mutation, you first call `useImportarHistoricoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useImportarHistoricoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [importarHistoricoMutation, { data, loading, error }] = useImportarHistoricoMutation({
 *   variables: {
 *      file: // value for 'file'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useImportarHistoricoMutation(baseOptions?: Apollo.MutationHookOptions<ImportarHistoricoMutation, ImportarHistoricoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ImportarHistoricoMutation, ImportarHistoricoMutationVariables>(ImportarHistoricoDocument, options);
      }
export type ImportarHistoricoMutationHookResult = ReturnType<typeof useImportarHistoricoMutation>;
export type ImportarHistoricoMutationResult = Apollo.MutationResult<ImportarHistoricoMutation>;
export type ImportarHistoricoMutationOptions = Apollo.BaseMutationOptions<ImportarHistoricoMutation, ImportarHistoricoMutationVariables>;
export const CreateOneInscricaoDocument = gql`
    mutation CreateOneInscricao($input: CreateOneInscricaoTypeInput!) {
  CreateOneInscricao(input: $input) {
    id
  }
}
    `;
export type CreateOneInscricaoMutationFn = Apollo.MutationFunction<CreateOneInscricaoMutation, CreateOneInscricaoMutationVariables>;

/**
 * __useCreateOneInscricaoMutation__
 *
 * To run a mutation, you first call `useCreateOneInscricaoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneInscricaoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneInscricaoMutation, { data, loading, error }] = useCreateOneInscricaoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneInscricaoMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneInscricaoMutation, CreateOneInscricaoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneInscricaoMutation, CreateOneInscricaoMutationVariables>(CreateOneInscricaoDocument, options);
      }
export type CreateOneInscricaoMutationHookResult = ReturnType<typeof useCreateOneInscricaoMutation>;
export type CreateOneInscricaoMutationResult = Apollo.MutationResult<CreateOneInscricaoMutation>;
export type CreateOneInscricaoMutationOptions = Apollo.BaseMutationOptions<CreateOneInscricaoMutation, CreateOneInscricaoMutationVariables>;
export const UpdateOneInscricaoDocument = gql`
    mutation UpdateOneInscricao($input: UpdateOneInscricaoTypeInput!) {
  UpdateOneInscricao(input: $input) {
    id
  }
}
    `;
export type UpdateOneInscricaoMutationFn = Apollo.MutationFunction<UpdateOneInscricaoMutation, UpdateOneInscricaoMutationVariables>;

/**
 * __useUpdateOneInscricaoMutation__
 *
 * To run a mutation, you first call `useUpdateOneInscricaoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneInscricaoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneInscricaoMutation, { data, loading, error }] = useUpdateOneInscricaoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneInscricaoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneInscricaoMutation, UpdateOneInscricaoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneInscricaoMutation, UpdateOneInscricaoMutationVariables>(UpdateOneInscricaoDocument, options);
      }
export type UpdateOneInscricaoMutationHookResult = ReturnType<typeof useUpdateOneInscricaoMutation>;
export type UpdateOneInscricaoMutationResult = Apollo.MutationResult<UpdateOneInscricaoMutation>;
export type UpdateOneInscricaoMutationOptions = Apollo.BaseMutationOptions<UpdateOneInscricaoMutation, UpdateOneInscricaoMutationVariables>;
export const DeleteOneInscricaoDocument = gql`
    mutation DeleteOneInscricao($input: DeleteOneInscricaoTypeInput!) {
  DeleteOneInscricao(input: $input) {
    id
  }
}
    `;
export type DeleteOneInscricaoMutationFn = Apollo.MutationFunction<DeleteOneInscricaoMutation, DeleteOneInscricaoMutationVariables>;

/**
 * __useDeleteOneInscricaoMutation__
 *
 * To run a mutation, you first call `useDeleteOneInscricaoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneInscricaoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneInscricaoMutation, { data, loading, error }] = useDeleteOneInscricaoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOneInscricaoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneInscricaoMutation, DeleteOneInscricaoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneInscricaoMutation, DeleteOneInscricaoMutationVariables>(DeleteOneInscricaoDocument, options);
      }
export type DeleteOneInscricaoMutationHookResult = ReturnType<typeof useDeleteOneInscricaoMutation>;
export type DeleteOneInscricaoMutationResult = Apollo.MutationResult<DeleteOneInscricaoMutation>;
export type DeleteOneInscricaoMutationOptions = Apollo.BaseMutationOptions<DeleteOneInscricaoMutation, DeleteOneInscricaoMutationVariables>;
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
export const CreateOnePerguntaDocument = gql`
    mutation createOnePergunta($input: CreateOnePerguntasInput!) {
  createOnePergunta(input: $input) {
    id
  }
}
    `;
export type CreateOnePerguntaMutationFn = Apollo.MutationFunction<CreateOnePerguntaMutation, CreateOnePerguntaMutationVariables>;

/**
 * __useCreateOnePerguntaMutation__
 *
 * To run a mutation, you first call `useCreateOnePerguntaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOnePerguntaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOnePerguntaMutation, { data, loading, error }] = useCreateOnePerguntaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOnePerguntaMutation(baseOptions?: Apollo.MutationHookOptions<CreateOnePerguntaMutation, CreateOnePerguntaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOnePerguntaMutation, CreateOnePerguntaMutationVariables>(CreateOnePerguntaDocument, options);
      }
export type CreateOnePerguntaMutationHookResult = ReturnType<typeof useCreateOnePerguntaMutation>;
export type CreateOnePerguntaMutationResult = Apollo.MutationResult<CreateOnePerguntaMutation>;
export type CreateOnePerguntaMutationOptions = Apollo.BaseMutationOptions<CreateOnePerguntaMutation, CreateOnePerguntaMutationVariables>;
export const UpdateOnePerguntaDocument = gql`
    mutation updateOnePergunta($input: UpdateOnePerguntasInput!) {
  updateOnePergunta(input: $input) {
    id
  }
}
    `;
export type UpdateOnePerguntaMutationFn = Apollo.MutationFunction<UpdateOnePerguntaMutation, UpdateOnePerguntaMutationVariables>;

/**
 * __useUpdateOnePerguntaMutation__
 *
 * To run a mutation, you first call `useUpdateOnePerguntaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOnePerguntaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOnePerguntaMutation, { data, loading, error }] = useUpdateOnePerguntaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOnePerguntaMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOnePerguntaMutation, UpdateOnePerguntaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOnePerguntaMutation, UpdateOnePerguntaMutationVariables>(UpdateOnePerguntaDocument, options);
      }
export type UpdateOnePerguntaMutationHookResult = ReturnType<typeof useUpdateOnePerguntaMutation>;
export type UpdateOnePerguntaMutationResult = Apollo.MutationResult<UpdateOnePerguntaMutation>;
export type UpdateOnePerguntaMutationOptions = Apollo.BaseMutationOptions<UpdateOnePerguntaMutation, UpdateOnePerguntaMutationVariables>;
export const DeleteOnePerguntaDocument = gql`
    mutation deleteOnePergunta($input: DeleteOnePerguntasInput!) {
  deleteOnePergunta(input: $input) {
    id
  }
}
    `;
export type DeleteOnePerguntaMutationFn = Apollo.MutationFunction<DeleteOnePerguntaMutation, DeleteOnePerguntaMutationVariables>;

/**
 * __useDeleteOnePerguntaMutation__
 *
 * To run a mutation, you first call `useDeleteOnePerguntaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOnePerguntaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOnePerguntaMutation, { data, loading, error }] = useDeleteOnePerguntaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOnePerguntaMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOnePerguntaMutation, DeleteOnePerguntaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOnePerguntaMutation, DeleteOnePerguntaMutationVariables>(DeleteOnePerguntaDocument, options);
      }
export type DeleteOnePerguntaMutationHookResult = ReturnType<typeof useDeleteOnePerguntaMutation>;
export type DeleteOnePerguntaMutationResult = Apollo.MutationResult<DeleteOnePerguntaMutation>;
export type DeleteOnePerguntaMutationOptions = Apollo.BaseMutationOptions<DeleteOnePerguntaMutation, DeleteOnePerguntaMutationVariables>;
export const CreateOneRespostaDocument = gql`
    mutation createOneResposta($input: CreateOneRespostasInput!) {
  createOneResposta(input: $input) {
    id
  }
}
    `;
export type CreateOneRespostaMutationFn = Apollo.MutationFunction<CreateOneRespostaMutation, CreateOneRespostaMutationVariables>;

/**
 * __useCreateOneRespostaMutation__
 *
 * To run a mutation, you first call `useCreateOneRespostaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneRespostaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneRespostaMutation, { data, loading, error }] = useCreateOneRespostaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneRespostaMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneRespostaMutation, CreateOneRespostaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneRespostaMutation, CreateOneRespostaMutationVariables>(CreateOneRespostaDocument, options);
      }
export type CreateOneRespostaMutationHookResult = ReturnType<typeof useCreateOneRespostaMutation>;
export type CreateOneRespostaMutationResult = Apollo.MutationResult<CreateOneRespostaMutation>;
export type CreateOneRespostaMutationOptions = Apollo.BaseMutationOptions<CreateOneRespostaMutation, CreateOneRespostaMutationVariables>;
export const UpdateOneRespostaDocument = gql`
    mutation updateOneResposta($input: UpdateOneRespostasInput!) {
  updateOneResposta(input: $input) {
    id
  }
}
    `;
export type UpdateOneRespostaMutationFn = Apollo.MutationFunction<UpdateOneRespostaMutation, UpdateOneRespostaMutationVariables>;

/**
 * __useUpdateOneRespostaMutation__
 *
 * To run a mutation, you first call `useUpdateOneRespostaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneRespostaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneRespostaMutation, { data, loading, error }] = useUpdateOneRespostaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneRespostaMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneRespostaMutation, UpdateOneRespostaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneRespostaMutation, UpdateOneRespostaMutationVariables>(UpdateOneRespostaDocument, options);
      }
export type UpdateOneRespostaMutationHookResult = ReturnType<typeof useUpdateOneRespostaMutation>;
export type UpdateOneRespostaMutationResult = Apollo.MutationResult<UpdateOneRespostaMutation>;
export type UpdateOneRespostaMutationOptions = Apollo.BaseMutationOptions<UpdateOneRespostaMutation, UpdateOneRespostaMutationVariables>;
export const DeleteOneRespostaDocument = gql`
    mutation deleteOneResposta($input: DeleteOneRespostasInput!) {
  deleteOneResposta(input: $input) {
    id
  }
}
    `;
export type DeleteOneRespostaMutationFn = Apollo.MutationFunction<DeleteOneRespostaMutation, DeleteOneRespostaMutationVariables>;

/**
 * __useDeleteOneRespostaMutation__
 *
 * To run a mutation, you first call `useDeleteOneRespostaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneRespostaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneRespostaMutation, { data, loading, error }] = useDeleteOneRespostaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOneRespostaMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneRespostaMutation, DeleteOneRespostaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneRespostaMutation, DeleteOneRespostaMutationVariables>(DeleteOneRespostaDocument, options);
      }
export type DeleteOneRespostaMutationHookResult = ReturnType<typeof useDeleteOneRespostaMutation>;
export type DeleteOneRespostaMutationResult = Apollo.MutationResult<DeleteOneRespostaMutation>;
export type DeleteOneRespostaMutationOptions = Apollo.BaseMutationOptions<DeleteOneRespostaMutation, DeleteOneRespostaMutationVariables>;
export const CreateOneSubModuloDocument = gql`
    mutation createOneSubModulo($input: CreateSubModuloInput!, $arquivo: Upload) {
  createOneSubModulo(input: $input, arquivo: $arquivo) {
    id
  }
}
    `;
export type CreateOneSubModuloMutationFn = Apollo.MutationFunction<CreateOneSubModuloMutation, CreateOneSubModuloMutationVariables>;

/**
 * __useCreateOneSubModuloMutation__
 *
 * To run a mutation, you first call `useCreateOneSubModuloMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneSubModuloMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneSubModuloMutation, { data, loading, error }] = useCreateOneSubModuloMutation({
 *   variables: {
 *      input: // value for 'input'
 *      arquivo: // value for 'arquivo'
 *   },
 * });
 */
export function useCreateOneSubModuloMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneSubModuloMutation, CreateOneSubModuloMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneSubModuloMutation, CreateOneSubModuloMutationVariables>(CreateOneSubModuloDocument, options);
      }
export type CreateOneSubModuloMutationHookResult = ReturnType<typeof useCreateOneSubModuloMutation>;
export type CreateOneSubModuloMutationResult = Apollo.MutationResult<CreateOneSubModuloMutation>;
export type CreateOneSubModuloMutationOptions = Apollo.BaseMutationOptions<CreateOneSubModuloMutation, CreateOneSubModuloMutationVariables>;
export const UpdateOneSubModuloDocument = gql`
    mutation updateOneSubModulo($update: UpdateSubModuloInput!, $arquivo: Upload, $id: Float!) {
  updateOneSubModulo(update: $update, arquivo: $arquivo, id: $id) {
    id
  }
}
    `;
export type UpdateOneSubModuloMutationFn = Apollo.MutationFunction<UpdateOneSubModuloMutation, UpdateOneSubModuloMutationVariables>;

/**
 * __useUpdateOneSubModuloMutation__
 *
 * To run a mutation, you first call `useUpdateOneSubModuloMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneSubModuloMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneSubModuloMutation, { data, loading, error }] = useUpdateOneSubModuloMutation({
 *   variables: {
 *      update: // value for 'update'
 *      arquivo: // value for 'arquivo'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateOneSubModuloMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneSubModuloMutation, UpdateOneSubModuloMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneSubModuloMutation, UpdateOneSubModuloMutationVariables>(UpdateOneSubModuloDocument, options);
      }
export type UpdateOneSubModuloMutationHookResult = ReturnType<typeof useUpdateOneSubModuloMutation>;
export type UpdateOneSubModuloMutationResult = Apollo.MutationResult<UpdateOneSubModuloMutation>;
export type UpdateOneSubModuloMutationOptions = Apollo.BaseMutationOptions<UpdateOneSubModuloMutation, UpdateOneSubModuloMutationVariables>;
export const DeleteOneSubModuloDocument = gql`
    mutation deleteOneSubModulo($input: DeleteOneSubModuloTypeInput!) {
  deleteOneSubModulo(input: $input) {
    id
  }
}
    `;
export type DeleteOneSubModuloMutationFn = Apollo.MutationFunction<DeleteOneSubModuloMutation, DeleteOneSubModuloMutationVariables>;

/**
 * __useDeleteOneSubModuloMutation__
 *
 * To run a mutation, you first call `useDeleteOneSubModuloMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneSubModuloMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneSubModuloMutation, { data, loading, error }] = useDeleteOneSubModuloMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOneSubModuloMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneSubModuloMutation, DeleteOneSubModuloMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneSubModuloMutation, DeleteOneSubModuloMutationVariables>(DeleteOneSubModuloDocument, options);
      }
export type DeleteOneSubModuloMutationHookResult = ReturnType<typeof useDeleteOneSubModuloMutation>;
export type DeleteOneSubModuloMutationResult = Apollo.MutationResult<DeleteOneSubModuloMutation>;
export type DeleteOneSubModuloMutationOptions = Apollo.BaseMutationOptions<DeleteOneSubModuloMutation, DeleteOneSubModuloMutationVariables>;
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
  deleteOneTurma(input: $input) {
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
export const AlunosDocument = gql`
    query Alunos($filter: AlunoTypeFilter, $paging: CursorPaging!, $sorting: [AlunoTypeSort!]!) {
  alunos(filter: $filter, paging: $paging, sorting: $sorting) {
    edges {
      node {
        id
        nome
        cpf
        email
        matricula
        inscricoes {
          id
          status
          turma {
            nome
            id
          }
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
 * __useAlunosQuery__
 *
 * To run a query within a React component, call `useAlunosQuery` and pass it any options that fit your needs.
 * When your component renders, `useAlunosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAlunosQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useAlunosQuery(baseOptions: Apollo.QueryHookOptions<AlunosQuery, AlunosQueryVariables> & ({ variables: AlunosQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AlunosQuery, AlunosQueryVariables>(AlunosDocument, options);
      }
export function useAlunosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AlunosQuery, AlunosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AlunosQuery, AlunosQueryVariables>(AlunosDocument, options);
        }
export function useAlunosSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AlunosQuery, AlunosQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AlunosQuery, AlunosQueryVariables>(AlunosDocument, options);
        }
export type AlunosQueryHookResult = ReturnType<typeof useAlunosQuery>;
export type AlunosLazyQueryHookResult = ReturnType<typeof useAlunosLazyQuery>;
export type AlunosSuspenseQueryHookResult = ReturnType<typeof useAlunosSuspenseQuery>;
export type AlunosQueryResult = Apollo.QueryResult<AlunosQuery, AlunosQueryVariables>;
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
export const AulasTotalDocument = gql`
    query AulasTotal($filter: AulaTypeFilter, $paging: CursorPaging!) {
  aulas(filter: $filter, paging: $paging) {
    totalCount
  }
}
    `;

/**
 * __useAulasTotalQuery__
 *
 * To run a query within a React component, call `useAulasTotalQuery` and pass it any options that fit your needs.
 * When your component renders, `useAulasTotalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAulasTotalQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *   },
 * });
 */
export function useAulasTotalQuery(baseOptions: Apollo.QueryHookOptions<AulasTotalQuery, AulasTotalQueryVariables> & ({ variables: AulasTotalQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AulasTotalQuery, AulasTotalQueryVariables>(AulasTotalDocument, options);
      }
export function useAulasTotalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AulasTotalQuery, AulasTotalQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AulasTotalQuery, AulasTotalQueryVariables>(AulasTotalDocument, options);
        }
export function useAulasTotalSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AulasTotalQuery, AulasTotalQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AulasTotalQuery, AulasTotalQueryVariables>(AulasTotalDocument, options);
        }
export type AulasTotalQueryHookResult = ReturnType<typeof useAulasTotalQuery>;
export type AulasTotalLazyQueryHookResult = ReturnType<typeof useAulasTotalLazyQuery>;
export type AulasTotalSuspenseQueryHookResult = ReturnType<typeof useAulasTotalSuspenseQuery>;
export type AulasTotalQueryResult = Apollo.QueryResult<AulasTotalQuery, AulasTotalQueryVariables>;
export const CursoDocument = gql`
    query Curso($id: Int!, $bilbioteca: Boolean) {
  curso(id: $id) {
    ativo
    createdAt
    deletedAt
    descricao
    id
    nome
    icone
    url
    updatedAt
    modulos(filter: {biblioteca: {is: $bilbioteca}}) {
      id
    }
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
 *      bilbioteca: // value for 'bilbioteca'
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
        icone
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
export const DashboardDocument = gql`
    query Dashboard {
  respostas {
    totalCount
    __typename
  }
  perguntas {
    totalCount
    __typename
  }
  formularios {
    totalCount
    __typename
  }
  modulos {
    totalCount
    __typename
  }
  aulasBiblioteca: aulas(filter: {moduloId: {isNot: null}}) {
    totalCount
  }
  aulas(filter: {moduloId: {is: null}}) {
    totalCount
  }
  todasAulas: aulas {
    totalCount
  }
  turmas {
    totalCount
    __typename
  }
  inscricoes {
    totalCount
    __typename
  }
  alunos {
    totalCount
    __typename
  }
  cursos {
    totalCount
    __typename
  }
}
    `;

/**
 * __useDashboardQuery__
 *
 * To run a query within a React component, call `useDashboardQuery` and pass it any options that fit your needs.
 * When your component renders, `useDashboardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDashboardQuery({
 *   variables: {
 *   },
 * });
 */
export function useDashboardQuery(baseOptions?: Apollo.QueryHookOptions<DashboardQuery, DashboardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DashboardQuery, DashboardQueryVariables>(DashboardDocument, options);
      }
export function useDashboardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DashboardQuery, DashboardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DashboardQuery, DashboardQueryVariables>(DashboardDocument, options);
        }
export function useDashboardSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<DashboardQuery, DashboardQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<DashboardQuery, DashboardQueryVariables>(DashboardDocument, options);
        }
export type DashboardQueryHookResult = ReturnType<typeof useDashboardQuery>;
export type DashboardLazyQueryHookResult = ReturnType<typeof useDashboardLazyQuery>;
export type DashboardSuspenseQueryHookResult = ReturnType<typeof useDashboardSuspenseQuery>;
export type DashboardQueryResult = Apollo.QueryResult<DashboardQuery, DashboardQueryVariables>;
export const FormularioDocument = gql`
    query Formulario($id: Int!) {
  formulario(id: $id) {
    id
    nome
    perguntas(sorting: {field: descricao, direction: ASC}) {
      id
      descricao
      multiEscolha
      tipo
      formularioId
    }
    subModulo {
      titulo
      id
      modulo {
        id
        titulo
      }
    }
  }
}
    `;

/**
 * __useFormularioQuery__
 *
 * To run a query within a React component, call `useFormularioQuery` and pass it any options that fit your needs.
 * When your component renders, `useFormularioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFormularioQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFormularioQuery(baseOptions: Apollo.QueryHookOptions<FormularioQuery, FormularioQueryVariables> & ({ variables: FormularioQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FormularioQuery, FormularioQueryVariables>(FormularioDocument, options);
      }
export function useFormularioLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FormularioQuery, FormularioQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FormularioQuery, FormularioQueryVariables>(FormularioDocument, options);
        }
export function useFormularioSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FormularioQuery, FormularioQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FormularioQuery, FormularioQueryVariables>(FormularioDocument, options);
        }
export type FormularioQueryHookResult = ReturnType<typeof useFormularioQuery>;
export type FormularioLazyQueryHookResult = ReturnType<typeof useFormularioLazyQuery>;
export type FormularioSuspenseQueryHookResult = ReturnType<typeof useFormularioSuspenseQuery>;
export type FormularioQueryResult = Apollo.QueryResult<FormularioQuery, FormularioQueryVariables>;
export const FormulariosDocument = gql`
    query Formularios($filter: FormulariosFilter, $paging: CursorPaging!, $sorting: [FormulariosSort!]!) {
  formularios(filter: $filter, paging: $paging, sorting: $sorting) {
    edges {
      node {
        id
        nome
        perguntas {
          id
        }
        subModulo {
          titulo
          id
          modulo {
            id
            titulo
          }
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
 * __useFormulariosQuery__
 *
 * To run a query within a React component, call `useFormulariosQuery` and pass it any options that fit your needs.
 * When your component renders, `useFormulariosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFormulariosQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useFormulariosQuery(baseOptions: Apollo.QueryHookOptions<FormulariosQuery, FormulariosQueryVariables> & ({ variables: FormulariosQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FormulariosQuery, FormulariosQueryVariables>(FormulariosDocument, options);
      }
export function useFormulariosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FormulariosQuery, FormulariosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FormulariosQuery, FormulariosQueryVariables>(FormulariosDocument, options);
        }
export function useFormulariosSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FormulariosQuery, FormulariosQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FormulariosQuery, FormulariosQueryVariables>(FormulariosDocument, options);
        }
export type FormulariosQueryHookResult = ReturnType<typeof useFormulariosQuery>;
export type FormulariosLazyQueryHookResult = ReturnType<typeof useFormulariosLazyQuery>;
export type FormulariosSuspenseQueryHookResult = ReturnType<typeof useFormulariosSuspenseQuery>;
export type FormulariosQueryResult = Apollo.QueryResult<FormulariosQuery, FormulariosQueryVariables>;
export const FormulariosSelectDocument = gql`
    query FormulariosSelect($filter: FormulariosFilter, $paging: CursorPaging!, $sorting: [FormulariosSort!]!) {
  formularios(filter: $filter, paging: $paging, sorting: $sorting) {
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
 * __useFormulariosSelectQuery__
 *
 * To run a query within a React component, call `useFormulariosSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useFormulariosSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFormulariosSelectQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useFormulariosSelectQuery(baseOptions: Apollo.QueryHookOptions<FormulariosSelectQuery, FormulariosSelectQueryVariables> & ({ variables: FormulariosSelectQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FormulariosSelectQuery, FormulariosSelectQueryVariables>(FormulariosSelectDocument, options);
      }
export function useFormulariosSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FormulariosSelectQuery, FormulariosSelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FormulariosSelectQuery, FormulariosSelectQueryVariables>(FormulariosSelectDocument, options);
        }
export function useFormulariosSelectSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FormulariosSelectQuery, FormulariosSelectQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FormulariosSelectQuery, FormulariosSelectQueryVariables>(FormulariosSelectDocument, options);
        }
export type FormulariosSelectQueryHookResult = ReturnType<typeof useFormulariosSelectQuery>;
export type FormulariosSelectLazyQueryHookResult = ReturnType<typeof useFormulariosSelectLazyQuery>;
export type FormulariosSelectSuspenseQueryHookResult = ReturnType<typeof useFormulariosSelectSuspenseQuery>;
export type FormulariosSelectQueryResult = Apollo.QueryResult<FormulariosSelectQuery, FormulariosSelectQueryVariables>;
export const ImportacoesHistoricoDocument = gql`
    query ImportacoesHistorico($filter: ImportacaoHistoricoTypeFilter, $paging: CursorPaging!, $sorting: [ImportacaoHistoricoTypeSort!]!) {
  importacaoHistoricoTypes(filter: $filter, paging: $paging, sorting: $sorting) {
    edges {
      cursor
      node {
        createdAt
        id
        nomePlanilha
        quantidadeImportada
        turmaId
        status
        errosImport
        turma {
          nome
          id
          curso {
            nome
            id
          }
        }
        usuario {
          nome
          id
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
 * __useImportacoesHistoricoQuery__
 *
 * To run a query within a React component, call `useImportacoesHistoricoQuery` and pass it any options that fit your needs.
 * When your component renders, `useImportacoesHistoricoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useImportacoesHistoricoQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useImportacoesHistoricoQuery(baseOptions: Apollo.QueryHookOptions<ImportacoesHistoricoQuery, ImportacoesHistoricoQueryVariables> & ({ variables: ImportacoesHistoricoQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ImportacoesHistoricoQuery, ImportacoesHistoricoQueryVariables>(ImportacoesHistoricoDocument, options);
      }
export function useImportacoesHistoricoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ImportacoesHistoricoQuery, ImportacoesHistoricoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ImportacoesHistoricoQuery, ImportacoesHistoricoQueryVariables>(ImportacoesHistoricoDocument, options);
        }
export function useImportacoesHistoricoSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ImportacoesHistoricoQuery, ImportacoesHistoricoQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ImportacoesHistoricoQuery, ImportacoesHistoricoQueryVariables>(ImportacoesHistoricoDocument, options);
        }
export type ImportacoesHistoricoQueryHookResult = ReturnType<typeof useImportacoesHistoricoQuery>;
export type ImportacoesHistoricoLazyQueryHookResult = ReturnType<typeof useImportacoesHistoricoLazyQuery>;
export type ImportacoesHistoricoSuspenseQueryHookResult = ReturnType<typeof useImportacoesHistoricoSuspenseQuery>;
export type ImportacoesHistoricoQueryResult = Apollo.QueryResult<ImportacoesHistoricoQuery, ImportacoesHistoricoQueryVariables>;
export const ImportacaoHistoricoDocument = gql`
    query ImportacaoHistorico($id: Int!) {
  importacaoHistoricoType(id: $id) {
    createdAt
    id
    nomePlanilha
    quantidadeImportada
    turmaId
    status
    usuario {
      nome
      id
    }
    turma {
      nome
      id
      curso {
        nome
        id
      }
    }
  }
}
    `;

/**
 * __useImportacaoHistoricoQuery__
 *
 * To run a query within a React component, call `useImportacaoHistoricoQuery` and pass it any options that fit your needs.
 * When your component renders, `useImportacaoHistoricoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useImportacaoHistoricoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useImportacaoHistoricoQuery(baseOptions: Apollo.QueryHookOptions<ImportacaoHistoricoQuery, ImportacaoHistoricoQueryVariables> & ({ variables: ImportacaoHistoricoQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ImportacaoHistoricoQuery, ImportacaoHistoricoQueryVariables>(ImportacaoHistoricoDocument, options);
      }
export function useImportacaoHistoricoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ImportacaoHistoricoQuery, ImportacaoHistoricoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ImportacaoHistoricoQuery, ImportacaoHistoricoQueryVariables>(ImportacaoHistoricoDocument, options);
        }
export function useImportacaoHistoricoSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ImportacaoHistoricoQuery, ImportacaoHistoricoQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ImportacaoHistoricoQuery, ImportacaoHistoricoQueryVariables>(ImportacaoHistoricoDocument, options);
        }
export type ImportacaoHistoricoQueryHookResult = ReturnType<typeof useImportacaoHistoricoQuery>;
export type ImportacaoHistoricoLazyQueryHookResult = ReturnType<typeof useImportacaoHistoricoLazyQuery>;
export type ImportacaoHistoricoSuspenseQueryHookResult = ReturnType<typeof useImportacaoHistoricoSuspenseQuery>;
export type ImportacaoHistoricoQueryResult = Apollo.QueryResult<ImportacaoHistoricoQuery, ImportacaoHistoricoQueryVariables>;
export const InscricaoDocument = gql`
    query Inscricao($id: Int!) {
  inscricao(id: $id) {
    id
    aluno {
      id
      cpf
      nome
    }
    dataInscricao
    turma {
      id
      descricao
    }
  }
}
    `;

/**
 * __useInscricaoQuery__
 *
 * To run a query within a React component, call `useInscricaoQuery` and pass it any options that fit your needs.
 * When your component renders, `useInscricaoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInscricaoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useInscricaoQuery(baseOptions: Apollo.QueryHookOptions<InscricaoQuery, InscricaoQueryVariables> & ({ variables: InscricaoQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InscricaoQuery, InscricaoQueryVariables>(InscricaoDocument, options);
      }
export function useInscricaoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InscricaoQuery, InscricaoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InscricaoQuery, InscricaoQueryVariables>(InscricaoDocument, options);
        }
export function useInscricaoSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<InscricaoQuery, InscricaoQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<InscricaoQuery, InscricaoQueryVariables>(InscricaoDocument, options);
        }
export type InscricaoQueryHookResult = ReturnType<typeof useInscricaoQuery>;
export type InscricaoLazyQueryHookResult = ReturnType<typeof useInscricaoLazyQuery>;
export type InscricaoSuspenseQueryHookResult = ReturnType<typeof useInscricaoSuspenseQuery>;
export type InscricaoQueryResult = Apollo.QueryResult<InscricaoQuery, InscricaoQueryVariables>;
export const InscricoesDocument = gql`
    query Inscricoes($filter: InscricaoTypeFilter, $paging: CursorPaging!, $sorting: [InscricaoTypeSort!]!) {
  inscricoes(filter: $filter, paging: $paging, sorting: $sorting) {
    edges {
      cursor
      node {
        id
        aluno {
          id
          cpf
          nome
          matricula
        }
        status
        dataInscricao
        turma {
          id
          nome
          curso {
            id
            nome
          }
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
 * __useInscricoesQuery__
 *
 * To run a query within a React component, call `useInscricoesQuery` and pass it any options that fit your needs.
 * When your component renders, `useInscricoesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInscricoesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useInscricoesQuery(baseOptions: Apollo.QueryHookOptions<InscricoesQuery, InscricoesQueryVariables> & ({ variables: InscricoesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InscricoesQuery, InscricoesQueryVariables>(InscricoesDocument, options);
      }
export function useInscricoesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InscricoesQuery, InscricoesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InscricoesQuery, InscricoesQueryVariables>(InscricoesDocument, options);
        }
export function useInscricoesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<InscricoesQuery, InscricoesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<InscricoesQuery, InscricoesQueryVariables>(InscricoesDocument, options);
        }
export type InscricoesQueryHookResult = ReturnType<typeof useInscricoesQuery>;
export type InscricoesLazyQueryHookResult = ReturnType<typeof useInscricoesLazyQuery>;
export type InscricoesSuspenseQueryHookResult = ReturnType<typeof useInscricoesSuspenseQuery>;
export type InscricoesQueryResult = Apollo.QueryResult<InscricoesQuery, InscricoesQueryVariables>;
export const InscricoesImportacaoDocument = gql`
    query InscricoesImportacao($filter: InscricaoTypeFilter, $paging: CursorPaging!, $sorting: [InscricaoTypeSort!]!) {
  inscricoes(filter: $filter, paging: $paging, sorting: $sorting) {
    edges {
      cursor
      node {
        id
        aluno {
          id
          matricula
          nome
        }
        descricaoStatus
        status
        dataInscricao
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
 * __useInscricoesImportacaoQuery__
 *
 * To run a query within a React component, call `useInscricoesImportacaoQuery` and pass it any options that fit your needs.
 * When your component renders, `useInscricoesImportacaoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInscricoesImportacaoQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useInscricoesImportacaoQuery(baseOptions: Apollo.QueryHookOptions<InscricoesImportacaoQuery, InscricoesImportacaoQueryVariables> & ({ variables: InscricoesImportacaoQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InscricoesImportacaoQuery, InscricoesImportacaoQueryVariables>(InscricoesImportacaoDocument, options);
      }
export function useInscricoesImportacaoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InscricoesImportacaoQuery, InscricoesImportacaoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InscricoesImportacaoQuery, InscricoesImportacaoQueryVariables>(InscricoesImportacaoDocument, options);
        }
export function useInscricoesImportacaoSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<InscricoesImportacaoQuery, InscricoesImportacaoQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<InscricoesImportacaoQuery, InscricoesImportacaoQueryVariables>(InscricoesImportacaoDocument, options);
        }
export type InscricoesImportacaoQueryHookResult = ReturnType<typeof useInscricoesImportacaoQuery>;
export type InscricoesImportacaoLazyQueryHookResult = ReturnType<typeof useInscricoesImportacaoLazyQuery>;
export type InscricoesImportacaoSuspenseQueryHookResult = ReturnType<typeof useInscricoesImportacaoSuspenseQuery>;
export type InscricoesImportacaoQueryResult = Apollo.QueryResult<InscricoesImportacaoQuery, InscricoesImportacaoQueryVariables>;
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
      id
    }
    subModulos(sorting: {field: ordem, direction: ASC}) {
      id
      mensagem
      modulo {
        id
        titulo
      }
      moduloId
      ordem
      titulo
      updatedAt
      url
    }
    biblioteca
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
          id
        }
        descricao
        id
        titulo
        biblioteca
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
export const ModulosTurmaDocument = gql`
    query ModulosTurma($filter: ModuloTypeFilter, $paging: CursorPaging!, $sorting: [ModuloTypeSort!]!, $turmaId: Float) {
  modulos(filter: $filter, paging: $paging, sorting: $sorting) {
    edges {
      node {
        updatedAt
        ordem
        moduloLiberacaoTravas(filter: {turmaId: {eq: $turmaId}}) {
          dataLiberacao
          id
        }
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
 * __useModulosTurmaQuery__
 *
 * To run a query within a React component, call `useModulosTurmaQuery` and pass it any options that fit your needs.
 * When your component renders, `useModulosTurmaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useModulosTurmaQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *      turmaId: // value for 'turmaId'
 *   },
 * });
 */
export function useModulosTurmaQuery(baseOptions: Apollo.QueryHookOptions<ModulosTurmaQuery, ModulosTurmaQueryVariables> & ({ variables: ModulosTurmaQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ModulosTurmaQuery, ModulosTurmaQueryVariables>(ModulosTurmaDocument, options);
      }
export function useModulosTurmaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ModulosTurmaQuery, ModulosTurmaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ModulosTurmaQuery, ModulosTurmaQueryVariables>(ModulosTurmaDocument, options);
        }
export function useModulosTurmaSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ModulosTurmaQuery, ModulosTurmaQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ModulosTurmaQuery, ModulosTurmaQueryVariables>(ModulosTurmaDocument, options);
        }
export type ModulosTurmaQueryHookResult = ReturnType<typeof useModulosTurmaQuery>;
export type ModulosTurmaLazyQueryHookResult = ReturnType<typeof useModulosTurmaLazyQuery>;
export type ModulosTurmaSuspenseQueryHookResult = ReturnType<typeof useModulosTurmaSuspenseQuery>;
export type ModulosTurmaQueryResult = Apollo.QueryResult<ModulosTurmaQuery, ModulosTurmaQueryVariables>;
export const PerguntaDocument = gql`
    query Pergunta($id: Int!) {
  pergunta(id: $id) {
    id
    descricao
    multiEscolha
    tipo
    formularioId
    formulario {
      nome
      id
      subModulo {
        titulo
        id
        modulo {
          id
          titulo
        }
      }
    }
    respostas {
      descricao
      id
      perguntaId
      correta
    }
  }
}
    `;

/**
 * __usePerguntaQuery__
 *
 * To run a query within a React component, call `usePerguntaQuery` and pass it any options that fit your needs.
 * When your component renders, `usePerguntaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePerguntaQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePerguntaQuery(baseOptions: Apollo.QueryHookOptions<PerguntaQuery, PerguntaQueryVariables> & ({ variables: PerguntaQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PerguntaQuery, PerguntaQueryVariables>(PerguntaDocument, options);
      }
export function usePerguntaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PerguntaQuery, PerguntaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PerguntaQuery, PerguntaQueryVariables>(PerguntaDocument, options);
        }
export function usePerguntaSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PerguntaQuery, PerguntaQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PerguntaQuery, PerguntaQueryVariables>(PerguntaDocument, options);
        }
export type PerguntaQueryHookResult = ReturnType<typeof usePerguntaQuery>;
export type PerguntaLazyQueryHookResult = ReturnType<typeof usePerguntaLazyQuery>;
export type PerguntaSuspenseQueryHookResult = ReturnType<typeof usePerguntaSuspenseQuery>;
export type PerguntaQueryResult = Apollo.QueryResult<PerguntaQuery, PerguntaQueryVariables>;
export const PerguntasDocument = gql`
    query Perguntas($filter: PerguntasFilter, $paging: CursorPaging!, $sorting: [PerguntasSort!]!) {
  perguntas(filter: $filter, paging: $paging, sorting: $sorting) {
    edges {
      node {
        id
        descricao
        multiEscolha
        tipo
        formularioId
        formulario {
          nome
          id
          subModulo {
            titulo
            id
            modulo {
              id
              titulo
            }
          }
        }
        respostas {
          descricao
          id
          perguntaId
          correta
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
 * __usePerguntasQuery__
 *
 * To run a query within a React component, call `usePerguntasQuery` and pass it any options that fit your needs.
 * When your component renders, `usePerguntasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePerguntasQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function usePerguntasQuery(baseOptions: Apollo.QueryHookOptions<PerguntasQuery, PerguntasQueryVariables> & ({ variables: PerguntasQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PerguntasQuery, PerguntasQueryVariables>(PerguntasDocument, options);
      }
export function usePerguntasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PerguntasQuery, PerguntasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PerguntasQuery, PerguntasQueryVariables>(PerguntasDocument, options);
        }
export function usePerguntasSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PerguntasQuery, PerguntasQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PerguntasQuery, PerguntasQueryVariables>(PerguntasDocument, options);
        }
export type PerguntasQueryHookResult = ReturnType<typeof usePerguntasQuery>;
export type PerguntasLazyQueryHookResult = ReturnType<typeof usePerguntasLazyQuery>;
export type PerguntasSuspenseQueryHookResult = ReturnType<typeof usePerguntasSuspenseQuery>;
export type PerguntasQueryResult = Apollo.QueryResult<PerguntasQuery, PerguntasQueryVariables>;
export const SubModuloDocument = gql`
    query SubModulo($id: Int!) {
  subModulo(id: $id) {
    id
    mensagem
    modulo {
      id
      titulo
      curso {
        id
        nome
      }
    }
    moduloId
    ordem
    titulo
    updatedAt
  }
}
    `;

/**
 * __useSubModuloQuery__
 *
 * To run a query within a React component, call `useSubModuloQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubModuloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubModuloQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSubModuloQuery(baseOptions: Apollo.QueryHookOptions<SubModuloQuery, SubModuloQueryVariables> & ({ variables: SubModuloQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SubModuloQuery, SubModuloQueryVariables>(SubModuloDocument, options);
      }
export function useSubModuloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SubModuloQuery, SubModuloQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SubModuloQuery, SubModuloQueryVariables>(SubModuloDocument, options);
        }
export function useSubModuloSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SubModuloQuery, SubModuloQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SubModuloQuery, SubModuloQueryVariables>(SubModuloDocument, options);
        }
export type SubModuloQueryHookResult = ReturnType<typeof useSubModuloQuery>;
export type SubModuloLazyQueryHookResult = ReturnType<typeof useSubModuloLazyQuery>;
export type SubModuloSuspenseQueryHookResult = ReturnType<typeof useSubModuloSuspenseQuery>;
export type SubModuloQueryResult = Apollo.QueryResult<SubModuloQuery, SubModuloQueryVariables>;
export const SubModulosDocument = gql`
    query SubModulos($filter: SubModuloTypeFilter!, $paging: CursorPaging!, $sorting: [SubModuloTypeSort!]!) {
  subModulos(filter: $filter, paging: $paging, sorting: $sorting) {
    edges {
      node {
        id
        mensagem
        modulo {
          id
          titulo
        }
        moduloId
        ordem
        titulo
        updatedAt
        url
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
 * __useSubModulosQuery__
 *
 * To run a query within a React component, call `useSubModulosQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubModulosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubModulosQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useSubModulosQuery(baseOptions: Apollo.QueryHookOptions<SubModulosQuery, SubModulosQueryVariables> & ({ variables: SubModulosQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SubModulosQuery, SubModulosQueryVariables>(SubModulosDocument, options);
      }
export function useSubModulosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SubModulosQuery, SubModulosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SubModulosQuery, SubModulosQueryVariables>(SubModulosDocument, options);
        }
export function useSubModulosSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SubModulosQuery, SubModulosQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SubModulosQuery, SubModulosQueryVariables>(SubModulosDocument, options);
        }
export type SubModulosQueryHookResult = ReturnType<typeof useSubModulosQuery>;
export type SubModulosLazyQueryHookResult = ReturnType<typeof useSubModulosLazyQuery>;
export type SubModulosSuspenseQueryHookResult = ReturnType<typeof useSubModulosSuspenseQuery>;
export type SubModulosQueryResult = Apollo.QueryResult<SubModulosQuery, SubModulosQueryVariables>;
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
export const UsuariosDocument = gql`
    query Usuarios($filter: UsuarioTypeFilter, $paging: CursorPaging!, $sorting: [UsuarioTypeSort!]!) {
  usuarios(filter: $filter, paging: $paging, sorting: $sorting) {
    edges {
      node {
        ativo
        nome
        email
        ativo
        id
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
 * __useUsuariosQuery__
 *
 * To run a query within a React component, call `useUsuariosQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsuariosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsuariosQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useUsuariosQuery(baseOptions: Apollo.QueryHookOptions<UsuariosQuery, UsuariosQueryVariables> & ({ variables: UsuariosQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsuariosQuery, UsuariosQueryVariables>(UsuariosDocument, options);
      }
export function useUsuariosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsuariosQuery, UsuariosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsuariosQuery, UsuariosQueryVariables>(UsuariosDocument, options);
        }
export function useUsuariosSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<UsuariosQuery, UsuariosQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UsuariosQuery, UsuariosQueryVariables>(UsuariosDocument, options);
        }
export type UsuariosQueryHookResult = ReturnType<typeof useUsuariosQuery>;
export type UsuariosLazyQueryHookResult = ReturnType<typeof useUsuariosLazyQuery>;
export type UsuariosSuspenseQueryHookResult = ReturnType<typeof useUsuariosSuspenseQuery>;
export type UsuariosQueryResult = Apollo.QueryResult<UsuariosQuery, UsuariosQueryVariables>;