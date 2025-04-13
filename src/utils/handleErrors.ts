import type { AxiosError } from 'axios'

export const handleErrors = (err: AxiosError<any>) => {
  try {
    console.log(err)
    const data = err.response?.data
    const status = err.response?.status

    /**
     * O codigo de resposta HTTP 422 Unprocessable Entity indica que o servidor
     *  entende o tipo de conteúdo da entidade da requisição
     */
    if (status === 422 && data && typeof data?.errors?.[0] === 'string') {
      // Object.keys(data.errors).map((index) => {
      //   let mensagens = ''
      //   mensagens = data.errors?.[index][0] + '\n'
      //   // Notificacao.erro({ mensagem: mensagens, titulo: 'Erro' })
      // })
    }

    /**
     * O codigo de resposta HTTP 405 Unprocessable Entity indica que o servidor
     *  entende o tipo de conteúdo da entidade da requisição
     */

    if (status === 405) {
      // Notificacao.erro({ mensagem: 'Método não permitido', titulo: 'Erro' })
    }

    /**
     * O codigo de resposta HTTP 400 Unprocessable Entity indica que o servidor
     *  entende o tipo de conteúdo da entidade da requisição
     */
    if (status === 400 && data?.errors) {
      if (data.errors && typeof data.errors[0].type === 'string') {
        // const errorCode = data.errors as ErroValidacao[]
        // errorCode.map((itemErro, index) => {
        //   const { code, description } = itemErro
        //   if (code && description) {
        //     // Notificacao.erro({ mensagem: description, titulo: code })
        //   }
        // })
        return
      }

      if (data?.errors[0] && typeof data.errors[0] === 'string') {
        // Object.keys(data.errors).map((index) => {
        //   let mensagens = ''
        //   mensagens = data?.errors?.[index][0] + '\n'
        //   if (mensagens) {
        //     // Notificacao.erro({ mensagem: mensagens, titulo: 'Erro' })
        //   }
        //   return
        // })
      }
    }

    if (status === 400 && data?.detail) {
      // Notificacao.erro({ mensagem: data.detail, titulo: 'Erro' })
      return
    }
    /**
     * O codigo de resposta HTTP 400 Unprocessable Entity indica que o servidor
     *  entende o tipo de conteúdo da entidade da requisição
     */
    if (status === 400 && !data?.errors) {
      // Notificacao.erro({
      //   mensagem: 'Erro ao fazer a requisição ',
      //   titulo: 'Erro',
      // })
    }

    /**
     * Quando o servidor retorna um código de erro (HTTP) 500, indica que
     *  encontrou uma condição inesperada e que o impediu de atender à solicitação.
     */

    if (status === 500) {
      // Notificacao.erro({
      //   mensagem: 'Erro ao fazer a requisição',
      //   titulo: 'Erro',
      // })
    }

    /**
     * O código de resposta de status de erro do cliente HTTP 403 Forbidden
     *  indica que o servidor entendeu o pedido, mas se recusa a autorizá-lo.
     *
     * Não pode acessar a url da api solicitada JWT está válido
     */
    if (status === 403) {
      // Notificacao.erro({ mensagem: 'Ação não autorizada', titulo: 'Erro' })
    }

    /**
     * O código de resposta de status de erro do cliente HTTP 401 Unauthorized
     *  indica que a solicitação não foi aplicada porque não possui credenciais
     * de autenticação válidas para o recurso de destino.
     *
     * Não pode acessar a url da api solicitada JWT está Inválido
     */

    if (status === 401) {
      // Notificacao.erro({ mensagem: 'Token inválido', titulo: 'Erro' })
    }
  } catch (error) {
    // Notificacao.erro({ mensagem: 'Erro não tratado', titulo: 'Erro' })
  }
}
