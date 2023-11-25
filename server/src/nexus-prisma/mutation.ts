import {
  inputObjectType,
  mutationType,
  nonNull,
  arg,
  objectType,
  queryType,
  stringArg,
} from 'nexus'
import { Festival, Planner, Review, User } from 'nexus-prisma'
import { Context } from './context'
import { error } from 'console'

const UserCreateInput = inputObjectType({
  name: 'UserCreateInput',
  definition(t) {
    t.field(User.email)
    t.field(User.password)
    t.field(User.name)
    t.field(User.phoneNum)
    t.field(User.sex)
    t.list.nonNull.field('planners', { type: PlannerCreateInput })
    t.list.nonNull.field('reviews', { type: ReviewCreateInput })
  },
})

const PlannerCreateInput = inputObjectType({
  name: 'PlannerCreateInput',
  definition(t) {
    t.field(Planner.title)
    t.field(Planner.content)
  },
})

const ReviewCreateInput = inputObjectType({
  name: 'ReviewCreateInput',
  definition(t) {
    t.field(Review.title)
    t.field(Review.content)
    t.field(Review.grade)
  },
})

const FestivalCreateInput = inputObjectType({
  name: 'FestivalCreateInput',
  definition(t) {
    t.field(Festival.title)
    t.field(Festival.contentId)
    t.field(Festival.contentTypeId)
    // t.list.nonNull.field('planners', { type: PlannerCreateInput })
  },
})

const FestivalCreateOptionInput = inputObjectType({
  name: 'FestivalCreateOptionInput',
  definition(t) {
    t.field(Festival.tel)
    t.field(Festival.firstImage)
    t.field(Festival.firstImage2)
    t.field(Festival.startDate)
    t.field(Festival.endDate)
    t.field(Festival.addr1)
    t.field(Festival.addr2)
    t.field(Festival.ageLimit)
    t.field(Festival.bookingPlace)
    t.field(Festival.discountInfo)
    t.field(Festival.homepage)
    t.field(Festival.grade)
    t.field(Festival.sponsor1)
    t.field(Festival.sponsor1Tel)
    t.field(Festival.sponsor2)
    t.field(Festival.sponsor2Tel)
    t.field(Festival.subevent)
    t.field(Festival.useTimeFestival)
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
        t.nonNull.field('createFestival', {
          type: Festival.$name,
          args: {
            data: nonNull(
              arg({
                type: 'FestivalCreateInput',
              })
            ),
            option: arg({
              type: 'FestivalCreateOptionInput',
            }),
          },

          resolve: async (_, args, context: Context) => {
            if (
              await context.prisma.festival.findUnique({
                where: {
                  contentId: args.data.contentId,
                },
              })
            ) {
              throw new Error('중복된 축제입니다.' + args.data.contentId)
            }

            return context.prisma.festival.create({
              data: {
                title: args.data.title,
                contentId: args.data.contentId,
                contentTypeId: args.data.contentTypeId,
                tel: args.option.tel,
                firstImage: args.option.firstImage,
                firstImage2: args.option.firstImage2,
                startDate: args.option.startDate,
                endDate: args.option.endDate,
                addr1: args.option.addr1,
                addr2: args.option.addr2,
                ageLimit: args.option.ageLimit,
                bookingPlace: args.option.bookingPlace,
                discountInfo: args.option.discountInfo,
                homepage: args.option.homepage,
                grade: args.option.grade,
                sponsor1: args.option.sponsor1,
                sponsor2: args.option.sponsor2,
                sponsor1Tel: args.option.sponsor1Tel,
                sponsor2Tel: args.option.sponsor2Tel,
                subevent: args.option.subevent,
                useTimeFestival: args.option.useTimeFestival,
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

export {
  Mutation,
  UserCreateInput,
  PlannerCreateInput,
  ReviewCreateInput,
  FestivalCreateInput,
  FestivalCreateOptionInput,
}
