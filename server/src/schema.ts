import {
  intArg,
  makeSchema,
  nonNull,
  objectType,
  stringArg,
  inputObjectType,
  arg,
  asNexusMethod,
  enumType,
} from 'nexus'
import { DateTimeResolver } from 'graphql-scalars'
import { Context } from './context'

const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.int('id'), t.nonNull.string('email')
    t.nonNull.string('password')
    t.nonNull.string('name')
    t.nonNull.int('phoneNum')
    t.nonNull.string('sex')
    t.nonNull.list.nonNull.field('planners', {
      type: 'Planner',
      resolve: (parent, _, context: Context) => {
        return context.prisma.user
          .findUnique({
            where: { id: parent.id || undefined },
          })
          .planners()
      },
    })
    t.nonNull.list.nonNull.field('reviews', {
      type: 'Review',
      resolve: (parent, _, context: Context) => {
        return context.prisma.user
          .findUnique({
            where: { id: parent.id || undefined },
          })
          .reviews()
      },
    })
  },
})

const Festival = objectType({
  name: 'festival',
  definition(t) {
    t.nonNull.int('id')
    t.string('title')
    t.string('tel')
    t.string('firstImage')
    t.string('firstImage2')
    t.string('startDate')
    t.string('endDate')
    t.nonNull.string('contentId')
    t.nonNull.string('contentTypeId')
    t.string('addr1')
    t.string('addr2')
    t.string('ageLimit')
    t.string('boookingPlace')
    t.string('discountInfo')
    t.string('homepage')
    t.string('grade')
    t.string('sponsor1')
    t.string('sponser1Tel')
    t.string('sponsor2')
    t.string('sponsor2Tel')
    t.string('subevent')
    t.string('useTimeFestival')
    t.nonNull.list.nonNull.field('planners', {
      type: 'Planner',
      resolve: (parent, _, context: Context) => {
        return context.prisma.festival
          .findUnique({
            where: { id: parent.id || undefined },
          })
          .planners()
      },
    })
  },
})

const Region = objectType({
  name: 'region',
  definition(t) {
    t.nonNull.int('id')
    t.nonNull.string('level1')
    t.string('level2')
    t.string('level3')
    t.string('xCoord')
    t.string('yCoord')
    t.string('midTermCode')
    t.string('shortTermCode')
    t.string('shortTermWeather')
    t.string('midTermWeather')
  },
})

const TouristSpot = objectType({
  name: 'touristSpot',
  definition(t) {
    t.nonNull.int('id')
    t.nonNull.string('title')
    t.string('infoCenter')
    t.nonNull.string('addr1')
    t.nonNull.string('contentId')
    t.nonNull.string('contentType')
    t.string('firstImage')
    t.string('firstImage2')
    t.string('resDate')
    t.string('useSeason')
    t.string('useTime')
    t.int('zipcode')
    t.string('homepage')
    t.string('overview')
    t.string('parking')
    t.nonNull.list.nonNull.field('planners', {
      type: 'Planner',
      resolve: (parent, _, context: Context) => {
        return context.prisma.touristspot
          .findUnique({
            where: { id: parent.id || undefined },
          })
          .planners()
      },
    })
  },
})
