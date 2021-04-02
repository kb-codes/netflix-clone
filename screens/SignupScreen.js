import React, {useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  View,
  StyleSheet,
  SafeAreaView,
  Toast,
  ActivityIndicator,
} from 'react-native';

export default function SignupScreen({navigation}) {

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#252525',
      }}>
      <StatusBar translucent backgroundColor="transparent" />
      <View
        style={{
          flex: 3,
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
              placeholder="Full Name"
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
              padding: 5,
              alignItems: 'center',
              borderRadius: 10,
              backgroundColor: 'rgba(81, 81, 81, 0.76)',
            }}>
            <TextInput
              placeholderTextColor="white"
              placeholder="Phone"
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
              padding: 5,
              alignItems: 'center',
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
              placeholder="Confirm Password"
              secureTextEntry
              color={'white'}
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
                navigation.navigate('HomeScreen');
            }}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 30,
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white'}}>Already have an account ?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}>
            <Text style={{color: '#E50914', paddingHorizontal: 5}}>
              Login Here
            </Text>
          </TouchableOpacity>
        </View>
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
    position: "absolute",
    left: 0,
    right: 0,
    top: 90,
    bottom: 0,
    opacity: 0.8,
    alignItems: "center",
},
});
