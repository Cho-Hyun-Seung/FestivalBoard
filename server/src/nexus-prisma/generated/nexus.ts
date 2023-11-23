/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./../context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  PlannerCreateInput: { // input type
    content: string; // String!
    title: string; // String!
  }
  UserCreateInput: { // input type
    email: string; // String!
    name: string; // String!
    password: string; // String!
    phoneNum: string; // String!
    planners?: NexusGenInputs['PlannerCreateInput'][] | null; // [PlannerCreateInput!]
    reviews?: NexusGenInputs['reviewCreateInput'][] | null; // [reviewCreateInput!]
    sex: string; // String!
  }
  reviewCreateInput: { // input type
    content?: string | null; // String
    grade: number; // Int!
    title: string; // String!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Festival: { // root type
    addr1?: string | null; // String
    addr2?: string | null; // String
    ageLimit?: string | null; // String
    bookingPlace?: string | null; // String
    contentId: string; // String!
    contentTypeId: string; // String!
    discountInfo?: string | null; // String
    endDate?: number | null; // Int
    firstImage?: string | null; // String
    firstImage2?: string | null; // String
    grade?: string | null; // String
    homepage?: string | null; // String
    id: number; // Int!
    sponsor1?: string | null; // String
    sponsor1Tel?: string | null; // String
    sponsor2?: string | null; // String
    sponsor2Tel?: string | null; // String
    startDate?: number | null; // Int
    subevent?: string | null; // String
    tel?: string | null; // String
    title: string; // String!
    useTimeFestival?: string | null; // String
  }
  Mutation: {};
  Planner: { // root type
    content: string; // String!
    id: number; // Int!
    title: string; // String!
  }
  Query: {};
  Review: { // root type
    content?: string | null; // String
    grade: number; // Int!
    id: number; // Int!
    title: string; // String!
  }
  Reviewphoto: { // root type
    id: number; // Int!
    url: string; // String!
  }
  TouristSpot: { // root type
    addr1: string; // String!
    contentId: string; // String!
    contentType: string; // String!
    firstImage?: string | null; // String
    firstImage2?: string | null; // String
    homepage?: string | null; // String
    id: number; // Int!
    infoCenter?: string | null; // String
    overview?: string | null; // String
    parking: string; // String!
    restDate?: string | null; // String
    title: string; // String!
    useSeason?: string | null; // String
    useTime?: string | null; // String
    zipcode?: number | null; // Int
  }
  User: { // root type
    email: string; // String!
    id: number; // Int!
    name: string; // String!
    password: string; // String!
    phoneNum: string; // String!
    sex: string; // String!
  }
  Weather: { // root type
    id: number; // Int!
    level1: string; // String!
    level2?: string | null; // String
    level3?: string | null; // String
    midTermCode?: string | null; // String
    midTermWeather?: string | null; // String
    shortTermCode?: string | null; // String
    shortTermWeather?: string | null; // String
    xCoord?: string | null; // String
    yCoord?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Festival: { // field return type
    addr1: string | null; // String
    addr2: string | null; // String
    ageLimit: string | null; // String
    bookingPlace: string | null; // String
    contentId: string; // String!
    contentTypeId: string; // String!
    discountInfo: string | null; // String
    endDate: number | null; // Int
    firstImage: string | null; // String
    firstImage2: string | null; // String
    grade: string | null; // String
    homepage: string | null; // String
    id: number; // Int!
    planners: NexusGenRootTypes['Planner'][]; // [Planner!]!
    sponsor1: string | null; // String
    sponsor1Tel: string | null; // String
    sponsor2: string | null; // String
    sponsor2Tel: string | null; // String
    startDate: number | null; // Int
    subevent: string | null; // String
    tel: string | null; // String
    title: string; // String!
    useTimeFestival: string | null; // String
  }
  Mutation: { // field return type
    createPlanner: NexusGenRootTypes['Planner']; // Planner!
    signupUser: NexusGenRootTypes['User']; // User!
  }
  Planner: { // field return type
    content: string; // String!
    festivals: NexusGenRootTypes['Festival'][]; // [Festival!]!
    id: number; // Int!
    title: string; // String!
    touristSpots: NexusGenRootTypes['TouristSpot'][]; // [TouristSpot!]!
    weathers: NexusGenRootTypes['Weather'][]; // [Weather!]!
  }
  Query: { // field return type
    ok: boolean; // Boolean!
  }
  Review: { // field return type
    content: string | null; // String
    grade: number; // Int!
    id: number; // Int!
    reviewPhotos: NexusGenRootTypes['Reviewphoto'][]; // [Reviewphoto!]!
    title: string; // String!
  }
  Reviewphoto: { // field return type
    id: number; // Int!
    url: string; // String!
  }
  TouristSpot: { // field return type
    addr1: string; // String!
    contentId: string; // String!
    contentType: string; // String!
    firstImage: string | null; // String
    firstImage2: string | null; // String
    homepage: string | null; // String
    id: number; // Int!
    infoCenter: string | null; // String
    overview: string | null; // String
    parking: string; // String!
    planners: NexusGenRootTypes['Planner'][]; // [Planner!]!
    restDate: string | null; // String
    title: string; // String!
    useSeason: string | null; // String
    useTime: string | null; // String
    zipcode: number | null; // Int
  }
  User: { // field return type
    email: string; // String!
    id: number; // Int!
    name: string; // String!
    password: string; // String!
    phoneNum: string; // String!
    planners: NexusGenRootTypes['Planner'][]; // [Planner!]!
    reviews: NexusGenRootTypes['Review'][]; // [Review!]!
    sex: string; // String!
  }
  Weather: { // field return type
    id: number; // Int!
    level1: string; // String!
    level2: string | null; // String
    level3: string | null; // String
    midTermCode: string | null; // String
    midTermWeather: string | null; // String
    shortTermCode: string | null; // String
    shortTermWeather: string | null; // String
    xCoord: string | null; // String
    yCoord: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  Festival: { // field return type name
    addr1: 'String'
    addr2: 'String'
    ageLimit: 'String'
    bookingPlace: 'String'
    contentId: 'String'
    contentTypeId: 'String'
    discountInfo: 'String'
    endDate: 'Int'
    firstImage: 'String'
    firstImage2: 'String'
    grade: 'String'
    homepage: 'String'
    id: 'Int'
    planners: 'Planner'
    sponsor1: 'String'
    sponsor1Tel: 'String'
    sponsor2: 'String'
    sponsor2Tel: 'String'
    startDate: 'Int'
    subevent: 'String'
    tel: 'String'
    title: 'String'
    useTimeFestival: 'String'
  }
  Mutation: { // field return type name
    createPlanner: 'Planner'
    signupUser: 'User'
  }
  Planner: { // field return type name
    content: 'String'
    festivals: 'Festival'
    id: 'Int'
    title: 'String'
    touristSpots: 'TouristSpot'
    weathers: 'Weather'
  }
  Query: { // field return type name
    ok: 'Boolean'
  }
  Review: { // field return type name
    content: 'String'
    grade: 'Int'
    id: 'Int'
    reviewPhotos: 'Reviewphoto'
    title: 'String'
  }
  Reviewphoto: { // field return type name
    id: 'Int'
    url: 'String'
  }
  TouristSpot: { // field return type name
    addr1: 'String'
    contentId: 'String'
    contentType: 'String'
    firstImage: 'String'
    firstImage2: 'String'
    homepage: 'String'
    id: 'Int'
    infoCenter: 'String'
    overview: 'String'
    parking: 'String'
    planners: 'Planner'
    restDate: 'String'
    title: 'String'
    useSeason: 'String'
    useTime: 'String'
    zipcode: 'Int'
  }
  User: { // field return type name
    email: 'String'
    id: 'Int'
    name: 'String'
    password: 'String'
    phoneNum: 'String'
    planners: 'Planner'
    reviews: 'Review'
    sex: 'String'
  }
  Weather: { // field return type name
    id: 'Int'
    level1: 'String'
    level2: 'String'
    level3: 'String'
    midTermCode: 'String'
    midTermWeather: 'String'
    shortTermCode: 'String'
    shortTermWeather: 'String'
    xCoord: 'String'
    yCoord: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createPlanner: { // args
      authorEmail: string; // String!
      data: NexusGenInputs['PlannerCreateInput']; // PlannerCreateInput!
    }
    signupUser: { // args
      data: NexusGenInputs['UserCreateInput']; // UserCreateInput!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}