import React from 'react';
import { View, TouchableOpacity, Image, TextInput,Text,StatusBar, Pressable, ScrollView } from 'react-native'; // Rename the imported Platform
import { FontAwesome } from '@expo/vector-icons';
import MapView from 'react-native-maps';

import { useNavigation } from '@react-navigation/native';
import Globalstyle from './Globalstyles';

const Pickup = () => {
    const navigation = useNavigation();
    return (
        <View>
            <StatusBar style='auto'/>
           <ScrollView>
            <View style={Globalstyle.contentbg}>
                <View style={Globalstyle.content}>
                    <TouchableOpacity onPress={()=>{navigation.navigate("UberProfile")}}>
                        <FontAwesome name="bars" size={25} color="#fff" />
                    </TouchableOpacity>
                    <View style={Globalstyle.locationcont}>
                        <Text style={Globalstyle.locationText}>To find your pickup </Text>
                        <Text style={Globalstyle.locationText}>location </Text>
                        <Text style={Globalstyle.locationText}>automatically, turn </Text>
                        <Text style={Globalstyle.locationText}>on location services</Text>
                    </View>
                    <TouchableOpacity style={Globalstyle.Touchablebut} >
                        <Text style={Globalstyle.Touchablebuttext}>Turn on Location</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={Globalstyle.imagecontbg}>
                <View style={Globalstyle.imagecontmain}>
                    <View style={Globalstyle.imagecont}>
                    
                        <View>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('Packages');
                            }}>
                                <Image style={Globalstyle.image} source={require('../assets/package.png')}  data-testid="package-image" />
                                <Text style={Globalstyle.imagetxt}>Package</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <TextInput style={Globalstyle.textinput} placeholder='Enter pickup point' placeholderTextColor='white' color='white' />
                        <Text style={Globalstyle.aroundtext}>Around you</Text>
                    </View>
                </View>
                <View style={Globalstyle.mapContainer}>
                    <MapView style={Globalstyle.mapCont}>
                   
                    </MapView>
                </View>
            </View>
            </ScrollView> 
        </View>
    );
};

export default Pickup;