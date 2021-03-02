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

  StatusBar,
  TouchableOpacity,Image
} from 'react-native';

const Ankhen = ({ navigation: { goBack } }) => {
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
        آنکھیں
          </Text>
        </View>

      </View>
            <ScrollView style={{marginBottom:10}} >
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
     <Text style={{fontSize:25,padding:8}}>میرؔ ان نیم باز آنکھوں میں 
       {'\n'}
        ساری مستی شراب کی سی ہے 
</Text>

     </View>
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>اُسے دیکھا نہیں ہے کئی دِنوں سے
        {'\n'}
        آنکھیں بیکار ہی نہ ہو جائیں کہیں 
     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>
          ایسی تاریکیاں آنکھوں میں بسی ہیں فراز
{'\n'}
رات تو رات ہےہم دِن کو جلاتے ہیں چراغ
     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>سمندر میں اترتا ہوں تو آنکھیں بھیگ جاتی ہیں
{'\n'}
تری آنکھوں کو پڑھتا ہوںتو آنکھیں بھیگ جاتی ہیں


     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>اُس کی نگاہ میں کوئی جادو ضرور تھا
{'\n'}
جس پر بھی پڑی اُس کے جگر میں اُتر گئی


     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>ہزاروں نسخے بناو مگر شفا کےلئے
{'\n'}
نِگاہِ یار سے بڑھ کر کوئی دوا نہیں




     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>
          مُدّت کے بعد آج فقیروں کے جام میں
{'\n'}
اُتری ہے کہکشاں تیری آنکھوں کی، خیر ہو


     </Text>
</View>

     
     </ScrollView>
      </View>


    </>
  );
};

const styles = StyleSheet.create({
 
});

export default Ankhen;
