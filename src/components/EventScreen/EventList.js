import React, { Component } from 'react';
import { ListView, LayoutAnimation } from 'react-native';
import EventListItem from './EventListItem';
import { Spinner } from '../common';

const tranquil = {
  duration: 500,
  create: {
    duration: 1000,
    delay: 300,
    type: LayoutAnimation.Types.easeIn,
    property: LayoutAnimation.Properties.opacity
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity
  },
  delete: {
    duration: 200,
    type: LayoutAnimation.Types.easeOut,
    property: LayoutAnimation.Properties.opacity
  }
};

class EventList extends Component {
  constructor(props) {
    super(props);
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
  }

  componentDidMount() {
    this.props.searchEvents();
  }

  componentWillUpdate() {
    LayoutAnimation.configureNext(tranquil);
  }

  renderRow(event) {
    return (
      <EventListItem
        event={event}
        selectEvent={this.props.selectEvent}
      />
    );
  }

  renderContent(dataSource) {
    if (this.props.events.length > 0) {
      return (
        <ListView
          dataSource={dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      );
    }

    return <Spinner />;
  }

  render() {
    const dataSource = this.dataSource.cloneWithRows(this.props.events);

    return this.renderContent(dataSource);
  }
}

export default EventList;
