import React, { Component } from 'react';
import { Header, Container } from '../common';
import SearchFilterContainer from '../../containers/SearchFilterContainer';
import EventListContainer from '../../containers/EventListContainer';

class EventScreen extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Container
          flex={1}
          style={{ backgroundColor: '#e1e8ee' }}
        >
          <SearchFilterContainer />
        </Container>
        <Container flex={3}>
          <EventListContainer />
        </Container>
      </Container>
    );
  }
}

export default EventScreen;
