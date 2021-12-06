import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles';
import Front from '../views/Front';
import Cinemas from '../views/Cinemas';

const Stack = createStackNavigator();

const Routes = function () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
				<Stack.Screen options={{ headerStatusBarHeight: 30, headerStyle: styles.header, headerTintColor:'#fff'}}  name="Home" component={Front} />
				<Stack.Screen options={{ headerStatusBarHeight: 30, headerStyle: styles.header, headerTintColor:'#fff'}}  name="Cinemas" component={Cinemas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;