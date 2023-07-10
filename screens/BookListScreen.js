// Libs
import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

// Data import
// import {getAllBooks} from '../src/schemas/BookSchema';

// BookList screen
const BookListScreen = () => {
  return (
    <View style={styles.container}>
      {/* List of books */}
      <FlatList
        // data={getAllBooks()}
        keyExtractor={index => index.toString()}
        renderItem={({item}) => {
          return (
            <View>
              <Text>{item.title}</Text>
              <Text>{item.author}</Text>
              <Text>{item.category}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// Export
export default BookListScreen;
