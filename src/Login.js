import { View, Text, SafeAreaView, Image, Icon, TouchableOpacity } from 'react-native'
import React from 'react'
import Globalstyle from './Globalstyle'
import { FontAwesome } from '@expo/vector-icons';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const Login = () => {
  const login = {
    name: 'Uber',
    move: 'Move with saftey',
    start: 'Get Started'

  };

  const navigation = useNavigation();
  const jsonData = JSON.stringify(login);



  const handleNavigate = () => {
    navigation.navigate('PhoneNumber'); // Navigate to 'Phonenumber' screen
  };
  return (
    // <SafeAreaView style={Globalstyle.main}>

    <LinearGradient
      colors={['#1976D2', '#535AFF']}
      style={Globalstyle.main}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={Globalstyle.wholecont}>
        <View style={Globalstyle.whole}>
          <TouchableOpacity onPress={() => navigation.goBack('Account')}>
            <View style={Globalstyle.arrowMain}>
                <Image
                  source={require('../assets/Group49.png')} 
                  style={{position:'relative', right:20  }}
                />
             
                <Image
                  source={require('../assets/Grouplogo.png')}
                  style={{ height: 181, width: 171, position:'absolute', right:50}}
                />
            </View>
          </TouchableOpacity>


       
        </View>

        <View style={Globalstyle.iconwhole}>
          <TouchableOpacity>
            <View style={Globalstyle.icon}>
              <Text style={Globalstyle.Login_saftey}>{login.move}</Text>

              {/* <Ionicons name="shield-checkmark-outline" size={24} color="#EDF6FF" style={{ marginTop: 10,marginLeft:'6%' }} /> */}
              <Image
                  source={require('../assets/checkshield.png')}
                  style={{ width:41.83,height:41.83}}
                />
            </View>
          </TouchableOpacity>


        </View>
      </View>
      <View style={Globalstyle.Login_btncont}>
        <TouchableOpacity onPress={handleNavigate}>
          <View>

            {/* <Text style={Globalstyle.Login_started}>{login.start}</Text>


            <FontAwesome class="fa fa-arrow-right" name="arrow-right" aria-hidden="true" style={Globalstyle.Login_arrow}></FontAwesome> */}
              <Image
              style={Globalstyle.getstart}
                  source={require('../assets/Group52.png')}
                 
                />

          </View>
        </TouchableOpacity>
      </View>
      </View>
    </LinearGradient>
     





    // </SafeAreaView>
  );;
}


export default Login

