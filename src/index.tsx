import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'; // <- change './index.css' to './styles.css'
import App from './App';
import * as serviceWorker from './serviceWorker';

//Imports from Apollo
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

//the client represents the endpoint to our graphql server

const client = new ApolloClient({
   uri: 'https://play-it-forward-graphql.herokuapp.com/v1/graphql',
});

//ApolloProvider allows us to access the client from anywhere in the component tree

ReactDOM.render(
   <ApolloProvider client={client}>
      <App />
   </ApolloProvider>,
   document.getElementById('root'),
);
serviceWorker.unregister();
