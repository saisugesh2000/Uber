import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Account from './src/Account';
import Login from './src/Login';
import Phonenumber from './src/Phonenumber';
import Social from './src/Social';
import First from './src/First';
import Profile from './src/Profile';
import Payment from './src/Payment';
import Later from './src/Later';
import Debit from './src/Debit';
import Dropdown from './src/Dropdown';
import BackNavigator from './src/BackNavigator';
import Packages from './src/Packages';
import Pickup from './src/Pickup';
import RecievingPackages from './src/RecievingPackages';
import SendPackages from './src/SendPackages';
import UberProfile from './src/UberProfile';
import UberSettings from './src/UberSettings';
import Messages from './src/Messages';
import UberPaymentpage from './src/UberPaymentpage';
import UberPass from './src/UberPass';
import Trips from './src/Trips';

// import SelectLocationScreen from './src/SelectLocationScreen';
// import CabBookingScreen from './src/CabBookingScreen';
// import BookingDetailsScreen from './src/BookingDetailsScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Account">
        <Stack.Screen name='Account' component={Account} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='PhoneNumber' component={Phonenumber} options={{ headerShown: false }} />
        <Stack.Screen name='Social' component={Social} options={{ headerShown: false }} />
        <Stack.Screen name='First' component={First} options={{ headerShown: false }} />
        <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name='Payment' component={Payment} options={{ headerShown: false }} />
        <Stack.Screen name='Later' component={Later} options={{ headerShown: false }} />
        <Stack.Screen name='Debit' component={Debit} options={{ headerShown: false }} />
        <Stack.Screen name='Dropdown' component={Dropdown} options={{ headerShown: false }} />
         
        <Stack.Screen name='UberProfile' component={UberProfile} options={{ headerShown: false }} />
        <Stack.Screen name='UberSettings' component={UberSettings} options={{ headerShown: false }} />
        <Stack.Screen name='BackNavigator' component={BackNavigator} options={{ headerShown: false }} />
        <Stack.Screen name='messages' component={Messages} options={{ headerShown: false }} />
        <Stack.Screen name='uberpayment' component={UberPaymentpage} options={{ headerShown: false }} />
        <Stack.Screen name='Trips' component={Trips} options={{ headerShown: false }} />
        <Stack.Screen name='UberPass' component={UberPass} options={{ headerShown: false }} />


        <Stack.Screen name='Packages' component={Packages} options={{ headerShown: false }} />
        <Stack.Screen name='Pickup' component={Pickup} options={{ headerShown: false }} />
        <Stack.Screen name='RecievingPackages' component={RecievingPackages} options={{ headerShown: false }} />
        <Stack.Screen name='SendPackages' component={SendPackages} options={{ headerShown: false }} />


        {/* <Stack.Screen name="SelectLocationScreen" component={SelectLocationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CabBookingScreen" component={CabBookingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BookingDetailsScreen" component={BookingDetailsScreen} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;