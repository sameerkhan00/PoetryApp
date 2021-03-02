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


const Barish = ({ navigation: { goBack } }) => {
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
        بارش 
          </Text>
        </View>

      </View>
            <ScrollView style={{marginBottom:10}} >
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
     <Text style={{fontSize:25,padding:8}}>اب بھی برسات کی راتوں میں بدن ٹوٹتا ہے
{'\n'}
جاگ اٹھتی ہیں عجب خواہشیں انگڑائی کی


</Text>

     </View>
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>اب کے بارش میں تو یہ کار زیاں ہونا ہی تھا
{'\n'}
اپنی کچی بستیوں کو بے نشاں ہونا ہی تھا


     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>حجر کا تارا ڈوب چالا ہے ڈھلنے لگی ہے رات وصی
{'\n'}
قطرہ قطرہ برس رہی ہے اشکوں کی برسات وصی


     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>ہمارے شہر آجاؤ صدا برسات رہتی ہے
{'\n'}
کبھی بادل برستے ہیں کبھی آنکھیں برستی ہیں




     </Text>
</View>



     
     </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
 
});

export default Barish;
