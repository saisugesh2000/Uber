import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Debit = () => {
    const navigation = useNavigation();
    const handlePayment = () => {
        // Here you would integrate with Paytm's payment gateway
        // For this example, we'll just show an alert to simulate a successful payment
        Alert.alert('Payment Successful', 'Thank you for your payment!', [
          { text: 'OK', onPress: () => navigation.navigate('Account') }, // Navigate to Home screen after payment
        ]);
      };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Paytm Payment</Text>
      </View>
      
      {/* Transaction Details */}
      <View style={styles.content}>
        <Text style={styles.transactionDetails}>Transaction Details:</Text>
        <Text style={styles.transactionText}>Amount: $50</Text>
        <Text style={styles.transactionText}>Recipient: John Doe</Text>
        <Text style={styles.transactionText}>Transaction ID: 123456789</Text>
      </View>

      {/* Payment Button */}
      <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
        <Text style={styles.paymentButtonText}>Proceed to Payment</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      alignItems: 'center',
      marginBottom: 20,
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    content: {
      marginBottom: 30,
    },
    transactionDetails: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    transactionText: {
      fontSize: 16,
      marginBottom: 5,
    },
    paymentButton: {
      backgroundColor: 'blue',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    paymentButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

export default Debit