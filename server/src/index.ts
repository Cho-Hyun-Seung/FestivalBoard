import { ApolloServer } from '@apollo/server'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { ApolloServerPluginCacheControl } from '@apollo/server/plugin/cacheControl'
import { schema } from './nexus-prisma/schema'
import { Context, createContext } from './nexus-prisma/context'
import express from 'express'
import cors from 'cors'
import http from 'http'
import bodyParser from 'body-parser'
import { expressMiddleware } from '@apollo/server/express4'
import getFestival from './api/openApi/festival/getFestival'
import { graphql } from 'graphql'
const start = async () => {
  const app = express()
  const httpServer = http.createServer(app)
  const server = new ApolloServer<Context>({
    schema,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginCacheControl({ calculateHttpHeaders: 'if-cacheable' }),
    ],
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
  // const runMutation = async(festivalDataArr)=> {
  //   const mutation = gql`
  //   mutation {
  //     CreateFestival($data: {"title": ${festivalDataArr[0].title}, "contentId": ${festivalDataArr[0].contentId}, "contentTypeID: ${festivalDataArr[0].contentTypeId}"})
  //   }
  //   `
  // }

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  )
  console.log(`🚀 Server ready at http://localhost:4000/`)

  const FestivalData = await getFestival()
  FestivalData.map(async (v) => {
    const response = await server.executeOperation(
      {
        query: `mutation CreateFestival($data: FestivalCreateInput!, $option: FestivalCreateOptionInput) {
          createFestival(data: $data, option: $option) {
            title
          }
        }`,
        variables: {
          data: {
            title: v.title,
            contentId: v.contentId,
            contentTypeId: v.contentTypeId,
          },
          option: {},
        },
      },
      {
        contextValue: await createContext(),
      }
    )
    console.log('res', response.body.singleResult)
  })
}

start()

/*

{
    query: `mutation CreateFestival($data: FestivalCreateInput!, $optoin: FestivalCreateOptionInput) {createFestival(data: $data, option: $option)}`,
    variables: {
      data: {
        title: FestivalData[0].title,
        contentId: FestivalData[0].contentId,
        contentTypeID: FestivalData[0].contentTypeId,
      },
    },
  }
*/
/*
    variables: {
      data: {
        content: 'on rock',
        title: 'hi',
      },
      authorEmail: 'toki0327@naver.com',
    }
*/
