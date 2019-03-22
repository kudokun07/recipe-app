import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import App from './App'

// Pass your prisma endpoint to uri
const client = new ApolloClient({
  uri: 'https://us1.prisma.sh/thuyhoanghvtt/recipe-db/dev'
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);