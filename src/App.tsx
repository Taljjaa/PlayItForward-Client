// React Imports
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

// Custom Imports
import LandingPage from './pages/LandingPage'
import EventListPage from './pages/EventListPage';
import NonprofitListPage from './pages/NonprofitListPage'

// This is the main app component
function App() {
   return (
      <Router>
         <div className="bg-blue-200 text-blue-900">
         <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/events">
            <EventListPage />
          </Route>
          <Route path="/nonprofits">
            <NonprofitListPage />
          </Route>
         </div>
      </Router>
   );
}

export default App;
