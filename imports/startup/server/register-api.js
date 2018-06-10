import homesSchema from '../../api/home/home.gql'
import {createApolloServer} from 'meteor/apollo'
import {makeExecutableSchema} from 'graphql-tools'
import merge from 'lodash/merge'
import HomeResolvers from '../../api/home/resolvers'
import UserResolvers from '../../api/user/resolvers'
import userSchema from '../../api/user/user.gql'


const testSchema = `
type Query{
    house:String
    homes:[Home]
    Users(uid:String):[User]
}
`

const typeDefs = [testSchema,homesSchema,userSchema]



const resolver = {
    Query:{
        house(){
            return '1301 N Scottsdale RD'
        }
    }
}

const resolvers = merge(resolver,HomeResolvers,UserResolvers)
const schema = makeExecutableSchema({typeDefs,resolvers})

createApolloServer({schema})

console.log('server up')
