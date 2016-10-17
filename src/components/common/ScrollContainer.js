import React from 'react';
import { ScrollView } from 'react-native';

const ScrollContainer = (props) => (
  <ScrollView style={styles.container}>
    {props.children}
  </ScrollView>
);

const styles = {
  container: {
    flex: 1
  }
};

export { ScrollContainer };
