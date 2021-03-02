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


const Zakhan = ({ navigation: { goBack } }) => {
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
        زخم
          </Text>
        </View>

      </View>
            <ScrollView style={{marginBottom:10}} >
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
     <Text style={{fontSize:25,padding:8}}>اب دیکھ لے کہ سینہ بھی تازہ ہوا ہے چاک
{'\n'}
پھر ہم سے اپنا حال دکھایا نہ جائے گا

</Text>

     </View>
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>نظر لگے نہ کہیں اس کے دست و بازو کو
{'\n'}
یہ لوگ کیوں مرے زخم جگر کو دیکھتے ہیں

     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>
          کوئی میرے دل سے پوچھے ترے تیر نیم کش کو
{'\n'}
یہ خلش کہاں سے ہوتی جو جگر کے پار ہوتا
  </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>جس زخم کی ہو سکتی ہو تدبیر رفو کی
{'\n'}
لکھ دیجیو یا رب اسے قسمت میں عدو کی



     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>اُس کی نگاہ میں کوئی جادو ضرور تھاجلا ہے جسم جہاں دل بھی جل گیا ہوگا
{'\n'}
کریدتے ہو جو اب راکھ جستجو کیا ہے



     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>ہزاروں نسخے بناو مگر شفا کےلئےدوست غم خواری میں میری سعی فرماویں گے کیا
{'\n'}
زخم کے بھرتے تلک ناخن نہ بڑھ جاویں گے کیا





     </Text>
</View>


     
     </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
 
});

export default Zakhan;
