import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const RadioSelectOption = props => {
  return (
    <View style={styles.container}>
      <Text>{props.title}</Text>
      <View style={styles.radioOptionStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '96%',
    // backgroundColor: 'gray',
    justifyContent: 'space-between',
    padding: 10,
    marginLeft: 7,
  },
  radioOptionStyle: {
    height: 20,
    width: 20,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
  },
});

export default RadioSelectOption;
