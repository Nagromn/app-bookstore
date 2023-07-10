// Libs
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens import
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import AddBookScreen from '../screens/AddBookScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

// HomeScreen stack navigation
const HomeStackNavigation = () => {
  return (
    <Stack.Navigator>
      {/* Home stack */}
      <Stack.Screen name="Home" component={HomeScreen} />

      {/* AddBook stack  */}
      <Stack.Screen name="AddBook" component={AddBookScreen} />

      {/* Login stack */}
      <Stack.Screen name="Login" component={LoginScreen} />

      {/* Register stack */}
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

// Export
export default HomeStackNavigation;
