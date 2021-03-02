

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


const Dard = ({ navigation: { goBack } }) => {
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
        درد        
          </Text>
        </View>

      </View>
     
      
            <ScrollView style={{marginBottom:10}}>
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
     <Text style={{fontSize:25,padding:8}}>پاس جب تک وہ رہے درد تھما رہتا ہے
{'\n'}
پھیلتا جاتا ہے پھر آنکھ کے کاجل کی طرح

</Text>

     </View>
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
     <Text style={{fontSize:25,padding:8}}>ہم تو سمجھے تھے کہ اک زخم ہے بھر جائے گا
{'\n'}
کیا خبر تھی کہ رگ جاں میں اتر جائے گا
</Text>

     </View>
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
     <Text style={{fontSize:25,padding:8}}>دشمنوں کے ساتھ میرے دوست بھی آزاد ہیں
{'\n'}
دیکھنا ہے کھینچتا ہے مجھ پہ پہلا تیر کون
</Text>

     </View>
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
     <Text style={{fontSize:25,padding:8}}>وہ تو خوش بو ہے ہواؤں میں بکھر جائے گا
{'\n'}
مسئلہ پھول کا ہے پھول کدھر جائے گا

</Text>

     </View>
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
     <Text style={{fontSize:25,padding:8}}>کیسے کہہ دوں کہ مجھے چھوڑ دیا ہے اس نے
{'\n'}
بات تو سچ ہے مگر بات ہے رسوائی کی


</Text>

     </View>
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
     <Text style={{fontSize:25,padding:8}}>دشت ہستی میں شب غم کی سحر کرنے کو
{'\n'}
ہجر والوں نے لیا رخت سفر سناٹا
</Text>

     </View>
     </ScrollView>
     </View>
    </>
  );
};

const styles = StyleSheet.create({
 
});

export default Dard;
