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
import EyeIcon from './src/Assets/icons/EyeIcon';
import CustomButton from './src/Components/CustomButton';
import CustomHeader from './src/Components/CustomHeader';
import CustomImage from './src/Components/CustomImage';
import CustomText from './src/Components/CustomText';
import CustomTextInput from './src/Components/CustomTextInput';
import RadioSelectOption from './src/Components/RadioSelectOption';
import SquareButton from './src/Components/SquareButton';

class App extends PureComponent {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fce1fc'}}>
        <StatusBar hidden />
        <CustomHeader
          leftIcon={<BackArrowIcon iconColor="black" />}
          dynamicTitle="Title Text"
          rightIcon={<SquareButton />}
        />

        <View style={{flex: 0.93}}>

          <View style={styles.customImgContainer}>
            <CustomImage
              imgStyle={styles.logoImgStyle}
              imgUrl={require('./src/Assets/images/logo.png')}
            />
          </View>

          <View style={styles.customTextContainer}>
            <CustomText contentText="Signup" textStyle={{fontSize: 20}} />
          </View>

          <View style={{flex: 0.22}}>
            <CustomTextInput
              title="Email"
              placeHolder="Email"
              rightIcon={<EyeIcon iconColor="black" />}
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
            <CustomButton customButtonStyle={styles.customButtonStyle} />
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
  customButtonStyle: {
    height: 40,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});

export default App;
