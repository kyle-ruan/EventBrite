import React from 'react';
import { View } from 'react-native';

const Container = (props) => (
  <View style={[props.flex ? { flex: props.flex } : { flex: 1 }, props.style]} >
    {props.children}
  </View>
);

export { Container };
