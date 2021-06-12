import React, {useEffect, useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  View,
  StyleSheet,
  SafeAreaView
} from 'react-native';

// import {
//   AdMobBanner,
//   AdMobInterstitial,
//   PublisherBanner,
//   AdMobRewarded,
// } from 'react-native-admob';

export default function LoginScreen({navigation}) {
  // useEffect(()=>{
  //   // Display a rewarded ad
  //     AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/5224354917');
  //     AdMobRewarded.requestAd().then(() => AdMobRewarded.showAd());
  // },[])
  
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#252525',
      }}>
       
          
      <StatusBar translucent backgroundColor="transparent" />
      
        <View
          style={{
            flex: 4,
            padding: 30,
            justifyContent: 'center',
            marginHorizontal: 30,
          }}>
          <View style={{paddingVertical: 10}}>
            <View
              style={{
                flexDirection: 'row',
                padding: 5,
                alignItems: 'center',
                borderRadius: 10,
                backgroundColor: 'rgba(81, 81, 81, 0.76)',
              }}>
              <TextInput
                placeholderTextColor="white"
                placeholder="Email"
                color={'white'}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
              />
            </View>
          </View>

          <View style={{paddingVertical: 10}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 5,
                borderRadius: 10,
                backgroundColor: 'rgba(81, 81, 81, 0.76)',
              }}>
              <TextInput
                placeholderTextColor="white"
                placeholder="Password"
                color={'white'}
                secureTextEntry
                underlineColorAndroid="transparent"
                autoCapitalize="none"
              />
            </View>
          </View>

          <View style={{paddingTop: 20}}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                backgroundColor: '#E50914',
                borderRadius: 5,
                padding: 10,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
              onPress={() => {
                navigation.navigate('TabNavigation');
              }}>
              <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 30,
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white'}}>Don't have an account ?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignupScreen');
              }}>
              <Text style={{color: '#E50914', paddingHorizontal: 5}}>
                Sign Up Here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',

          }}>
            {/* <PublisherBanner
              adSize="banner"
              adUnitID="ca-app-pub-3940256099942544/6300978111"
              testDevices={[PublisherBanner.simulatorId]}
              onAdFailedToLoad={error => console.error(error)}
              onAppEvent={event => console.log(event.name, event.info)}
            /> */}
          </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
  },
  image: {
    flex: 1,
  },
  but: {
    alignItems: 'center',
    backgroundColor: '#E50914',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 17,
    color: 'white',
    paddingHorizontal: 10,
  },
  indicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 50,
    bottom: 0,
    opacity: 1,
    alignItems: 'center',
  },
});
