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
  TouchableOpacity,Image
} from 'react-native';


const Subha = ({ navigation: { goBack } }) => {
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
        صبح
 
          </Text>
        </View>

      </View>
            <ScrollView style={{marginBottom:10}} >
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
     <Text style={{fontSize:25,padding:8}}>تھک گیا ہے دل وحشی مرا فریاد سے بھی
{'\n'}
جی بہلتا نہیں اے دوست تری یاد سے بھی

</Text>

     </View>
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>اپنی رسوائی ترے نام کا چرچا دیکھوں
{'\n'}
اک ذرا شعر کہوں اور میں کیا کیا دیکھوں

     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>کچھ تو ترے موسم ہی مجھے راس کم آئے
{'\n'}
اور کچھ مری مٹی میں بغاوت بھی بہت تھی

     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>سمندر میں اترتا ہوں تو آنکھیں بھیگ جاتی ہیںاداسیوں سے وابستہ ہے یہ زندگی میری وصی
{'\n'}
خدا گواہ ہے کے پھر بھی تجھے یاد کرتے ہیں



     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>اُس کی نگاہ میں کوئی جادو ضرور تھااداس راتوں میں تیز کافی کی تلخیوں میں
{'\n'}
وہ کچھ زیادہ ہی یاد آتا ہے سردیوں میں



     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>ہزاروں نسخے بناو مگر شفا کےلئے
{'\n'}
نِگاہِ یار سے بڑھ کر کوئی دوا نہیں




     </Text>
</View>


     
     </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
 
});

export default Subha;
