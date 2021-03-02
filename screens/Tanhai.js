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


const Tanhai = ({ navigation: { goBack } }) => {
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
        تنہا 
          </Text>
        </View>

      </View>
            <ScrollView style={{marginBottom:10}} >
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
     <Text style={{fontSize:25,padding:8}}>کیوں چلتے چلتے رُک گئے ویران راستو

{'\n'}
تنہا ہوں آج میں ، ذرا گھر تک تو ساتھ دو



</Text>

     </View>
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>ڈار سے بچھڑا ہوا تنہا پرندہ دیکھ کر
{'\n'}
بوجھ دل کا لگ رہا ہے کس قدر ہلکا مجھے



     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>کچھ تو ترے موسم ہی مجھے راس کم آئےتیرے ہوتے ہوئے آجاتی تھی ساری دنیا
{'\n'}
آج تنہا ہوں توکوئی نہیں آنے والا



     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>تنہائی کی یہ کون سی منزل ہے رفیقو
{'\n'}
تا حد نظر ایک بیابان سا کیوں ہے





     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>جو خیال رکھتے ہیں سب کی خوشی کا ہر وقت
{'\n'}
تنہا رہ جاتے ہیں زندگی میں اکثر ایسے لوگ





     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>پھر مقدر کی لکیروں میں لکھ دیا انتظار
{'\n'}
پھر وہی رات کا عالم ہے اور میں تنہا تنہا






     </Text>
</View>


     
     </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
 
});

export default Tanhai;
