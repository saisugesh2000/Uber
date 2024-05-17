import { View, StatusBar } from 'react-native'
import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import BackNavigator from './BackNavigator'
import styles from './styles'
import UberPastTrips from './UberPastTrips'
import Upcomingtrips from './Upcomingtrips'


const Tab = createMaterialTopTabNavigator(); 
const Trips = () => {
  return (
    <View style={styles.Trippg_main_cont}>
    <BackNavigator titleName="Your Trips" />
       <Tab.Navigator screenOptions={{       
        tabBarStyle: { backgroundColor: '#000'},
        tabBarLabelStyle:{color:'#EDF6FF',fontSize:18,fontWeight:'400'}
        
      }}>
         <Tab.Screen options={{tabBarIndicatorStyle:{backgroundColor:'#535AFF',height:5}}} name='Past' component={UberPastTrips}/>
         <Tab.Screen options={{tabBarIndicatorStyle:{backgroundColor:'#535AFF',height:5}}} name='Upcoming' component={Upcomingtrips}/>
       </Tab.Navigator>
       <StatusBar/>
    </View>
  )
}

export default Trips