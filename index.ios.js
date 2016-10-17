import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/components/App';

class EventBrite extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('EventBrite', () => EventBrite);
