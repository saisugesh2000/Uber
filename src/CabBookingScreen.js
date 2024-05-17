import React, { useState } from 'react';
import { View, Text, Alert,StyleSheet, TouchableOpacity,StatusBar } from 'react-native';
import { firestore } from '../Config';
import { useNavigation } from '@react-navigation/native';
import MapView from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';


const CabBookingScreen = ({ route }) => {
  const { pickupLocation, dropLocation, selectedDate, selectedTime } = route.params;
  const [fareDetails, setFareDetails] = useState('Fare Amount: 0.00 INR');
  const navigation = useNavigation();

  
  const distance = '10';
  const amountPerKm = '5';

  const handleCalculate = () => {
    const fareAmount = parseFloat(distance) * parseFloat(amountPerKm);
    setFareDetails(`Fare Amount: ${fareAmount.toFixed(2)} INR`);
  };

  const handleBook = async () => {
    try {
      const fareAmount = parseFloat(distance) * parseFloat(amountPerKm);

      const bookingData = {
        pickupLocation,
        dropLocation,
        selectedDate,
        selectedTime,
        distance: parseFloat(distance),
        amountPerKm: parseFloat(amountPerKm),
        fareAmount: parseFloat(fareAmount),
      };

      const bookingRef = await firestore.collection('bookings').add(bookingData);

      // Alert.alert('Success', 'Booking successfully made.');

      navigation.navigate('BookingDetailsScreen', {
        bookingId: bookingRef.id,
        bookingDetails: bookingData,
        totalKilometers: parseFloat(distance),
      });

    } catch (error) {
      console.error('Error saving to Firebase: ', error);
      Alert.alert('Error', 'Failed to save booking details. Please try again.');
    }
  };

  return (
    <View style={{ flex: 1,backgroundColor: '#1A1A1A',padding:'8%'}}>
    <TouchableOpacity style={ styles.back } onPress={() => navigation.goBack()}>
    <Feather name="arrow-left" size={26} color="#979797" />
    </TouchableOpacity>
      <ScrollView>
      <Text style={styles.distance}>Distance: {distance} km</Text>
      <Text style={styles.distance}>Amount per KM: {amountPerKm} INR</Text>
      <TouchableOpacity  onPress={handleCalculate}>
      <Text style={{ marginVertical: '4%', width: '100%',textAlign:'center',color:'white', backgroundColor:'black', paddingHorizontal:'4%', paddingVertical: '3%',fontSize:20 }}>Calculate</Text>
      </TouchableOpacity>
      {/* <Button title="Calculate" onPress={handleCalculate}/> */}
      <Text style={styles.distance}>{fareDetails}</Text>
      <TouchableOpacity  onPress={handleBook}>
        <Text style={{ marginVertical:'4%', width: '100%',textAlign:'center',color:'white', backgroundColor:'black', paddingHorizontal: '4%', paddingVertical: '3%',fontSize:20 }}>Book</Text>
      </TouchableOpacity>
      {/* <Button title="Book" onPress={handleBook}  /> */}
      <MapView
      
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
      
      </ScrollView>
     <StatusBar/>
    </View>
  );
};

const styles = StyleSheet.create({
  map:{
    height: 380,
    top:'8%'
  
  },
  distance:{
    color:'white'
  },
  back:{
    // padding: '4%',
    // paddingTop
    marginBottom:'4%'
  }
 
});

export default CabBookingScreen;