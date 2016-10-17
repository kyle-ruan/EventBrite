import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const Button = (props) => (
  <TouchableOpacity
    style={styles.button}
    onPress={props.onPress}
  >
    <Text style={styles.buttonText}>
      {props.children}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#03A9F4',
    borderWidth: 1,
    borderColor: '#03A9F4',
    marginLeft: 5,
    marginRight: 5
  },
  buttonText: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
});

export { Button };
