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


const Waqt = ({ navigation: { goBack } }) => {
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
        وقت
          </Text>
        </View>

      </View>
            <ScrollView style={{marginBottom:10}} >
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
     <Text style={{fontSize:25,padding:8}}>زباں زباں میں محبت کا ورد ہے لیکن
{'\n'}
دِلوں دِلوں میں معض وقت کا گزارا ہے

</Text>

     </View>
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>سہی وقت پر کروا دینگے حدوں کا احساس
{'\n'}
کچھ تلاب خود کو سُمندر سمجھ بیٹھے ہیں

     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>
          ہم نہ بدلیں گے وقت کی رفتار کے ساتھ
{'\n'}
جب بھی ملیں گے انداز پُرانا ہوگا
     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>آنکھ سے دور نہ ہو دل سے اتر جائے گا
{'\n'}
وقت کا کیا ہے گزرتا ہے گزر جائے گا

     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>تم قیامت کا نام دو گے اِسے
{'\n'}
وقت اپنی تھکن اتارے گا



     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>وقت دو مُجھ پر کٹھن گُزرے ہیں ساری عُمر میں
{'\n'}
اِک تیرے آنے سے پہلے،اِک تیرے جانے کے بعد

     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>
          وہ آج بھی صدیوں کی مسافت پہ کھڑا ہے
{'\n'}
ڈھونڈا تھا جسے وقت کی دیوار گِرا کر



     </Text>
</View>

     
     </ScrollView>
      </View>


    </>
  );
};

const styles = StyleSheet.create({
 
});

export default Waqt;
