// React Imports
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

// Custom Imports
import LandingPage from './pages/LandingPage';
import EventListPage from './pages/EventListPage';
import NonprofitListPage from './pages/NonprofitListPage';
import AboutPage from './pages/AboutPage'
import AuthPage from './pages/AuthPage'

//Imports from Apollo
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

//the client represents the endpoint to our graphql server

const client = new ApolloClient({
   uri: 'https://play-it-forward-graphql.herokuapp.com/v1/graphql',
});

//ApolloProvider allows us to access the client from anywhere in the component tree

// This is the main app component
function App() {
   return (
      <Router>
         <ApolloProvider client={client}>
            <div className="bg-blue-200 text-blue-900">
            <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/events">
            <EventListPage />
          </Route>
          <Route exact path="/nonprofits">
            <NonprofitListPage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/auth">
            <AuthPage />
          </Route>              
          </div>
         </ApolloProvider>
      </Router>
   );
}

export default App;
