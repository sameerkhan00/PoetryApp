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


const Intezar = ({ navigation: { goBack } }) => {
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
        انتظار
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
          <Text style={{fontSize:25,padding:8}}>بہت سے لوگ تھے مہمان میرے گھر لیکن
          {'\n'}وہ جانتا تھا کہ ہے اہتمام کس کے لئے


     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>بارہا تیرا انتظار کیا
          {'\n'}اپنے خوابوں میں اک دلہن کی طرح


     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}> وہ نہ آئے گا ہمیں معلوم تھا اس شام بھی
          {'\n'}انتظار اس کا مگر کچھ سوچ کر کرتے رہے




     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>رات کے شاید ایک بجے ہیں
          {'\n'}سوتا ہوگا میرا چاند




     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:23,padding:8}}>دشمنوں کے ساتھ میرے دوست بھی آزاد ہیں
{'\n'}دیکھنا ہے کھینچتا ہے مجھ پہ پہلا تیر کون





     </Text>
</View>


     
     </ScrollView>
      </View>


    </>
  );
};

const styles = StyleSheet.create({
 
});

export default Intezar;
