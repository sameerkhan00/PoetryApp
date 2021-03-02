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


const Bewafa = ({ navigation: { goBack } }) => {
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
        بیوفا
          </Text>
        </View>

      </View>
            <ScrollView style={{marginBottom:10}} >
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
     <Text style={{fontSize:25,padding:8}}>ہاتھ میرے بھول بیٹھے دستکیں دینے کا فن
     {'\n'}
بند مجھ پر جب سے اس کے گھر کا دروازہ ہوا


</Text>

     </View>
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>وہ مجھ کو چھوڑ کے جس آدمی کے پاس گیا
          {'\n'}
برابری کا بھی ہوتا تو صبر آ جاتا


     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>اس کے یوں ترک محبت کا سبب ہوگا کوئی
          {'\n'}
جی نہیں یہ مانتا وہ بے وفا پہلے سے تھا


     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>سمندر میں اترتا ہوں تو آنکھیں بھیگ جاتی ہیںاداسیوں سے وابستہ ہے یہ زندگی میری وصی
{'\n'}
خدا گواہ ہے کے پھر بھی تجھے یاد کرتے ہیں



     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>وہ تو خوش بو ہے ہواؤں میں بکھر جائے گا
          {'\n'}
          مسئلہ پھول کا ہے پھول کدھر جائے گا




     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>چنتی ہیں میرے اشک رتوں کی بھکارنیں
{'\n'}
محسنؔ لٹا رہا ہوں سر عام چاندنی





     </Text>
</View>


     
     </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
 
});

export default Bewafa;
