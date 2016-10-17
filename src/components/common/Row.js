import React from 'react';
import { View } from 'react-native';

const Row = (props) => (
  <View style={styles.container}>
    {props.children}
  </View>
);

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row'
  }
};

export { Row };
