import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducers from '../reducers';
import { Container } from './common';
import Routes from './routes';

const store = createStore(Reducers, applyMiddleware(thunk));

class App extends Component {
  renderScene(routeName) {
    const route = Routes[routeName];
    return (<Scene
      key={route.key}
      component={route.component}
      title={route.title}
      initial={route.initial}
      onRight={(e) => route.onRight(e)}
      rightTitle={route.rightText}
    />);
  }

  render() {
    return (
      <Provider store={store}>
        <Container>
          <Router>
            {this.renderScene('EventScreen')}
            {this.renderScene('EventDetail')}
          </Router>
        </Container>
      </Provider>
    );
  }
}

export default App;
