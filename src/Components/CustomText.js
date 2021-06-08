import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function CustomText(props) {
  return <Text style={props.textStyle}>{props.contentText}</Text>;
}
