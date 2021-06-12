import 'react-native-gesture-handler';
import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//Screens
import Home from './home'
import Recents from './recents'
import Profile from './profile'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const TabNavigation = (props) => {
  return (
      <Tab.Navigator
      initialRoute="Home"
      activeColor="red"
      inactiveColor="#dedede"
      style={{ backgroundColor: '#000'}}
      barStyle={{ backgroundColor: '#0f0f0f', padding: 4}}
      >
          <Tab.Screen 
          name="Home"
          component={Home}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
                <Icon name="home" size={26} color={color} />
            ),
          }}
           />
          <Tab.Screen
          name="Recents"
          component={Recents}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
                <MaterialIcons name="favorite" size={26} color={color} />
            ),
          }}
           />
          <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account-box" size={26} color={color} />
            ),
          }}
           />
      </Tab.Navigator>
  );
}


export default TabNavigation;