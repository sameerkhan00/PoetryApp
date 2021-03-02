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


const Islami = ({ navigation: { goBack } }) => {
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
        اسلام          </Text>
        </View>

      </View>
            <ScrollView style={{marginBottom:10}} >
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
     <Text style={{fontSize:25,padding:8}}>جن کی اُمید صرف الله سے ہو
{'\n'}
وہ کبھی نا اُمید نہیں ہوتے


</Text>

     </View>
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>ہمارا ہر کام آسان ہوگا
{'\n'}
جس دن کا پہلا کام نماز ہوگا


     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>تم یہاں میری تِلاوت کیا کرو
{'\n'}
میں قبر میں تمہاری حفاظت کیا کرونگا


     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>جسنے سُکھ میں اپنے رب کا شُکر ادا کیا
{'\n'}
اُسنے دُکھ میں اپنے رب کو اپنے قریب پایا




     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>نہیں مایوس اپنے الله سے
{'\n'}
بدل جاتی ہے قسمت دُعا سے




     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>کتنا سکون دیتا ہے اُس جگہ بیٹھ کے رونا
{'\n'}
جہاں الله کے سوا کوئی سُننے والا نہ ہو





     </Text>
</View>


     
     </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
 
});

export default Islami;
