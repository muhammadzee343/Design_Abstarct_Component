import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ripple from 'react-native-material-ripple';

export default function SquareButton(props) {
  return (
    <View style={styles.container}>
      <Ripple
        rippleColor="gray"
        rippleDuration={1000}
        rippleOpacity={0.87}
        style={styles.rippleStyle}
        onPress={props.onClickAction}>
        <Text>{props.text}</Text>
      </Ripple>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: 'transparent',
    // borderRadius: 10,
  },
  rippleStyle: {
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
