import {
  inputObjectType,
  mutationType,
  nonNull,
  arg,
  objectType,
  queryType,
  stringArg,
} from 'nexus'
import { Planner, Review, User } from 'nexus-prisma'
import { Context } from './context'

const UserCreateInput = inputObjectType({
  name: 'UserCreateInput',
  definition(t) {
    t.field(User.email)
    t.field(User.password)
    t.field(User.name)
    t.field(User.phoneNum)
    t.field(User.sex)
    t.list.nonNull.field('planners', { type: PlannerCreateInput })
    t.list.nonNull.field('reviews', { type: reviewCreateInput })
  },
})

const PlannerCreateInput = inputObjectType({
  name: 'PlannerCreateInput',
  definition(t) {
    t.field(Planner.title)
    t.field(Planner.content)
  },
})

const reviewCreateInput = inputObjectType({
  name: 'reviewCreateInput',
  definition(t) {
    t.field(Review.title)
    t.field(Review.content)
    t.field(Review.grade)
  },
})

const Mutation = [
  mutationType({
    definition(t) {
      t.nonNull.field('signupUser', {
        type: User.$name,
        args: {
          data: nonNull(
            arg({
              type: 'UserCreateInput',
            })
          ),
        },
        resolve: (_, args, context: Context) => {
          const plannerData = args.data.planners?.map((planner: any) => {
            return {
              title: planner.title,
              content: planner.content,
              date: planner.date,
              fesstivals: planner.festivals || [],
              touristSpots: planner.touristSpots || [],
              weather: planner.weathers || [],
            }
          })
          const reviewData = args.data.reviews?.map((review: any) => {
            return {
              title: review.title || undefined,
              content: review.content || undefined,
              grade: review.grade || undefined,
            }
          })
          return context.prisma.user.create({
            data: {
              name: args.data.name,
              email: args.data.email,
              password: args.data.password,
              phoneNum: args.data.phoneNum,
              sex: args.data.sex,
              planners: {
                create: plannerData,
              },
              reviews: {
                create: reviewData,
              },
            },
          })
        },
      }),
        t.nonNull.field('createPlanner', {
          type: Planner.$name,
          args: {
            data: nonNull(
              arg({
                type: 'PlannerCreateInput',
              })
            ),
            authorEmail: nonNull(stringArg()),
          },

          resolve: (_, args, context: Context) => {
            return context.prisma.planner.create({
              data: {
                title: args.data.title,
                content: args.data.content,
                author: {
                  connect: {
                    email: args.authorEmail,
                  },
                },
              },
            })
          },
        })
    },
  }),
]

export { Mutation, UserCreateInput, PlannerCreateInput, reviewCreateInput }
