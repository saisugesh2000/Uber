import { StyleSheet } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Globalstyle = StyleSheet.create({




//Packages component
 primrytext: {
    fontSize: wp('9%'),
        color: '#EDF6FF',
    fontWeight:'500',
        // marginTop: hp('10%'),
    fontFamily:'Roboto'
},

Packagestxt: {
    fontSize: wp('4.5%'),
    color: '#DADADA',
    marginTop: hp('5%'),
    width: wp('80%'),
    // paddingHorizontal:('4%')
    fontFamily: 'Roboto',
},
Packagebtntxt: {
    color: '#EDF6FF',
    paddingTop: hp('1.2%'),
    fontSize: wp('5%'),
    fontWeight:'700',
    fontFamily: 'Roboto',
},
Packagesrvcbtn:{
    borderWidth:1,
    alignItems:'center',
    width: wp('85%'),
    height: hp('7%'),
    backgroundColor:'black',
    color:'#FFFFFF',
    marginTop: hp('4%'),
    marginBottom:hp('5%'),
    bottom:hp('2%')
    
},
Packagebtn: {
    borderWidth: 1,
    alignItems: 'center',
    width: wp('85%'),
    height: hp('7%'),
    backgroundColor: 'black',
    color: '#FFFFFF',
    marginTop: hp('5%'),
},

imgdata: {
    width: wp('85%'),
    height: hp('30%'),
    marginTop: hp('5%'),
},
iconifo:{
    color: '#EDF6FF',
    left: wp('30%'),
},
iconinfostyle: {
    color: '#EDF6FF',
    bottom: hp('2%'),
    left: wp('4%'),
},
//reciving package
container: {
    backgroundColor: '#1A1A1A',
    flex: 1, 
    paddingHorizontal:('5%'),
    
    textAlign: 'center',
    alignItems: 'center',
    paddingTop: hp('3%'),
},


label: {
    fontSize: wp('5%'),
    color: '#EDF6FF',
    marginTop: hp('0%'),
    marginLeft: wp('4%'),
    fontFamily: 'Roboto',
    fontWeight:'700',
},
rvcimg: {
    width: wp('13%'),
    height: hp('4.5%'),
    marginLeft: wp('3%'),
    // marginTop: hp('7%'),
},
iconcontact: {
    marginLeft: wp('55%'),
},
phone: {
    // fontSize: wp('6%'),
    // color: '#EDF6FF',
    // marginTop: hp('0%'),
    // marginLeft: wp('13%'),
    fontSize: wp('6%'),
    color: '#EDF6FF',
    marginLeft: wp('4%'),
    fontFamily: 'Roboto',
},
heading: {
    fontSize: wp('9%'),
    color: '#EDF6FF',
    marginTop: hp('3%'),
    width: wp('85%'),
    marginLeft: wp('3%'),
    fontFamily: 'Roboto',
    fontWeight:'500',
},
rvcsecondtxt: {
    fontSize: wp('4%'),
    color: '#DADADA',
    marginTop: hp('4%'),
    width: wp('85%'),
    marginLeft: wp('3%'),
    fontFamily: 'Roboto',
    marginBottom:hp('3%')
},
rvcbtn: {
    borderWidth: 1,
    alignItems: 'center',
    width: wp('85%'),
    height: hp('7%'),
    backgroundColor: '#000000',
    color: '#EDF6FF',
    marginTop: hp('22%'),
    marginBottom:hp('10%'),
    marginLeft: wp('2%'),
},
rvcbtnlbl: {
    color: '#EDF6FF',
    paddingTop: hp('1.2%'),
    fontSize: wp('5%'),
    fontWeight:'700',
    fontFamily: 'Roboto',
},
input: {
    height: hp('8%'),
    marginVertical: hp('2%'),
    borderWidth: 1,
    borderColor:"#EDF6FF",
    padding: wp('3%'),
    color: "#FFFF",
    fontSize: wp('5%'),
    // width:wp("80%"),
    fontFamily: 'Roboto',
    marginHorizontal:('4%')
},
inputtwo: {
    // height: hp('8%'),
    // marginVertical: hp('2%'),
    // padding: wp('3%'),
    // color: "#FFFF",
    // marginLeft: wp('20%'),
    // marginTop: hp('3%'),
    // width: wp('70%'),
    // fontSize: wp('5%'),
    flex: 1, // This will make the input occupy remaining space
    height: hp('8%'),
    marginLeft: wp('1%'), // Adjust marginLeft as needed
    padding: wp('3%'),
    color: "#FFFF",
    fontSize: wp('5%'),
    fontFamily: 'Roboto',
    width: wp('50%'),
    
    marginRight:wp('5%')
},
icon: {
    alignItems: 'flex-start',
    marginLeft: wp('40%'),
    marginTop: hp('2%'),
},
iconback: {
    alignItems: 'left',
    marginTop: hp('2%'),
 },
errorone: {
    color: 'red',
    fontSize: wp('4%'),
    marginTop: hp('0%'),
    marginLeft: wp('4%'),
    fontFamily: 'Roboto',
},
error: {
    color: 'red',
    fontSize: wp('4%'),
    marginTop: hp('0%'),
    marginLeft: wp('4%'),
    fontFamily: 'Roboto',
},
sendbtn: {
    borderWidth: 1,
    alignItems: 'center',
    width: wp('85%'),
    height: hp('7%'),
    backgroundColor: 'black',
    color: '#FFFFFF',
    marginTop: hp('5%'),
    marginLeft: wp('4%'),
},
contentbg: {
    backgroundColor: '#535aff'
},
content: {
    width: wp('85%'),
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingVertical: hp('4%'),
},
locationcont: {
    paddingVertical: hp('2%'),
},
locationText: {
    fontSize: wp('8%'),
    color: '#EDF6FF',
    fontFamily: 'Roboto',
},
Touchablebut: {
    borderRadius: wp('10%'),
    backgroundColor: '#000',
    padding: wp('3%'),
    width: wp('45%'),
},
Touchablebuttext: {
    color: '#fff',
    fontSize: wp('5%'),
    textAlign: 'center',
    fontFamily: 'Roboto',
},
imagecontbg: {
    backgroundColor: '#000'
},
imagecontmain: {
    width: wp('85%'),
    marginLeft: 'auto',
    marginRight: 'auto',
},
imagecont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: hp('3%'),
},
imagetxt: {
    textAlign: 'center',
    fontSize: wp('4%'),
    paddingTop: hp('1%'),
    color: '#CDCDCD',
    fontFamily: 'Roboto',
},
image: {
    width: wp('15%'),
    height: hp('9%'),
    borderRadius: wp('2%'),
},
textinput: {
    backgroundColor: '#2B2B2BF0',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: wp('4%'),
    borderRadius: wp('3%'),
    fontSize: wp('5%'),
    fontFamily: 'Roboto',
},
aroundtext: {
    fontSize: wp('5%'),
    color: '#EDF6FF',
    paddingVertical: hp('2%'),
    fontFamily: 'Roboto',
},
mapContainer:{
    width: wp('85%'),
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: hp('6%'),
},
mapCont:{
    width: '100%',
    height: hp('20%'),
},
rvccontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Adjust as needed
    alignItems: 'center',
    width: wp('85%'),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: hp('1%'), // Adjust marginTop as needed
},
headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('85%'),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: hp('0%'), // Adjust marginTop as needed
},
iconBackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
},
iconBack: {
    marginRight: wp('1%'),
},
iconContact: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginLeft: wp('%')
    marginRight: wp('2%'),
},
iconInfo: {
    marginLeft: wp('1%'), // Adjust as needed
    color:'#DADADA'
},
item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: wp('3%'),
    marginHorizontal: hp('4%'),
    borderRadius: 8,
    elevation: 3, 
    top:0,
  },
  headinglist: {
    fontSize: 18,
      fontWeight: 'bold',
      fontFamily: 'Roboto',
  },
  description: {
    fontSize: 16,
  },
})
  


export default Globalstyle