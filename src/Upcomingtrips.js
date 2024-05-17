import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const Upcomingtrips = () => {
  return (
    <View style={styles.UpcomTrippg_main}>
      <View style={styles.UpcomTrippg_frst_cont}>
      <Text style={styles.UpcomTrippg_frst_txt}>Uber will plan to announce new trips</Text>
      <TouchableOpacity style={styles.UpcomingTrips_contct_btn}>
          <Text style={styles.UpcomingTrips_contct_btn_txt}>Contact</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}
export default Upcomingtrips