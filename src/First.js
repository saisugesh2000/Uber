import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Globalstyle from './Globalstyle';
import { Feather } from '@expo/vector-icons';


const First = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const first = {
    name: 'What`s Your Name?',
    next: 'Next'
  };

  const handleNextPress = () => {
    const nameRegex = /^[A-Za-z]+$/; // Regex to allow only letters
    const minNameLength = 2; // Minimum length for name fields

    // Check if first name is empty or does not meet minimum length
    if (!firstName || firstName.length < minNameLength) {
      setFirstNameError('First name is required .');
      return;
    }

    // Check if last name is empty or does not meet minimum length
    if (!lastName || lastName.length < minNameLength) {
      setLastNameError('Last name is required .');
      return;
    }

    // Check if first name contains numeric characters
    if (/\d/.test(firstName)) {
      setFirstNameError('First name cannot contain numeric characters.');
      return;
    }

    // Check if last name contains numeric characters
    if (/\d/.test(lastName)) {
      setLastNameError('Last name cannot contain numeric characters.');
      return;
    }

    // Reset errors if validation passes
    setFirstNameError('');
    setLastNameError('');

    // Navigate to the next screen if validation passes
    navigation.navigate('Profile');
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#1A1A1A', height: '100%', padding:'6%' }}>
      <View style={{ width: '90%', marginRight: 'auto', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => navigation.goBack('Social')}>
          <Feather name="arrow-left" size={24} color="#EDF6FF" style={Globalstyle.First_left} />

        </TouchableOpacity>
      </View>
      <View style={{ flex: 5 }}>
        <View style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', top:'5%' }}>
          <Text style={Globalstyle.First_name}>{first.name}</Text>
        </View>

        <View style={Globalstyle.First_view}>
          <View >
            <TextInput
              style={{ color: '#EDF6FF', width: '35%', fontSize: 18, borderBottomWidth: 1, borderColor: firstNameError ? 'red' : '#EDF6FF', padding: 20, width: 150 }}
              placeholder="First" placeholderTextColor={'#EDF6FF'}
              value={firstName}
              onChangeText={(text) => { setFirstName(text.replace(/[^A-Za-z]/g, '')); setFirstNameError(''); }}
            />
            {firstNameError ? <Text style={Globalstyle.firstError}>{firstNameError}</Text> : null}
          </View>
          <View>
            <TextInput
              style={{ color: '#EDF6FF', width: '35%', fontSize: 18, borderBottomWidth: 1, borderColor: lastNameError ? 'red' : '#EDF6FF', padding: 20, width: 150 }}
              placeholder="Last" placeholderTextColor={'#EDF6FF'}
              value={lastName}
              onChangeText={(text) => { setLastName(text.replace(/[^A-Za-z]/g, '')); setLastNameError(''); }}
            />
            {lastNameError ? <Text style={Globalstyle.lastError}>{lastNameError}</Text> : null}
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={Globalstyle.First_next}
          onPress={handleNextPress}
        >
          <Text style={Globalstyle.First_nexttext}>{first.next}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default First;