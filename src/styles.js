import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet,Dimensions } from "react-native";

const {height,width} = Dimensions.get("window")

const styles = StyleSheet.create({
    acnt_main_cntr: {
        height: height*1,
        width: width*1,
    },
    acnt_frst_cont: {
        width: width*1,
        height: height*0.28,
        backgroundColor: '#000000',
        paddingTop: '6%',
        paddingHorizontal: width*0.1
    },
    acnt_prfl_cont: {
        flex: 0,
        height: height*0.155,
        flexDirection: 'row',
        borderBottomColor: '#EDF6FF',
        borderBottomWidth: 1,
    }
    , acnt_prfl_subcont1: {
        width: 100,
        flex: 0.5,
        justifyContent:"center",
        height: 100
    },
    acnt_prfl_subcont2: {
        flex: 1,
        paddingTop: '7%',
        textAlign: 'left'
    },
    acnt_prfl_img: {
        height: height*0.11,
        width: width*0.20,
        borderRadius: 50
    },
    acnt_prfl_nm: {
        color: '#EDF6FF',
        fontSize:hp('2.55%'),
        fontWeight:"700"
    },
    acnt_frst_msg_cont: {
        height: height*0.1,
        width: width*1,
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    acnt_frst_msg_box:{
        flex:0,
        flexDirection:'row',
        alignItems:'center'
    },
    acnt_notfction:{
        marginLeft:width*0.02,
        alignSelf:'center'
    },
    acnt_frst_msg_btn: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width*0.8
    },
    acnt_frst_msglbl: {
        color: '#EDF6FF',
        fontSize: hp('2.55%'),
        fontWeight:"400"
    },
    acnt_frst_rgtarrow: {    
        width:hp('1.4%'),
        height:hp('1.8%'),
        borderWidth:2,
        marginRight: 20,
        alignSelf:'center'
    },
    acnt_scnd_cont: {
        width: width*1,
        height: height*0.72,
        backgroundColor: '#1A1A1A',
        paddingVertical: height*0.009,
        paddingHorizontal:width*0.1,
        flex: 0,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    acnt_scnd_cont_sub1: {
        flex: 0,
        flexDirection: 'column',        
    },
    acnt_scnd_cont_sub2: {
        flex: 0,
        flexDirection: 'row',
        width: width*0.8,
        justifyContent: 'space-between',
        paddingBottom:height*0.05
    },
    acnt_scnd_cont_sub1_btnactns: {
        paddingVertical: height*0.015
    },
    acnt_scnd_cont_sub1_btntxt: {
        color: '#EDF6FF',
        fontSize: hp('2.55%'),
        fontWeight:"400"
        
    },
    acnt_scnd_cont_sub1_legaltxt: {
        color: '#EDF6FF',
        fontSize: hp('1.8%'),
        paddingTop:hp('1%')        
    },
    //BackNavigator styles
    back_act_cont: {
        height: height*0.16,
        justifyContent: 'space-between',
        paddingVertical: height*0.019,
        paddingHorizontal:width*0.06,
        width: width*1,
        backgroundColor: '#000000',

    },
    Back_act_cont_leftarrow: {
        color: '#979797'
    },
    Back_act_cont_title: {
        fontSize: hp('6%'),
        color: '#EDF6FF',
        fontWeight:'300',
        paddingBottom:height*0.03
    },
    //Messages page styles
    Messages_main_cont: {
        height: height*1,
        width: width*1,
    },
    Messages_sub_cont:{
        paddingHorizontal:0.1
    },
    Messages_content: {
        paddingVertical: height*0.03, 
        paddingHorizontal:0.3,
        paddingTop: height*0.1,
        height: height*0.9,
        width: '100%',
        backgroundColor: '#1A1A1A',
        flex: 0,
        flexDirection: 'column'
    },
    Messages_frst_cont: {
        height: height*0.34,
        width: width*1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Messages_frst_cont_img: {
        width: 290,
        height: 200
    },
    Messages_second_cont: {
        width: width*1,
        paddingTop: height*0.01,
        flex: 0,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: height*0.4
    },
    Messages_content_frsttext: {
        color: '#EDF6FF',
        fontSize: hp('2.55%'),
        fontWeight:'700'
    }, Messages_content_scndtext: {
        color: '#EDF6FF',
        fontSize: hp('2.36%'),
        fontWeight:'400',
        textAlign: 'center',
        paddingHorizontal:width*0.1,
        paddingTop: '4%'
    },
    //Trips Page Styling
    Trippg_main_cont: {
        width: width*1,
        height: height*1
    },
    //Trips child Past page styling
    PastTrippg_main: {
        width: width*1,
        height: height*0.8,
        backgroundColor: '#1A1A1A',
        flex: 0,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    PastTrippg_main_contnr: {
        width: '70%',
        height: '40%',
        alignSelf: 'center',
    },
    PastTrippg_content_frstln: {
        textAlign: 'center',
        color: '#EDF6FF',
        fontWeight: "700",
        fontSize: hp('2.55%')
    },
    PastTrippg_retry_btn_contr: {
        width: '100%',
        height: '40%',
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    PastTrippg_retry_btn: {
        borderColor: '#EDF6FF',
        borderWidth: 1,
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    PastTrippg_retry_btn_txt: {
        color: '#EDF6FF',
        fontSize: hp('2.36%'),
        fontWeight:"700"
    },
    //Upcoming Trips page styles
    UpcomTrippg_main: {
        width: width*1,
        height: height*0.8,
        backgroundColor: '#1A1A1A'
    },
    UpcomTrippg_frst_cont: {
        height: '75%',
        width: width*1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    UpcomingTrips_contct_btn: {
        height: 50,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#EDF6FF',
        borderWidth: 1,
        marginTop:20
    },
    UpcomTrippg_frst_txt: {
        color: '#EDF6FF',
        fontSize: hp('2.55%'),
        fontWeight:"700"
    },
    UpcomingTrips_contct_btn_txt: {
        color: '#EDF6FF',
        fontSize: hp('2.36%'),
        fontWeight:"700"
    },
    //Payment Page styles
    Paymentpg_main: {
        width: width*1,
        height: height*1,
        flex: 0,
        flexDirection: 'column',
        backgroundColor: '#000',
    },
    Paymentpg_frst_cont: {
        width: width*1,
        height: height*0.8,
        flex: 1,
        backgroundColor: '#1A1A1A',
    },
    Paymentpg_frst_adpaymnt: {
        width: width*1,
        height: height*0.09,
        justifyContent: 'center',
        borderBottomColor: '#979797',
        borderBottomWidth: 0.2,
        paddingTop:height*0.01,
        paddingHorizontal: width*0.06
    },
    Paymentpg_frst_adpaymnt_lbl: {
        color: "#535AFF",
        fontWeight: "400",
        fontSize: hp('2.5%')
    },
    Paymentpg_scnd_cont: {
        width: width*1,
        height: height*0.27,
        justifyContent:'center',
        borderBottomWidth: 0.2,
        borderBottomColor: '#979797'
    },
    Paymentpg_scndcont_frsttxt: {
        paddingHorizontal: width*0.06,
        color: '#EDF6FF',
        fontWeight: '400',
        fontSize: hp('2.5%')
    },
    Paymentpg_scnd_prflone: {
        width: width*1,
        height: height*0.1,
        paddingHorizontal: width*0.06,
        flex: 0,
        flexDirection: 'row'
    },
    Paymentpg_scnd_prflimg: {
        width:width*0.11,
        height:height*0.057,
        marginTop:height*0.03,
        flex: 0,
    },
    Paymentpg_scnd_prfl_prsnl_cont: {
        flex: 0,
        width: width*0.7,
        height:height*0.12,
        flexDirection: 'column',
        paddingLeft: width*0.1,
        justifyContent: 'center'
    },
    Paymentpg_scnd_prfl_prsnl_txt: {
        color: '#EDF6FF',
        fontSize: hp('2.5%'),
        fontWeight: '400',
        width: width*1
    },
    Paymentpg_scnd_prfl_bsns_txt: {
        color: '#535AFF',
        fontSize: hp('2.35%')
    },
    Paymentpg_scnd_prfl_bsns_txt2: {
        color: '#DADADA',
        fontSize: hp('1.8%'),
        fontWeight: '400'
    },
    Paymentpg_trd_cont: {
        width: width*1,
        height: height*0.2,
        justifyContent:'space-evenly',
        borderBottomColor: '#979797',
        borderBottomWidth: 0.2,
    },
    Paymentpg_trd_frsttxt: {
        color: '#EDF6FF',
        fontSize: hp('2.5%'),
        paddingLeft: width*0.06,
        fontWeight: '400'
    },
    Paymentpg_trd_scnd_cont: {
        flex: 0,
        flexDirection: 'row',
        width: width*1,
        height: height*0.05,
        alignItems:'center',
        paddingLeft: width*0.06
    },
    Paymentpg_trd_promoimg: {
        width: width*0.12,
        height: height*0.04
    },
    Paymentpg_trd_prom_secttl: {
        paddingLeft: width*0.08,
        color: '#EDF6FF',
        fontSize: hp('2.5%'), 
        fontWeight: '400',
    },
    Paymentpg_trd_addpromo_btn: {
        paddingLeft: width*0.06
    },
    Paymentpg_trd_addpromo_txt: {
        color: '#535AFF',
        fontSize: hp('2.5%'),
        fontWeight: '400'
    }, Paymentpg_fourt_cont: {
        width: width*1,
        height: height*0.2,
        justifyContent:'space-evenly'
    },
    //UberPass page styling
    Uberpasspg_main_page: {
        width: wp('100%'),
        height:hp('100%'),
        backgroundColor: '#1A1A1A'
    },
    
    UberPasspg_cont: {
        flex: 0,
        flexDirection: 'column',
        width: wp('100%'),
        height: height*0.8,
        
    },
    UberPasspg_frst_cont: {
        height: height*0.3,
        width:wp('100%'),
        flex: 0,
        flexDirection: 'column',
        paddingHorizontal: wp('7%'),
        justifyContent: 'space-around'
    },
    UberPasspg_frst_uptxt: {
        color: '#EDF6FF',
        fontSize: 48,
        fontWeight: '500'
    },
    UberPasspg_frst_uprate: {
        fontSize:hp('3.1%'),
        fontWeight:"400",
        color: '#EDF6FF',
    },
    UberPasspg_frst_updtrt: {
        color: '#979797',
        fontSize: hp('2.36%'),
        fontWeight:"400"
    },
    UberPasspg_frst_upmembersp: {
        color: '#EDF6FF',
         fontSize: hp('2.175%'),
         fontWeight:"400"
    },
    
    UberPasspg_scnd_cont: {
        height: height*0.5,
        justifyContent: 'space-around',
        borderBottomColor: '#979797',
        borderBottomWidth: 0.2,
        
    },
    UberPasspg_scnd_prfl_img:{
        height:height*0.07,
        width:width*0.14,
    },
    UberPasspg_scnd_savonevryride: {
        flex: 0,
        flexDirection: 'row',
        height: height*0.1,
        justifyContent: 'center',
    },
    UberPasspg_scnd_cntr_contnt_box: {
        width:wp('70%'),
        height: height*0.2,
        flex: 0,
        flexDirection: 'column',
    },
    UberPasspg_scnd_cntr_contnt1: {
        color: '#EDF6FF',
        fontWeight: '500',
        fontSize: hp('2.36%'),
        paddingLeft:wp('4%')
    },
    UberPasspg_scnd_cntr_contnt2: {
        color: '#DADADA',
        fontSize: hp('1.84%'),
        fontWeight: '400',
        paddingTop: hp('1%'),
        paddingLeft:wp('4%')
    },
 
    
    UberPasspg_trd_cont: {
        height: height*0.1,
        width:wp('100%'),
        justifyContent: 'center',
        paddingHorizontal: wp('7%'),
        borderBottomColor: '#979797',
        borderBottomWidth: 0.2
    },
    UberPasspg_trd_lmbtn: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:"center"
    },
    UberPasspg_trd_lmlbl: {
        color: '#EDF6FF',
        fontSize: hp('2.36%'),
        fontWeight:'500'
    },
    UberPasspg_trd_lmlbl_arrow:{
        height:height*0.02,
        width:width*0.03
    },
    UberPasspg_frth_cont: {
        height: height*0.2,
        justifyContent: 'flex-start',
        paddingTop:height*0.05,
        alignItems: 'center'
    },
    UberPasspg_frth_btn: {
        borderColor: '#EDF6FF',
        justifyContent: 'center',
        alignItems: 'center',
        width:width*0.8,
        height:height*0.063,
        borderWidth: 1
    },
    UberPasspg_frth_wfree: {
        color: '#EDF6FF',
        fontSize:hp('3.1%'),
        fontWeight:"700"
    },
    //Account Settings Styles

    AccSetngs_main_cont: {
        width: width*1,
        height: height*1
    },
     AccSetngs_cont: {
        width: width*1,
        height: height*0.9,
        backgroundColor: '#1A1A1A'
    },
    AccSetngs_prfl_cont: {
        height: height*0.15,
        width: width*1,
        paddingHorizontal: width*0.07,
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"flex-start",
        paddingTop:height*0.03
    },
    AccSetngs_prfl_img: {
        height: height*0.108,
        width: width*0.20,
        borderRadius: 50,

    }, AccSetngs_prfl_contnt: {
        paddingLeft: '5%',
    },
    AccSetngs_prfl_contnt_nm: {
        color: '#EDF6FF',
        fontSize:hp('2.87%')
    },
    AccSetngs_prfl_contnt_pncntr: {
        flex: 0,
        flexDirection: 'row',
        paddingTop: '2%'
    },
    AccSetngs_prfl_contnt_pnfrnt: {
        color: '#EDF6FF',
        fontSize: hp('2.55'),
        fontWeight:"400"
    },
    AccSetngs_prfl_contnt_pnbck: {
        color: '#EDF6FF',
        fontSize: hp('2.55'),
        paddingLeft: '2%',
        fontWeight:"400"
    },
    AccSetngs_favrts_cont: {
        width: '100%',
        height: 'auto',
        flex: 0,
        flexDirection: 'column',
        paddingLeft: '7%',
        paddingTop: height*0.03
    },
    AccSetngs_favrts_lbl: {
        color: '#979797',
        fontSize: hp('2.55%'),
        fontWeight: '400'
    },
    AccSetngs_work_contr: {
        width: width*1,
        height: 'auto',
        paddingTop: 25
    },
    AccSetngs_work_ttl: {
        flex: 0,
        flexDirection: 'row',

    },
    AccSetngs_work_homeicn: {
        height:height*0.024,   
        width:width*0.045
    },
    AccSetngs_work_homelbl: {
        color: '#DADADA',
        width:width*1,
        fontSize: hp('1.84%'),
        fontWeight:'400',
        paddingHorizontal: width*0.05,
    },
    AccSetngs_mrsvdplaces_cont:{
        paddingVertical:height*0.04
    },
    AccSetngs_mrsvdplaces_txt:{
        color:'#535AFF',
        fontSize:hp('2.5%'),
        fontWeight:"400"
    },
    AccSetngs_setting_privacy_cont:{
        height:height*0.07,
        width:width*1,
        marginBottom:12
    },
    AccSetngs_setting_privacy_actions:{
        height:'100%',
        width:'100%',
        justifyContent:'space-between',
    },
    AccSetngs_setting_privacy_txt:{
        color:'#EDF6FF',
        fontSize:hp('2.36%'),
        fontWeight:'400'
    },
    AccSetngs_baknav_title:{
        fontSize:hp('5%'),
        color:'#EDF6FF',
        fontWeight:'300'
    },
    AccSetngs_setting_privacy_refertxt:{
        color:'#979797',
        fontSize:hp('1.8%'),
        fontWeight:'400'
    },
    AccSetngs_setting_security_txt:{
        color:'#EDF6FF',
        fontSize:hp('2.36%'),
        fontWeight:'400'
    },
    AccSetngs_setting_security_refertxt:{
        color:'#979797',
        fontSize:hp('1.8%'),
        fontWeight:'400'
    },
    AccSetngs_security_cont:{
        height:height*0.07,
        width:'92%',
        marginVertical:12
    },
    AccSetngs_setting_security_actions:{
        height:'100%',
        width:'100%',
        justifyContent:'space-between',
    },
    AccSetngs_setting_signout_actions:{
        height:height*0.08,
        width:'92%',
        marginTop:10
    },
    AccSetngs_signout_txt:{
        color:'#EDF6FF',
        fontSize:hp('2.36%'),
        fontWeight:'400'
    },
    alertContainer:{
        justifyContent:"center",
        alignSelf:"center",
        
    }

})

export default styles;