import React from "react";
import { View, Text ,TouchableOpacity, Image, ScrollView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
// import Globalstyle from "./Globalstyle";
import Globalstyle from "./Globalstyles";
import { Feather } from '@expo/vector-icons';

// import { MaterialIcons } from '@expo/vector-icons';

const Packages = () => {
  const navigation = useNavigation()
  return (
    <View style={Globalstyle.container}>
      <ScrollView >
          <View style={Globalstyle.headerContainer}>
          <TouchableOpacity style={Globalstyle.iconBackContainer} onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={26} color="#979797" />
        </TouchableOpacity>
        <TouchableOpacity style={Globalstyle.iconContact}>
        <Image
        source={require('../assets/Images/info.png')}/><Text style={Globalstyle.iconInfo}>What to send</Text>
          </TouchableOpacity>
          </View>

          <View style={Globalstyle.cntalin} >
              <View>
                  <Image
                      // source={require('../assets/Images/img.png')}
                      source={require('../assets/Images/img.png')}
                      style={Globalstyle.imgdata}
                  />
              </View>
              <View style={{ top: 50 }}>

                  <Text style={Globalstyle.primrytext}>Send packages with Connect</Text>
                  <Text style={Globalstyle.Packagestxt}>Get it delivered in the time it takes to drive there</Text>

                  <TouchableOpacity style={Globalstyle.Packagebtn} onPress={() => {
                      navigation.navigate('SendPackages')
                  }}>
                      <Text style={Globalstyle.Packagebtntxt} >Send a package</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={Globalstyle.Packagesrvcbtn} onPress={() => {
                      navigation.navigate('RecievingPackages')
                  }}>
                      <Text style={Globalstyle.Packagebtntxt} >Receive a package</Text>
                  </TouchableOpacity>
                  
              </View>
              
          </View>
      </ScrollView>
      </View>
  );
};

export default Packages;

// const styles = StyleSheet.create({
    

  
// });