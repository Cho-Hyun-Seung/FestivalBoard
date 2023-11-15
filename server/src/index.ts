import express, { json } from 'express'
import cors from 'cors'
//highlight-start
import gql from 'graphql-tag'
import { ApolloServer } from '@apollo/server'
import { buildSubgraphSchema } from '@apollo/subgraph'
import { expressMiddleware } from '@apollo/server/express4'
import { readFileSync } from 'fs'
//highlight-end

const PORT = process.env.PORT || 8000
const app = express()

// app.use(cors())
// app.use(express.json())

//highlight-start
// const typeDefs = gql(
//   readFileSync('schema.graphql', {
//     encoding: 'utf-8',
//   })
// )

const bootstrapServer = async () => {
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.get('/', (req, res) => {
    res.send('Hello World')
  })

  app.listen(PORT, () => {
    console.log(`🚀 Express ready at http://localhost:${PORT}`)
  })
}

bootstrapServer()
// const apolloServer = new ApolloServer({
//   schema: buildSubgraphSchema({ typeDefs, resolvers }),
// })
// // Note you must call `start()` on the `ApolloServer`
// // instance before passing the instance to `expressMiddleware`
// await apolloServer.start()
// //highlight-end

// app.use('/record', records)
// app.use('/graphql', cors(), json(), expressMiddleware(apolloServer))
// // start the Express server
// app.listen(PORT, () => {
//   console.log(`Server is running on port: ${PORT}`)
// })
