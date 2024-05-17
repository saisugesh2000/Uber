import { View, Text, StatusBar, Image } from 'react-native'
import React from 'react'
import BackNavigator from './BackNavigator'
import styles from './styles'

const Messages = () => {
  const messageData = {
    messageUptodate:"You are all up to date!",
    messageResult:"No new messages available at the moment, come back soon to discover new offers"
  }
  return (
    <View style={styles.Messages_main_cont}>
      <View style={styles.Messages_sub_cont}>
      <BackNavigator titleName="Messages"/>
      <View style={styles.Messages_content}>
        <View style={styles.Messages_frst_cont}>
          <Image style={styles.Messages_frst_cont_img} source={require('../assets/Images/Group.png')} />
        </View>
        <View style={styles.Messages_second_cont}>
          <Text style={styles.Messages_content_frsttext}>{messageData.messageUptodate}</Text>
          <Text style={styles.Messages_content_scndtext}>{messageData.messageResult}</Text>
        </View>
      </View>
      </View>
      <StatusBar />
    </View>
  )
}

export default Messages