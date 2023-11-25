import {
  intArg,
  makeSchema,
  objectType,
  stringArg,
  inputObjectType,
  arg,
  asNexusMethod,
  enumType,
} from 'nexus'
import { DateTimeResolver } from 'graphql-scalars'
import { Context } from './context'
import objectTypes from './objectType'
import {
  Mutation,
  UserCreateInput,
  PlannerCreateInput,
  ReviewCreateInput,
  FestivalCreateOptionInput,
  FestivalCreateInput,
} from './mutation'
const Query = {}
export const schema = makeSchema({
  types: [
    ...Mutation,
    FestivalCreateInput,
    FestivalCreateOptionInput,
    UserCreateInput,
    PlannerCreateInput,
    ReviewCreateInput,
    ...objectTypes,
  ],
  outputs: {
    typegen: __dirname + '/generated/nexus.ts',
    schema: __dirname + './../../schema.graphql',
  },
  contextType: {
    module: require.resolve('./context'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
})
