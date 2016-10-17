import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const Header = (props) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>{props.headerText}</Text>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  headerText: {
    fontSize: 20
  }
});

export { Header };
