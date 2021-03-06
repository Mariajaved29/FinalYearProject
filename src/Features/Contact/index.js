import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro'
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Button,
  Linking,
  Alert
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Contact = () => {

  const email = 'suffah.lilbanaat.madarsa@gmail.com';
  const number= '+92 3112057668';
  const message= 'اسلام علیکم';
  return (
    <View style={styles.contactContainer}>
            <View style={styles.bannerContainer}>
            <Image
              source={require('../../assets/01.jpg')}
              style={styles.bannerImage}
            ></Image>
            <View style={styles.bannerShade} />
           
          </View>
        <ScrollView showsVerticalScrollIndicator={false}>  
           <View style={{marginTop:120}}>
            <View style={styles.card}>
                <View style={{ flexDirection: 'row' }}>
                   <FontAwesome name='user' size={22} style={{marginTop:2}} />                   
                   <Text style={{
                        fontSize:15,
                        fontWeight: 'bold',
                        marginLeft:20
                    }}>عالمہ شائستہ</Text>
                                </View>
                            </View>
                            <View style={styles.card}>
                                <View style={{ flexDirection: 'row' }}>
                   <FontAwesome name='phone' size={22} style={{marginTop:2}} />  
                   <TouchableOpacity
                        onPress={() => {Linking.openURL(`tel:${number}`)}}
                        title="call">
                  <Text style={{
                          fontSize:15,
                          fontWeight: 'bold',
                          marginLeft:20
                         }}>0311-2057668</Text> 
                  </TouchableOpacity>                   
                                </View>
                            </View>
                            <View style={styles.card}>
                                <View style={{ flexDirection: 'row' }}>
                   <FontAwesome5Pro name='whatsapp-square' size={22} style={{marginTop:2}} />              
                   <TouchableOpacity
                        onPress={() => {Linking.openURL(`whatsapp://send?phone=${number}&text=${message}`)}}
                        title="whatsapp">
                  <Text style={{
                          fontSize:15,
                          fontWeight: 'bold',
                          marginLeft:20
                         }}>0311-2057668</Text> 
                  </TouchableOpacity>  
                                </View>
                            </View>
                <View style={styles.card}>
                    <View style={{ flexDirection: 'row' }}>
                   <FontAwesome name='envelope-square' size={22} style={{marginTop:2}} />               
                  <TouchableOpacity
                        onPress={() => {Linking.openURL(`mailto:${email}`)}}
                        title="email">
                  <Text style={{
                          fontSize:15,
                          fontWeight: 'bold',
                          marginLeft:20
                         }}>suffah.lilbanaat.madarsa@gmail.com</Text> 
                  </TouchableOpacity>       
                             
                                </View>
                            </View>
                              <View style={styles.card}>
                                <View style={{ flexDirection: 'row' }}>
                   <FontAwesome name='street-view' size={22} style={{marginTop:2}} />               
                   <TouchableOpacity
                        onPress={() => {Linking.openURL( 'https://www.google.com/maps/place/Street+3,+Block+12+Sindh+Baloch+CHS+Block+12+Karachi,+Karachi+City,+Sindh,+Pakistan/@24.9145371,67.1354341,17z/data=!4m5!3m4!1s0x3eb338fe5c864477:0x423ece616e3b35d8!8m2!3d24.9147123!4d67.1376764'
                        )}}
                        title="email">
                  <Text style={{
                          fontSize:15,
                          fontWeight: 'bold',
                          marginLeft:20
                         }}>سندھ بلوچ سوسایٹی ھاوس نمبر A-265 گلی نمبر3 گلستان جوہر بلاک 12 کراچی</Text>  
                  </TouchableOpacity> 
                                </View>
                            </View>
        </View>
      </ScrollView>
          </View>
  );
}

export default Contact;

const styles = StyleSheet.create({

    card:{ 
    // height: 0,
    // overflow: 'hidden', 
    padding: 10, 
    borderColor: '#ededed', 
    borderWidth: 1, 
    margin: 10, 
    marginTop: 0, 
    backgroundColor:"#FFFFFF",
    borderRadius:20,
    elevation:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 5,
    borderWidth:1,borderColor:'#ededed', 
  },
    contactContainer: {
      width: '100%',
      height: '100%',
    },
    bannerContainer: {height: 100, width: '100%'},
    bannerImage: {
      width: '100%',
      height: 200,
      // borderWidth: 2,
      borderBottomRightRadius: 50,
      borderBottomLeftRadius: 50,
      overflow: 'hidden',
      resizeMode: 'cover',
    },
    bannerShade: {
      height: 200,
      width: '100%',
      position: 'absolute',
      left: '0%',
      top: '0%',
      backgroundColor: 'black',
      opacity: 0.3,
      borderBottomRightRadius: 50,
      borderBottomLeftRadius: 50,
      overflow: 'hidden',
     
    },
    commonShadow:
    {
        backgroundColor:"#FFFFFF",
        borderRadius:0,
        padding:10,
        elevation:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 5,
        borderWidth:1,borderColor:'#ededed',
    },
    Button: {
      backgroundColor: '#fff',
      
    }
    
  });
