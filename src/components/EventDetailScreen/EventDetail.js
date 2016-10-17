import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import HTMLView from 'react-native-htmlview';
import { ScrollContainer, Header } from '../common';

class EventDetail extends Component {
  renderLogo(logo) {
    if (logo) {
      return (
        <Image
          style={styles.logoImage}
          source={{ uri: logo.url }}
        />
      );
    }
  }

  render() {
    const event = this.props.selectedEvent;
    console.log(event);
    return (
      <ScrollContainer>
        <Header />

        {this.renderLogo(event.logo)}

        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>
            {event.name.text}
          </Text>
        </View>

        <View style={styles.htmlViewContainer}>
          <HTMLView value={event.description.html} />
        </View>
      </ScrollContainer>
    );
  }
}

const styles = {
  nameContainer: {
    marginTop: 15,
    alignItems: 'center'
  },
  nameText: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center'
  },
  logoImage: {
    height: 200,
    width: null
  },
  htmlViewContainer: {
    marginTop: 20,
    marginHorizontal: 10
  }
};
export default EventDetail;
