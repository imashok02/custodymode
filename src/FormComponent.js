// SharedForm.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const FormComponent = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    setSubmittedData(formData); // Update submitted data state
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="First Name"
        value={formData.firstName}
        onChangeText={(text) => handleChange('firstName', text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Last Name"
        value={formData.lastName}
        onChangeText={(text) => handleChange('lastName', text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Email Address"
        value={formData.email}
        onChangeText={(text) => handleChange('email', text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Age"
        value={formData.age}
        onChangeText={(text) => handleChange('age', text)}
        style={styles.input}
      />
      <Button title="Submit" onPress={handleSubmit} style={styles.button} />
      
      {/* Display submitted data below the form */}
      {submittedData && (
        <View style={styles.submittedData}>
          <Text>Submitted Data:</Text>
          <Text>First Name: {submittedData.firstName}</Text>
          <Text>Last Name: {submittedData.lastName}</Text>
          <Text>Email: {submittedData.email}</Text>
          <Text>Age: {submittedData.age}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  button: {
    marginTop: 10
  },
  submittedData: {
    marginTop: 20,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4
  }
});

export default FormComponent;
