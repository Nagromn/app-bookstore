// Libs
import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/FontAwesome';

// Screens import
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import BookListScreen from '../screens/BookListScreen';
import AddBookScreen from '../screens/AddBookScreen';

const Tab = createBottomTabNavigator();

// Bottom Tab navigation
const MainNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      style={styles.container}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Login') {
            iconName = 'book';
          } else if (route.name === 'Register') {
            iconName = 'plus';
          } else if (route.name === 'Add Book') {
            iconName = 'plus';
          } else if (route.name === 'Booklist') {
            iconName = 'book';
          }
          return <Icons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      })}>
      {/* Home tab */}
      <Tab.Screen name="Home" component={HomeScreen} />

      {/* Login tab */}
      <Tab.Screen name="Login" component={LoginScreen} />

      {/* Register tab */}
      <Tab.Screen name="Register" component={RegisterScreen} />

      {/* AddBook tab */}
      <Tab.Screen name="Add Book" component={AddBookScreen} />

      {/* Booklist tab */}
      <Tab.Screen name="Booklist" component={BookListScreen} />
    </Tab.Navigator>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// Export
export default MainNavigation;
