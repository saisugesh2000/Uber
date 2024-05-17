import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity,StatusBar,Alert } from 'react-native';
import { firestore } from '../Config';
// import { firebase } from '../Config';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import MapView from 'react-native-maps';

const BookingDetailsScreen = ({ route }) => {
  const { bookingId } = route.params;
  const [loading, setLoading] = useState(true);
  const [bookingDetails, setBookingDetails] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const documentSnapshot = await firestore.collection('bookings').doc(bookingId).get();
        if (documentSnapshot.exists) {
          setBookingDetails(documentSnapshot.data());
        } else {
          console.log('Document does not exist!');
        }
      } catch (error) {
        console.error('Error fetching booking details: ', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBookingDetails();
  }, [bookingId]);

  const handleConfirmBooking = () => {
    navigation.navigate('Payment');
    Alert.alert('Success', 'Booking successfully made.');

  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
    <TouchableOpacity style={ styles.back } onPress={() => navigation.goBack()}>
    <Feather name="arrow-left" size={26} color="#979797" />
    </TouchableOpacity>
      {/* <Text>{bookingDetails?.pickupLocation} To {bookingDetails?.dropLocation}</Text> */}
      <Text style={styles.distance}>Pickup Location: {bookingDetails?.pickupLocation}</Text>
      <Text style={styles.distance}>Dropping Location: {bookingDetails?.dropLocation}</Text>
      <Text style={styles.distance}>Date: {bookingDetails?.selectedDate}</Text>
      <Text style={styles.distance}>Time: {bookingDetails?.selectedTime}</Text>
      <Text style={styles.distance}>Distance: {bookingDetails?.distance}KM</Text>
      <Text style={styles.distance}>Amount Per Km: {bookingDetails?.amountPerKm}</Text>
      <Text style={styles.distance}>Fare Amount: {bookingDetails?.fareAmount} INR</Text>
      <TouchableOpacity
        onPress={handleConfirmBooking}
        style={{ marginVertical: 30, width: '100%', backgroundColor: 'black', paddingHorizontal: 10, paddingVertical:'4%', fontsize:30 }}>
        <Text style={{ textAlign: 'center', color: 'white',fontSize:20 }}>Confirm Booking</Text>
      </TouchableOpacity>
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
    <StatusBar/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#1A1A1A',
    padding:'8%'
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  distance:{
    color: '#DADADA',
    fontSize:18,
    
  },
  back: {
    marginBottom:'4%',
  },
  map:{
    height: 300,
   alignItems: 'center',
  }
});


export default BookingDetailsScreen;