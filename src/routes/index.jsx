import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import styles from './styles';
import Front from '../views/Front';

const Stack = createStackNavigator();

const Routes = function () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Front">
				<Stack.Screen name="Front" component={Front} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

				//<Stack.Screen options={{ headerStatusBarHeight: 30, headerStyle: styles.header, headerTintColor:'#fff'}}  name="Front" component={Front} />
export default Routes;
