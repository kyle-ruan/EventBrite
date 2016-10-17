import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, placeholder, onChangeText,
  keyboradType = 'default', password = false }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      value={value}
      keyboradType={keyboradType}
      placeholder={placeholder}
      autoCorrect={false}
      secureTextEntry={password}
      style={styles.input}
      onChangeText={onChangeText}
    />
  </View>
);

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    alignItems: 'center'
  },
  input: {
    color: '#000',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  label: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  }
};

export { Input };