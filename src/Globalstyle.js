import { StyleSheet } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const Globalstyle = StyleSheet.create({

    main: {
        backgroundColor: '#276FDD',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    arrowMain: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },

    wholecont: {
        flex: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    whole: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    icon: {
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 16.73,
        width: '100%',
        borderColor: '#fff',


    },


    Account_text: {
        fontSize: 50,
        paddingTop: 50,
        color: '#EDF6FF'
    },

    Login_view: {
        borderWidth: 0,
        borderRadius: 20,
        width: '40%',
        height: 160,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    },



    Login_text: {
        fontSize: 50,
        color: '#EDF6FF',
        textAlign: 'center'
    },

    Login_saftey: {
        fontSize:20.83,
        color: '#EDF6FF',
        padding: 10,
        fontFamily: 'Roboto',
        fontWeight: '500',
        lineHeight:27.65
    },

    Login_icon: {
        color: '#EDF6FF',
        fontSize: 20
    },

    Login_btncont: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        // paddingHorizontal:wp('3%')
        // left: wp('3%'),
        // right: wp('3%'),
        width:wp('50%'),
    },

    Login_btn: {
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        width: 340,
        borderColor: '#fff'
    },


    Login_started: {
        fontSize: 25,
        color: '#EDF6FF',
        padding: 10,
        left: 60,
        fontFamily: 'Roboto',
        fontWeight: '700'
    },


    Login_arrow: {
        left: 100,
        top: 20,
        fontSize: 20,
        color: '#EDF6FF',
        right: 25
    },
    iconwhole: {
        marginTop: '25%',
        width: 251,
        height: 53


    },
    Phonenumber_cont: {
        backgroundColor: '#1A1A1A',
        flex: 1,
        width: '100%',
        padding:'4%'

    },
    Phone_left_cont: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '4%',
    },


    Phone_left: {
        color: '#979797'
    },


    Phone_phonenumber: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        fontSize: wp('7%'),
        marginVertical: 30,
        color: '#EDF6FF',
        fontFamily: 'Roboto',
        fontWeight: '500'




    },

    Phone_dropdown: {
        height:hp('3%'),
        flexDirection: 'row',
        alignItems: 'first-baseline',
        justifyContent: 'center',
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        // marginVertical: 20,

    },
    aline:{
        // margintop:hp('-3%')
        // marginBottom:hp('4%')
        bottom:hp('3%'),
    },

    Phone_flag: {
        width: '15%'
    },
    Phone_drop: {
        width: '15%'
    },
    Phone_phonetext: {
        width: '70%'
    },
    Phone_phoneinputtext: {
        fontSize: 18,
        color: '#EDF6FF',
        borderBottomColor: '#EDF6FF',
        borderBottomWidth: 1,
        paddingLeft: 10,
        width: '100%',
    },

    Phone_otp: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp('1%'),
        borderRadius: 20,
    },
    Phone_social: {
        marginTop: hp('3%'),
        color: '#535AFF',
        fontSize: 23,
        marginRight: '1%',
        fontFamily: 'Roboto',
        fontWeight: '500'
    },
    Phone_dropdown: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-evenly',
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginVertical: 20,
    },
    otpmsg:{ alignItems: 'center', marginBottom:hp('5%'), top:hp('25%'),  position: 'fixed',bottom:hp('6%')},
    enterotp: 
        { marginTop:hp('3%'), fontSize:wp('4%'), color: '#EDF6FF', borderBottomColor: '#EDF6FF', borderBottomWidth: 1, width: '60%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' },
    
