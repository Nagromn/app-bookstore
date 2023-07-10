// Libs
import React from 'react';
import {View, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

// Navigation import
import MainNavigation from './navigation/MainNavigation';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
