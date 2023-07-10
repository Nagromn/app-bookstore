// Libs
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {Formik} from 'formik';
import * as yup from 'yup';

// const [data, setData] = useState(getAllBooks());

// AddBookPage screen
const AddBookScreen = () => {
  // AddBook validation
  const validationSchema = yup.object().shape({
    title: yup.string().required('Title is required'),
    author: yup.string().required('Author name is required'),
    category: yup.string().required('Category is required'),
  });

  return (
    <View style={styles.container}>
      {/* Formik */}
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          title: '',
          author: '',
          category: '',
        }}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, values, errors}) => (
          <View style={styles.formContainer}>
            <Text style={styles.title}>Add a book</Text>

            {/* Title field */}
            <TextInput
              mode="outlined"
              label={'Title'}
              style={styles.formInput}
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              value={values.title}
            />
            {errors.title && <Text style={styles.errors}>{errors.title}</Text>}

            {/* Author field */}
            <TextInput
              mode="outlined"
              label={'Author'}
              style={styles.formInput}
              onChangeText={handleChange('author')}
              onBlur={handleBlur('author')}
              value={values.author}
            />
            {errors.author && (
              <Text style={styles.errors}>{errors.author}</Text>
            )}

            {/* Category */}
            <TextInput
              mode="outlined"
              label={'Category'}
              style={styles.formInput}
              onChangeText={handleChange('category')}
              onBlur={handleBlur('category')}
              value={values.category}
            />
            {errors.category && (
              <Text style={styles.errors}>{errors.category}</Text>
            )}

            {/* Submit button */}
            <Button
              style={styles.submitButton}
              mode="contained"
              onPress={() => {
                console.log(values);
              }}>
              Submit
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
  },

  formInput: {
    width: 300,
    marginVertical: 10,
    alignSelf: 'center',
  },

  submitButton: {
    width: 300,
    marginVertical: 10,
    alignSelf: 'center',
  },

  errors: {
    textAlign: 'center',
    fontSize: 10,
    color: 'red',
  },
});

// Export
export default AddBookScreen;
