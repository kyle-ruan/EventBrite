import React from 'react';
import Tabs from 'react-native-tabs';

const TabBar = (props) => (
  <Tabs
    style={styles.tabContainer}
    selected={props.selected}
    onSelect={props.onSelect}
  >
    {props.children}
  </Tabs>
);

const styles = {
  tabContainer: {
    backgroundColor: '#343434',
    borderTopWidth: 1,
    borderTopColor: '#262626',
    height: 96
  }
};

export { TabBar };
