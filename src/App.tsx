// React Imports
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Custom Imports
import LandingPage from './pages/LandingPage';
import EventListPage from './pages/EventListPage';
import NonprofitListPage from './pages/NonprofitListPage';
import AboutPage from './pages/AboutPage';
import AuthPage from './pages/AuthPage';
import NonprofitDashboardPage from './pages/NonprofitDashboardPage';
import VolunteerDashboardPage from './pages/VolunteerDashboardPage';
import CreateEventPage from './pages/CreateEventPage';
import EditNonprofitPage from './pages/EditNonprofitPage';

//Imports from Apollo
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';
import { ApolloProvider } from '@apollo/react-hooks';
import './App.css';

//the client represents the endpoint to our graphql server
const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: createUploadLink({
    uri: 'http://localhost:4000/',
  }),
});

//ApolloProvider allows us to access the client from anywhere in the component tree

// This is the main app component
function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="bg-blue-200 text-blue-900 h-full w-full">
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
          <Route path="/nonprofit-dashboard">
            <NonprofitDashboardPage />
          </Route>
          <Route path="/volunteer-dashboard">
            <VolunteerDashboardPage />
          </Route>
          <Route path="/create-event">
            <CreateEventPage />
          </Route>
          <Route path="/edit-nonprofit">
            <EditNonprofitPage />
          </Route>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
