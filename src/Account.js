import { StyleSheet, View, Image, StatusBar } from 'react-native';
import Globalstyle from './Globalstyle';
import React, { useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Account = (props) => {
  const user = {
    name: 'Uber'
  };

  const navigation = useNavigation();
  const jsonData = JSON.stringify(user);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 1500); //0.5s, adjust as needed

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor='#000000' />
      <LinearGradient
        colors={['#1976D2', '#535AFF']}
        style={Globalstyle.main}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={Globalstyle.Account_view}>
            <Image
              source={require('../assets/Grouplogo.png')}
              style={{ height: 181, width: 181, resizeMode: 'contain' }}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

export default Account;

const styles = StyleSheet.create({});
