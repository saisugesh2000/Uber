import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Later = ({ message, onAddPaymentPress, onDoItLaterPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <TouchableOpacity style={[styles.button, styles.addButton]} onPress={onAddPaymentPress}>
        <Text style={styles.buttonText}>Add Payment Method Now</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.doItLaterButton]} onPress={onDoItLaterPress}>
        <Text style={styles.buttonText}>Do It Later</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 10,
  },
  message: {
    marginBottom: 10,
    fontSize: 16,
    textAlign: 'center',
    color:'white'
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#007AFF',
  },
  doItLaterButton: {
    backgroundColor: '#DDDDDD',
  },
});

export default Later;
