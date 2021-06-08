import React from 'react';
import {Image} from 'react-native';

export default function CustomImage(props) {
  return <Image style={props.imgStyle} source={props.imgUrl} />;
}
