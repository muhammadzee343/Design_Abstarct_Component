import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Ripple from 'react-native-material-ripple';

export default function CustomSquareButton(props) {
  return (
    <Ripple
      rippleColor="gray"
      rippleDuration={1000}
      rippleOpacity={0.87}
      style={styles.squareButtonStyle}
      onPress={props.OnClickAction}>
      <Text style={styles.buttonStyle}>{props.Title}</Text>
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
  squareButtonStyle: {
    height: 40,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f50518',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});
