import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const UberPastTrips = () => {
  const pastTripsData = {
    PasttripsTitle:"You haven’t taken a trip yet",
    Pastripsretry:"Retry"
  }
  return (
    <View style={styles.PastTrippg_main}>
      <View style={styles.PastTrippg_main_contnr}>
      <Text style={styles.PastTrippg_content_frstln}>{pastTripsData.PasttripsTitle}</Text>
      <View style={styles.PastTrippg_retry_btn_contr}>
      <TouchableOpacity style={styles.PastTrippg_retry_btn}>
      <Text style={styles.PastTrippg_retry_btn_txt}>{pastTripsData.Pastripsretry}</Text>
      </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}

export default UberPastTrips