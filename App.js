import React, {PureComponent} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BackArrowIcon from './src/Assets/icons/BackArrow';
import RoundButton from './src/Components/RoundButton';
import CustomHeader from './src/Components/CustomHeader';
import CustomTextInput from './src/Components/CustomTextInput';
import RadioSelectOption from './src/Components/RadioSelectOption';
import SquareButton from './src/Components/SquareButton';
import CustomSquareButton from './src/Components/CustomSquareButton';

class App extends PureComponent {
  SquareButtOnClickAction = () => {
    console.log('on click of square button');
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fce1fc'}}>
        <StatusBar hidden />
        <CustomHeader
          leftIcon={<BackArrowIcon iconColor="black" />}
          dynamicTitle="Title Text"
          rightIcon={
            <SquareButton
              text="Skip"
              onSquareBtnPress={this.SquareButtOnClickAction}
            />
          }
        />

        <View style={{flex: 0.93}}>
          <View style={{flex: 0.22}}>
            <CustomTextInput
              title="Email"
              placeHolder="Email"
              // value="abc"
              // keyboardType="numeric"
              // rightIcon={<EyeIcon iconColor="black" />}
              isEditable={true}
              // autoCapitalize="characters"
              autoCorrect={false}
              autoFocus={false}
              // clearTextOnFocus={true}
              // keyboardAppearance="light"
              // secureTextEntry={false}
              // textAlign="center"
            />
          </View>

          <View style={{flex: 0.15}}>
            <RadioSelectOption title="Healthy" />
          </View>

          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <RoundButton title="Login" onPress={this.SquareButtOnClickAction} />
          </View>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <CustomSquareButton
              title="Next"
              onPress={this.SquareButtOnClickAction}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  customImgContainer: {
    flex: 0.35,
    // backgroundColor: 'green',
    // width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImgStyle: {
    height: 100,
    width: 100,
  },
  customTextContainer: {
    // width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.1,
    // backgroundColor: 'red',
    // marginTop: 10,
  },
});

export default App;
