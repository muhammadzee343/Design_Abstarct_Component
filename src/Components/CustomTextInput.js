import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Ripple from 'react-native-material-ripple';
import EyeIcon from '../Assets/icons/EyeIcon';
import HiddenPasswordIcon from '../Assets/icons/HiddenPassword';

export default function CustomTextInput(props) {
  const [text, onChangeText] = React.useState();
  const [isShowPassword, setShowPassword] = React.useState(false);

  return (
    <View style={{margin: 15}}>
      <Text style={{fontSize: 17, fontWeight: 'bold'}}>{props.title}</Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          style={styles.input}
          onChangeText={text => {
            onChangeText: text;
          }}
          placeholder={props.placeHolder}
          value={text}
        />
        <Ripple
          onPress={() => {
            setShowPassword(!isShowPassword);
          }}>
          {props.rightIcon ? (
            !isShowPassword ? (
              props.rightIcon
            ) : (
              <HiddenPasswordIcon iconColor="black" />
            )
          ) : null}
        </Ripple>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    // margin: 12,
    borderBottomWidth: 1,
    width: '90%',
  },
});
