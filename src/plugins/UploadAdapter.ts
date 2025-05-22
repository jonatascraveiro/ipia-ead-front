import { CreateArquivoDocument } from '@/gql/generated/graphql'
import { apolloClient } from '@/services/Apollo/client'
import type {
  CreateArquivoMutation,
  CreateArquivoMutationVariables,
} from './../gql/generated/graphql'

export default class UploadAdapter {
  constructor(loader) {
    this.loader = loader
  }

  async upload() {
    const file = await this.loader.file

    const res = await apolloClient
      .mutate<CreateArquivoMutation, CreateArquivoMutationVariables>({
        mutation: CreateArquivoDocument,
        variables: {
          arquivo: file,
        },
      })
      .then((res) => {
        return res?.data?.createArquivo?.url
      })
      .catch((err) => {
        console.log('err', err)
        return err
      })

    const imageUrl = res // result.data.uploadImage.url
    if (!imageUrl) throw new Error('A URL da imagem não foi retornada.')

    return {
      default: imageUrl,
    }
  }

  abort() {
    // Opcional: implementar se quiser cancelamento
  }
}
