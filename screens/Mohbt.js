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


const Mohbt = ({ navigation: { goBack } }) => {
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
        محبت       
           </Text>
        </View>

      </View>
            <ScrollView style={{marginBottom:10}} >
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
     <Text style={{fontSize:25,padding:8}}>اور بھی دکھ ہیں زمانے میں محبت کے سوا
{'\n'}
راحتیں اور بھی ہیں وصل کی راحت کے سوا

</Text>

     </View>
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>زباں زباں میں محبت کا ورد ہے لیکن
{'\n'}
دِلوں دِلوں میں معض وقت کا گزارا ہے

     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>
          یہی وہ دن تھے جب اک دوسرے کو پایا تھا
{'\n'}
ہماری سالگرہ ٹھیک اب کے ماہ میں ہے
  </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>دروازہ جو کھولا تو نظر آئے کھڑے وہ
{'\n'}
حیرت ہے مجھے آج کدھر بھول پڑے وہ



     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>اُس کو پانے کا کہاں سوچا تھا
{'\n'}
اچھا لگتا تھا سو محبت کرلی



     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>تیری محبت کو کبھی کھیل نہیں سمجھا
{'\n'}
ورنہ کھیل تو اتنے کھیلے ہیں کہ کبھی ہارے نہیں





     </Text>

</View>

     
     </ScrollView>
      </View>

    </>
  );
};

const styles = StyleSheet.create({
 
});

export default Mohbt;
