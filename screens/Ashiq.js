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
  StatusBar,Image,
  TouchableOpacity,
} from 'react-native';


const Ashiq = ({ navigation: { goBack } }) => {
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
        عاشق
          </Text>
        </View>

      </View>
      
            <ScrollView style={{marginBottom:10}} >
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
     <Text style={{fontSize:25,padding:8}}>سخت کافر تھاجن نے پہلے 
     {'\n'}میرؔ
{'\n'}
مذہب عشق اختیار کیا

</Text>

     </View>
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>لگا نہ دل کو کہیں کیا سنا نہیں تو نکچھ نہیں سوجھتا ہمیں اس بن
{'\n'}
شوق نے ہم کو بے حواس کیا


     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
     <Text style={{fontSize:25,padding:8}}>
ہم ہوئے تم ہوئے کہ میرؔ ہوئے
{'\n'}
اس کی زلفوں کے سب اسیر ہوئے


</Text>

     </View>
</ScrollView>
</View>
    </>
  );
};

const styles = StyleSheet.create({
 
});

export default Ashiq;
