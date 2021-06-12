import React from "react";
import SplashScreen from './SpalshScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import HomeScreen from './HomeScreen';
import VideoPlayer from './components/VideoPlayer';
import TabNavigation from './TabNavigation';
import Home from './home';
import Info from './Info';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Navigation() {
    
  return (
    <NavigationContainer >
      <Stack.Navigator headerMode="none" initialRouteName="Info">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Info" component={Info} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}


//<iframe width="640" height="360" frameborder="0" src="https://mega.nz/embed/mkQ2zBgS#IgPrlNQI9yVh28xi-vZrH_YW3_XhJ2PImIQJzPyWp5k" allowfullscreen ></iframe>
