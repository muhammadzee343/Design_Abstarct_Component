import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Ripple from 'react-native-material-ripple';

const RoundButton = props => {
  return (
    <Ripple
      rippleColor="gray"
      rippleDuration={1000}
      rippleOpacity={0.87}
      style={styles.roundButtonStyle}
      onPress={props.onPress}>
      <Text style={styles.buttonStyle}>{props.title}</Text>
    </Ripple>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    alignSelf: 'center',
    textTransform: 'uppercase',
    fontSize: 17,
    color: '#fff',
  },
  roundButtonStyle: {
    height: 40,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    backgroundColor: '#009688',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});

export default RoundButton;
