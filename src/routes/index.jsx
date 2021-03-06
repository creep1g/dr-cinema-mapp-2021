import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from 
  '@react-navigation/material-top-tabs';
import styles from './styles';
import * as colors from '../styles/colors';
import Cinemas from '../views/Cinemas';
import Movie from '../views/Movie';
import CinemaDetails from '../views/CinemaDetails';
import Upcoming from '../views/Upcoming';
import UpcomingDetails from '../views/UpcomingDetails';
import BrowseMovies from '../views/BrowseMovies';
import BrowseMovieDetail from '../views/BrowseMovieDetail';

const Stack = createStackNavigator();


const TopTabNavigator = function() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Cinemas"
      screenOptions={{
        tabBarActiveTintColor: colors.five,
        tabBarLabelStyle: {fontSize: 16},
        tabBarStyle: {backgroundColor: colors.two},
      }}
    >
      <Tab.Screen
        name="Cinemas"
        component={Cinemas}
        options={{tabBarLabel: 'Cinemas'}}
      />
      <Tab.Screen
        name="Upcoming"
        component={Upcoming}
        options={{tabBarLabel: 'Upcoming'}}
      />
      <Tab.Screen
        name="Browse"
        component={BrowseMovies}
        options={{tabBarLabel: 'Browse'}}
      />
    </Tab.Navigator>
  );
};

const Routes = function() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{
            headerStatusBarHeight: 1,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 25,
            },
            headerStyle: styles.header,
            title: '',
            headerTintColor: '#fff'}}
          name="Home"
          component={TopTabNavigator} />

        <Stack.Screen
          options={{
            headerStatusBarHeight: 30,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 25,
            },
            headerStyle: styles.header,
            headerTintColor: '#fff',
            title: ''}}
          name="Movie"
          component={Movie} />

        <Stack.Screen
          options={{
            headerStatusBarHeight: 30,
            headerStyle: styles.header,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTintColor: '#fff',
            title: ''}}
          name="CinemaDetails"
          component={CinemaDetails} />

        <Stack.Screen
          options={{
            headerStatusBarHeight: 30,
            headerStyle: styles.header,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTintColor: '#fff',
            title: ''}}
          name="BrowseMovieDetail"
          component={BrowseMovieDetail} />

        <Stack.Screen
          options={{
            animationEnabled: false,
            headerStatusBarHeight: 30,
            headerStyle: styles.header,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTintColor: '#fff',
            title: ''}}
          name="UpcomingDetails"
          component={UpcomingDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
