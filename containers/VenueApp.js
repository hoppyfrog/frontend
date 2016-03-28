import React from 'react';
import Relay from 'react-relay';
import VenueList from './VenueList';

const VenueApp = (props) => (
  <VenueList venues={props.viewer.allVenues} viewer={props.viewer} />
);

VenueApp.propTypes = {
  viewer: React.PropTypes.object,
};

export default Relay.createContainer(VenueApp, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on ReindexViewer {
        allVenues(first: 1000) {
          edges {
            node {
              id,
              name,
              address
            }
          }
          ${VenueList.getFragment('venues')}
        },
      }
    `,
  },
});
