// Libs
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {Formik} from 'formik';
import * as yup from 'yup';

// RegisterPage screen
const RegisterScreen = () => {
  // Register validation
  const registerValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email address is Required'),

    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .matches(
        /[!@#$%^&*()\-_"=+{}; :,<.>]/,
        'Password must have a special character',
      )
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords do not match')
      .required('Confirm password is required'),
  });

  return (
    <View style={styles.container}>
      {/* Formik */}
      <Formik
        validationSchema={registerValidationSchema}
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, values, errors, touched, isValid}) => (
          <View style={styles.formContainer}>
            <Text style={styles.title}>Sign in</Text>
            {/* Email field */}
            <TextInput
              mode="outlined"
              name="email"
              label={'Email'}
              style={styles.formInput}
              placeholder="Email Address"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
            />
            {errors.email && touched.email && (
              <Text style={styles.errors}>{errors.email}</Text>
            )}

            {/* Password field */}
            <TextInput
              mode="outlined"
              name="password"
              label={'Password'}
              style={styles.formInput}
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {errors.password && touched.password && (
              <Text style={styles.errors}>{errors.password}</Text>
            )}

            {/* Confirm password field */}
            <TextInput
              mode="outlined"
              name="confirmPassword"
              label={'Confirm Password'}
              style={styles.formInput}
              placeholder="Confirm Password"
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              secureTextEntry
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <Text style={styles.errors}>{errors.confirmPassword}</Text>
            )}

            {/* Submit button */}
            <Button
              style={styles.submitButton}
              mode="contained"
              disabled={!isValid}
              onPress={() => console.log(values)}>
              Sign in
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
export default RegisterScreen;
