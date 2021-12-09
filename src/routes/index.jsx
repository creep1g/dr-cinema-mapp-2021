import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from './styles';
import Cinemas from '../views/Cinemas';
import Movies from '../views/Movies';
import Movie from '../views/Movie';
import CinemaDetails from '../views/CinemaDetails';
import Upcoming from '../views/Upcoming';
import UpcomingDetails from '../views/UpcomingDetails';

const Stack = createStackNavigator();


const TopTabNavigator = function () {

    const Tab = createMaterialTopTabNavigator();

    return (
            <Tab.Navigator
                initialRouteName="Cinemas"
                screenOptions={{
                    tabBarActiveTintColor: '#e91e63',
                    tabBarLabelStyle: { fontSize: 12 },
                    tabBarStyle: { backgroundColor: 'powderblue' },
                }}
            >
                <Tab.Screen
                    name="Cinemas"
                    component={Cinemas}
                    options={{ tabBarLabel: 'Home'}}
                />
                <Tab.Screen
                    name="Upcoming"
                    component={Upcoming}
                    options={{ tabBarLabel: 'Upcoming'}}
                />
            </Tab.Navigator>  
        );
}

const Routes = function () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
		<Stack.Screen options={{ headerStatusBarHeight: 30, headerStyle: styles.header, headerTintColor:'#fff'}}  name="Home" component={TopTabNavigator} />
		<Stack.Screen options={{ headerStatusBarHeight: 30, headerStyle: styles.header, headerTintColor:'#fff'}}  name="Movies" component={Movies} />
		<Stack.Screen options={{ headerStatusBarHeight: 30, headerStyle: styles.header, headerTintColor:'#fff'}}  name="Movie" component={Movie} />
		<Stack.Screen options={CinemaDetails.navigationOptions, { headerStatusBarHeight: 30, headerStyle: styles.header, headerTintColor:'#fff'}}  name="CinemaDetails" component={CinemaDetails} />
    {/* <Stack.Screen options={{ headerStatusBarHeight: 30, headerStyle: styles.header, headerTintColor:'#fff'}}  name="Upcoming" component={Upcoming} /> */}
    <Stack.Screen options={{ headerStatusBarHeight: 30, headerStyle: styles.header, headerTintColor:'#fff'}}  name="UpcomingDetails" component={UpcomingDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
