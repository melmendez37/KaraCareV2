import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import useDelayedNavigation from '../useDelayedNavigation';

const localImage = require('../assets/karacaree.png')

const Splash = () => {
  const nav = useNavigation();
  useDelayedNavigation('Welcome', 2000);

  return (
    <View style = {styles.container} >
      <Image style = {styles.image}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f2f2f2', width: wp('100%'), height: hp('100%')},
  image: {width:100, height:100, left:0, top:0}
})

export default Splash;