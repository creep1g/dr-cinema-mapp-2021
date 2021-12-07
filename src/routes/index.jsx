import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles';
import Front from '../views/Front';
import Cinemas from '../views/Cinemas';
import Movies from '../views/Movies';
import Movie from '../views/Movie';
import CinemaDetails from '../views/CinemaDetails';

const Stack = createStackNavigator();

const Routes = function () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
				<Stack.Screen options={{ headerStatusBarHeight: 30, headerStyle: styles.header, headerTintColor:'#fff'}}  name="Home" component={Front} />
				<Stack.Screen options={{ headerStatusBarHeight: 30, headerStyle: styles.header, headerTintColor:'#fff'}}  name="Cinemas" component={Cinemas} />
        <Stack.Screen options={{ headerStatusBarHeight: 30, headerStyle: styles.header, headerTintColor:'#fff'}}  name="Movies" component={Movies} />
        <Stack.Screen options={{ headerStatusBarHeight: 30, headerStyle: styles.header, headerTintColor:'#fff'}}  name="Movie" component={Movie} />
				<Stack.Screen options={{ headerStatusBarHeight: 30, headerStyle: styles.header, headerTintColor:'#fff'}}  name="Cinema" component={CinemaDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
