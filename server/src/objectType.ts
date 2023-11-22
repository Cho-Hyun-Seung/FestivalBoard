import { objectType } from 'nexus'
import {
  User,
  Review,
  Reviewphoto,
  Festival,
  Region,
  TouristSpot,
} from 'nexus-prisma'
const objectTypes = [
  objectType({
    name: User.$name,
    definition(t) {
      t.field(User.id)
      t.field(User.email)
      t.field(User.password)
      t.field(User.name)
      t.field(User.phoneNum)
      t.field(User.sex)
      t.field(User.planners)
      t.field(User.reviews)
    },
  }),
  objectType({
    name: Festival.$name,
    definition(t) {
      t.field(Festival.id)
      t.field(Festival.title)
      t.field(Festival.tel)
      t.field(Festival.firstImage)
      t.field(Festival.firstImage2)
      t.field(Festival.startDate)
      t.field(Festival.endDate)
      t.field(Festival.contentId)
      t.field(Festival.contentTypeId)
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
      t.field(Festival.planners)
    },
  }),
  objectType({
    name: Region.$name,
    definition(t) {
      t.field(Region.id)
      t.field(Region.level1)
      t.field(Region.level2)
      t.field(Region.level3)
      t.field(Region.xCoord)
      t.field(Region.yCoord)
      t.field(Region.midTermCode)
      t.field(Region.shortTermCode)
      t.field(Region.shortTermWeather)
      t.field(Region.midTermWeather)
    },
  }),
  objectType({
    name: TouristSpot.$name,
    definition(t) {
      t.field(TouristSpot.id)
      t.field(TouristSpot.title)
      t.field(TouristSpot.infoCenter)
      t.field(TouristSpot.addr1)
      t.field(TouristSpot.contentId)
      t.field(TouristSpot.contentType)
      t.field(TouristSpot.firstImage)
      t.field(TouristSpot.firstImage2)
      t.field(TouristSpot.restDate)
      t.field(TouristSpot.useSeason)
      t.field(TouristSpot.useTime)
      t.field(TouristSpot.zipcode)
      t.field(TouristSpot.homepage)
      t.field(TouristSpot.overview)
      t.field(TouristSpot.parking)
      t.field(TouristSpot.planners)
    },
  }),
  objectType({
    name: Review.$name,
    definition(t) {
      t.field(Review.id)
      t.field(Review.title)
      t.field(Review.content)
      t.field(Review.date)
      t.field(Review.grade)
      t.field(Review.reviewPhotos)
    },
  }),
  objectType({
    name: Reviewphoto.$name,
    definition(t) {
      t.field(Reviewphoto.id)
      t.field(Reviewphoto.url)
    },
  }),
]

export default objectTypes
