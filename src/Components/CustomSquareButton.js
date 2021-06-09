import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Ripple from 'react-native-material-ripple';

const CustomSquareButton = props => {
  return (
    <Ripple
      rippleColor="gray"
      rippleDuration={1000}
      rippleOpacity={0.87}
      style={styles.squareButtonStyle}
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

export default CustomSquareButton;
