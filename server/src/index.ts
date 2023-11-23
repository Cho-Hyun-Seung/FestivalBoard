import { ApolloServer } from '@apollo/server'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { schema } from './nexus-prisma/schema'
import { Context, createContext } from './nexus-prisma/context'
import express from 'express'
import cors from 'cors'
import http from 'http'
import bodyParser from 'body-parser'
import { expressMiddleware } from '@apollo/server/express4'

const start = async () => {
  const app = express()
  const httpServer = http.createServer(app)
  const server = new ApolloServer<Context>({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  })
  await server.start()

  app.use(
    '/',
    cors<cors.CorsRequest>(),
    // 50mb is the limit that `startStandaloneServer` uses, but you may configure this to suit your needs
    bodyParser.json({ limit: '50mb' }),
    // expressMiddleware accepts the same arguments:
    // an Apollo Server instance and optional configuration options
    expressMiddleware(server, {
      context: createContext,
    })
  )
  // const { url } = await startStandaloneServer(server, {
  //   context: createContext,
  //   listen: { port: 4000 },
  // })
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  )
  console.log(`🚀 Server ready at http://localhost:4000/`)
}

start()
