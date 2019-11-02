import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
//import all the basic component we have used
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator, createSwitchNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/Home';
import RaportScreen from './screens/raport';

const AppNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Raport: { screen: RaportScreen },
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Home') {
        iconName = `ios-home`;
      } else if (routeName === 'Raport') {
        iconName = `ios-bookmark`;
      }
      return <IconComponent name={iconName} size={30} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#F8F8F8',
    inactiveTintColor: '#586589',
    style: {
      backgroundColor: '#171F33',
      paddingTop: 12,
    },
  },
}
);

class App extends React.Component { }
const RootNavigator = createSwitchNavigator({
  App: App,
  Splash: SplashScreen
}, {
  // `initialRouteName` tells the React Navigation navigator
  // which route to start at. If you don't specify an initial
  // route it'll choose the first route in the navigator config.
  // In this example we tell it to start on the 'Splash' route,
  // otherwise it would have shown the 'App' route.
  initialRouteName: 'Splash'
});

export default createAppContainer(AppNavigator);