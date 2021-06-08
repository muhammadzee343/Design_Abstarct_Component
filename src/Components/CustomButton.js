import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Ripple from 'react-native-material-ripple';

export default function CustomButton(props) {
  return (
    <Ripple
      rippleColor="gray"
      rippleDuration={1000}
      rippleOpacity={0.87}
      style={props.customButtonStyle}>
      <Text style={styles.buttonStyle}>Button</Text>
    </Ripple>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    alignSelf: 'center',
    textTransform: 'uppercase',
    fontSize: 17,
    color: '#fff',
  },
});
