import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'


const BackNavigator = ({titleName,navpath}) => {
    const navigation = useNavigation();
  return (
    <View style={styles.back_act_cont}>
      <TouchableOpacity onPress={()=>{
        navigation.goBack();
      }}><Feather style={styles.Back_act_cont_leftarrow} name='arrow-left' size={26}/></TouchableOpacity>
      <Text style={styles.Back_act_cont_title}>{titleName}</Text>
    </View>
  )
}

export default BackNavigator