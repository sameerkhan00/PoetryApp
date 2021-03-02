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


const Watan = ({ navigation: { goBack } }) => {
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
        وطن
          </Text>
        </View>

      </View>
            <ScrollView style={{marginBottom:10}} >
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
     <Text style={{fontSize:25,padding:8}}> ﺧﺪﺍ ﮐﺮﮮ ﻣﯿﺮﯼ ﺍﺭﺽ ﭘﺎﮎ ﭘﺮ
ﺍﺗﺮﮮ{'\n'}
ﻭﮦ ﻓﺼﻞِ ﮔﻞ ﺟﺴﮯ ﺍﻧﺪﯾﺸﮧﺀ{'\n'}
ﺯﻭﺍﻝ ﻧﮧ ﮨﻮ



</Text>

     </View>
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>ﯾﮩﺎﮞ ﺟﻮ ﭘﮭﻮﻝ ﮐﮭﻠﮯ ﻭﮦ ﮐِﮭﻼ
ﺭﮨﮯ ﺑﺮﺳﻮﮞ{'\n'}
ﯾﮩﺎﮞ ﺧﺰﺍﮞ ﮐﻮ ﮔﺰﺭﻧﮯ ﮐﯽ ﺑﮭﯽ{'\n'}
ﻣﺠﺎﻝ ﻧﮧ ﮨﻮ



     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>ﯾﮩﺎﮞ ﺟﻮ ﺳﺒﺰﮦ ﺍُﮔﮯ ﻭﮦ ﮨﻤﯿﺸﮧ
ﺳﺒﺰ ﺭﮨﮯ{'\n'}
ﺍﻭﺭ ﺍﯾﺴﺎ ﺳﺒﺰ ﮐﮧ ﺟﺲ ﮐﯽ ﮐﻮﺋﯽ{'\n'}
ﻣﺜﺎﻝ ﻧﮧ ﮨﻮ



     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>ﮔﮭﻨﯽ ﮔﮭﭩﺎﺋﯿﮟ ﯾﮩﺎﮞ ﺍﯾﺴﯽ
ﺑﺎﺭﺷﯿﮟ ﺑﺮﺳﺎﺋﯿﮟ{'\n'}
ﮐﮧ ﭘﺘﮭﺮﻭﮞ ﮐﻮ ﺑﮭﯽ ﺭﻭﺋﯿﺪﮔﯽ{'\n'}
ﻣﺤﺎﻝ ﻧﮧ ﮨﻮ





     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>ﺧﺪﺍ ﮐﺮﮮ ﻧﮧ ﮐﺒﮭﯽ ﺧﻢ ﺳﺮِ ﻭﻗﺎﺭِ
ﻭﻃﻦ{'\n'}
ﺍﻭﺭ ﺍﺱ ﮐﮯ ﺣﺴﻦ ﮐﻮ ﺗﺸﻮﯾﺶ{'\n'}
ﻣﺎﮦ ﻭ ﺳﺎﻝ ﻧﮧ ﮨﻮ




     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:24,padding:8}}>ﺧﺪﺍ ﮐﺮﮮ ﮐﮧ ﻣﯿﺮﮮ ﺍﮎ ﺑﮭﯽ ﮨﻢ
ﻭﻃﻦ ﮐﮯ ﻟﯿﮯ{'\n'}
ﺣﯿﺎﺕ ﺟﺮﻡ ﻧﮧ ﮨﻮ ﺯﻧﺪﮔﯽ ﻭﺑﺎﻝ ﻧﮧ{'\n'}
ﮨﻮ






     </Text>
</View>


     
     </ScrollView>
      </View>


    </>
  );
};

const styles = StyleSheet.create({
 
});

export default Watan;
