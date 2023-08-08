// Rotas sobre a parte de invite

import { FastifyInstance } from 'fastify'
import { z } from 'zod'

export async function inviteRoutes(app: FastifyInstance) {
  app.post('/confirm', async (request) => {
    // Schema para validação do corpo da requisição
    const bodySchema = z.object({
      response: z.enum(['SIM', 'NAO']),
    })

    const { response } = bodySchema.parse(request.body)

    let message

    // Se a resposta for sim Retorna mensagem de sucesso se não retorna erro!
    if (response === 'SIM') {
      message = 'Você está mais próximo de se juntar ao time!'
    } else message = 'Erro'

    return {
      message,
    }
  })
}
