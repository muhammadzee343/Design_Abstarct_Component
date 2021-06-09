import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

const CustomHeader = props => {
  return (
    <View style={styles.container}>
      <View style={styles.leftIconConainer}>
        {props.leftIcon ? props.leftIcon : null}
      </View>
      <View style={styles.headerTitleContainer}>
        {props.dynamicTitle ? (
          <Text style={styles.headerTextStyle}>{props.dynamicTitle}</Text>
        ) : null}
      </View>
      <View style={styles.rightIconContainer}>
        {props.rightIcon ? <Text>{props.rightIcon}</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  leftIconConainer: {
    width: '20%',
    // backgroundColor: 'red',
    height: 40,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  headerTitleContainer: {
    width: '50%',
    // backgroundColor: 'red',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTextStyle: {
    fontSize: 17,
    fontFamily: 'sans-serif-condensed',
  },
  rightIconContainer: {
    width: '30%',
    // backgroundColor: 'red',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
  },
});

export default CustomHeader;
