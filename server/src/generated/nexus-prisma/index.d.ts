import * as NexusCore from 'nexus/dist/core'

//
//
// TYPES
// TYPES
// TYPES
// TYPES
//
//

// Models

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `User`.
  *
  * ### ️⚠️ You have not written documentation for model User
  *
  * Replace this default advisory JSDoc with your own documentation about model User
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model User {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { User } from 'nexus-prisma'
  *
  * objectType({
  *   name: User.$name
  *   description: User.$description
  *   definition(t) {
  *     t.field(User.id)
  *   }
  * })
  */
export interface User {
  $name: 'User'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.id`.
    *
    * ### ️⚠️ You have not written documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   id  Int
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Int' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.email`.
    *
    * ### ️⚠️ You have not written documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   email  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.email)
    *   }
    * })
    */
  email: {
    /**
     * The name of this field.
     */
    name: 'email'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'email'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.password`.
    *
    * ### ️⚠️ You have not written documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   password  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.password)
    *   }
    * })
    */
  password: {
    /**
     * The name of this field.
     */
    name: 'password'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'password'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.name`.
    *
    * ### ️⚠️ You have not written documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   name  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.name)
    *   }
    * })
    */
  name: {
    /**
     * The name of this field.
     */
    name: 'name'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'name'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.phoneNum`.
    *
    * ### ️⚠️ You have not written documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   phoneNum  Int
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.phoneNum)
    *   }
    * })
    */
  phoneNum: {
    /**
     * The name of this field.
     */
    name: 'phoneNum'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Int' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'phoneNum'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.sex`.
    *
    * ### ️⚠️ You have not written documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   sex  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.sex)
    *   }
    * })
    */
  sex: {
    /**
     * The name of this field.
     */
    name: 'sex'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'sex'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.planners`.
    *
    * ### ️⚠️ You have not written documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   planners  Planner
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.planners)
    *   }
    * })
    */
  planners: {
    /**
     * The name of this field.
     */
    name: 'planners'
  
    /**
     * The type of this field.
     */
    type: 'Planner' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Planner' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'Planner' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'Planner\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Planner\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'planners'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `User.reviews`.
    *
    * ### ️⚠️ You have not written documentation for model User
    *
    * Replace this default advisory JSDoc with your own documentation about model User
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model User {
    *   /// Lorem ipsum dolor sit amet.
    *   reviews  Review
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { User } from 'nexus-prisma'
    *
    * objectType({
    *   name: User.$name
    *   description: User.$description
    *   definition(t) {
    *     t.field(User.reviews)
    *   }
    * })
    */
  reviews: {
    /**
     * The name of this field.
     */
    name: 'reviews'
  
    /**
     * The type of this field.
     */
    type: 'Review' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Review' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'Review' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'Review\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Review\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'User', 'reviews'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Planner`.
  *
  * ### ️⚠️ You have not written documentation for model Planner
  *
  * Replace this default advisory JSDoc with your own documentation about model Planner
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model Planner {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Planner } from 'nexus-prisma'
  *
  * objectType({
  *   name: Planner.$name
  *   description: Planner.$description
  *   definition(t) {
  *     t.field(Planner.id)
  *   }
  * })
  */
export interface Planner {
  $name: 'Planner'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Planner.id`.
    *
    * ### ️⚠️ You have not written documentation for model Planner
    *
    * Replace this default advisory JSDoc with your own documentation about model Planner
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Planner {
    *   /// Lorem ipsum dolor sit amet.
    *   id  Int
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Planner } from 'nexus-prisma'
    *
    * objectType({
    *   name: Planner.$name
    *   description: Planner.$description
    *   definition(t) {
    *     t.field(Planner.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Int' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Planner', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Planner.title`.
    *
    * ### ️⚠️ You have not written documentation for model Planner
    *
    * Replace this default advisory JSDoc with your own documentation about model Planner
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Planner {
    *   /// Lorem ipsum dolor sit amet.
    *   title  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Planner } from 'nexus-prisma'
    *
    * objectType({
    *   name: Planner.$name
    *   description: Planner.$description
    *   definition(t) {
    *     t.field(Planner.title)
    *   }
    * })
    */
  title: {
    /**
     * The name of this field.
     */
    name: 'title'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Planner', 'title'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Planner.date`.
    *
    * ### ️⚠️ You have not written documentation for model Planner
    *
    * Replace this default advisory JSDoc with your own documentation about model Planner
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Planner {
    *   /// Lorem ipsum dolor sit amet.
    *   date  Int
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Planner } from 'nexus-prisma'
    *
    * objectType({
    *   name: Planner.$name
    *   description: Planner.$description
    *   definition(t) {
    *     t.field(Planner.date)
    *   }
    * })
    */
  date: {
    /**
     * The name of this field.
     */
    name: 'date'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Int' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Planner', 'date'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Planner.detail`.
    *
    * ### ️⚠️ You have not written documentation for model Planner
    *
    * Replace this default advisory JSDoc with your own documentation about model Planner
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Planner {
    *   /// Lorem ipsum dolor sit amet.
    *   detail  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Planner } from 'nexus-prisma'
    *
    * objectType({
    *   name: Planner.$name
    *   description: Planner.$description
    *   definition(t) {
    *     t.field(Planner.detail)
    *   }
    * })
    */
  detail: {
    /**
     * The name of this field.
     */
    name: 'detail'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Planner', 'detail'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Planner.author`.
    *
    * ### ️⚠️ You have not written documentation for model Planner
    *
    * Replace this default advisory JSDoc with your own documentation about model Planner
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Planner {
    *   /// Lorem ipsum dolor sit amet.
    *   author  User
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Planner } from 'nexus-prisma'
    *
    * objectType({
    *   name: Planner.$name
    *   description: Planner.$description
    *   definition(t) {
    *     t.field(Planner.author)
    *   }
    * })
    */
  author: {
    /**
     * The name of this field.
     */
    name: 'author'
  
    /**
     * The type of this field.
     */
    type: 'User' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'User' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'User\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'User\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Planner', 'author'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Planner.authorId`.
    *
    * ### ️⚠️ You have not written documentation for model Planner
    *
    * Replace this default advisory JSDoc with your own documentation about model Planner
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Planner {
    *   /// Lorem ipsum dolor sit amet.
    *   authorId  Int
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Planner } from 'nexus-prisma'
    *
    * objectType({
    *   name: Planner.$name
    *   description: Planner.$description
    *   definition(t) {
    *     t.field(Planner.authorId)
    *   }
    * })
    */
  authorId: {
    /**
     * The name of this field.
     */
    name: 'authorId'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Int' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Planner', 'authorId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Planner.festivals`.
    *
    * ### ️⚠️ You have not written documentation for model Planner
    *
    * Replace this default advisory JSDoc with your own documentation about model Planner
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Planner {
    *   /// Lorem ipsum dolor sit amet.
    *   festivals  Festival
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Planner } from 'nexus-prisma'
    *
    * objectType({
    *   name: Planner.$name
    *   description: Planner.$description
    *   definition(t) {
    *     t.field(Planner.festivals)
    *   }
    * })
    */
  festivals: {
    /**
     * The name of this field.
     */
    name: 'festivals'
  
    /**
     * The type of this field.
     */
    type: 'Festival' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Festival' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'Festival' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'Festival\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Festival\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Planner', 'festivals'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Planner.events`.
    *
    * ### ️⚠️ You have not written documentation for model Planner
    *
    * Replace this default advisory JSDoc with your own documentation about model Planner
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Planner {
    *   /// Lorem ipsum dolor sit amet.
    *   events  Event
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Planner } from 'nexus-prisma'
    *
    * objectType({
    *   name: Planner.$name
    *   description: Planner.$description
    *   definition(t) {
    *     t.field(Planner.events)
    *   }
    * })
    */
  events: {
    /**
     * The name of this field.
     */
    name: 'events'
  
    /**
     * The type of this field.
     */
    type: 'Event' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Event' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'Event' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'Event\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Event\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Planner', 'events'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Planner.touristSpots`.
    *
    * ### ️⚠️ You have not written documentation for model Planner
    *
    * Replace this default advisory JSDoc with your own documentation about model Planner
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Planner {
    *   /// Lorem ipsum dolor sit amet.
    *   touristSpots  Touristspot
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Planner } from 'nexus-prisma'
    *
    * objectType({
    *   name: Planner.$name
    *   description: Planner.$description
    *   definition(t) {
    *     t.field(Planner.touristSpots)
    *   }
    * })
    */
  touristSpots: {
    /**
     * The name of this field.
     */
    name: 'touristSpots'
  
    /**
     * The type of this field.
     */
    type: 'Touristspot' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Touristspot' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'Touristspot' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'Touristspot\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Touristspot\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Planner', 'touristSpots'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Planner.weather`.
    *
    * ### ️⚠️ You have not written documentation for model Planner
    *
    * Replace this default advisory JSDoc with your own documentation about model Planner
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Planner {
    *   /// Lorem ipsum dolor sit amet.
    *   weather  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Planner } from 'nexus-prisma'
    *
    * objectType({
    *   name: Planner.$name
    *   description: Planner.$description
    *   definition(t) {
    *     t.field(Planner.weather)
    *   }
    * })
    */
  weather: {
    /**
     * The name of this field.
     */
    name: 'weather'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'String' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Planner', 'weather'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Event`.
  *
  * ### ️⚠️ You have not written documentation for model Event
  *
  * Replace this default advisory JSDoc with your own documentation about model Event
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model Event {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Event } from 'nexus-prisma'
  *
  * objectType({
  *   name: Event.$name
  *   description: Event.$description
  *   definition(t) {
  *     t.field(Event.id)
  *   }
  * })
  */
export interface Event {
  $name: 'Event'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Event.id`.
    *
    * ### ️⚠️ You have not written documentation for model Event
    *
    * Replace this default advisory JSDoc with your own documentation about model Event
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Event {
    *   /// Lorem ipsum dolor sit amet.
    *   id  Int
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Event } from 'nexus-prisma'
    *
    * objectType({
    *   name: Event.$name
    *   description: Event.$description
    *   definition(t) {
    *     t.field(Event.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Int' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Event', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Event.name`.
    *
    * ### ️⚠️ You have not written documentation for model Event
    *
    * Replace this default advisory JSDoc with your own documentation about model Event
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Event {
    *   /// Lorem ipsum dolor sit amet.
    *   name  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Event } from 'nexus-prisma'
    *
    * objectType({
    *   name: Event.$name
    *   description: Event.$description
    *   definition(t) {
    *     t.field(Event.name)
    *   }
    * })
    */
  name: {
    /**
     * The name of this field.
     */
    name: 'name'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Event', 'name'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Event.location`.
    *
    * ### ️⚠️ You have not written documentation for model Event
    *
    * Replace this default advisory JSDoc with your own documentation about model Event
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Event {
    *   /// Lorem ipsum dolor sit amet.
    *   location  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Event } from 'nexus-prisma'
    *
    * objectType({
    *   name: Event.$name
    *   description: Event.$description
    *   definition(t) {
    *     t.field(Event.location)
    *   }
    * })
    */
  location: {
    /**
     * The name of this field.
     */
    name: 'location'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Event', 'location'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Event.rnAddress`.
    *
    * ### ️⚠️ You have not written documentation for model Event
    *
    * Replace this default advisory JSDoc with your own documentation about model Event
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Event {
    *   /// Lorem ipsum dolor sit amet.
    *   rnAddress  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Event } from 'nexus-prisma'
    *
    * objectType({
    *   name: Event.$name
    *   description: Event.$description
    *   definition(t) {
    *     t.field(Event.rnAddress)
    *   }
    * })
    */
  rnAddress: {
    /**
     * The name of this field.
     */
    name: 'rnAddress'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Event', 'rnAddress'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Event.lnAddress`.
    *
    * ### ️⚠️ You have not written documentation for model Event
    *
    * Replace this default advisory JSDoc with your own documentation about model Event
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Event {
    *   /// Lorem ipsum dolor sit amet.
    *   lnAddress  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Event } from 'nexus-prisma'
    *
    * objectType({
    *   name: Event.$name
    *   description: Event.$description
    *   definition(t) {
    *     t.field(Event.lnAddress)
    *   }
    * })
    */
  lnAddress: {
    /**
     * The name of this field.
     */
    name: 'lnAddress'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Event', 'lnAddress'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Event.stDate`.
    *
    * ### ️⚠️ You have not written documentation for model Event
    *
    * Replace this default advisory JSDoc with your own documentation about model Event
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Event {
    *   /// Lorem ipsum dolor sit amet.
    *   stDate  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Event } from 'nexus-prisma'
    *
    * objectType({
    *   name: Event.$name
    *   description: Event.$description
    *   definition(t) {
    *     t.field(Event.stDate)
    *   }
    * })
    */
  stDate: {
    /**
     * The name of this field.
     */
    name: 'stDate'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Event', 'stDate'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Event.fnDate`.
    *
    * ### ️⚠️ You have not written documentation for model Event
    *
    * Replace this default advisory JSDoc with your own documentation about model Event
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Event {
    *   /// Lorem ipsum dolor sit amet.
    *   fnDate  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Event } from 'nexus-prisma'
    *
    * objectType({
    *   name: Event.$name
    *   description: Event.$description
    *   definition(t) {
    *     t.field(Event.fnDate)
    *   }
    * })
    */
  fnDate: {
    /**
     * The name of this field.
     */
    name: 'fnDate'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Event', 'fnDate'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Event.stTime`.
    *
    * ### ️⚠️ You have not written documentation for model Event
    *
    * Replace this default advisory JSDoc with your own documentation about model Event
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Event {
    *   /// Lorem ipsum dolor sit amet.
    *   stTime  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Event } from 'nexus-prisma'
    *
    * objectType({
    *   name: Event.$name
    *   description: Event.$description
    *   definition(t) {
    *     t.field(Event.stTime)
    *   }
    * })
    */
  stTime: {
    /**
     * The name of this field.
     */
    name: 'stTime'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Event', 'stTime'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Event.fnTime`.
    *
    * ### ️⚠️ You have not written documentation for model Event
    *
    * Replace this default advisory JSDoc with your own documentation about model Event
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Event {
    *   /// Lorem ipsum dolor sit amet.
    *   fnTime  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Event } from 'nexus-prisma'
    *
    * objectType({
    *   name: Event.$name
    *   description: Event.$description
    *   definition(t) {
    *     t.field(Event.fnTime)
    *   }
    * })
    */
  fnTime: {
    /**
     * The name of this field.
     */
    name: 'fnTime'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Event', 'fnTime'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Event.charge`.
    *
    * ### ️⚠️ You have not written documentation for model Event
    *
    * Replace this default advisory JSDoc with your own documentation about model Event
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Event {
    *   /// Lorem ipsum dolor sit amet.
    *   charge  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Event } from 'nexus-prisma'
    *
    * objectType({
    *   name: Event.$name
    *   description: Event.$description
    *   definition(t) {
    *     t.field(Event.charge)
    *   }
    * })
    */
  charge: {
    /**
     * The name of this field.
     */
    name: 'charge'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Event', 'charge'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Event.org`.
    *
    * ### ️⚠️ You have not written documentation for model Event
    *
    * Replace this default advisory JSDoc with your own documentation about model Event
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Event {
    *   /// Lorem ipsum dolor sit amet.
    *   org  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Event } from 'nexus-prisma'
    *
    * objectType({
    *   name: Event.$name
    *   description: Event.$description
    *   definition(t) {
    *     t.field(Event.org)
    *   }
    * })
    */
  org: {
    /**
     * The name of this field.
     */
    name: 'org'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Event', 'org'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Event.discountInfo`.
    *
    * ### ️⚠️ You have not written documentation for model Event
    *
    * Replace this default advisory JSDoc with your own documentation about model Event
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Event {
    *   /// Lorem ipsum dolor sit amet.
    *   discountInfo  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Event } from 'nexus-prisma'
    *
    * objectType({
    *   name: Event.$name
    *   description: Event.$description
    *   definition(t) {
    *     t.field(Event.discountInfo)
    *   }
    * })
    */
  discountInfo: {
    /**
     * The name of this field.
     */
    name: 'discountInfo'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Event', 'discountInfo'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Event.enterAge`.
    *
    * ### ️⚠️ You have not written documentation for model Event
    *
    * Replace this default advisory JSDoc with your own documentation about model Event
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Event {
    *   /// Lorem ipsum dolor sit amet.
    *   enterAge  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Event } from 'nexus-prisma'
    *
    * objectType({
    *   name: Event.$name
    *   description: Event.$description
    *   definition(t) {
    *     t.field(Event.enterAge)
    *   }
    * })
    */
  enterAge: {
    /**
     * The name of this field.
     */
    name: 'enterAge'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Event', 'enterAge'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Event.url`.
    *
    * ### ️⚠️ You have not written documentation for model Event
    *
    * Replace this default advisory JSDoc with your own documentation about model Event
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Event {
    *   /// Lorem ipsum dolor sit amet.
    *   url  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Event } from 'nexus-prisma'
    *
    * objectType({
    *   name: Event.$name
    *   description: Event.$description
    *   definition(t) {
    *     t.field(Event.url)
    *   }
    * })
    */
  url: {
    /**
     * The name of this field.
     */
    name: 'url'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Event', 'url'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Event.parking`.
    *
    * ### ️⚠️ You have not written documentation for model Event
    *
    * Replace this default advisory JSDoc with your own documentation about model Event
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Event {
    *   /// Lorem ipsum dolor sit amet.
    *   parking  Boolean?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Event } from 'nexus-prisma'
    *
    * objectType({
    *   name: Event.$name
    *   description: Event.$description
    *   definition(t) {
    *     t.field(Event.parking)
    *   }
    * })
    */
  parking: {
    /**
     * The name of this field.
     */
    name: 'parking'
  
    /**
     * The type of this field.
     */
    type: 'Boolean' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'Boolean' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'Boolean\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Boolean\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Event', 'parking'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Event.detail`.
    *
    * ### ️⚠️ You have not written documentation for model Event
    *
    * Replace this default advisory JSDoc with your own documentation about model Event
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Event {
    *   /// Lorem ipsum dolor sit amet.
    *   detail  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Event } from 'nexus-prisma'
    *
    * objectType({
    *   name: Event.$name
    *   description: Event.$description
    *   definition(t) {
    *     t.field(Event.detail)
    *   }
    * })
    */
  detail: {
    /**
     * The name of this field.
     */
    name: 'detail'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Event', 'detail'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Event.planners`.
    *
    * ### ️⚠️ You have not written documentation for model Event
    *
    * Replace this default advisory JSDoc with your own documentation about model Event
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Event {
    *   /// Lorem ipsum dolor sit amet.
    *   planners  Planner
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Event } from 'nexus-prisma'
    *
    * objectType({
    *   name: Event.$name
    *   description: Event.$description
    *   definition(t) {
    *     t.field(Event.planners)
    *   }
    * })
    */
  planners: {
    /**
     * The name of this field.
     */
    name: 'planners'
  
    /**
     * The type of this field.
     */
    type: 'Planner' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Planner' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'Planner' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'Planner\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Planner\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Event', 'planners'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Festival`.
  *
  * ### ️⚠️ You have not written documentation for model Festival
  *
  * Replace this default advisory JSDoc with your own documentation about model Festival
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model Festival {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Festival } from 'nexus-prisma'
  *
  * objectType({
  *   name: Festival.$name
  *   description: Festival.$description
  *   definition(t) {
  *     t.field(Festival.id)
  *   }
  * })
  */
export interface Festival {
  $name: 'Festival'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Festival.id`.
    *
    * ### ️⚠️ You have not written documentation for model Festival
    *
    * Replace this default advisory JSDoc with your own documentation about model Festival
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Festival {
    *   /// Lorem ipsum dolor sit amet.
    *   id  Int
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Festival } from 'nexus-prisma'
    *
    * objectType({
    *   name: Festival.$name
    *   description: Festival.$description
    *   definition(t) {
    *     t.field(Festival.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Int' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Festival', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Festival.title`.
    *
    * ### ️⚠️ You have not written documentation for model Festival
    *
    * Replace this default advisory JSDoc with your own documentation about model Festival
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Festival {
    *   /// Lorem ipsum dolor sit amet.
    *   title  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Festival } from 'nexus-prisma'
    *
    * objectType({
    *   name: Festival.$name
    *   description: Festival.$description
    *   definition(t) {
    *     t.field(Festival.title)
    *   }
    * })
    */
  title: {
    /**
     * The name of this field.
     */
    name: 'title'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Festival', 'title'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Festival.tel`.
    *
    * ### ️⚠️ You have not written documentation for model Festival
    *
    * Replace this default advisory JSDoc with your own documentation about model Festival
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Festival {
    *   /// Lorem ipsum dolor sit amet.
    *   tel  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Festival } from 'nexus-prisma'
    *
    * objectType({
    *   name: Festival.$name
    *   description: Festival.$description
    *   definition(t) {
    *     t.field(Festival.tel)
    *   }
    * })
    */
  tel: {
    /**
     * The name of this field.
     */
    name: 'tel'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Festival', 'tel'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Festival.first_image`.
    *
    * ### ️⚠️ You have not written documentation for model Festival
    *
    * Replace this default advisory JSDoc with your own documentation about model Festival
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Festival {
    *   /// Lorem ipsum dolor sit amet.
    *   first_image  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Festival } from 'nexus-prisma'
    *
    * objectType({
    *   name: Festival.$name
    *   description: Festival.$description
    *   definition(t) {
    *     t.field(Festival.first_image)
    *   }
    * })
    */
  first_image: {
    /**
     * The name of this field.
     */
    name: 'first_image'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Festival', 'first_image'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Festival.first_image2`.
    *
    * ### ️⚠️ You have not written documentation for model Festival
    *
    * Replace this default advisory JSDoc with your own documentation about model Festival
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Festival {
    *   /// Lorem ipsum dolor sit amet.
    *   first_image2  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Festival } from 'nexus-prisma'
    *
    * objectType({
    *   name: Festival.$name
    *   description: Festival.$description
    *   definition(t) {
    *     t.field(Festival.first_image2)
    *   }
    * })
    */
  first_image2: {
    /**
     * The name of this field.
     */
    name: 'first_image2'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Festival', 'first_image2'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Festival.startDate`.
    *
    * ### ️⚠️ You have not written documentation for model Festival
    *
    * Replace this default advisory JSDoc with your own documentation about model Festival
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Festival {
    *   /// Lorem ipsum dolor sit amet.
    *   startDate  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Festival } from 'nexus-prisma'
    *
    * objectType({
    *   name: Festival.$name
    *   description: Festival.$description
    *   definition(t) {
    *     t.field(Festival.startDate)
    *   }
    * })
    */
  startDate: {
    /**
     * The name of this field.
     */
    name: 'startDate'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Festival', 'startDate'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Festival.endDate`.
    *
    * ### ️⚠️ You have not written documentation for model Festival
    *
    * Replace this default advisory JSDoc with your own documentation about model Festival
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Festival {
    *   /// Lorem ipsum dolor sit amet.
    *   endDate  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Festival } from 'nexus-prisma'
    *
    * objectType({
    *   name: Festival.$name
    *   description: Festival.$description
    *   definition(t) {
    *     t.field(Festival.endDate)
    *   }
    * })
    */
  endDate: {
    /**
     * The name of this field.
     */
    name: 'endDate'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Festival', 'endDate'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Festival.contentId`.
    *
    * ### ️⚠️ You have not written documentation for model Festival
    *
    * Replace this default advisory JSDoc with your own documentation about model Festival
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Festival {
    *   /// Lorem ipsum dolor sit amet.
    *   contentId  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Festival } from 'nexus-prisma'
    *
    * objectType({
    *   name: Festival.$name
    *   description: Festival.$description
    *   definition(t) {
    *     t.field(Festival.contentId)
    *   }
    * })
    */
  contentId: {
    /**
     * The name of this field.
     */
    name: 'contentId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Festival', 'contentId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Festival.contentTypeId`.
    *
    * ### ️⚠️ You have not written documentation for model Festival
    *
    * Replace this default advisory JSDoc with your own documentation about model Festival
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Festival {
    *   /// Lorem ipsum dolor sit amet.
    *   contentTypeId  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Festival } from 'nexus-prisma'
    *
    * objectType({
    *   name: Festival.$name
    *   description: Festival.$description
    *   definition(t) {
    *     t.field(Festival.contentTypeId)
    *   }
    * })
    */
  contentTypeId: {
    /**
     * The name of this field.
     */
    name: 'contentTypeId'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Festival', 'contentTypeId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Festival.addr1`.
    *
    * ### ️⚠️ You have not written documentation for model Festival
    *
    * Replace this default advisory JSDoc with your own documentation about model Festival
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Festival {
    *   /// Lorem ipsum dolor sit amet.
    *   addr1  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Festival } from 'nexus-prisma'
    *
    * objectType({
    *   name: Festival.$name
    *   description: Festival.$description
    *   definition(t) {
    *     t.field(Festival.addr1)
    *   }
    * })
    */
  addr1: {
    /**
     * The name of this field.
     */
    name: 'addr1'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Festival', 'addr1'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Festival.addr2`.
    *
    * ### ️⚠️ You have not written documentation for model Festival
    *
    * Replace this default advisory JSDoc with your own documentation about model Festival
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Festival {
    *   /// Lorem ipsum dolor sit amet.
    *   addr2  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Festival } from 'nexus-prisma'
    *
    * objectType({
    *   name: Festival.$name
    *   description: Festival.$description
    *   definition(t) {
    *     t.field(Festival.addr2)
    *   }
    * })
    */
  addr2: {
    /**
     * The name of this field.
     */
    name: 'addr2'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Festival', 'addr2'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Festival.ageLimit`.
    *
    * ### ️⚠️ You have not written documentation for model Festival
    *
    * Replace this default advisory JSDoc with your own documentation about model Festival
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Festival {
    *   /// Lorem ipsum dolor sit amet.
    *   ageLimit  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Festival } from 'nexus-prisma'
    *
    * objectType({
    *   name: Festival.$name
    *   description: Festival.$description
    *   definition(t) {
    *     t.field(Festival.ageLimit)
    *   }
    * })
    */
  ageLimit: {
    /**
     * The name of this field.
     */
    name: 'ageLimit'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Festival', 'ageLimit'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Festival.bookingPlace`.
    *
    * ### ️⚠️ You have not written documentation for model Festival
    *
    * Replace this default advisory JSDoc with your own documentation about model Festival
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Festival {
    *   /// Lorem ipsum dolor sit amet.
    *   bookingPlace  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Festival } from 'nexus-prisma'
    *
    * objectType({
    *   name: Festival.$name
    *   description: Festival.$description
    *   definition(t) {
    *     t.field(Festival.bookingPlace)
    *   }
    * })
    */
  bookingPlace: {
    /**
     * The name of this field.
     */
    name: 'bookingPlace'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Festival', 'bookingPlace'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Festival.discountInfo`.
    *
    * ### ️⚠️ You have not written documentation for model Festival
    *
    * Replace this default advisory JSDoc with your own documentation about model Festival
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Festival {
    *   /// Lorem ipsum dolor sit amet.
    *   discountInfo  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Festival } from 'nexus-prisma'
    *
    * objectType({
    *   name: Festival.$name
    *   description: Festival.$description
    *   definition(t) {
    *     t.field(Festival.discountInfo)
    *   }
    * })
    */
  discountInfo: {
    /**
     * The name of this field.
     */
    name: 'discountInfo'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Festival', 'discountInfo'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Festival.homepage`.
    *
    * ### ️⚠️ You have not written documentation for model Festival
    *
    * Replace this default advisory JSDoc with your own documentation about model Festival
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Festival {
    *   /// Lorem ipsum dolor sit amet.
    *   homepage  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Festival } from 'nexus-prisma'
    *
    * objectType({
    *   name: Festival.$name
    *   description: Festival.$description
    *   definition(t) {
    *     t.field(Festival.homepage)
    *   }
    * })
    */
  homepage: {
    /**
     * The name of this field.
     */
    name: 'homepage'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Festival', 'homepage'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Festival.grade`.
    *
    * ### ️⚠️ You have not written documentation for model Festival
    *
    * Replace this default advisory JSDoc with your own documentation about model Festival
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Festival {
    *   /// Lorem ipsum dolor sit amet.
    *   grade  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Festival } from 'nexus-prisma'
    *
    * objectType({
    *   name: Festival.$name
    *   description: Festival.$description
    *   definition(t) {
    *     t.field(Festival.grade)
    *   }
    * })
    */
  grade: {
    /**
     * The name of this field.
     */
    name: 'grade'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Festival', 'grade'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Festival.sponsor1`.
    *
    * ### ️⚠️ You have not written documentation for model Festival
    *
    * Replace this default advisory JSDoc with your own documentation about model Festival
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Festival {
    *   /// Lorem ipsum dolor sit amet.
    *   sponsor1  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Festival } from 'nexus-prisma'
    *
    * objectType({
    *   name: Festival.$name
    *   description: Festival.$description
    *   definition(t) {
    *     t.field(Festival.sponsor1)
    *   }
    * })
    */
  sponsor1: {
    /**
     * The name of this field.
     */
    name: 'sponsor1'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Festival', 'sponsor1'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Festival.sponsor1Tel`.
    *
    * ### ️⚠️ You have not written documentation for model Festival
    *
    * Replace this default advisory JSDoc with your own documentation about model Festival
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Festival {
    *   /// Lorem ipsum dolor sit amet.
    *   sponsor1Tel  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Festival } from 'nexus-prisma'
    *
    * objectType({
    *   name: Festival.$name
    *   description: Festival.$description
    *   definition(t) {
    *     t.field(Festival.sponsor1Tel)
    *   }
    * })
    */
  sponsor1Tel: {
    /**
     * The name of this field.
     */
    name: 'sponsor1Tel'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Festival', 'sponsor1Tel'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Festival.sponsor2`.
    *
    * ### ️⚠️ You have not written documentation for model Festival
    *
    * Replace this default advisory JSDoc with your own documentation about model Festival
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Festival {
    *   /// Lorem ipsum dolor sit amet.
    *   sponsor2  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Festival } from 'nexus-prisma'
    *
    * objectType({
    *   name: Festival.$name
    *   description: Festival.$description
    *   definition(t) {
    *     t.field(Festival.sponsor2)
    *   }
    * })
    */
  sponsor2: {
    /**
     * The name of this field.
     */
    name: 'sponsor2'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Festival', 'sponsor2'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Festival.sponsor2Tel`.
    *
    * ### ️⚠️ You have not written documentation for model Festival
    *
    * Replace this default advisory JSDoc with your own documentation about model Festival
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Festival {
    *   /// Lorem ipsum dolor sit amet.
    *   sponsor2Tel  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Festival } from 'nexus-prisma'
    *
    * objectType({
    *   name: Festival.$name
    *   description: Festival.$description
    *   definition(t) {
    *     t.field(Festival.sponsor2Tel)
    *   }
    * })
    */
  sponsor2Tel: {
    /**
     * The name of this field.
     */
    name: 'sponsor2Tel'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Festival', 'sponsor2Tel'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Festival.subevent`.
    *
    * ### ️⚠️ You have not written documentation for model Festival
    *
    * Replace this default advisory JSDoc with your own documentation about model Festival
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Festival {
    *   /// Lorem ipsum dolor sit amet.
    *   subevent  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Festival } from 'nexus-prisma'
    *
    * objectType({
    *   name: Festival.$name
    *   description: Festival.$description
    *   definition(t) {
    *     t.field(Festival.subevent)
    *   }
    * })
    */
  subevent: {
    /**
     * The name of this field.
     */
    name: 'subevent'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Festival', 'subevent'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Festival.useTimeFestival`.
    *
    * ### ️⚠️ You have not written documentation for model Festival
    *
    * Replace this default advisory JSDoc with your own documentation about model Festival
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Festival {
    *   /// Lorem ipsum dolor sit amet.
    *   useTimeFestival  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Festival } from 'nexus-prisma'
    *
    * objectType({
    *   name: Festival.$name
    *   description: Festival.$description
    *   definition(t) {
    *     t.field(Festival.useTimeFestival)
    *   }
    * })
    */
  useTimeFestival: {
    /**
     * The name of this field.
     */
    name: 'useTimeFestival'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Festival', 'useTimeFestival'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Festival.planners`.
    *
    * ### ️⚠️ You have not written documentation for model Festival
    *
    * Replace this default advisory JSDoc with your own documentation about model Festival
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Festival {
    *   /// Lorem ipsum dolor sit amet.
    *   planners  Planner
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Festival } from 'nexus-prisma'
    *
    * objectType({
    *   name: Festival.$name
    *   description: Festival.$description
    *   definition(t) {
    *     t.field(Festival.planners)
    *   }
    * })
    */
  planners: {
    /**
     * The name of this field.
     */
    name: 'planners'
  
    /**
     * The type of this field.
     */
    type: 'Planner' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Planner' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'Planner' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'Planner\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Planner\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Festival', 'planners'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Region`.
  *
  * ### ️⚠️ You have not written documentation for model Region
  *
  * Replace this default advisory JSDoc with your own documentation about model Region
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model Region {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Region } from 'nexus-prisma'
  *
  * objectType({
  *   name: Region.$name
  *   description: Region.$description
  *   definition(t) {
  *     t.field(Region.id)
  *   }
  * })
  */
export interface Region {
  $name: 'Region'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Region.id`.
    *
    * ### ️⚠️ You have not written documentation for model Region
    *
    * Replace this default advisory JSDoc with your own documentation about model Region
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Region {
    *   /// Lorem ipsum dolor sit amet.
    *   id  Int
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Region } from 'nexus-prisma'
    *
    * objectType({
    *   name: Region.$name
    *   description: Region.$description
    *   definition(t) {
    *     t.field(Region.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Int' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Region', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Region.level1`.
    *
    * ### ️⚠️ You have not written documentation for model Region
    *
    * Replace this default advisory JSDoc with your own documentation about model Region
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Region {
    *   /// Lorem ipsum dolor sit amet.
    *   level1  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Region } from 'nexus-prisma'
    *
    * objectType({
    *   name: Region.$name
    *   description: Region.$description
    *   definition(t) {
    *     t.field(Region.level1)
    *   }
    * })
    */
  level1: {
    /**
     * The name of this field.
     */
    name: 'level1'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Region', 'level1'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Region.level2`.
    *
    * ### ️⚠️ You have not written documentation for model Region
    *
    * Replace this default advisory JSDoc with your own documentation about model Region
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Region {
    *   /// Lorem ipsum dolor sit amet.
    *   level2  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Region } from 'nexus-prisma'
    *
    * objectType({
    *   name: Region.$name
    *   description: Region.$description
    *   definition(t) {
    *     t.field(Region.level2)
    *   }
    * })
    */
  level2: {
    /**
     * The name of this field.
     */
    name: 'level2'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Region', 'level2'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Region.level3`.
    *
    * ### ️⚠️ You have not written documentation for model Region
    *
    * Replace this default advisory JSDoc with your own documentation about model Region
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Region {
    *   /// Lorem ipsum dolor sit amet.
    *   level3  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Region } from 'nexus-prisma'
    *
    * objectType({
    *   name: Region.$name
    *   description: Region.$description
    *   definition(t) {
    *     t.field(Region.level3)
    *   }
    * })
    */
  level3: {
    /**
     * The name of this field.
     */
    name: 'level3'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Region', 'level3'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Region.xCoord`.
    *
    * ### ️⚠️ You have not written documentation for model Region
    *
    * Replace this default advisory JSDoc with your own documentation about model Region
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Region {
    *   /// Lorem ipsum dolor sit amet.
    *   xCoord  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Region } from 'nexus-prisma'
    *
    * objectType({
    *   name: Region.$name
    *   description: Region.$description
    *   definition(t) {
    *     t.field(Region.xCoord)
    *   }
    * })
    */
  xCoord: {
    /**
     * The name of this field.
     */
    name: 'xCoord'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Region', 'xCoord'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Region.yCoord`.
    *
    * ### ️⚠️ You have not written documentation for model Region
    *
    * Replace this default advisory JSDoc with your own documentation about model Region
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Region {
    *   /// Lorem ipsum dolor sit amet.
    *   yCoord  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Region } from 'nexus-prisma'
    *
    * objectType({
    *   name: Region.$name
    *   description: Region.$description
    *   definition(t) {
    *     t.field(Region.yCoord)
    *   }
    * })
    */
  yCoord: {
    /**
     * The name of this field.
     */
    name: 'yCoord'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Region', 'yCoord'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Region.midTermCode`.
    *
    * ### ️⚠️ You have not written documentation for model Region
    *
    * Replace this default advisory JSDoc with your own documentation about model Region
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Region {
    *   /// Lorem ipsum dolor sit amet.
    *   midTermCode  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Region } from 'nexus-prisma'
    *
    * objectType({
    *   name: Region.$name
    *   description: Region.$description
    *   definition(t) {
    *     t.field(Region.midTermCode)
    *   }
    * })
    */
  midTermCode: {
    /**
     * The name of this field.
     */
    name: 'midTermCode'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Region', 'midTermCode'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Region.shortTermCode`.
    *
    * ### ️⚠️ You have not written documentation for model Region
    *
    * Replace this default advisory JSDoc with your own documentation about model Region
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Region {
    *   /// Lorem ipsum dolor sit amet.
    *   shortTermCode  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Region } from 'nexus-prisma'
    *
    * objectType({
    *   name: Region.$name
    *   description: Region.$description
    *   definition(t) {
    *     t.field(Region.shortTermCode)
    *   }
    * })
    */
  shortTermCode: {
    /**
     * The name of this field.
     */
    name: 'shortTermCode'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Region', 'shortTermCode'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Region.shortTermWeather`.
    *
    * ### ️⚠️ You have not written documentation for model Region
    *
    * Replace this default advisory JSDoc with your own documentation about model Region
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Region {
    *   /// Lorem ipsum dolor sit amet.
    *   shortTermWeather  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Region } from 'nexus-prisma'
    *
    * objectType({
    *   name: Region.$name
    *   description: Region.$description
    *   definition(t) {
    *     t.field(Region.shortTermWeather)
    *   }
    * })
    */
  shortTermWeather: {
    /**
     * The name of this field.
     */
    name: 'shortTermWeather'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Region', 'shortTermWeather'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Region.midTermWeather`.
    *
    * ### ️⚠️ You have not written documentation for model Region
    *
    * Replace this default advisory JSDoc with your own documentation about model Region
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Region {
    *   /// Lorem ipsum dolor sit amet.
    *   midTermWeather  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Region } from 'nexus-prisma'
    *
    * objectType({
    *   name: Region.$name
    *   description: Region.$description
    *   definition(t) {
    *     t.field(Region.midTermWeather)
    *   }
    * })
    */
  midTermWeather: {
    /**
     * The name of this field.
     */
    name: 'midTermWeather'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Region', 'midTermWeather'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Touristspot`.
  *
  * ### ️⚠️ You have not written documentation for model Touristspot
  *
  * Replace this default advisory JSDoc with your own documentation about model Touristspot
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model Touristspot {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Touristspot } from 'nexus-prisma'
  *
  * objectType({
  *   name: Touristspot.$name
  *   description: Touristspot.$description
  *   definition(t) {
  *     t.field(Touristspot.id)
  *   }
  * })
  */
export interface Touristspot {
  $name: 'Touristspot'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Touristspot.id`.
    *
    * ### ️⚠️ You have not written documentation for model Touristspot
    *
    * Replace this default advisory JSDoc with your own documentation about model Touristspot
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Touristspot {
    *   /// Lorem ipsum dolor sit amet.
    *   id  Int
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Touristspot } from 'nexus-prisma'
    *
    * objectType({
    *   name: Touristspot.$name
    *   description: Touristspot.$description
    *   definition(t) {
    *     t.field(Touristspot.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Int' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Touristspot', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Touristspot.name`.
    *
    * ### ️⚠️ You have not written documentation for model Touristspot
    *
    * Replace this default advisory JSDoc with your own documentation about model Touristspot
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Touristspot {
    *   /// Lorem ipsum dolor sit amet.
    *   name  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Touristspot } from 'nexus-prisma'
    *
    * objectType({
    *   name: Touristspot.$name
    *   description: Touristspot.$description
    *   definition(t) {
    *     t.field(Touristspot.name)
    *   }
    * })
    */
  name: {
    /**
     * The name of this field.
     */
    name: 'name'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Touristspot', 'name'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Touristspot.category`.
    *
    * ### ️⚠️ You have not written documentation for model Touristspot
    *
    * Replace this default advisory JSDoc with your own documentation about model Touristspot
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Touristspot {
    *   /// Lorem ipsum dolor sit amet.
    *   category  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Touristspot } from 'nexus-prisma'
    *
    * objectType({
    *   name: Touristspot.$name
    *   description: Touristspot.$description
    *   definition(t) {
    *     t.field(Touristspot.category)
    *   }
    * })
    */
  category: {
    /**
     * The name of this field.
     */
    name: 'category'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Touristspot', 'category'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Touristspot.rdnmadr`.
    *
    * ### ️⚠️ You have not written documentation for model Touristspot
    *
    * Replace this default advisory JSDoc with your own documentation about model Touristspot
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Touristspot {
    *   /// Lorem ipsum dolor sit amet.
    *   rdnmadr  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Touristspot } from 'nexus-prisma'
    *
    * objectType({
    *   name: Touristspot.$name
    *   description: Touristspot.$description
    *   definition(t) {
    *     t.field(Touristspot.rdnmadr)
    *   }
    * })
    */
  rdnmadr: {
    /**
     * The name of this field.
     */
    name: 'rdnmadr'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Touristspot', 'rdnmadr'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Touristspot.lnmadr`.
    *
    * ### ️⚠️ You have not written documentation for model Touristspot
    *
    * Replace this default advisory JSDoc with your own documentation about model Touristspot
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Touristspot {
    *   /// Lorem ipsum dolor sit amet.
    *   lnmadr  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Touristspot } from 'nexus-prisma'
    *
    * objectType({
    *   name: Touristspot.$name
    *   description: Touristspot.$description
    *   definition(t) {
    *     t.field(Touristspot.lnmadr)
    *   }
    * })
    */
  lnmadr: {
    /**
     * The name of this field.
     */
    name: 'lnmadr'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Touristspot', 'lnmadr'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Touristspot.cnvnncFclty`.
    *
    * ### ️⚠️ You have not written documentation for model Touristspot
    *
    * Replace this default advisory JSDoc with your own documentation about model Touristspot
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Touristspot {
    *   /// Lorem ipsum dolor sit amet.
    *   cnvnncFclty  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Touristspot } from 'nexus-prisma'
    *
    * objectType({
    *   name: Touristspot.$name
    *   description: Touristspot.$description
    *   definition(t) {
    *     t.field(Touristspot.cnvnncFclty)
    *   }
    * })
    */
  cnvnncFclty: {
    /**
     * The name of this field.
     */
    name: 'cnvnncFclty'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Touristspot', 'cnvnncFclty'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Touristspot.appnDate`.
    *
    * ### ️⚠️ You have not written documentation for model Touristspot
    *
    * Replace this default advisory JSDoc with your own documentation about model Touristspot
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Touristspot {
    *   /// Lorem ipsum dolor sit amet.
    *   appnDate  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Touristspot } from 'nexus-prisma'
    *
    * objectType({
    *   name: Touristspot.$name
    *   description: Touristspot.$description
    *   definition(t) {
    *     t.field(Touristspot.appnDate)
    *   }
    * })
    */
  appnDate: {
    /**
     * The name of this field.
     */
    name: 'appnDate'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Touristspot', 'appnDate'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Touristspot.aceptncCo`.
    *
    * ### ️⚠️ You have not written documentation for model Touristspot
    *
    * Replace this default advisory JSDoc with your own documentation about model Touristspot
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Touristspot {
    *   /// Lorem ipsum dolor sit amet.
    *   aceptncCo  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Touristspot } from 'nexus-prisma'
    *
    * objectType({
    *   name: Touristspot.$name
    *   description: Touristspot.$description
    *   definition(t) {
    *     t.field(Touristspot.aceptncCo)
    *   }
    * })
    */
  aceptncCo: {
    /**
     * The name of this field.
     */
    name: 'aceptncCo'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Touristspot', 'aceptncCo'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Touristspot.parkingPlace`.
    *
    * ### ️⚠️ You have not written documentation for model Touristspot
    *
    * Replace this default advisory JSDoc with your own documentation about model Touristspot
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Touristspot {
    *   /// Lorem ipsum dolor sit amet.
    *   parkingPlace  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Touristspot } from 'nexus-prisma'
    *
    * objectType({
    *   name: Touristspot.$name
    *   description: Touristspot.$description
    *   definition(t) {
    *     t.field(Touristspot.parkingPlace)
    *   }
    * })
    */
  parkingPlace: {
    /**
     * The name of this field.
     */
    name: 'parkingPlace'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Touristspot', 'parkingPlace'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Touristspot.introduce`.
    *
    * ### ️⚠️ You have not written documentation for model Touristspot
    *
    * Replace this default advisory JSDoc with your own documentation about model Touristspot
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Touristspot {
    *   /// Lorem ipsum dolor sit amet.
    *   introduce  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Touristspot } from 'nexus-prisma'
    *
    * objectType({
    *   name: Touristspot.$name
    *   description: Touristspot.$description
    *   definition(t) {
    *     t.field(Touristspot.introduce)
    *   }
    * })
    */
  introduce: {
    /**
     * The name of this field.
     */
    name: 'introduce'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Touristspot', 'introduce'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Touristspot.phoneNumber`.
    *
    * ### ️⚠️ You have not written documentation for model Touristspot
    *
    * Replace this default advisory JSDoc with your own documentation about model Touristspot
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Touristspot {
    *   /// Lorem ipsum dolor sit amet.
    *   phoneNumber  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Touristspot } from 'nexus-prisma'
    *
    * objectType({
    *   name: Touristspot.$name
    *   description: Touristspot.$description
    *   definition(t) {
    *     t.field(Touristspot.phoneNumber)
    *   }
    * })
    */
  phoneNumber: {
    /**
     * The name of this field.
     */
    name: 'phoneNumber'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Touristspot', 'phoneNumber'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Touristspot.institutionNm`.
    *
    * ### ️⚠️ You have not written documentation for model Touristspot
    *
    * Replace this default advisory JSDoc with your own documentation about model Touristspot
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Touristspot {
    *   /// Lorem ipsum dolor sit amet.
    *   institutionNm  String?
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Touristspot } from 'nexus-prisma'
    *
    * objectType({
    *   name: Touristspot.$name
    *   description: Touristspot.$description
    *   definition(t) {
    *     t.field(Touristspot.institutionNm)
    *   }
    * })
    */
  institutionNm: {
    /**
     * The name of this field.
     */
    name: 'institutionNm'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Touristspot', 'institutionNm'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Touristspot.planners`.
    *
    * ### ️⚠️ You have not written documentation for model Touristspot
    *
    * Replace this default advisory JSDoc with your own documentation about model Touristspot
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Touristspot {
    *   /// Lorem ipsum dolor sit amet.
    *   planners  Planner
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Touristspot } from 'nexus-prisma'
    *
    * objectType({
    *   name: Touristspot.$name
    *   description: Touristspot.$description
    *   definition(t) {
    *     t.field(Touristspot.planners)
    *   }
    * })
    */
  planners: {
    /**
     * The name of this field.
     */
    name: 'planners'
  
    /**
     * The type of this field.
     */
    type: 'Planner' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Planner' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'Planner' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'Planner\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Planner\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Touristspot', 'planners'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Review`.
  *
  * ### ️⚠️ You have not written documentation for model Review
  *
  * Replace this default advisory JSDoc with your own documentation about model Review
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model Review {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Review } from 'nexus-prisma'
  *
  * objectType({
  *   name: Review.$name
  *   description: Review.$description
  *   definition(t) {
  *     t.field(Review.id)
  *   }
  * })
  */
export interface Review {
  $name: 'Review'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Review.id`.
    *
    * ### ️⚠️ You have not written documentation for model Review
    *
    * Replace this default advisory JSDoc with your own documentation about model Review
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Review {
    *   /// Lorem ipsum dolor sit amet.
    *   id  Int
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Review } from 'nexus-prisma'
    *
    * objectType({
    *   name: Review.$name
    *   description: Review.$description
    *   definition(t) {
    *     t.field(Review.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Int' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Review', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Review.title`.
    *
    * ### ️⚠️ You have not written documentation for model Review
    *
    * Replace this default advisory JSDoc with your own documentation about model Review
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Review {
    *   /// Lorem ipsum dolor sit amet.
    *   title  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Review } from 'nexus-prisma'
    *
    * objectType({
    *   name: Review.$name
    *   description: Review.$description
    *   definition(t) {
    *     t.field(Review.title)
    *   }
    * })
    */
  title: {
    /**
     * The name of this field.
     */
    name: 'title'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Review', 'title'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Review.date`.
    *
    * ### ️⚠️ You have not written documentation for model Review
    *
    * Replace this default advisory JSDoc with your own documentation about model Review
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Review {
    *   /// Lorem ipsum dolor sit amet.
    *   date  Int
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Review } from 'nexus-prisma'
    *
    * objectType({
    *   name: Review.$name
    *   description: Review.$description
    *   definition(t) {
    *     t.field(Review.date)
    *   }
    * })
    */
  date: {
    /**
     * The name of this field.
     */
    name: 'date'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Int' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Review', 'date'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Review.grade`.
    *
    * ### ️⚠️ You have not written documentation for model Review
    *
    * Replace this default advisory JSDoc with your own documentation about model Review
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Review {
    *   /// Lorem ipsum dolor sit amet.
    *   grade  Int
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Review } from 'nexus-prisma'
    *
    * objectType({
    *   name: Review.$name
    *   description: Review.$description
    *   definition(t) {
    *     t.field(Review.grade)
    *   }
    * })
    */
  grade: {
    /**
     * The name of this field.
     */
    name: 'grade'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Int' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Review', 'grade'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Review.author`.
    *
    * ### ️⚠️ You have not written documentation for model Review
    *
    * Replace this default advisory JSDoc with your own documentation about model Review
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Review {
    *   /// Lorem ipsum dolor sit amet.
    *   author  User
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Review } from 'nexus-prisma'
    *
    * objectType({
    *   name: Review.$name
    *   description: Review.$description
    *   definition(t) {
    *     t.field(Review.author)
    *   }
    * })
    */
  author: {
    /**
     * The name of this field.
     */
    name: 'author'
  
    /**
     * The type of this field.
     */
    type: 'User' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'User' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'User\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'User\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Review', 'author'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Review.authorId`.
    *
    * ### ️⚠️ You have not written documentation for model Review
    *
    * Replace this default advisory JSDoc with your own documentation about model Review
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Review {
    *   /// Lorem ipsum dolor sit amet.
    *   authorId  Int
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Review } from 'nexus-prisma'
    *
    * objectType({
    *   name: Review.$name
    *   description: Review.$description
    *   definition(t) {
    *     t.field(Review.authorId)
    *   }
    * })
    */
  authorId: {
    /**
     * The name of this field.
     */
    name: 'authorId'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Int' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Review', 'authorId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Review.reviewPhotos`.
    *
    * ### ️⚠️ You have not written documentation for model Review
    *
    * Replace this default advisory JSDoc with your own documentation about model Review
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Review {
    *   /// Lorem ipsum dolor sit amet.
    *   reviewPhotos  Reviewphoto
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Review } from 'nexus-prisma'
    *
    * objectType({
    *   name: Review.$name
    *   description: Review.$description
    *   definition(t) {
    *     t.field(Review.reviewPhotos)
    *   }
    * })
    */
  reviewPhotos: {
    /**
     * The name of this field.
     */
    name: 'reviewPhotos'
  
    /**
     * The type of this field.
     */
    type: 'Reviewphoto' extends NexusCore.GetGen<'allNamedTypes', string>
    ? (NexusCore.NexusListDef<'Reviewphoto' & NexusCore.GetGen<'allNamedTypes', string>> | NexusCore.NexusNonNullDef<'Reviewphoto' & NexusCore.GetGen<'allNamedTypes', string>>)
    : 'Warning/Error: The type \'Reviewphoto\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Reviewphoto\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Review', 'reviewPhotos'>
  }
}

/**
  * Generated Nexus `objectType` configuration based on your Prisma schema's model `Reviewphoto`.
  *
  * ### ️⚠️ You have not written documentation for model Reviewphoto
  *
  * Replace this default advisory JSDoc with your own documentation about model Reviewphoto
  * by documenting it in your Prisma schema. For example:
  *
  * ```prisma
  * /// Lorem ipsum dolor sit amet...
  * model Reviewphoto {
  *   foo  String
  * }
  * ```
  *
  * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
  *
  * @example
  *
  * import { objectType } from 'nexus'
  * import { Reviewphoto } from 'nexus-prisma'
  *
  * objectType({
  *   name: Reviewphoto.$name
  *   description: Reviewphoto.$description
  *   definition(t) {
  *     t.field(Reviewphoto.id)
  *   }
  * })
  */
export interface Reviewphoto {
  $name: 'Reviewphoto'
  $description: undefined
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Reviewphoto.id`.
    *
    * ### ️⚠️ You have not written documentation for model Reviewphoto
    *
    * Replace this default advisory JSDoc with your own documentation about model Reviewphoto
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Reviewphoto {
    *   /// Lorem ipsum dolor sit amet.
    *   id  Int
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Reviewphoto } from 'nexus-prisma'
    *
    * objectType({
    *   name: Reviewphoto.$name
    *   description: Reviewphoto.$description
    *   definition(t) {
    *     t.field(Reviewphoto.id)
    *   }
    * })
    */
  id: {
    /**
     * The name of this field.
     */
    name: 'id'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Int' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Reviewphoto', 'id'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Reviewphoto.url`.
    *
    * ### ️⚠️ You have not written documentation for model Reviewphoto
    *
    * Replace this default advisory JSDoc with your own documentation about model Reviewphoto
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Reviewphoto {
    *   /// Lorem ipsum dolor sit amet.
    *   url  String
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Reviewphoto } from 'nexus-prisma'
    *
    * objectType({
    *   name: Reviewphoto.$name
    *   description: Reviewphoto.$description
    *   definition(t) {
    *     t.field(Reviewphoto.url)
    *   }
    * })
    */
  url: {
    /**
     * The name of this field.
     */
    name: 'url'
  
    /**
     * The type of this field.
     */
    type: 'String' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'String' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'String\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'String\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Reviewphoto', 'url'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Reviewphoto.reviewId`.
    *
    * ### ️⚠️ You have not written documentation for model Reviewphoto
    *
    * Replace this default advisory JSDoc with your own documentation about model Reviewphoto
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Reviewphoto {
    *   /// Lorem ipsum dolor sit amet.
    *   reviewId  Int
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Reviewphoto } from 'nexus-prisma'
    *
    * objectType({
    *   name: Reviewphoto.$name
    *   description: Reviewphoto.$description
    *   definition(t) {
    *     t.field(Reviewphoto.reviewId)
    *   }
    * })
    */
  reviewId: {
    /**
     * The name of this field.
     */
    name: 'reviewId'
  
    /**
     * The type of this field.
     */
    type: 'Int' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Int' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'Int\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Int\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Reviewphoto', 'reviewId'>
  }
  /**
    * Generated Nexus `t.field` configuration based on your Prisma schema's model-field `Reviewphoto.review`.
    *
    * ### ️⚠️ You have not written documentation for model Reviewphoto
    *
    * Replace this default advisory JSDoc with your own documentation about model Reviewphoto
    * by documenting it in your Prisma schema. For example:
    * ```prisma
    * model Reviewphoto {
    *   /// Lorem ipsum dolor sit amet.
    *   review  Review
    * }
    * ```
    *
    * Learn more about documentation comments in Prisma schema files [here](https://www.prisma.io/docs/concepts/components/prisma-schema#comments).
    *
    * @example
    *
    * import { objectType } from 'nexus'
    * import { Reviewphoto } from 'nexus-prisma'
    *
    * objectType({
    *   name: Reviewphoto.$name
    *   description: Reviewphoto.$description
    *   definition(t) {
    *     t.field(Reviewphoto.review)
    *   }
    * })
    */
  review: {
    /**
     * The name of this field.
     */
    name: 'review'
  
    /**
     * The type of this field.
     */
    type: 'Review' extends NexusCore.GetGen<'allNamedTypes', string>
    ? NexusCore.NexusNonNullDef<'Review' & NexusCore.GetGen<'allNamedTypes', string>>
    : 'Warning/Error: The type \'Review\' is not amoung the union of GetGen<\'allNamedTypes\', string>. This means that either: 1) You need to run nexus typegen reflection. 2) You need to add the type \'Review\' to your GraphQL API.'
  
    /**
     * The documentation of this field.
     */
    description: undefined
  
    /**
     * The resolver of this field
     */
    resolve: NexusCore.FieldResolver<'Reviewphoto', 'review'>
  }
}

// Enums

// N/A –– You have not defined any enums in your Prisma schema file.


//
//
// TERMS
// TERMS
// TERMS
// TERMS
//
//

//
//
// EXPORTS: PRISMA MODELS
// EXPORTS: PRISMA MODELS
// EXPORTS: PRISMA MODELS
// EXPORTS: PRISMA MODELS
//
//

export const User: User

export const Planner: Planner

export const Event: Event

export const Festival: Festival

export const Region: Region

export const Touristspot: Touristspot

export const Review: Review

export const Reviewphoto: Reviewphoto

//
//
// EXPORTS: PRISMA ENUMS
// EXPORTS: PRISMA ENUMS
// EXPORTS: PRISMA ENUMS
// EXPORTS: PRISMA ENUMS
//
//

// N/A –– You have not defined any enums in your Prisma schema file.

//
//
// EXPORTS: OTHER
// EXPORTS: OTHER
// EXPORTS: OTHER
// EXPORTS: OTHER
//
//

import type { Settings } from 'nexus-prisma/dist-cjs/generator/Settings/index'

/**
 * Adjust Nexus Prisma's [runtime settings](https://pris.ly/nexus-prisma/docs/settings/runtime).
 *
 * @example
 *
 *     import { PrismaClient } from '@prisma/client'
 *     import { ApolloServer } from '@apollo/server'
 *     import { startStandaloneServer } from '@apollo/server/standalone'   
 *     import { makeSchema } from 'nexus'
 *     import { User, Post, $settings } from 'nexus-prisma'
 *
 *     const apolloServer = new ApolloServer({
 *       schema: makeSchema({
 *         types: [],
 *       }),
 *     })
 *     startStandaloneServer(apolloServer, {
 *       context: async () => {
 *         return {
 *           db: new PrismaClient(), // <-- You put Prisma client on the "db" context property
 *         }
 *       },
 *     }).then(({ url }) => {
 *       console.log('GraphQL API ready at', url)
 *     })
 *
 *     $settings({
 *       prismaClientContextField: 'db', // <-- Tell Nexus Prisma
 *     })
 *
 * @remarks This is _different_ than Nexus Prisma's [_gentime_ settings](https://pris.ly/nexus-prisma/docs/settings/gentime).
 */
export const $settings: Settings.Runtime.Manager['change']
