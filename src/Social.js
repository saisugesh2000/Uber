import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CheckBox from 'expo-checkbox';
import Globalstyle from './Globalstyle';
import { Feather } from '@expo/vector-icons';
import Phonenumber from './Phonenumber';

const Social = () => {
  const social = {
    account: 'Choose an Account',
    facebook: 'Facebook',
    google: 'Google',
    click: 'By clicking on a social option you may receive an SMS verification. Message and data rates may apply.',
    next: 'Next',
    errorMessage: 'Please select a social option.', // New error message
  };

  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState('');

  const handleNavigate = () => {
    if (isChecked) {
      navigation.navigate('First'); // Navigate to 'Phonenumber' screen only if checkbox is checked
    } else {
      setError(social.errorMessage); // Set error message if checkbox is not checked
    }
  };

  const openFacebook = () => {
    Linking.openURL('https://www.facebook.com/');
  };

  const openGmail = () => {
    Linking.openURL('https://mail.google.com/');
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#1A1A1A', height: '100%', padding:'5%' }}>
      <View style={{ width: '90%', marginLeft: '1%', marginRight: 'auto', justifyContent: 'center', top:'1%', bottom:'5%' }}>
        <TouchableOpacity onPress={() => navigation.goBack('PhoneNumber')}>
          <Feather name="arrow-left" size={24} color="#EDF6FF" style={Globalstyle.Social_iconleft} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 5 }}>
        <View style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', top:'5%' }}>
          <Text style={Globalstyle.Social_account}>{social.account}</Text>
        </View>

        <View style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
          <TouchableOpacity onPress={openFacebook}>
            <View style={{ display: 'flex', flexDirection: 'row', marginVertical: '10%' }}>
              <Image style={Globalstyle.Social_facebookimage} source={require('../assets/facebook-logo-3.png')} />
              <Text style={Globalstyle.Social_facebook}>{social.facebook}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={openGmail}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Image style={Globalstyle.Social_googleimage} source={require('../assets/Google-Logo-PNG-Image.png')} />
              <Text style={Globalstyle.Social_google}>{social.google}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', width: '90%', marginLeft: 'auto', marginRight: 'auto', justifyContent: 'space-between', alignItems: 'center', marginTop: '10%' }}>
          <CheckBox value={isChecked} onValueChange={setIsChecked} />
          <Text style={{ color: '#EDF6FF', fontSize: 16, width: '80%', fontFamily: 'Roboto', fontWeight: '500', marginLeft: '3%' }}>
            {social.click}
          </Text>
        </View>
      </View>

      {error !== '' && <Text style={{ color: 'red', fontSize: 16, textAlign: 'center', marginVertical: 10 }}>{error}</Text>}
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={{
            // borderWidth: 1,
            borderColor: isChecked ? '#EDF6FF' : 'grey', // Change border color based on checkbox state


            justifyContent: 'center',
            borderRadius: 2,
            width: '80%',
            marginLeft: '10%',
            opacity: isChecked ? 1 : 0.5, // Change opacity based on checkbox state
          }}
          onPress={handleNavigate}
          disabled={!isChecked} // Disable button if checkbox is not checked
        >
          <Text style={{ color: '#EDF6FF', fontSize: 21, textAlign: 'center', padding: 10, backgroundColor: '#000000', fontFamily: 'Roboto', fontWeight: '700' }}>{social.next}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Social;
