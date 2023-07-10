// Libs
import React from 'react';
import {StyleSheet, View} from 'react-native';
// import {Button} from 'react-native-paper';

// HomePage screen
const HomeScreen = ({navigation}) => {

  return (
    <View style={styles.container}>

      {/* Add a book button */}
      {/* <Button
        style={styles.button}
        mode="contained"
        onPress={() => navigation.navigate('AddBook')}>
        Add a book
      </Button> */}

      {/* Login button */}
      {/* <Button
        style={styles.button}
        mode="contained"
        onPress={() => navigation.navigate('Login')}>
        Login
      </Button> */}

      {/* Register button */}
      {/* <Button
        style={styles.button}
        mode="contained"
        onPress={() => navigation.navigate('Register')}>
        Register
      </Button> */}

    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    marginVertical: 10,
    width: 150,
  },
});

// Export
export default HomeScreen;
