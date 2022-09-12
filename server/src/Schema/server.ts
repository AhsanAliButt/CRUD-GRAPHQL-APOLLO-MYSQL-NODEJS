import {GraphQLSchema,GraphQLObjectType} from "graphql"
const GET_ALL_USERS = require("./Queries/User")
import {CREATE_USER, DELETE_USER, UPDATE_PASSWORD} from './Mutations/User'
const RootQuery = new GraphQLObjectType({
    name:"RootQuery",
    fields:{
        getallusers:GET_ALL_USERS,
    }
})
const Mutation = new GraphQLObjectType({
    name:"Mutation",
    fields:{
        createuser:CREATE_USER,
        deleteuser:DELETE_USER,
        updatePassword:UPDATE_PASSWORD
    }
})

export const schema = new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation,
});