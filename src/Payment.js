import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Globalstyle from './Globalstyle';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const navigation = useNavigation();

  const payment = {
    later: 'DO THIS LATER',
    payment: 'Select your preferred payment method',
    credit: 'Credit or Debit card',
    paytm: 'Paytm',
    cash: 'Cash',
    next: 'Next'
  };

  const handlePress = (method) => {
    setSelectedPayment(method);
    const successMessage = `Payment via ${method} was successful!`;

    Alert.alert('Payment Success!', successMessage, [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  };

  const handleLaterPress = () => {
    setShowAlert(true);
  };

  const handleAddPaymentMethod = () => {
    setShowAlert(false);
    navigation.navigate('UberProfile'); // Replace with your actual screen name
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    // console.log('Do It Later pressed');
    navigation.navigate('Packages')
  };


  return (
    <SafeAreaView style={{ backgroundColor: '#1A1A1A', height: '100%' }}>
      
      <View style={{ flex: 1, margin:hp('2.5%') ,top:hp('5%')}}>
        <TouchableOpacity onPress={handleLaterPress}>
          <Text style={Globalstyle.Payment_later}>{payment.later}</Text>
        </TouchableOpacity>

        <View style={{ marginVertical: '2%', width: '90%', marginLeft: 'auto', marginRight: 'auto' ,top:hp('2%')}}>
          <Text style={Globalstyle.Payment_payment}>{payment.payment}</Text>
        </View>

        <View style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto',top:hp('3%') }}>
          <TouchableOpacity onPress={() => handlePress(payment.credit)}>
            <View style={Globalstyle.Payment_creditcard}>
              <Image style={{ height: 50, width: 50 }} source={require('../assets/CreditCard.png')} />
              <Text style={Globalstyle.Payment_debitcard}>{payment.credit}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePress(payment.paytm)}>
            <View style={Globalstyle.Payment_paytm}>
              <Image style={{ height: 50, width: 50 }} source={require('../assets/Paytm.png')} />
              <Text style={Globalstyle.Paytm_text}>{payment.paytm}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePress(payment.cash)}>
            <View style={Globalstyle.Paytm_opacity}>
              <Image style={{ height: 50, width: 50 }} source={require('../assets/Cash.png')} />
              <Text style={Globalstyle.Paytm_cash}>{payment.cash}</Text>
            </View>
          </TouchableOpacity>
        </View>

        {showAlert && (
          <View style={styles.alertContainer}>
            <Text style={styles.alertMessage}>You won’t be able to request a ride without adding a payment method.</Text>
            <TouchableOpacity style={[styles.button, styles.addButton]} onPress={handleAddPaymentMethod}>
              <Text style={[styles.buttonText, styles.addButtonText]}>Add Payment Method Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.laterButton]} onPress={handleCloseAlert}>
              <Text style={[styles.buttonText, styles.laterButtonText]}>Do It Later</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={{ marginBottom: 20 }}>
          {selectedPayment && (
            <TouchableOpacity style={Globalstyle.Payment_next}>
              <Text style={{ color: 'white', fontSize: 21, textAlign: 'center', padding: 10 }}>{payment.next}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  alertContainer: {
    backgroundColor: '#1D1D1D',
    padding: 20,
    borderWidth: 1,
    borderColor: '#000',
    // marginHorizontal: 40,
    marginTop: 20,
    width: wp('100%'),
    right: wp('5%'),
    top:hp('13%')
    // alignItems: 'center',
    // justifyContent:'flex-end'
  },
  alertMessage: {
    fontSize:wp('6%'),
    marginBottom: 20,
    textAlign: 'justify',
    color: '#EDF6FF',
  },
  button: {
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 20,
  },
  addButton: {
    backgroundColor: '#000000',
  },
  addButtonText: {
    color: '#fff',
  },
  laterButton: {
    backgroundColor: '#000000',
    marginTop: hp('4%'),
    marginBottom:hp('4%'),
  },
  laterButtonText: {
    color: '#EDF6FF',
  },
});

export default Payment;
