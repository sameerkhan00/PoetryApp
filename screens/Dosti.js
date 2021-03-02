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


const Dosti = ({ navigation: { goBack } }) => {
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
        دوست
          </Text>
        </View>

      </View>
            <ScrollView style={{marginBottom:10}} >
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
     <Text style={{fontSize:25,padding:8}}>دل سے خیالِ دوست بھلایا نہ جائے گا
{'\n'}
سینے میں داغ ہے کہ مٹایا نہ جائے گا

</Text>

     </View>
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>نفرتوں کے تیر کھا کر، دوستوں کے شہر میں
{'\n'}
ہم نے کس کس کو پکارا، یہ کہانی پھر سہی

     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>
          دو ستی تو عا م ہے لیکن اے دوست
          {'\n'}
دوست ملتے بھی تو نصیب سے ہیں۔
     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>ہم نے سنا تو تھا کہ دوست وفا کرتے ہیں ۔
{'\n'}
جب ہم نے کیا بھروسہ روایت ہی بدل گئ۔



     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>دعوے دوستی کے مجھے نہیں آتے یار
{'\n'}
ایک جان ھے جب دل چاہے مانگ لینا




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
          دوست کو دولت کی نگاہ سے مت دیکھو
{'\n'}
وفا کرنے والے دوست اکثر غریب ہوتے ہیں


     </Text>
</View>

     
     </ScrollView>
      </View>

    </>
  );
};

const styles = StyleSheet.create({
 
});

export default Dosti;
