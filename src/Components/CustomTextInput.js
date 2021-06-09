import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Ripple from 'react-native-material-ripple';
import EyeIcon from '../Assets/icons/EyeIcon';
import HiddenPasswordIcon from '../Assets/icons/HiddenPassword';

export default function CustomTextInput(props) {
  const [value, onChangeText] = React.useState(props.value);
  const [isShowPassword, setShowPassword] = React.useState(false);

  return (
    <View style={{margin: 15}}>
      <Text style={{fontSize: 17, fontWeight: 'bold'}}>{props.title}</Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          style={styles.input}
          onChangeText={text => {
            onChangeText(text);
          }}
          placeholder={props.placeHolder}
          keyboardType={props.keyboardType}
          value={value}
          editable={props.isEditable}
          maxLength={props.maxLength}
          autoCapitalize={props.autoCapitalize}
          autoCompleteType={props.autoCompleteType}
          autoCorrect={props.autoCorrect}
          autoFocus={props.autoFocus}
          clearTextOnFocus={props.clearTextOnFocus}
          keyboardAppearance={props.keyboardAppearance}
          placeholderTextColor={props.placeholderTextColor}
          secureTextEntry={props.secureTextEntry}
          textAlign={props.textAlign}
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
