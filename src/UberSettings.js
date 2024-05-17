import { View, Text, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'
const UberSettings = () => {
    const navigation = useNavigation();
    const usersettingsData = {
        username: "Dot Phasor",
        userpgTitle:"Account Settings",
        userpgCountrycode:"+91",
        userpgMobnum:"81234 56789",
        userpgfavrts:"Favorites",
        userpgaddhome:"Add Home",
        userpgaddwork:"Add Work",
        userpgPrivacy:"Privacy",
        usermoresavedplactext:"More Saved Places",
        userpgPrivacyContnt:"Manage the data you share with us",
        userpgSecuritytxt:"Security",
        userpgSecuritycontent:"Control your account security with 2-step verification",
        userpgsignout:"Sign Out"
    }
    return (
        <View style={styles.AccSetngs_main_cont}>
        <View style={styles.back_act_cont}>
        <TouchableOpacity onPress={()=>{
          navigation.goBack()
        }}><Feather style={styles.Back_act_cont_leftarrow} name='arrow-left' size={26}/></TouchableOpacity>
        <Text style={styles.AccSetngs_baknav_title}>{usersettingsData.userpgTitle}</Text>
      </View>
            <ScrollView style={styles.AccSetngs_cont}>
                <TouchableOpacity style={styles.AccSetngs_prfl_cont}>
                    <Image style={styles.AccSetngs_prfl_img} source={require('../assets/Images/pexels-olly-774909.jpg')} />
                    <View style={styles.AccSetngs_prfl_contnt}>
                        <Text style={styles.AccSetngs_prfl_contnt_nm}>{usersettingsData.username}</Text>
                        <View style={styles.AccSetngs_prfl_contnt_pncntr}>
                            <Text style={styles.AccSetngs_prfl_contnt_pnfrnt}>{usersettingsData.userpgCountrycode}</Text><Text style={styles.AccSetngs_prfl_contnt_pnbck}>{usersettingsData.userpgMobnum}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.AccSetngs_favrts_cont}>
                    <Text style={styles.AccSetngs_favrts_lbl}>{usersettingsData.userpgfavrts}</Text>
                    <View style={styles.AccSetngs_work_contr}>
                        <TouchableOpacity style={styles.AccSetngs_work_ttl}>
                            <Image style={styles.AccSetngs_work_homeicn} source={require('../assets/Images/el_home.png')} />
                            <Text style={styles.AccSetngs_work_homelbl}>{usersettingsData.userpgaddhome}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.AccSetngs_work_contr}>
                        <TouchableOpacity style={styles.AccSetngs_work_ttl}>
                            <Image style={styles.AccSetngs_work_homeicn} source={require('../assets/Images/Vector.png')} />
                            <Text style={styles.AccSetngs_work_homelbl}>{usersettingsData.userpgaddwork}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.AccSetngs_mrsvdplaces_cont}>
                        <TouchableOpacity>
                            <Text style={styles.AccSetngs_mrsvdplaces_txt}>{usersettingsData.usermoresavedplactext}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.AccSetngs_setting_privacy_cont}>
                        <TouchableOpacity style={styles.AccSetngs_setting_privacy_actions}>
                            <Text style={styles.AccSetngs_setting_privacy_txt}>{usersettingsData.userpgPrivacy}</Text>
                            <Text style={styles.AccSetngs_setting_privacy_refertxt}>{usersettingsData.userpgPrivacyContnt}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.AccSetngs_security_cont}>
                        <TouchableOpacity style={styles.AccSetngs_setting_security_actions}>
                            <Text style={styles.AccSetngs_setting_security_txt}>{usersettingsData.userpgSecuritytxt}</Text>
                            <Text style={styles.AccSetngs_setting_security_refertxt}>{usersettingsData.userpgSecuritycontent}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.AccSetngs_setting_signout_actions}>
                        <TouchableOpacity>
                            <Text style={styles.AccSetngs_signout_txt}>{usersettingsData.userpgsignout}</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
            <StatusBar />
        </View>
    )
}

export default UberSettings