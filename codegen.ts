import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://ead-api.jos3duardo.com.br/graphql',
  documents: ['./src/**/*.gql.ts'],
  ignoreNoDocuments: true,
  generates: {
    './src/gql/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
  },
}

export default config
