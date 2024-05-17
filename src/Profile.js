import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, Linking } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CheckBox from 'expo-checkbox';
import Globalstyle from './Globalstyle';
import { Feather } from '@expo/vector-icons';


const Profile = () => {
  const profile = {
    tapping:
      'By tapping the arrow below, you agree to Uber’s Terms of Use and acknowledge that you have read the Privacy Policy.',
    check:
      'Check the box to indicate that you are at least 18 years of age, agree to the Terms & Conditions and acknowledge the Privacy Policy.',
    next: 'Next',
  };

  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);

  const handleNextPress = () => {
    if (isChecked) {
      navigation.navigate('Payment');
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#1A1A1A', height: '100%',  }}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('First')}>
          <Feather name="arrow-left" size={24} color="#EDF6FF" style={Globalstyle.Profile_lefticon} />

        </TouchableOpacity>
      </View>

      <View style={Globalstyle.Profile_profileimage}>
        <View style={Globalstyle.whole_image}>
          <Image style={Globalstyle.ellipse} source={require('../assets/Ellipse1.png')} />
        </View>
        <Image style={Globalstyle.icon_profile} source={require('../assets/vs_profile.png')} />
      </View>

      <View >
        <Text style={Globalstyle.Profile_tapping}>{profile.tapping}</Text>
      </View>

      <View >
        <View style={Globalstyle.Profile_text}>
          <CheckBox value={isChecked} onValueChange={setIsChecked} />
          <Text style={Globalstyle.Profile_check}>
            Check the box to indicate that you are at least 18 years of age, agree to the{' '}
            <Text
              style={{ color: 'blue' }}
              onPress={() => Linking.openURL('https://www.uber.com/legal/terms/us/')}
            >
              Terms & Conditions
            </Text>{' '}
            and acknowledge the{' '}
            <Text
              style={{ color: 'blue' }}
              onPress={() => Linking.openURL('https://www.uber.com/legal/privacy/us/')}
            >
              Privacy Policy
            </Text>
            .
          </Text>
        </View>

        {isChecked && (
          <TouchableOpacity style={Globalstyle.Profile_checked} onPress={handleNextPress}>
            <Text style={Globalstyle.Profile_next}>{profile.next}</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Profile;
