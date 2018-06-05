import {createApolloServer} from 'meteor/apollo'
import {makeExecutableSchema} from 'graphql-tools'

const typeDefs = `
type Query{
    house:String
}
`
const resolvers = {
    Query:{
        house(){
            return '1301 N Scottsdale RD'
        }
    }
}

const schema = makeExecutableSchema({
    typeDefs,resolvers
})

createApolloServer({schema})
console.log('server up')
