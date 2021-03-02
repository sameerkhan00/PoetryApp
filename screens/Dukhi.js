/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';


const Dukhi =  ({ navigation: { goBack } }) => {
  return (
    <>
      
     
      <View style={{flex:1}}>
      
      
      
      <View style={{flexDirection: 'row',backgroundColor:'#065e54', width:"100%",justifyContent: 'space-between',height:"12%",}}>
          <TouchableOpacity style={{padding: 10}} onPress={() => goBack()} >
          <Image tintColor="#ffff"
            source={require('../assests/images/back.png')}
            style={{width: 35, height: 40,marginTop:5,marginLeft:5}} 
          />
        </TouchableOpacity>
        <View style={{marginHorizontal:20,marginVertical:40}}>
        <Text style={{fontSize: 30, color: '#FFFF',fontWeight:'bold'}}>
        دکھی
          </Text>
        </View>

      </View>
            <ScrollView style={{marginBottom:10}} >
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
     <Text style={{fontSize:25,padding:8}}>اور کیا دیکھنے کو باقی ہے
{'\n'}
آپ سے دل لگا کے دیکھ لیا


</Text>

     </View>
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
     <Text style={{fontSize:25,padding:8}}>دل ناامید تو نہیں ناکام ہی تو ہے
{'\n'}
لمبی ہے غم کی شام مگر شام ہی تو ہے


</Text>

     </View>
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
     <Text style={{fontSize:23,padding:8}}>اور بھی دکھ ہیں زمانے میں محبت کے سوا
{'\n'}
راحتیں اور بھی ہیں وصل کی راحت کے سوا


</Text>

     </View>
     </ScrollView>
     </View>

    </>
  );
};

const styles = StyleSheet.create({
 
});

export default Dukhi;
