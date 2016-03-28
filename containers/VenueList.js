import React, { Component } from 'react';
import Relay from 'react-relay';
import Venue from './Venue';

class VenueList extends Component {
  getFilteredVenues() {
    return this.props.venues.edges;
  }

  makeVenue = (edge) => (
    <Venue key={edge.node.id}
      venue={edge.node}
      viewer={this.props.viewer}
    />
  );

  render() {
    const venues = this.getFilteredVenues();
    const venueList = venues.map(this.makeVenue);
    return (
      <section>
        <ul>
          {venueList}
        </ul>
      </section>
    );
  }
}

VenueList.propTypes = {
  venues: React.PropTypes.object,
  viewer: React.PropTypes.object,
};

export default Relay.createContainer(VenueList, {
  fragments: {
    venues: () => Relay.QL`
      fragment on _VenueConnection {
        edges {
          node {
            id,
            ${Venue.getFragment('venue')}
          }
        }
      }
    `,
  },
});
