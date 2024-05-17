import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Text, Alert, TouchableOpacity,StatusBar } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';

import MapView from 'react-native-maps';
import moment from 'moment';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Globalstyle from './Globalstyle';



const SelectLocationScreen = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [pickupError, setPickupError] = useState('');
  const [dropError, setDropError] = useState('');
  const navigation = useNavigation();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    setSelectedDate(moment(date).format('DD-MM-YYYY'));
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (time) => {
    setSelectedTime(moment(time).format('HH:mm'));
    hideTimePicker();
  };

  const handleToggleLocations = () => {
    const tempLocation = pickupLocation;
    setPickupLocation(dropLocation);
    setDropLocation(tempLocation);
  };

  const handleSubmit = () => {
    let isValid = true;

    if (!pickupLocation.trim()) {
      setPickupError('Pickup location is required');
      isValid = false;
    } else {
      setPickupError('');
    }

    if (!dropLocation.trim()) {
      setDropError('Dropping location is required');
      isValid = false;
    } else {
      setDropError('');
    }

    if (isValid && selectedDate && selectedTime) {
      navigation.navigate('CabBookingScreen', {
        pickupLocation,
        dropLocation,
        selectedDate,
        selectedTime,
      });
    } else {
      Alert.alert('Error', 'Please fill in all fields.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={ styles.back } onPress={() => navigation.goBack()}>
    <Feather name="arrow-left" size={26} color="#979797" />
    </TouchableOpacity>
      <View style={styles.locationContainer}>
        <TextInput
          label="Pickup Location"
          value={pickupLocation}
          placeholder='Enter Your pickup location'
          placeholderTextColor='#979797'

          onChangeText={(text) => {
            setPickupLocation(text);
            setPickupError('');
          }}
          style={pickupError ? styles.inputError : styles.input}
        />
        {pickupError ? <Text style={styles.errorText}>{pickupError}</Text> : null}
      </View>

      <TouchableOpacity onPress={handleToggleLocations} style={styles.iconContainer}>
        <MaterialIcons name="swap-vert" size={30} color='#979797' />
      </TouchableOpacity>

      <View style={styles.locationContainer}>
        <TextInput
          label="Dropping Location:"
          value={dropLocation}
          placeholder='Enter Your dropping location'
          placeholderTextColor='#979797'

          onChangeText={(text) => {
            setDropLocation(text);
            setDropError('');
          }}
          style={dropError ? styles.inputError : styles.input}
        />
        {dropError ? <Text style={styles.errorText}>{dropError}</Text> : null}
      </View>

      <View style={styles.dateTimeContainer}>
     
        <TouchableOpacity style={styles.dateTimeContainer}>
        <TouchableOpacity onPress={showDatePicker}>
        <Text style={{ backgroundColor: '#000000', width:'100%', color:'#EDF6FF', padding:'10%' }}>
        {selectedDate ? String(selectedDate) : 'Select Date'} 
        </Text>
      </TouchableOpacity>
        <TouchableOpacity onPress={showTimePicker}>
        <Text style={{ backgroundColor: '#000000', width:'100%', color:'#EDF6FF', padding:'10%' }}>
          {selectedTime ? String(selectedTime) : 'Select Time'}
        </Text>
      </TouchableOpacity>
            </TouchableOpacity>
       
      </View>


      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />
      <TouchableOpacity onPress={handleSubmit} style={{ marginVertical: 20, width: '100%', backgroundColor:'#000000', paddingHorizontal: 10, paddingVertical: 5 }}>
        <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', padding:'3%'}}>Select</Text>
      </TouchableOpacity>
      {/* <MapView
      
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView> */}

     <View style={styles.mapContainer}>
                    <MapView style={styles.mapCont}>
                    {/* region={{
                latitude: 37.78825,
               longitude: -122.4324,
               latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
       }} */}
       
                   
                    </MapView>
                </View>
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
  locationContainer: {
    marginBottom: 10,
  },
  iconContainer: {
    alignSelf: 'center',
    padding:'5%'
    // marginBottom: 20,
  },
  lable: {
    color:'#EDF6FF',

  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#EDF6FF',
    borderRadius: 2,
    backgroundColor: '#000000',
    fontSize: 16,
    top:'4%',
    marginBottom: 10,
    color:'#979797'
  },
  inputError: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#f5f5f5',
    fontSize: 16,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
    fontSize: 12,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    paddingLeft:'4%',
  },
  map:{
    height: 400,
   alignItems: 'center',
  },
  mapContainer:{
    width: wp('90%'),
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: hp('7%'),

  },
  mapCont:{
    width: '92%',
    height: hp('30%'),

  },
  back:{
    // backgroundColor:'#000000'
    paddingBottom:'5%'
  },

  button: {
    backgroundColor:'red'
  }
});

export default SelectLocationScreen;
