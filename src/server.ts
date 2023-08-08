import fastify from 'fastify'
import cors from '@fastify/cors'
import { inviteRoutes } from './routes/invite'

// Inicializando o fastify
const app = fastify()

// HTTP Method: Get, POST, PUT, PATCH, DELETE

// Inicializando o cors
app.register(cors, {
  origin: true,
})

// Adicionando a rota de invite
app.register(inviteRoutes)

// Configurando o servidor
app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:3333')
  })
