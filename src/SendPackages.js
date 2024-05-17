import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, FlatList, Keyboard } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
// import Globalstyle from "./Globalstyle";
import { firebase } from "../Config";
import Globalstyle from "./Globalstyles";
import { Feather } from '@expo/vector-icons';


const SendPackages = () => {
  const navigation = useNavigation();
  const todoRef = firebase.firestore().collection('sendData');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [data, setData] = useState([]);
  const [nameError, setNameError] = useState('');
  const [numberError, setNumberError] = useState('');

  // Function to fetch data from Firestore
  const fetchDataFromFirestore = async () => {
    const querySnapshot = await todoRef.get();
    const fetchedData = [];
    querySnapshot.forEach((doc) => {
      fetchedData.push({ id: doc.id, ...doc.data() });
    });
    setData(fetchedData);
  };
  const sortDataAlphabetically = () => {
    return [...data].sort((a, b) => a.name.localeCompare(b.name));
  };
  // Function to add a new field
  const addField = async () => {
    // Clear previous error messages
    setNameError('');
    setNumberError('');

    let isError = false;

    // Validation for name
    if (!name.trim()) {
      setNameError('Please enter your name.');
      isError = true;
    } else if (!/^[A-Za-z\s]+$/.test(name.trim())) {
      setNameError('Name should contain only alphabetic characters.');
      isError = true;
    } else if (name.trim().length < 2) {
      setNameError('Name should be at least 2 characters.');
      isError = true;
    } else if (name.trim().length > 50) {
      setNameError('Name should not exceed 50 characters.');
      isError = true;
    }

    // Validation for phone number
    if (!number.trim()) {
      setNumberError('Please enter your phone number.');
      isError = true;
    } else if (number.trim().length !== 10 || isNaN(number.trim())) {
      setNumberError('Phone number should be 10 digits.');
      isError = true;
    }

    if (isError) {
      // If there's an error, stop here
      return;
    }

    // Proceed to add data if no validation errors
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    const sendData = {
      name: name.trim(),
      number: number.trim(),
      createdAt: timestamp
    };

    await todoRef.add(sendData);
    setName('');
    setNumber('');
    Keyboard.dismiss();
  };

  // useEffect to fetch data when component mounts and set up real-time listener
  useEffect(() => {
    fetchDataFromFirestore(); // Fetch initial data

    const unsubscribe = todoRef.onSnapshot((snapshot) => {
      // Update data whenever there's a change in the Firestore collection
      const updatedData = [];
      snapshot.forEach((doc) => {
        updatedData.push({ id: doc.id, ...doc.data() });
      });
      setData(updatedData);
    });

    // Cleanup function to unsubscribe from the listener
    return () => unsubscribe();
  }, []);

  const renderItem = ({ item }) => (
    <View style={Globalstyle.item}>
      <Text style={Globalstyle.headinglist}>{item.name}</Text>
      <Text style={Globalstyle.description}>{item.number}</Text>
    </View>
  );

  return (
    <View style={Globalstyle.container}>
      <ScrollView>
      <View style={Globalstyle.headerContainer}>

        <TouchableOpacity style={Globalstyle.iconBackContainer} onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={26} color="#979797" />
        </TouchableOpacity>
          <TouchableOpacity style={Globalstyle.iconContact}>
          <Image
        source={require('../assets/Images/contact.png')}/><Text style={Globalstyle.iconInfo}>Contacts</Text>
          </TouchableOpacity>
        </View>
        <View style={Globalstyle.cntalin}>
          <Text style={Globalstyle.heading}>Who’s sending the package?</Text>
          <Text style={Globalstyle.rvcsecondtxt}>The driver may contact the sender to compete 
          the delivery</Text>
          <Text style={Globalstyle.label}>Name</Text>
          <TextInput
            style={Globalstyle.input}
            onChangeText={(text) => setName(text)}
            value={name}
            placeholder="Enter name"
            placeholderTextColor='#979797'
            maxLength={50}
            keyboardType="default"
            underlineColorAndroid='transparent'
            autoCapitalize='none'
          />
          {nameError ? <Text style={Globalstyle.errorone}>{nameError}</Text> : null}
          <View>
            <Text style={Globalstyle.label}>Phone number</Text>
            <View style={Globalstyle.rvccontainer}>
            <Image
                source={require('../assets/Images/imgtwo.png')}
                style={Globalstyle.rvcimg}
            />
            <Text style={Globalstyle.phone}>+91</Text>
            <TextInput
                style={Globalstyle.inputtwo}
                onChangeText={(number) => setNumber(number)}
                value={number}
                placeholder="0000000000"
                placeholderTextColor='#979797'
                keyboardType="numeric"
                maxLength={10}
                underlineColorAndroid='transparent'
                autoCapitalize='none'
            />
        </View>
            {numberError ? <Text style={Globalstyle.error}>{numberError}</Text> : null}
            <TouchableOpacity style={Globalstyle.rvcbtn} onPress={addField}>
              <Text style={Globalstyle.rvcbtnlbl}>Confirm sender</Text>
            </TouchableOpacity>
            <FlatList
        style={styles.list}
        data={sortDataAlphabetically()} // Render sorted data
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

 export default SendPackages;
const styles = StyleSheet.create({
   
});