otp:{ width: '90%', marginLeft: 'auto', marginRight: 'auto', fontSize: 20, marginTop:hp('1%'), color: '#EDF6FF' },
    btnnext:{ backgroundColor: '#000000', padding: 10, alignItems:'center', width: '88%', borderRadius: 5 ,marginBottom:hp('0%'), top:hp('2%'), bottom:hp('4%') },
    Phone_flag: {
        width: '10%',
        height: 15
    },
    Phone_drop: {
        width: '5%'
    },
    Phone_phonetext: {
        width: '70%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Phone_phoneinputtext: {
        fontSize: 15,
        color: '#EDF6FF',
        borderBottomColor: '#EDF6FF',
        borderBottomWidth: 1,
        textAlign: 'left',
        paddingLeft: 10,
        width: '80%',
    },
    countrycode: {
        color: 'white',
        width: '15%'
    },
    Social_iconleft: {
        textAlign: 'left',
        color: '#979797'

    },


    Social_account: {
        color: '#EDF6FF',
        fontSize: 30
    },

    Social_facebookimage: {
        width: 30,
        height: 30
    },


    Social_facebook: {
        color: 'white',
        fontSize: 24,
        paddingLeft: 30,
        fontFamily: 'Roboto',
        fontWeight: '400'
    },

    Social_googleimage: {
        width: 30,
        height: 30
    },


    Social_google: {
        color: 'white',
        fontSize: 24,
        paddingLeft: 30,
        fontFamily: 'Roboto',
        fontWeight: '400'
    },


    First_left: {
        height: 25,
        width: 25,
        color: '#979797'
    },

    First_name: {
        color: '#EDF6FF',
        fontSize: 24,
        fontFamily: 'Roboto',
        fontWeight: '700'
    },

    First_view: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        top: '5%',
        padding:'2%'
    },

    First_next: {
        borderColor: '#EDF6FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        padding: 13,
        width: '85%',
        marginLeft: '10%',
        backgroundColor: '#000000',
        fontFamily: 'Roboto',
        fontWeight: '700'

    },

    First_nexttext: {
        color: 'white',
        fontSize: 21
    },

    Profile_lefticon: {
        height: 25,
        width: 25,
        marginTop: 40,
        marginLeft: 30,
        color: '#979797'
    },


    Profile_profileimage: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 70
    },

    Profile_tapping: {
         width: '85%',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#EDF6FF',
        fontSize:hp('3%'),
        lineHeight:hp('4%'),
        fontFamily: 'Roboto',
        fontWeight: '500',
        marginTop:hp('4%')
    },

    Profile_text: {
        width: '85%',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 50
    },

    Profile_check: {
        color: '#EDF6FF',
        fontSize:hp('2%'),
        lineHeight: 17.58,
        width: '90%',
        fontFamily: 'Roboto',
        fontWeight: '700',
        marginTop:hp('5%')
    },

    Profile_checked: {
        borderColor: '#EDF6FF',
        width: '80%',
        paddingVertical: 15,
        borderRadius: 2,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop:hp('4%'),
        backgroundColor: '#000000'
    },

    Profile_next: {
        color: 'white',
        fontSize: 21,
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontWeight: '700'
    },

    ellipse: {
        height: 138,
        width: 138
    },
    icon_profile: {
        width: 95.65,
        height: 100,
        position: 'absolute',
        top: 10

    },

    whole_image: {
        position: 'relative'
    },


    Payment_icon: {
        color: '#EDF6FF'
    },

    Payment_later: {
        color: '#535AFF',
        fontSize: 20,
        lineHeight: 23.44,
        marginLeft: '50%',
        fontFamily: 'Roboto',
        fontWeight: '700'
    },

    Payment_payment: {
        color: '#EDF6FF',
        fontSize: 17,
        fontFamily: 'Roboto',
        fontWeight: '500'
    },

    Payment_creditcard: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: '4%'
    },

    Payment_debitcard: {
        color: '#EDF6FF',
        fontSize: 20,
        paddingLeft: '5%',
        top:hp('1.5%')
    },

    Payment_paytm: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: '4%'
    },

    Paytm_text: {
        color: '#EDF6FF',
        fontSize: 20,
        paddingLeft: '5%',
        top:hp('1.5%')


    },

    Paytm_opacity: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: '4%'
    },


    Paytm_cash: {
        color: '#EDF6FF',
        fontSize: 20,
        paddingLeft: '5%',
        top:hp('1.5%')


    },

    Payment_next: {
        borderColor: '#EDF6FF',
        justifyContent: 'center',
        borderRadius: 2,
        width: '80%',
        marginLeft: '10%',
        backgroundColor: '#000000',
        marginTop: '50%'

    },

    Later_request: {
        color: '#EDF6FF',
        fontSize: 23,
        marginVertical: 40
    },

    Later_add: {
        borderWidth: 1,
        borderColor: '#EDF6FF',
        padding: 10
    },

    Later_text: {
        color: '#EDF6FF',
        fontSize: 20,
        textAlign: 'center'
    },

    Later_btn: {
        borderWidth: 1,
        borderColor: '#EDF6FF',
        padding: 10
    },

    Later_later: {
        color: '#EDF6FF',
        fontSize: 20,
        textAlign: 'center'
    },
    // add new class
    firstError: { color: 'red', top: '5%', textAlign: 'left', },
    lastError:{color: 'red', top: '5%',},
    // login
    getstart: {
        // paddingHorizontal:wp('3%')
        width: wp('90%'),
        objectFit:'fill'
    }

    











































})



export default Globalstyle