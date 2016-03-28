import React from 'react';
import Relay from 'react-relay';

const Venue = (props) => (
  <li>
    <div>
      <p>{props.venue.name}</p>
      <p>{props.venue.address}</p>
    </div>
  </li>
);

Venue.propTypes = {
  venue: React.PropTypes.object,
};

export default Relay.createContainer(Venue, {
  fragments: {
    venue: () => Relay.QL`
      fragment on Venue {
        id,
        name,
        address
      }
    `,
  },
});
