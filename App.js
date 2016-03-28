import React from 'react';
import Relay from 'react-relay';
import VenueApp from './containers/VenueApp';
import AppRoute from './routes/AppRoute';

const App = () => (
  <Relay.RootContainer
    Component={VenueApp}
    route={new AppRoute}
    forceFetch
  />
);
export default App;
