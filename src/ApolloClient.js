// ApolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://graph.khuladev.co.za/graphql',
        headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE0NiwidXNlclJvbGVzIjpbeyJpZCI6MSwibmFtZSI6ImZhcm1lciJ9XSwiX19fX2todWxhX19zZWNyZXRfX19fIjoiNjIyMjIzMzM2NjQtMTY5ODI0ODI4MDYzNyIsImlhdCI6MTY5ODI0ODI4MH0.KH1SO9KpCveqI5sYKTBesoyjuce69ZKCbitdXChZTR0`,
        },
    }),
    cache: new InMemoryCache(),
});

export default client;
