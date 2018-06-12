import React from 'react'
import {Meteor} from 'meteor/meteor'
import {render} from 'react-dom'
import App from '../../ui/app'
import {ApolloClient} from 'apollo-client'
import {ApolloProvider} from 'react-apollo'
import {HttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {BrowserRouter} from 'react-router-dom'
require('dotenv').config()

const httpLink = new HttpLink({
    uri:Meteor.absoluteUrl('graphql')
})

const cache = new InMemoryCache()

const client = new ApolloClient({
    link:httpLink,
    cache
})

const ApolloApp = () => (
    <ApolloProvider client={client} >
        <BrowserRouter>
            <App/>    
        </BrowserRouter>
    </ApolloProvider>
)

 Meteor.startup(
     () => render( <ApolloApp/>,document.getElementById('app') )
 )