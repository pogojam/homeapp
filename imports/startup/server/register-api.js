import homesSchema from '../../api/home/home.gql'
import {createApolloServer} from 'meteor/apollo'
import {makeExecutableSchema} from 'graphql-tools'
import merge from 'lodash/merge'
import HomeResolvers from '../../api/home/resolvers'
import UserResolvers from '../../api/user/resolvers'
import userSchema from '../../api/user/user.gql'


const testSchema = `
type Query{
    houses(uid:String!):[Home]
    User(uid:String!):User
}
`

const typeDefs = [testSchema,homesSchema,userSchema]
const resolvers = merge(HomeResolvers,UserResolvers)

const schema = makeExecutableSchema({typeDefs,resolvers})

createApolloServer({schema})

console.log('server up')
